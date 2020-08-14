import React from 'react';
import styled from 'styled-components'

// import background from '../../images/about/header.png';
import animation from '../../images/security/animation.gif'
import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   min-height: 360px;
   position: relative;

   background: #f1f2f3;
   br {
      display: none;
      ${bp.sm`
         display: block;
      `}
   }

   img {
 
    width: 100%;
    max-width: 100%;

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

    ${bp.sm`
      font-size: 37.531px;
      line-height: 54.045px;
    `}


`

const Animation = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-self: flex-end;
   margin-bottom: -37px;
`


const Wrapper = styled.div`
   position: absolute;
`
const HeaderSecurityAnimated = () => {
   return (
      <>
      <Container>
         <Wrapper>
            <Content>
               <Title>We take security very<br/> seriously.</Title>
            </Content>
         </Wrapper>
         <Animation>
               <img src={animation} alt="security animation" />
            </Animation>
      </Container>
      </>
   )
}

export default HeaderSecurityAnimated;
