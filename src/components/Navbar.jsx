import React,{ useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';

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
    <nav>
      <div className="nleft">
        <img src='/assets/shared/logo.svg' alt="space-tourism" />
      </div>
      <div className="nright">
        <div className="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul className="nav-links">
          <il>
            <Link to="/">home</Link>
          </il>
          <il>
            <Link to="/destination">destination</Link>
          </il>
          <il>
            <Link to="/crew">crew</Link>
          </il>
          <il>
            <Link to="/technology">technology</Link>
          </il>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar