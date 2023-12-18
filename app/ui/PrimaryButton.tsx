import React from 'react'

type PrimaryButtonProps = {
    title: string,
    onClick:()=>any,
}

function PrimaryButton({onClick, title}: PrimaryButtonProps) {
  return (
    <button className='bg-[#f8ad15] text-white px-2 py-4 rounded-[14px] w-full hover:bg-[#d79612] font-semibold  my-10' onClick={onClick}>{title}</button>
  )
}

export default PrimaryButton