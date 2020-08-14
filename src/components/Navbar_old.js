import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
   return (
      <div>
         <h1>This is the nav bar</h1>
         <Link to="/">Index</Link>
         <Link to="/contact/">Contact</Link>
         <Link to="/about/">About</Link>
         <Link to="/invest/">Invest in your goals</Link>
         <Link to="/jobs/">Jobs</Link>
         <Link to="/partners/">Partners</Link>
         <Link to="/press/">Press</Link>
         <Link to="/security/">Security</Link>
      </div>
   )
}

export default Navbar;
