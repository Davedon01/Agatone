import React from 'react'

function Button(): React.ReactElement {
  return (
    <div className='inline-block  rounded-tr-xl rounded-bl-xl bg-green-300 p-1'>
        <button className='group relative bg-green-500 text-white font-bold uppercase text-lg px-6 py-3 border-green-300 cursor-pointer'>
        Contact us now
        <span className='block w-1/2 h-0.5 bg-white mt-2 mx-auto opacity-100 transition-opacity duration-200 group-hover:opacity-0'></span>
    </button>
    </div>
  )
}

export default Button