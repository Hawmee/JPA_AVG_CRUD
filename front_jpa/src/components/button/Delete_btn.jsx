// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MainData } from '../../contexts/Main_context'

// eslint-disable-next-line react/prop-types
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
