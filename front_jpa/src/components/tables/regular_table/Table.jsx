import React from 'react'
import './table.css'
import Table_mapping from './Table_mapping'

export default function Table() {
  return (
    <>
        <div className='table_main'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <Table_mapping/>
                </tbody>
            </table>
        </div>
    </>
  )
}
