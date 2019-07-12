import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

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

export default function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 600;

  const [display, activateDisplay] = useState(false)
  const displayed = display === true ? "displayed" : "hidden"

  const links = [
    <li key={1}><Link to="/about">About</Link></li>,
    <li key={2}><Link to="/">Experience</Link></li>,
    <li key={3}><Link to="/">Portfolio</Link></li>,
    <li key={4}><Link to="/">Contact</Link></li>
  ]

  return (

    <div className="container">
      <header className="flex-row header">
        <h1>Mike Snacki</h1>
        {width >= collapseWidth
          ? <ul className="nav-links">{links}</ul >
          : <div>
            <button onClick={() => activateDisplay(!display)} className={`menu-bar ${displayed}`}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </div>}
      </header>
      <ul className={`menu-dropdown-${displayed}`}>{display === true && width < collapseWidth && links}</ul>
    </div >

  )
}

