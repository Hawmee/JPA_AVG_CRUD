import React from 'react'
import Edit_btn from '../../button/Edit_btn'
import Delete_btn from '../../button/Delete_btn'
import { MainData } from '../../../contexts/Main_context'

function Table_mapping() {

    const {user}=MainData()

  return (
    <>
        {
            user.length>0?
                user.map(item=>(
                    <tr key={item.id}>
                        <td>
                            <div className="flex flex-row items-center justify-center">
                                {item.name}
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-row items-center justify-center">
                                {item.email}
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-row items-center justify-center'>
                                <div className="mr-[40px]">
                                    <Edit_btn user={item}/>
                                </div>
                                <div>
                                    <Delete_btn id={item.id}/>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
            :<></>
        }
    </>
  )
}

export default Table_mapping