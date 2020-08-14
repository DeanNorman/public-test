import React from 'react';
import styled, { css } from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import contract from '../../images/legal/contract.svg'
import lock from '../../images/legal/lock.svg'


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

   background-color: #f1f2f3;

   br {
      display: none;
      ${bp.sm`
         display: block;
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

const Text = styled.p`
   font-family: 'CircularStd';
   font-size: 15px;
   line-height: 19px;
   text-align: center;
   font-weight: 300;

   ${bp.sm`
      font-size: 20px;
      line-height: 25px;
   `}

`

const Contract = styled.img`
    position: absolute;
    bottom: -109px;
`

const HeaderLegal = ({ title, text, icon }) => {
   return (
      <Container>
         <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
         </Content>
         {icon ? (
            <Contract src={lock} />
         ) : (
            <Contract src={contract} />
         )}
         
      </Container> 
   )
}

export default HeaderLegal;
