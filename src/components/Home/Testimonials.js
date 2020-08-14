import React from 'react'
import styled from 'styled-components';

import yellowQuote from '../../images/yellowQuote.svg'
import yellowStars from '../../images/yellowStars.svg'

import greenQuote from '../../images/greenQuote.svg'
import greenStars from '../../images/greenStars.svg'

import redQuote from '../../images/redQuote.svg'
import redStars from '../../images/redStars.svg'

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #4e4b6b;
   text-align: center;
   padding-top:60px;
   z-index: 1;

`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   max-width: 883px;
   font-family: 'CircularStd-Medium';

   ${bp.md`
      flex-direction: row;
   `}
`;

const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   box-shadow: 0px 0px 68px -17px rgba(0,0,0,0.25);
   width: 250px;
   border-radius: 9px;
   padding: 10px 18px 0px 18px;
   margin: 20px 0;

   background: white;
   min-height: 430px;


`;

const QuoteImg = styled.img`
   /* ${bp.sm`
      padding: 20px;
   `} */
`
const QuoteTitle = styled.p`
   font-family: 'CircularStd-Black';
   font-size: 11.74px !important;
   margin: 0;
   line-height: 18.81px;
${bp.sm`
   font-size: 14px;
`}
`

const QuoteText = styled.div`
   font-family: 'CircularStd';
   font-weight: 400px;
   margin: 0;
   P { 
      font-size:11px;
      color: #69668e;
      line-height: 18px;
      font-weight: 300px;
      margin: 0;
   }
`

const Author = styled.div`
   p {
      font-size: 11px;
      font-family: 'CircularStd';
      font-weight: 400;
      margin-bottom: 10px;
   }
`



const Title = styled.h2` 
 display: flex;
 justify-content: center;
 align-content: center;
 font-size: 30.0px;
 color: #4e4b6b;
 text-align: center;
 padding: 0 20px;

 ${bp.sm`
   padding: 0 20px;

   br  {
      display: none;
   }
 `}

 ${bp.lg`
      margin-bottom: 40px;
      `
   }
`

const Testimonials = () => {
   return (
      <>
      <Container>
         <Title>
            Our customers say the nicest things.
         </Title>
      <Content>
         <Card>
               <QuoteImg src={yellowQuote} alt="quote"/>
               <QuoteTitle>I love it, it helped me detect when my insurance charged me twice</QuoteTitle>
               <QuoteText>                  
                  <p>It’s my 3rd day using this app and I love it already; an insurance company deducted money twice from my account; I was not aware of it and the app could pick that up for me so I was able to get my money and the app could pick that up for me so I was to get my money back; thank you very much.</p>
               </QuoteText>
               <Author>
                  <p>Letshego, Dec 2017</p>
                  <img src={yellowStars} alt="yellow"/>
               </Author>
          </Card>

            <Card>
               <QuoteImg src={greenQuote} alt="quote" />
               <QuoteTitle>Thanks to 22seven I’m debt free</QuoteTitle>
               <QuoteText>
               <p>Yay!! When I made a decision 6 months ago to turn my financial life around, I started doing research and came across 22seven. You’ve certainly made sticking to that decision a lot easier. Today I’m debt free. From a debt of R40 000 6 months ago… may you keep nudging me as I move from debt to building an emergency fund and eventually growing my wealth through savings and investments.</p>
               </QuoteText>   
               <Author>
                  <p>Thandekile, Jan 2018</p>
                  <img src={greenStars} alt="green atRA"/>
               </Author>
            </Card>

            <Card>
             <QuoteImg src={redQuote} alt="quote"/> 
             <QuoteTitle>The best app I have used in 2018</QuoteTitle>
             <QuoteText>
               <p>This is by far the best app I have used in 2018. Why did it take me so long to get it?!
                  It helps me keep track of all my spending- to the cent. I am more aware of my spending habits as all my accounts are linked to the app. If you need budgeting tools and a reality check about your spending, this is the best app for you. If you have a goal you are saving towards, this is for you - as the app tells you how much you need to save per month to reach your goal. It’s WONDERFULL!!!!!</p>      
            </QuoteText>
                  <Author>
                  <p>Manileng, Dec 2018</p>
                  <img src={redStars} alt="green atRA"/>
                </Author>
            </Card>
      </Content>
      </Container>
      </>
   )
}

export default Testimonials;