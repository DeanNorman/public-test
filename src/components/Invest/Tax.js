import React from 'react';
import styled, { css } from 'styled-components';

import tax from '../../images/invest/tax.svg';

import background from '../../images/homepageCurves/blobSix.svg';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 1;   
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   padding: 0 50px;
   line-height: 20.74px;
   font-family: 'CircularStd';
   align-self: center;

   ${bp.sm`
      width: 500px;
   `}

   ${bp.md`
      width: 500px;
   `}

   ${bp.lg`
      text-align: center;
      margin-top: 30px;
      width: 619px;
  
   `}

   h2 {
         line-height: 35.0px;
         font-size: 25px;
      }

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
      
   }
`

const Column = styled.div`
   align-self:center;
   order: -1;

   ${bp.xs(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}

   ${bp.sm(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}


   ${bp.lg(css`
      order: 0;
      padding-left: ${props => props.left ? '50px' : '0'};
   `)}
   
`



const SignUpBtn = styled.a`
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   margin-bottom: 10px;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 14px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.xs`
      display: inline-flex;
      width: 212px;
   `}

${bp.md`
      display: inline-flex;
      width: 212px;
   `}

`

const Background = styled.div`
    top: 7800px;
    height: 1030px;
    width: 2399px;
    position: absolute;
    margin: 0;
    left: -2085px;
    transform: rotate(-2deg);
    z-index: -1;

   ${bp.xs`
       left: -2080px;
   `}

   ${bp.sm`
       top: 7000px;
       left: calc(0.01% - 1930px);
   `}

    ${bp.md`
      top: 6603px;
      left: calc(0.01% - 1720px);
    `}

   ${bp.lg`
      top: 4433px;
      left: calc(0.01% - 1450px);
    `}

   ${bp.xl`
      top: 4383px;
      left: calc(0.01% - 1260px);
    `}

${bp.xxl`
      top: 4383px;
      left: calc(0.01% - 1260px);
    `}
`


const Tax = () => {
   return (
      <Container>
            <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <Column>
            <img src={tax} alt="tax" />
              
            </Column>
            <Column >
            <h2>Tax or tax free.</h2>
            <p>With the launch of tax free savings, you can opt between taxed and tax free investments. We’ll also protect you from over contributing, so you can enjoy your tax freeness!</p>
            <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Reach for your goals now</p>
               </SignUpBtn>
            </Column>
         </Content> 
      </Container> 
   )
}

export default Tax;