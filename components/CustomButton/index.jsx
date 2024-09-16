'use client'
import React from 'react'

function CustomButton({handleClick=() =>{},  buttonName}) {
  return (
    <button onClick={handleClick} className='w-full py-2 rounded-xl border-2 border-pink-100 bg-[#ef4680] text-white font-medium text-center'>
        {buttonName}
    </button>
  )
}

export default CustomButton