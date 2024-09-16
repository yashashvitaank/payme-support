'use client'
import Image from 'next/image'
import SendIcon from "/public/send.svg"
function ChatInput({handleSend = () => {}, input = "", setInput = () => {}}) {
    
  return (
    <div className='flex justify-between pr-4 rounded-xl bg-white shadow-lg border border-zinc-300 fixed w-[calc(100vw-20px)] left-1/2 -translate-x-1/2 bottom-3 h-12'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='outline-none text-sm bg-inherit w-[90%] h-full pl-4 mx-2' placeholder='Type your queries away...' />
        <Image src={SendIcon} width={40} height={40} alt='' onClick={handleSend} className='cursor-pointer' />
    </div>
  )
}

export default ChatInput