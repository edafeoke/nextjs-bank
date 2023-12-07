import React from 'react'

type FormInputGroupProps = {
    children?:any,
}

function FormInputGroup({ children }: FormInputGroupProps) {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {children}
        </div>
    )
}

export default FormInputGroup