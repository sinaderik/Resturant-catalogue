import React from 'react'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'

export default function App() {
  return (
    // bg-faded-dark
    <div className='wrapper'>
      <Header />
      <CategoryList />
    </div>
  )
}
