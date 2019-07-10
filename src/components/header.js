import { Link } from "gatsby"

import React, { useEffect, useState } from "react"

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 600;

  const [display, activateDisplay] = useState(false)

  const links = [
    <li key={1}><Link to="/">About</Link></li>,
    <li key={2}><Link to="/">Experience</Link></li>,
    <li key={3}><Link to="/">Portfolio</Link></li>,
    <li key={4}><Link to="/">Contact</Link></li>
  ]

  return (
    <div className="container" >

      <header className="flex-row header">
        <h1>Mike Snacki</h1>
        {width > collapseWidth ? < ul className="nav-links" >
          {< ul className="nav-links" >{links}</ul >}</ul >
          :
          <button onClick={() => activateDisplay(!display)} className="menu-bar">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        }

      </header>
      {
        display === true && width <= collapseWidth && <div className="menu-dropdown"><ul>{links}</ul></div>
      }
    </div >
  )
}

export default Header
