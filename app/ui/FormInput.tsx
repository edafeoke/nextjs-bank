import Image from 'next/image'
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

function FormInput({ type = 'text', placeholder = '', error = '', label = '', id = '', name = '', required = false }: FormInputProps) {
    const [passwordShown, setPasswordShown] = React.useState(false)
    return (
        <div className="flex flex-col my-4">
            <label htmlFor={name} className='text-[#919499] my-2'>{label} {required && <span className='text-[#D70000]'>*</span>}</label>
            <div className='flex flex-rows items-center relative'>

                <input required={required ? true : false} placeholder={placeholder} className="w-full h-[30px] rounded-[14px] border-[1.3px] p-5 py-6" type={passwordShown?'text':type} name={name} id={id} />
                {type == 'password' && (passwordShown ? (
                    <Image onClick={() => setPasswordShown(!passwordShown)} className='absolute right-5 cursor-pointer' src='/akar-icons_eye.svg' alt='eye' width={20} height={5} />
                ) : (
                    <Image onClick={() => setPasswordShown(!passwordShown)} className='absolute right-5 cursor-pointer' src='/mdi_eye-closed.svg' alt='eye' width={20} height={5} />
                ))}
            </div>
            <span className="hidden">error</span>
        </div>
    )
}

export default FormInput