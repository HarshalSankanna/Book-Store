import React from 'react'
import {Routes, Route} from 'react-router-dom'
import createBooks from './pages/createBooks.jsx'
import deleteBook from './pages/deleteBook.jsx'
import editBook from './pages/editBook.jsx'
import showBooks from './pages/showBooks.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='' element={Home} />
      <Route path='' element={showBooks} />
      <Route path='' element={createBooks} />
      <Route path='' element={editBook} />
      <Route path='' element={deleteBook} />
    </Routes>
  )
}

export default App