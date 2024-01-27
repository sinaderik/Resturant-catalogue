import React from 'react'

export default function Loading({theme}) {
  return (
    <div className='d-flex justify-content-center m-auto'>
        <div className={`spinner-border text-${theme || "info"}`} role="status">
        </div>
    </div>
  )
}
