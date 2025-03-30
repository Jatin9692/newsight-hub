
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Biznews. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About Us
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
