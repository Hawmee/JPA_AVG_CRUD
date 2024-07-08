import React from 'react'
import { MainData } from '../../contexts/Main_context'

export default function Edit_btn({user}) {
  
    const {setIsPopUp,setPopUp,setValue}=MainData()
    // const id = user.id
    // const value = {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email
    // }
    
    return (
    <>
        <button className='bg-gray-700 text-white px-[15px] py-[4px] rounded-[12px] edit_btn' onClick={()=>{
            setIsPopUp(true)
            setPopUp('Edit')
            setValue(user)
        }}>
            Edit
        </button>
    </>
  )
}
