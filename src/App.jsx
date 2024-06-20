import { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

function App() {
  const {fetchBlogPost}  = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);
  return (
    <>
        <Header />
        <Blogs />
        <Pagination />
    </>
  )
}

export default App
