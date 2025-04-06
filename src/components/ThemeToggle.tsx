const ThemeToggle = () => {
    const handleToggleTheme = () => {
      const html = document.documentElement
      const isDark = html.classList.contains("dark")
  
      if (isDark) {
        html.classList.remove("dark")
        localStorage.setItem("theme", "light")
      } else {
        html.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }
    }
  
    return (
      <button
        onClick={handleToggleTheme}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    )
  }
export default ThemeToggle;  