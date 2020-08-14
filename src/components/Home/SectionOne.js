import React from 'react';
import styled, { css } from 'styled-components';

import ServiceProviders from '../../images/sectionOne.svg';

// import background from '../../images/homepageCurves/sectionOne.png';
import background from '../../images/homepageCurves/blobOne.png';
import linkArrow from '../../images/linkArrow.png';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   padding-top: 100px;
   text-align: center;
   z-index: 0;

   ${bp.md`
      text-align: left;
   `}

   a {
      text-decoration: none;
      color: #69668e;
      font-size: 15px;
   }
   a:hover {
   transition: all 0.2s ease-in-out;
   padding-left: 5px;
 }

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }
   
`;

const Background = styled.div`
   background-color: rgba(255,255,255,0.0);
   top: 1447px;
   height: 979px;
   width: 916px;
   position: absolute;
   margin: 0;
   left: calc(-0.32% - 699px);
   transform: rotate(3deg);
   z-index: -1;

   ${bp.sm`
      top: 752px;
      left: calc(0.01% - 456px);
   `}
   `

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 

   ${bp.md`
      flex-direction: row;
   `}
`

const Column = styled.div`
align-self:center;
padding-right: ${props => props.right ? '50px' : '0'};
padding-left: ${props => props.left ? '10px' : '0'};

/* ${props => !props.right ? ''
      : css`
         order: 1;
      `
   } */

`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;

const SectionOne = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <Column right>
               <img src={ServiceProviders} alt="22seven Service Providers"/>
            </Column>
            <Column>
               <h2>See all your money<br/>in one place.</h2>
               <p>All your accounts. All your transactions. All<br/>together. Link bank accounts, credit and store<br /> cards, investments, loans and rewards.</p>
               <a href="/supported-institutions/">
                  100+ supported institutions 
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Column>
         </Content>
      </Container> 
   )
}

export default SectionOne;