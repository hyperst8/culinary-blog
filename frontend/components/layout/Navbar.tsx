'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Utensils } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.search-trigger')
      ) {
        setIsSearchOpen(false);
      }
    }
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const navLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/oppskrifter', label: 'Oppskrifter' },
    { href: '/om-oss', label: 'Om oss' },
  ];

  return (
    <nav className="w-full bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-surface-muted">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Utensils className="w-6 h-6 text-brand-600" />
          <span className="text-xl font-bold tracking-tight text-text-tertiary">
            Culinary<span className="text-brand-600">Gear</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-text-secondary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-600 after:transition-transform after:duration-300 after:origin-left ${
                  isActive
                    ? 'text-brand-600 after:scale-x-100'
                    : 'text-text-secondary hover:text-brand-600 after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 relative">
          <div
            className={`absolute right-2 flex items-center bg-gray-300/50 rounded-full transition-all duration-300 ease-in-out border border-transparent overflow-hidden ${isSearchOpen ? 'w-48 md:w-64 px-3 py-1.5 opacity-100 border-surface-muted' : 'w-0 opacity-0'
              }`}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Søk på oppskrifter"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-text-primary text-sm focus:outline-none w-full placeholder:text-text-muted"
            />
          </div>

          <button
            aria-label="Søk"
            onClick={handleSearchClick}
            className="search-trigger p-2 rounded-full bg-surface-peach text-brand-700 hover:bg-brand-100 transition-colors cursor-pointer z-10"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

