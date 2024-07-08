import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext({
    popUp:'',
    isPopUp: false,
    user:[],
    value:{},
    setValue:()=>{},
    setIsPopUp:()=>{},
    setPopUp:()=>{},
    deleteData:async()=>{},
    editData:async()=>{},
    addData:async()=>{}
})

export const MainData = ()=>{
    return useContext(MainContext)
}

export const MainProvider = ({children})=>{

    const [isPopUp , setIsPopUp] =useState(false)
    const [popUp , setPopUp] = useState('')
    const [user,setUser]=useState([])
    const [value,setValue]=useState({})
    

    async function fetchData(){
        const res = await axios.get('http://localhost:8080/api/User')
        setUser(res.data)
        console.log(res.data);
    }

    async function addData(data){
        await axios.post('http://localhost:8080/api/User',data , {
            headers:{
                "Content-Type":"application/json"
        }
        })
        .then(res=>{
            fetchData()
            setIsPopUp(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    async function editData(id , data){
        await axios.put(`http://localhost:8080/api/User/${id}` ,data,{
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(res=>{
            // setUser(prev=>prev.map(item=>(item.id==id ? data : item )))
            fetchData()
            setIsPopUp(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    async function deleteData(id){
        await axios.delete(`http://localhost:8080/api/User/${id}`)
        .then(res=>{
            setUser(prev=>prev.filter(item=>item.id !== id))
            setIsPopUp(false)
        })
        
    }


    useEffect(()=>{
        fetchData()
    } , [])

    return(
        <MainContext.Provider value={{
            popUp,
            isPopUp,
            user,
            value,
            setIsPopUp,
            setPopUp,
            setValue,
            addData,
            editData,
            deleteData,

        }}>
            {children}
        </MainContext.Provider>
    )
}