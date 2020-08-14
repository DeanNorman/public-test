import React from "react"
import styled from "styled-components"
import appStore from '../../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../../images/public-mobile-badgegoogle-play-1@2x.png';
import { Link } from "gatsby"


const NavItem = styled(Link)`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  font-weight: 300;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  &:hover {
   transform: translate(0, -5px);
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    z-index: 6;
  }
`

const ExternalNavItem = styled.a`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  font-weight: 300;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  &:hover {
   transform: translate(0, -5px);
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    z-index: 6;
  }
`

const LoginSigupButtons = styled.div`
   @media (max-width: 768px) {
      display: inline; 
  }
`

const SignUp = styled.a`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  background-color: #13c6b9;
  padding: 10px 18px ;
  border-radius: 3px;
  &:hover {
   transform: translate(0, -5px);
  }
`

const LogIn = styled.a`
  font-family: "CircularStd";
  text-align: left;
  line-height: 13.0px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 0.3vw;
  transition: all 200ms ease-in;
  position: relative;

  border: #fff solid 1px;
  padding: 9px 18px ;
  border-radius: 3px;
  &:hover {
   transform: translate(0, -5px);
  }
`

const AppStoreBadges = styled.div`
   display: none;
   @media (max-width: 768px) {
      display: block;
      margin-top: 24px;
      border-top: 1px solid #ffffff2b;
  }
`
const AppBadge = styled.img`
   height: 40px;
   width: 131px;
   margin: 20px 1vw;
`



const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" >Home</NavItem>
      <NavItem to="/invest/"
         activeStyle={{  borderBottom: "2px solid #ffffff52",  padding: "7px 0px" }}>
         Invest in your goals
      </NavItem>
      <ExternalNavItem href="https://conversations.22seven.com/hc/en-us" target="_blank">Help Centre</ExternalNavItem>
      <ExternalNavItem href="https://blog.22seven.com/" target="_blank">Blog</ExternalNavItem>
      
      <LoginSigupButtons>
         <SignUp href="https://www.22seven.com/app/signup">Sign up</SignUp>
         <LogIn href="https://www.22seven.com/app/login">Log in</LogIn>
      </LoginSigupButtons>
      
      <AppStoreBadges>
         <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
            <AppBadge src={googlePlay} />
         </a>
         <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
            <AppBadge src={appStore} />
         </a>
      </AppStoreBadges>
   
    </>
  )
}

export default NavbarLinks;