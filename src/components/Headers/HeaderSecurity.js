import React from 'react';
import styled from 'styled-components'

import background from '../../images/security/background.png';

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   background: url(${background}) no-repeat bottom;

   background-color: #f1f2f3;
   
   padding: 40px 30px 86px;
   background-size: 180%;


   ${bp.sm`
         padding: 40px 30px 140px;
   `}

    ${bp.md`
   background-size: cover;
   padding: 58px 30px 250px;
   background-position-x: center;
`}
    
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
    line-height: 35px;
    text-align: center;
    font-family: 'CircularStd';
    ${bp.md`
      font-size: 50.0px;
      line-height: 54.045px;
    `}

   
    color: #4e4b6b;


`

const HeaderSecurity = () => {
   return (
      <Container>
         <Content>
            <Title>We take security very<br/> seriously.</Title>
         </Content>
      </Container> 
   )
}

export default HeaderSecurity;
