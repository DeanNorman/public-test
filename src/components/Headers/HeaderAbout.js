import React from 'react';
import styled from 'styled-components'

import background from '../../images/about/header.png';

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   min-height: 360px;
   background: url(${background}) no-repeat center center;
   background-size: cover;
   
   br {
      display: none;
      ${bp.sm`
         display: block;
      `}
   }
`

const Content = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;

   font-family: 'CircularStd';
   color: #4e4b6b;

   padding-left: 30px;
   padding-right: 30px;

   ${bp.sm`
      padding-right: 60px;
   `}
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40.32px;
    text-align: center;
    font-family: 'CircularStd';
    ${bp.sm`
      font-size: 50px;
      line-height: 54.045px;
    `}


br {
      display: none;
      ${bp.sm`
         display: block;
      `}
   }


`
const Description = styled.p`
   font-family: 'CircularStd-Book';
   font-weight: 300;
   font-size: 15px;
   text-align: center;

   ${bp.md`
      font-size: 20.0px;
   `}
`

const HeaderAbout = () => {
   return (
      <Container>
         <Content>
            <Title>A little bit<br/> about us.</Title>
            <Description>
               We built 22seven because we think there's a new<br/> solution to an old problem.
            </Description>
         </Content>
      </Container> 
   )
}

export default HeaderAbout;
