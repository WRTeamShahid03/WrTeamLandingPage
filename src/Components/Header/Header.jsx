import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../../Assets/Images/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const nav = typeof document !== 'undefined' && document.querySelector(".nav");
    setHeaderTop(nav.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <Navbar expand="lg" id="header"  className={`container nav ${scroll > headerTop ? "sticky " : ""}`}>

        <div className='col-lg-9'>
          <div className="navLogo">
            <Link href="/">  <img src={navLogo.src} alt="navLogo" /> </Link>
          </div>
        </div>



        <Navbar.Collapse id="basic-navbar-nav" className='col-lg-3 navcoll'>
          <Nav className="me-auto navFlex">
            <Link className="nav-link" href="/"> Home</Link>

            <Link className="nav-link" href="https://wrteam.in/shop/">Products</Link>

            <Link className='nav-link' href='https://wrteam.in/about-us/'> About Us </Link>


            <Link className="nav-link" href="https://wrteam.in/contact-us/">Contact Us</Link>
          </Nav>

        </Navbar.Collapse>

        <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>

      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement='end'
        scroll={true}
        backdrop={true}>
        <Offcanvas.Header closeButton className='btn-close-white'>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto navFlex">
            <Link className="nav-link" href="/"> Home</Link>

            <Link className="nav-link" href="https://wrteam.in/shop/">Products</Link>

            <Link className='nav-link' href='https://wrteam.in/about-us/'> About Us </Link>


            <Link className="nav-link" href="https://wrteam.in/contact-us/">Contact Us</Link>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
