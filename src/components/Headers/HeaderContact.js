import React from 'react';
import styled, { css } from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import animation from '../../images/contact/animation.gif'


const baseFontStyles = css`
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
`

const Container = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   min-height: 360px;
   margin-bottom: 100px;
   background-color: #f1f2f3;

   br {
   
      ${bp.sm`
         display: none;
      `}
   }
`

const Content = styled.div`
   ${baseFontStyles}
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
   width: 85%;

   ${bp.xl`
      width: 50%;
   `}

`

const Title = styled.h1`
   font-family: 'CircularStd';
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    ${bp.sm`
      font-size: 50.0px;
      line-height: 54.045px;
    `}
     ${bp.lg`
       margin-bottom: 40px;
    `}
`

const Contract = styled.img`
   width: 150px;
   height: 150px;
    position: absolute;
    bottom: -86px;
`

const HeaderContact = () => {
   return (
      <Container>
         <Content>
            <Title>Get in touch<br/> with us.</Title>
         </Content>
            <Contract src={animation} />
      </Container> 
   )
}

export default HeaderContact;
