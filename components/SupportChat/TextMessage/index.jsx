import React from 'react'

function TextMessage({text, type}) {
    const isSent = type === 'sent'
  return (
    <div className={`flex text-white p-2 ${isSent && 'justify-end'}`}>
        <p className={`p-2  rounded-md shadow-md ${isSent ? 'bg-[#529ea0]' : 'bg-[#007084]'}`}>{text}</p>
    </div>
  )
}

export default TextMessage