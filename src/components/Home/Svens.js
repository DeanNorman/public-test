import React from 'react';
import styled from 'styled-components';
import svens from '../../images/svens.png';

import email from '../../images/email.svg'
import phone from '../../images/phone.svg'
import background from '../../images/homepageCurves/blobSix.svg';
import linkArrow from '../../images/linkArrow.png';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   font-weight: 300;
   text-align: center;
   padding-top:100px;
   z-index: 1;

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;



p { 
   font-weight: 300;
   font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
}

a {
   color: #4e4b6b;
   display: inline-block;
   align-self: initial;
   text-decoration: underline;
}
`

const SvenTeam = styled.img`
    /* height: 118px; */
    max-width:300px;
    align-self: center;

    ${bp.sm`
      max-width: 500px;
    `}

`
const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

${bp.md`
     flex-direction: row;
   `}


a {
   display: flex;
   align-items: center;
   font-size:15px;
   text-decoration: none;
   margin-bottom: 15px;

   ${bp.sm`
      margin-bottom: 0px;
   `}
}
a:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }

`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;

const Icon = styled.img`
   padding-right: 10px;
`


const Background = styled.div`
   top: 7333px;
    height: 1030px;
    width: 2399px;
    position: absolute;
    margin: 0;
    left: -2085px;
    transform: rotate(-2deg);
    z-index: -1;

   ${bp.xs`
       top: 7043px;
       left: -2080px;
   `}

   ${bp.sm`
       top: 6603px;
       left: calc(0.01% - 1900px);
   `}

    ${bp.md`
      top: 4089px;
      left: calc(0.01% - 1650px);
    `}

   ${bp.lg`
      top: 4039px;
      left: calc(0.01% - 1400px);
    `}


   ${bp.xl`
      top: 4039px;
      left: calc(0.01% - 1200px);
    `}
`

const Svens = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <SvenTeam src={svens} alt="Svens"/>
            <h2>Get really good support from real, live people.</h2>
            <p>The Svens, our support team, are available from 8am to 8pm.</p>
            <Contact>
            <a href="mailto:thesvens@22seven.com">
               <Icon src={email} />
                  thesvens@22seven.com
               <Arrow src={linkArrow} alt="link" />
            </a>
            <a href="tel:+27875504331">
               <Icon src={phone} />
                  +27 87 550 4331
               <Arrow src={linkArrow} alt="link" />
            </a>
            </Contact>
         </Content>
      </Container>
   )
}

export default Svens;