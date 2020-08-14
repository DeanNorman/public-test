import React from 'react';
import styled from 'styled-components'

import background from '../../images/invest/invest_hero_background.png'

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   background-color: #4e4b6b;
   color: #fff;
   min-height: 600px;
   background: url(${background}) no-repeat;
   background-position: center center;
   background-size: cover;
   margin-top: -1px;


   ${bp.sm`
     
   `}


   ${bp.md`
     
   `}

   ${bp.lg`
     min-height: 550px;
   
   `}

   
   ${bp.xl`
    min-height: 500px;
   
   `}

${bp.xl`
    min-height: 500px;
   `}

`

const Content = styled.div`
   display: flex;
   align-content: center;
   justify-content: flex-start;
   padding-left: 10px;

   ${bp.sm`
      padding-right: 60px;
   `}


`
const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-self: center;
   width: 80%;

   ${bp.sm`
      width: 70%;
      text-align: left; 
   `}

   ${bp.xl`
      width: 70%;
      text-align: left; 
   `}

`
const Title = styled.h1`
   font-size: 30px;
   font-family: 'CircularStd';
   ${bp.sm`
      font-size: 50px;
   `}
`
const Description = styled.p`
   font-weight: 300;
`

const HeaderInvest = () => {
   return (
      <Container>
         <Content>
             <Column>
               <Title>Put your money where your dream is.</Title>
               <Description>
                  Invest in your goals and start living.
               </Description>
            </Column> 
         </Content>
      </Container> 
   )
}

export default HeaderInvest;
