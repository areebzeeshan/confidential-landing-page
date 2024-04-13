import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import NotFound from './Screens/NotFound'
import Products from './Screens/Products'
import SignUp from './Screens/SignUp'
import Login from './Screens/Login'
import Dashboard from './Screens/Admin/Dashboard'
import CreateProduct from './Screens/Admin/CreateProduct'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:name' element={<Products />} />
        <Route path='/sign-up-page' element={<SignUp />} />
        <Route path='/login-page' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
