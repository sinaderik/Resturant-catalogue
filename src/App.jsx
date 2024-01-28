import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'
import FastFoodList from './components/FastFoodList/FastFoodList'
import Loading from './components/Loading/Loading'
import axios from "../src/axios"
import SearchBar from './components/SearchBar/SearchBar'
import notFound from '../src/assets/images/404.png'
import "./App.css"

export default function App() {
  const [loading, setLoading] = useState(false)
  const [fastFoodItems, setFastFoodItems] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData(categoryId = null) {
    setLoading(true)
    const response = await axios.get(`/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`)
    setLoading(false)
    setFastFoodItems(response.data)
  }

  async function searchItems(term) {
    setLoading(true)
    const response = await axios.get(`/FastFood/search${term ? "?term=" + term : ""}`)
    setLoading(false)
    setFastFoodItems(response.data)
  }

  function renderContent() {
    if (loading) {
      return <Loading />
    }
    
    if(fastFoodItems.length===0){
      return(
        <>
          <div className='alert alert-warning text-center'>
            برای کلید واژه فوق هیچ آیتمی یافت نشد !
          </div>
          <img className='fade-in-horiz mx-auto d-block mt-5' src={notFound} alt="404-image" />
        </>
      )
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />
  }

  return (
    <div className='wrapper'>
      <Header />
      <CategoryList fetchData={fetchData}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  )
}
