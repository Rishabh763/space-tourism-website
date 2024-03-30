import React,{ useLayoutEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  useLayoutEffect(()=>{

    const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");

  const handleClick = () => {
    hamburger.classList.toggle("toggle");
    links.classList.toggle("open");
  };

  if (hamburger && links) {
    hamburger.addEventListener("click", handleClick);
  } else {
    console.error("Hamburger or Links not found");
  }

  return () => {
    // Cleanup: Remove the event listener when the component unmounts
    if (hamburger) {
      hamburger.removeEventListener("click", handleClick);
    }
  };


  },[]);

  return (
      <nav className=''>
        <div className="nleft">
          <img src='/assets/shared/logo.svg' alt="space-tourism" />
        </div>
        <div className="nright">
          <div className="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul className="nav-links backdrop-blur-xl">
            <il>
              <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>home</NavLink>
            </il>
            <il>
              <NavLink to="/destination" className={({ isActive }) => (isActive ? "link-active" : "link")}>destination</NavLink>
            </il>
            <il>
              <NavLink to="/crew" className={({ isActive }) => (isActive ? "link-active" : "link")}>crew</NavLink>
            </il>
            <il>
              <NavLink to="/technology" className={({ isActive }) => (isActive ? "link-active" : "link")}>technology</NavLink>
            </il>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar