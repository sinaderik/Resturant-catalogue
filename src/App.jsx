import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'
import FastFoodList from './components/FastFoodList/FastFoodList'
import Loading from './components/Loading/Loading'
import axios from "../src/axios"


export default function App() {
  const [loading, setLoading] = useState(false)
  const [fastFoodItems, setFastFoodItems] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(categoryId = null) {
    setLoading(true)
    const response = await axios.get(`/FastFood/list ${categoryId ? "?categoryId=" + categoryId : ""}`)
    setLoading(false)
    console.log(response.data)
    setFastFoodItems(response.data)
  }

  function renderContent() {
    if (loading) {
      return <Loading />
    }
    return <FastFoodList fastFoodItems={fastFoodItems}/>
  }

  return (
    <div className='wrapper'>
      <Header />
      <CategoryList />
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  )
}
