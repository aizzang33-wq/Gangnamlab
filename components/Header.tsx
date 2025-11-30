import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '솔루션', path: '/tax-solution' },
    { label: '투자전략', path: '/investment' },
    { label: '연구소 소개', path: '/about' },
    { label: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl text-white font-bold tracking-tight group-hover:text-secondary transition-colors">
            강남부자연구소
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] group-hover:text-secondary/80 transition-colors">
            Gangnam Rich Research
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-secondary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full border border-secondary/50 text-secondary text-sm hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            세미나 신청
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col gap-4 animate-slide-up">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-lg text-gray-200 font-serif py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 w-full text-center py-3 bg-secondary text-primary font-bold rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            VIP 세미나 신청
          </Link>
        </div>
      )}
    </header>
  );
};