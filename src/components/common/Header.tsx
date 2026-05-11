import { ChevronDown, Globe, Menu, Sun, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Solutions", hasDropdown: false },
    { label: "Resources", hasDropdown: false },
    { label: "About VamVam Uniport", hasDropdown: false },
  ];

  return (
    <div className="bg-bg-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 text-white">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-primary-400)] to-[var(--color-primary-300)] bg-clip-text text-transparent">
              VamVam Uniport
            </h1>
            <Sun color="#E6A500" size={20} className="hidden sm:block" />
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
            <button className="bg-primary-500 px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
              Contact Sales
            </button>
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
    </div>
  );
};

export default Header;