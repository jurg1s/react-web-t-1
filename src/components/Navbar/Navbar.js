
import React, { Children } from "react";
import "./Navbar.css";
const path = window.location.pathname;
function Navbar() {
  return (
      <nav className="nav">
        <a href="/" className="site-title">
          Site Name
        </a>
       <ul>
          <CustomLink href={"/pricing"}>Pricing</CustomLink>
          <CustomLink href={"/about"}>About</CustomLink>
       </ul>
      </nav>
  );
}

function CustomLink({ href, children, ...props}) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

export default Navbar;
