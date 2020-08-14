import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavBarLinks"
import logo from '../../images/22seven-logo.svg';
import { Link } from "gatsby"

const Navigation = styled.nav`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14.4px;
  height: 86px;
  display: flex;
  background-color: #4e4b6b;
  justify-content: space-between;
  /* border-bottom: 2px solid #33333320; */
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
      position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10px;
    background-color: #4e4b6b;
    transition: all 0.3s ease-in;
    top: 85px;;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 2px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Logo = styled(Link)`
   align-self: center;
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
   const home = "home";
  return (
    <Navigation>
      <Logo to="/">
         <img src={logo} alt="logo" />
      </Logo>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks location={home} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar