import React from 'react'

function CustomInput({placeholder}) {
  return (
<div className="w-full">
  <input type="text" className="w-full relative ring-0 bg-white outline-none border-2 border-zinc-300 text-white placeholder-violet-800 text-sm rounded-lg focus:ring-violet-400  focus:border-violet-400 block p-2.5 checked:bg-emerald-500" placeholder={placeholder} />
</div>
  )
}

export default CustomInput