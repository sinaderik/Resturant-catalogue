import React from 'react'
import { useEffect } from 'react'
import axios from '../../axios'

export default function CategoryList() {
    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories(){
        const response=await axios.get("/FoodCategory/categories")
        console.log(response.data)
    }

    return (
        <div>CategoryList</div>
    )
}
