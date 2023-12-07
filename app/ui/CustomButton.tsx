import React from 'react'

type CustomProps = {
    text: string,
    span: string,
    onClick:()=>any,
    textStyle?:string,
    spanStyle?:string,
}

function Custom({onClick, text, span, textStyle, spanStyle}: CustomProps) {
  return (
    <button className={`${textStyle} px-2 py-4 rounded-[14px] hover:p-5 font-semibold  my-4`} onClick={onClick}>{text} <span className={spanStyle}>{span}</span></button>
  )
}

export default Custom