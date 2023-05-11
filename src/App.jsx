import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './Global.css'

import AccountGet from './pages/Account'
import UpdateUser from './pages/UpdateUser'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser';


function App() {

  function PrivateRoute({children, redirectTo}) {

    const token = localStorage.getItem('token')

    if (redirectTo === 'account' & token) {
      return <Navigate to='/account' />
    } else if (redirectTo === 'account' & !token) {
      return children
    }

    return token ? children : <Navigate to={`/${redirectTo || ''}`} />

  }

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element={
          <PrivateRoute redirectTo='account'> 
            <Home />
          </PrivateRoute>
        } 
        />
        <Route path='/account' 
        element={
          <PrivateRoute> 
            <AccountGet/> 
          </PrivateRoute>
        } 
        />

        <Route path='/update' 
        element={
          <PrivateRoute> 
            <UpdateUser/> 
          </PrivateRoute>
        } 
        />
        <Route path='/register' 
        element={
          <PrivateRoute redirectTo='account'>
            <CreateUser/> 
          </PrivateRoute> 
        } 
        />
      </Routes>
    </BrowserRouter>


  )
}

export default App
