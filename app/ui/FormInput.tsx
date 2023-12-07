import React from 'react'

type FormInputProps = {
    type: string,
    placeholder?: string,
    error?: string,
    label: string,
    id: string,
    name: string,
    required?: boolean,
}

function FormInput({ type = 'text', placeholder = '', error = '', label = '', id = '', name = '', required=false }: FormInputProps) {
    return (
        <div className="flex flex-col my-4">
            <label htmlFor="email" className='text-[#919499] my-2'>{label} {required && <span className='text-[#D70000]'>*</span>}</label>
            <input required={required?true:false} placeholder={placeholder} className="w-full h-[30px] rounded-[14px] border-[1.3px] p-5 py-6" type={type} name={name} id={id} />
            <span className="hidden">error</span>
        </div>
    )
}

export default FormInput