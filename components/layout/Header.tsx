"use client";

import i18n from "@/i18n";
import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "header.nav.product", hasDropdown: false },
  { key: "header.nav.solutions", hasDropdown: false, href: "#solutions" },
  { key: "header.nav.resources", hasDropdown: false, href: "#resources" },
  { key: "header.nav.about", hasDropdown: false, href: "#about" },
];

const Header = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Initialize theme on mount without causing cascading renders
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Determine initial theme
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
    
    setIsThemeLoaded(true);
  }, []);

  // Sync theme changes to localStorage and DOM
  useEffect(() => {
    if (!isThemeLoaded) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isThemeLoaded]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {t("brand.name")}
            </h1>

            <button
              onClick={toggleTheme}
              className="hidden sm:block cursor-pointer hover:scale-110 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href || "#"}
                className="text-gray-700 dark:text-gray-300 flex items-center gap-1 hover:text-primary-600 transition-colors"
              >
                <span>{t(item.key)}</span>
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}

            <div className="relative flex items-center gap-1.5">
              <Globe size={18} className="text-gray-700 dark:text-gray-300" />
              <select
                value={i18n.language || "en"}
                onChange={handleLanguageChange}
                className="appearance-none bg-transparent text-gray-700 dark:text-gray-300 cursor-pointer hover:text-primary-600 transition-colors pr-5 py-1 outline-none text-sm font-medium"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 pointer-events-none text-gray-700 dark:text-gray-300" />
            </div>

            <a href="#contact" className="text-gray-700 dark:text-gray-300 flex items-center gap-1 hover:text-primary-600 transition-colors">
              {t("header.nav.contact")}
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-4 border-t animate-slide-down">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  <span>{t(item.key)}</span>
                </a>
              ))}

              <a
                href="#contact"
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 flex items-center gap-1"
              >
                {t("header.nav.contact")}
              </a>
              
              <div className="flex items-center gap-2 p-3">
                <Globe size={18} className="text-gray-700 dark:text-gray-300" />
                <select
                  value={i18n.language || "en"}
                  onChange={handleLanguageChange}
                  className="bg-transparent text-gray-700 dark:text-gray-300 cursor-pointer outline-none w-full"
                >
                  <option value="en">English (EN)</option>
                  <option value="fr">Français (FR)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;