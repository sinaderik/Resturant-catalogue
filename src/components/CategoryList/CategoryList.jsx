import React from 'react'
import { useAxios } from '../../useAxios'
import Loading from '../Loading/Loading'
import SearchBar from '../SearchBar/SearchBar'



export default function CategoryList({ fetchData, children }) {
    
    const [categories, , loading] = useAxios({
        method: "GET",
        url: "/FoodCategory/categories"
    })

    function RenderContent() {
        if (loading) {
            return <Loading />
        }

        return (
            <div className='d-flex align-items-center justify-content-between w-100 ps-3 gap-5'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a onClick={() => fetchData()} className='nav-link' href="#">همه فست فود ها</a>
                    </li>
                    {categories.map(category => (
                        <li className='nav-item' key={category.id}>
                            <a onClick={() => fetchData(category.id)} className='nav-link' href="#">{category.name}</a>
                        </li>
                    ))}
                </ul>
                {children}
            </div>
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
