import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import linkArrow from '../../images/linkArrow.png';

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 30px auto 100px auto;
`
const Content = styled.div`
   font-family: 'CircularStd';
   color: #4e4b6b;
   display:flex;
   justify-content: center;
   flex-direction: column;
   text-align: left;

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14px;
      line-height: 20px;
      max-width: 700px;
   }
`



const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: #f1f2f3;
   padding: 40px 30px;
   margin: 15px 15px;
   max-width: 390px;

   p {
      font-size: 14.0px;
      line-height: 22px;
   }

   a {
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      text-decoration: none;
      color: #69668e;
      font-size: 16px;
   }

   a:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }

`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;
const JobCard = () => {
   return (
      <Container>
         <Content>
            <Card>
               <p>22seven from Old Mutual is a money management tool helping South Africans to show their money who’s boss. Our customers are our superheroes and like Yoda, Gandalf and Dumbledore, 22seven helps our superheroes with the tools to make better financial decisions.</p>
               <a href="#" target="_blank">
                  Product Owner/Manager
                  <Arrow src={linkArrow} alt="link" />
               </a>
               <br/>
               <a href="#" target="_blank">
                  DevOps Engineer
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>
         </Content>         
      </Container>
   )
}

export default JobCard;