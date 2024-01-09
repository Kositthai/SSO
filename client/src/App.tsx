import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        // @ts-ignore
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json()
          throw new Error('authentication has been failed!')
        })
        .then((resObject) => {
          setUser(resObject.user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getUser()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to={'/'} /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to={'/'} />}
          />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
