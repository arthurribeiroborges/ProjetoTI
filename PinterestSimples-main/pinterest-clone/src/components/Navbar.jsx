import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/Futebol">Futebol</Link></li>
        <li><Link to="/category/Luta">Luta</Link></li>
        <li><Link to="/category/Basquete">Basquete</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;