import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";


  const navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Solutions", hasDropdown: false },
    { label: "Resources", hasDropdown: false },
    { label: "About VamVam Uniport", hasDropdown: false },
  ];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDarkMode]);

const toggleTheme = () => {
  setIsDarkMode((prev) => !prev);
};


  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-white ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-primary-400)] to-[var(--color-primary-300)] bg-clip-text text-transparent">
              VamVam Uniport
            </h1>
      
{isDarkMode ? (
  <Sun onClick={toggleTheme} size={20} className="hidden sm:block cursor-pointer" />
) : (
  <Moon onClick={toggleTheme} size={20} className="hidden sm:block cursor-pointer" />
)} 
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-1 cursor-pointer hover:text-primary-400 transition-colors ${item.hasDropdown ? 'gap-2' : ''}`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={16} />}
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary-400 transition-colors">
              <Globe size={18} />
              <span>EN</span>
            </div>
            <Button>
              Contact Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-4 border-t border-white/10 animate-slide-down">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </div>
              ))}
              <div className="flex items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                <Globe size={18} />
                <span>EN</span>
              </div>
              <div className="p-3">
                <button className="w-full bg-primary-500 px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;