import React from 'react';
import styled from 'styled-components';


import phoneBackground from '../../images/invest/phoneBackground.svg';
import sectionOneAnimation from '../../images/invest/sectionThreeAnimation.gif';
import background from '../../images/homepageCurves/blobFour.png';

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
   padding: 0 48px;
   line-height: 20.74px;
   width: 320px;
   align-self: center;

   ${bp.lg`
      width: 900px;
      text-align: left;
      flex-direction: row;
   `}

   h2 {
      line-height: 35.0px;
      font-size: 25px;
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
    top: 2697px;
    height: 879px;
    width: 1116px;
    position: absolute;
    margin: 0;
    left: calc(0.00% - 853px);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.72;
    z-index: -1;




    ${bp.sm`
         
    top: 1637px;
    height: 813px;
    width: 1116px;
    
    left: calc(0.00% - 634px);
    opacity: 0.72;

    `}
`


const SectionThree = () => {
   return (
      <Container>
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
               <h2>Invest in your goals.</h2>
               <p>
               Putting money in a savings account may be familiar. But<br/> investing in your goals can be way better.<br /><br />

               22seven offers low cost funds from one of the most<br/> trusted names in the investment business - Old Mutual.<br/> So you know your money is safe and working towards<br/> your future just as hard as you are.
               </p>
            </Column>
         </Content>
      </Container> 
   )
}

export default SectionThree;