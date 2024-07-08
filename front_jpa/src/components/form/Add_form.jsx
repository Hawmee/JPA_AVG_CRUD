import React, { useState } from 'react'
import './form.css'
import { MainData } from '../../contexts/Main_context'

export default function Add_form() {

    const{addData}=MainData()

    const [name,setName]=useState('')
    const [email, setEmail]=useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const value={
            name:name,
            email:email,
        }

        await addData(value);
    }

  return (
    <>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-col'>
            <div className='flex flex-col mb-[20px]'>
                <label className='text-[18px] font-semibold'>Name :</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  className='outline-none text-gray-600 px-[15px] py-[5px] rounded-[5px] font-semibold mt-[8px]'/>
            </div>

            <div className='flex flex-col mb-[60px]'>
                <label className='text-[18px] font-semibold' >Email :</label>
                <input type="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className='outline-none text-gray-600 px-[15px] py-[5px] rounded-[5px] font-semibold mt-[8px]'/>
            </div>

            <div className='flex flex-row justify-end w-full mb-[25px]'>
                <button className='bg-white text-gray-700 px-[20px] py-[5px] rounded-[20px] w-full font-semibold validate_btn'>
                    Validate
                </button>
            </div>

        </form>
    </>
  )
}
