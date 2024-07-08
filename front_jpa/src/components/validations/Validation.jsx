import React from 'react'
import'./validation.css'
import { MainData } from '../../contexts/Main_context'

export default function Validation() {

    const{deleteData,value}=MainData()
    
    const handleSubmit =async()=>{
        const id = value

        await deleteData(id);
    }

  return (
    <>
        <div>
            <div>
                Are you sure about that Action ?
            </div>
            <div className='flex flex-row justify-center mb-[15px] mt-[20px]'>
                <div className='mr-[35px]'>
                    <button  className='bg-red-500 text-white px-[20px] py-[3px] rounded-[20px] cancel_btn' onClick={()=>{setIsPopUp(false)}}>
                        Cancel
                    </button>
                </div>
                <div>
                    <button className='bg-white text-gray-600 font-medium px-[20px] py-[3px] rounded-[20px] validate_btn' onClick={()=>{handleSubmit()}}>
                        Validate
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
