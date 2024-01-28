import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'


export default function SearchBar() {

    const [value, setValue] = useState("")

    function onSubmit(e){
        e.preventDefault();
        console.log(value)
    }

    return (
        <form onSubmit={onSubmit} className='search d-flex flex-fill align-items-center'>
            <div className='input-group'>
                <input
                    className='form-control rounded-end pe-5 border-success'
                    type='text'
                    placeholder='جستوجوی فست فود ...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3' />
            </div>
        </form>
    )
}
