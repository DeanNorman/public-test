import React from 'react';
import styled from 'styled-components';


import phoneBackground from '../../images/invest/phoneBackground.svg';
import sectionOneAnimation from '../../images/invest/sectionOneAnimation.gif';
import background from '../../images/homepageCurves/blobOne.png';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 0;
`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 
   text-align: center;
   padding: 0 50px;
   line-height: 20.74px;
   width: 320px;
   align-self: center;

   ${bp.lg`
      width: 900px;
      text-align: left;
      flex-direction: row;
   `}

   h1 {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
   }

   h2 {
      /* line-height: 35.0px;
      font-size: 25px; */
   }

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }

      br {
         display: none;
      ${bp.sm`
         display: block;
      `}
   }
`

const PhoneBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${phoneBackground}) no-repeat;
    height: 427px;
    width: 243px;
    
    img {
      height: 296px;
      width: 160px;
      margin-top: -50px;
    }
`

const Column = styled.div`
   align-self:center;

   ${bp.lg`
      padding-right: 50px;
 
   `}
`

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

const SectionOne = () => {
   return (
      <Container>
         <h1>How it works</h1>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <Column right>
               <PhoneBackground>
                  <img src={sectionOneAnimation} alt="22seven goals" />
               </PhoneBackground>
            </Column>
            <Column>
               <h2>Decide what<br/> matters to you.</h2>
               <p>
               Finding the motivation to save can be tough. But it’s<br/>so much easier when you’re saving for the things that<br/> really matter to you.<br/><br/>

               Deciding what you want from life is the first step to<br/> getting it. So start by creating your goals in 22seven.
               </p>
            </Column>
         </Content>
      </Container> 
   )
}

export default SectionOne;