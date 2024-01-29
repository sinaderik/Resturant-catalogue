import React, {useState } from 'react'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'
import FastFoodList from './components/FastFoodList/FastFoodList'
import Loading from './components/Loading/Loading'
import { useAxios } from './useAxios'
import SearchBar from './components/SearchBar/SearchBar'
import notFound from '../src/assets/images/404.png'
import "./App.css"

export default function App() {
  const [url, setUrl] = useState("/FastFood/list")
  const [fastFoodItems, , loading] = useAxios({
    method: "GET",
    url
  })

   function fetchData(categoryId = null) {
    setUrl(`/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`)
  }

   function searchItems(term) {
    setUrl(`/FastFood/search${term ? "?term=" + term : ""}`)
  }

  function renderContent() {
    if (loading) {
      return <Loading />
    }

    if (fastFoodItems.length === 0) {
      return (
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
