import React from 'react'
import './button.css'
import { MainData } from '../../contexts/Main_context'

export default function Add_btn() {

    const{setIsPopUp,setPopUp}=MainData()

  return (
    <>
        <div className="btn_place">
            <div className="btn_style">
                <button className='w-full h-full add_btn' onClick={()=>{
                    setIsPopUp(true)
                    setPopUp('Add')
                }}>
                    Add
                </button>
            </div>
        </div>
    </>
  )
}
