import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios'

export default function CategoryList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        const response = await axios.get("/FoodCategory/categories")
        setCategories(response.data)
    }

    return (
        <nav className='container mt-n5'>
            <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4' style={{ height: "80px" }}>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">همه فست فود ها</a>
                    </li>
                    {categories.map(category => (
                        <li className='nav-item' key={category.id}>
                            <a className='nav-link' href="#">{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
