import React from 'react'
import SidePanel from '../SidePanel'
import SupportChat from '../SupportChat'

function AdminSupport() {
  return (
    <div className='grid grid-cols-[30%_auto]'>
        <SidePanel />
        <SupportChat />
    </div>
  )
}

export default AdminSupport