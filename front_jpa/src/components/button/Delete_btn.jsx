import React from 'react'
import { MainData } from '../../contexts/Main_context'

export default function Delete_btn({id}) {

    const{setIsPopUp , setPopUp , setValue}=MainData()

  return (
    <>
       <button className='bg-red-500 text-white px-[15px] py-[4px] rounded-[12px] delete-btn' onClick={()=>{
            setIsPopUp(true)
            setPopUp('Delete')
            setValue(id)
        }}>
            Delete
        </button>
    </>
  )
}
