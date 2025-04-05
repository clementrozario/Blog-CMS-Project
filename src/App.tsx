
import { useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  useEffect(()=>{
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
  },[]);
  return (
    <ThemeToggle />
  )
}

export default App