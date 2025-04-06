import { useEffect } from 'react'
import {Routes,Route} from "react-router-dom"
import ThemeToggle from './components/ThemeToggle'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import BlogPost from './pages/BlogPost'

const App = () => {
  useEffect(()=>{
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
  },[]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
    <ThemeToggle />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path ='/dashboard' element={<Dashboard />} />
      <Route path ='/create' element={<CreatePost />} />
      <Route path ='/edit/:id' element ={<EditPost />} />
      <Route path = 'blog/:slug' element ={<BlogPost />} />
    </Routes>
    </div>
  )
}

export default App