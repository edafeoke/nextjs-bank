import React from 'react'

type InfoLineProps = {
    info:string,
}

function InfoLine({info}: InfoLineProps) {
  return (
    <div className='border-1 border-[#333] relative'>
        <div className='p-5 bg-white absolute'>
        {info}
        </div>
        <hr className='absolute'/>
    </div>
  )
}

export default InfoLine