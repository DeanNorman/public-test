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
   font-weight: 300;
   max-width: 660px;
   p {
    margin: 0 30px;
    font-family: "CircularStd", Helvetica, Arial, serif;
    font-size: 14px;
    color: #69668e;
    text-align: center;
    line-height: 20.74px;

      ${bp.md`
         margin: 0;
      `}
   }
`

const SignUpBtn = styled.a`
   
   display: inline-flex;
   background-color: #13c6b9;
   height: 45px;
   /* width: 176px; */
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   align-self: center;
   margin-top: 20px;
   font-size: 17.28px;
   padding: 0 20px;
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

const ApplyJobs = () => {
   return (
      <Container>
         <Content>
         <p>If you think you can see yourself as part of the 22seven tribe, then email us. Please include a brief motivation on why you would be a fit, your CV and if applicable a portfolio of work you have done. If we’d like to chat more, someone at 22seven will be in direct contact with you.</p>
         <SignUpBtn href="mailto:thesvens@22seven.com" target="_blank">
               <p>Email awesomejobs@22seven.com</p>
         </SignUpBtn>
         </Content>

      </Container> 
   )
}

export default ApplyJobs;
