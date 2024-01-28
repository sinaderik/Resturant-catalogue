import React from 'react'
import FastFoodItem from '../FastFoodItem/FastFoodItem'

export default function FastFoodList({ fastFoodItems }) {

    let delay = 0.1
    return (
        <div className='row'>
            {fastFoodItems.map((fastFood) => {
                delay += 0.030
                return (
                    <div key={fastFood.id} className='col-md-4 col-sm-6 mb-grid-gutter'>
                        <FastFoodItem {...fastFood} delay={delay} />
                    </div>
                )
            })}


        </div>
    )
}
