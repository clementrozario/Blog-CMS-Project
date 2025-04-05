const ThemeToggle = () => {
    const handleToggleTheme = () => {
      const html = document.documentElement;
      const isDark = html.classList.contains("dark"); 
      if(isDark){
        html.classList.remove("dark");
        localStorage.setItem("theme","light");
      } else{
        html.classList.add("dark");
        localStorage.setItem("theme","dark");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center
       bg-white text-black dark:bg-black dark:text-white">
        <button onClick={handleToggleTheme} 
        className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded">
                    Toggle theme
        </button>
      </div>
    );
  };
  
  export default ThemeToggle;
  