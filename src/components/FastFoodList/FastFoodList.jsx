import React from 'react'
import FastFoodItem from '../FastFoodItem/FastFoodItem'

export default function FastFoodList({ fastFoodItems }) {
    return (
        <div className='row'>
            {fastFoodItems.map(fastFood=>(
                <div key={fastFood.id} className='col-md-4 col-sm-6 mb-grid-gutter'>
                    <FastFoodItem {...fastFood}/>
                </div>
            ))}
        </div>
    )
}
