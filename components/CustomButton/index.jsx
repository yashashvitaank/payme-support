'use client'
import React from 'react'

function CustomButton({onSubmitHandler=() =>{},  buttonName}) {
  return (
    <button onClick={onSubmitHandler} type='submit' className='w-full py-2 rounded-xl border-2 border-pink-100 bg-[#ef4680] text-white font-medium text-center'>
        {buttonName}
    </button>
  )
}

export default CustomButton