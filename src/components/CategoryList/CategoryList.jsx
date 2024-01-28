import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios'
import Loading from '../Loading/Loading'


export default function CategoryList({fetchData}) {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [categoryId,setCategoryId]=useState(null)

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        const response = await axios.get("/FoodCategory/categories")
        setCategories(response.data);
        setLoading(false);
    }

    function RenderContent() {
        if (loading) {
            return <Loading />
        }

        return (
            <ul className='nav'>
                <li className='nav-item'>
                    <a onClick={()=>fetchData()} className='nav-link' href="#">همه فست فود ها</a>
                </li>
                {categories.map(category => (
                    <li className='nav-item' key={category.id}>
                        <a onClick={()=>fetchData(category.id)} className='nav-link' href="#">{category.name}</a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <nav className='container mt-n5'>
            <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4' style={{ height: "80px" }}>
                <RenderContent />
            </div>
        </nav>
    )
}
