import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'


const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
   padding: 0 23px;

   ${bp.sm`
      padding: 0px;
   `}



`
const Content = styled.div`
   font-family: 'CircularStd';
   color: #4e4b6b;
   display:flex;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   max-width: 457px;
   background: #f1f2f3;
   padding: 40px 30px;

   h2 {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 15px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14px;
      line-height: 20px;
      max-width: 530px;
      color: #69668e;
 
      a {
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      
      color: #69668e;
      
   }
   }


`


const NoJobs = () => {
   return (
      <Container>
         <Content>
            <h2>We’re not looking for anyone specific right now.</h2>
            <p>but we're always keen to talk to exceptional people. If you think you're one of them, and that we'd be crazy not to at least have a cup of coffee with you, please email <a href="mailto:awesomejobs@22seven.com">awesomejobs@22seven.com</a> and tell us why. </p>

         </Content>
      
      </Container>
   )
}

export default NoJobs;