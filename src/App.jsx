import React from 'react'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'

export default function App() {
  return (
    <div className='wrapper bg-faded-dark'>
      <Header />
      <CategoryList />
    </div>
  )
}
