import React from 'react';
import styled from 'styled-components'

import { breakpoints as bp } from '../../styling/index'

const Container = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 50px;
   margin-bottom: 100px;
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
   padding: 0 40px;
   p {
    font-family: "CircularStd", Helvetica, Arial, serif;
    font-size: 16px;
    color: rgba(105, 102, 142, 1.0);
    text-align: center;
    line-height: 26.0px;
   }
`

const SignUpBtn = styled.a`
   
   display: inline-flex;
   background-color: #13c6b9;
   height: 45px;
   width: 176px;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   align-self: center;
   margin-top: 20px;
   font-size: 17.28px;
   &:hover {
      transform: translate(0, -5px);
      transition: all 0.2s ease-in-out;
   }

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      margin: 0;
      color: #fff;
      align-self:center;
   }
`

const SecurityQuestions = () => {
   return (
      <Container>
         <Content>
         <p>If you have questions, however simple or technical, we’d like to answer them.</p>
         <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
               <p>Please email us.</p>
         </SignUpBtn>
         </Content>

      </Container> 
   )
}

export default SecurityQuestions;
