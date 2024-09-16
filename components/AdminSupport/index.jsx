import React from 'react'
import SidePanel from '../SidePanel'
import SupportChat from '../SupportChat'

function AdminSupport() {
  return (
    <div className=''>
        <div className='w-[30%]'><SidePanel /></div>
        <div className='w-[60%]'><SupportChat /></div>
    </div>
  )
}

export default AdminSupport