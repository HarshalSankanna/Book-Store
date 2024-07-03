import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBooks from './pages/createBooks.jsx'
import DeleteBook from './pages/deleteBook.jsx'
import EditBook from './pages/editBook.jsx'
import ShowBooks from './pages/showBooks.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/details/:id' element={<ShowBooks/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App