
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">
            NewsightHub
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
