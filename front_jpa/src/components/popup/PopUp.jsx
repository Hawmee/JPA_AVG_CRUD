import React from 'react'
import './popup.css'
import { MainData } from '../../contexts/Main_context'
import Add_form from '../form/Add_form'
import Edit_form from '../form/Edit_form'
import Validation from '../validations/Validation'

export default function PopUp() {

    const{popUp,setIsPopUp,value}=MainData()

  return (
    <>
        <div className='bg-[#272727] max-h-[60vh]  max-w-[30vw] flex flex-col justify-between items-center rounded-[12px] popup_wrapper pt-[25px] pb-[30px] px-[50px]'>
            <div className='text-[20px]'>
                {popUp}
            </div>
            <div className='popup_content mt-[20px] ' >
                {
                    popUp=='Add'?
                        <Add_form/>
                    :popUp=='Edit'?
                        <Edit_form/>
                    :popUp== 'Delete'?
                        <Validation/>
                    :<></>
                }
            </div>
            <button className='close_btn mr-[10px] bg-gray-500 rounded-[20px] px-[7px]  mt-[5px]' onClick={()=>{
                setIsPopUp(false)
            }} >
                ×
            </button>
        </div>
    </>
  )
}
