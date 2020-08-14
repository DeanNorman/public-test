import React from 'react';
import { Link } from "gatsby"
// import ReactZenDeskChat from '@inlightmedia/react-zendesk-chat';
import appStore from '../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../images/public-mobile-badgegoogle-play-1@2x.png';
import styled from 'styled-components';


import youtube from '../images/legalterms-iconyoutube.svg';
import twitter from '../images/about-icontwitter.svg';
import facebook from '../images/jobs-iconfacebook.svg';
import linkedin from '../images/iconlinkedin.svg';
import instagram from '../images/invest-in-your-goals-iconinstagram.svg';
import om from '../images/public-logo-om-mark.svg';

import { breakpoints as bp } from '../styling/index';

const Container = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content:space-around;
   margin-top: 80px;
   margin-bottom: 50px;
   /* max-width: 1000px; */
   

   @media (max-width: 768px) {
      flex-wrap: wrap;
  }
`;

const Column = styled.div`
   display: flex;
   flex-direction: column;


   p {
      font-family: "CircularStd";
      font-weight: bold;
      font-size: 15px;
      color: #4e4b6b;
      margin-bottom: 10px;
   }
   @media (max-width: 768px) {
      flex-basis: ${props => props.social ? '100%' : '50%'};
      padding: 15px;
      margin-top: 10px;
      padding-left: ${props => props.social ? '15px' : '34px'};
  }
`
const NavItem = styled(Link)`
  font-family: "CircularStd";
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  line-height: 30px;
  text-decoration: none;
  color: #4e4b6b;



  &:hover {
   transform: translate( 5px, 0px);
   transition: all 0.2s ease-in-out;
  }
`

const SocialContainer = styled.div`
   display:flex;
   align-items: flex-start;
   justify-content: space-around;

   a:hover {
      transform:translate(0, -5px);
      transition: all 0.2s ease-in-out;
   }
`;


const AppBadgeContainer = styled.div`
display: flex;
a:hover {
   transform: translate( 0px, -5px);
   transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
     justify-content: center;
  }

`;

const OldMutualTag = styled.div`
   display: flex;
   align-items: center;
   margin-top: 40px;
   margin-left: 25px;

   ${bp.sm`
      margin-top: 80px;
   `}
p {
   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   font-size: 12px;
   padding-left: 10px;
   margin: 0;
}


`;

const AppBadge = styled.img`
   height: 40px;
   width: 131px;
   margin: 20px 1vw;
`
const Foot = styled.div`   
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   min-height:60px;
   border-top: 1px solid #f6f9ff;
   padding-left: 20px;

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 12px;
      margin: 0;
      color: #4e4b6b;
   }

   @media (max-width: 768px) {
      padding: 20px;
  }
`;

export default function Footer() {
   return (
      <>
      <OldMutualTag>
         <img src={om} alt="old mutual" />
         <p>Backed by Old Mutual</p>
      </OldMutualTag>
      <Container>
         <Column>
            <p>Using 22sevens</p>
            <NavItem to="/security">Security</NavItem>
            <NavItem to="/invest/">Invest in your goals</NavItem>
         </Column>
         <Column>
            <p>Resources</p>
            <NavItem to="/">Help Centre</NavItem>
            <NavItem to="/">Blog</NavItem>
         </Column>
         <Column>
            <p>Legal</p>
            <NavItem to="/legal/privacy">Privacy Policy</NavItem>
            <NavItem to="/legal/terms">Terms of Service</NavItem>
            <NavItem to="/legal/terms-and-conditions">Investing T&Cs</NavItem>
            <NavItem to="/legal/fais-disclosures">FAIS Disclosures</NavItem>
         </Column>
         <Column>
            <p>Company</p>
            <NavItem to="/about/">About 22seven</NavItem>
            <NavItem to="/jobs/">Jobs</NavItem>
            <NavItem to="/contact/">Contact us</NavItem>
            <NavItem to="/partners/">Partners</NavItem>
         </Column>
         <Column social>
            <SocialContainer>
               <a href="https://twitter.com/22seven" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" />
               </a>
               <a href="https://www.facebook.com/ilike22seven" target="_blank" rel="noopener noreferrer">
               <img src={facebook} alt="facebook" />
               </a>
               <a href="https://www.linkedin.com/company/22seven-digital/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" />
               </a>
               <a href="https://www.youtube.com/channel/UC67gilqN1j-ZtW_XCNA-ycQ" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="youtube" />
               </a>
               <a href="https://www.instagram.com/ilike22seven/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" />
               </a>
            </SocialContainer>
            <AppBadgeContainer>
                <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                  <AppBadge src={googlePlay} />
               </a>
               <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                  <AppBadge src={appStore} />
               </a>

            </AppBadgeContainer>
         </Column>
      </Container>
      <Foot>
         <p>© 2019 22seven All Rights Reserved. <strong>Old Mutual is a Licensed Financial Services Provider. 22seven is a juristic representative of Old Mutual.</strong></p>
      </Foot>
      {/* <ReactZenDeskChat appID="2PHAosPEgH4M1GJs0dYKQzKz8ilTtAbL" /> */}
   </>
   )
}
