import React from 'react';
import styled from 'styled-components'

import { breakpoints as bp } from '../../styling/index'

import megaphone from '../../images/about/megaphone.svg'
import hiring from '../../images/about/hiring.svg'
import hand from '../../images/about/wavingHand.svg'
import testPilot from '../../images/about/testPilot.svg'
import arrow from '../../images/about/arrow.png'
import { Link } from "gatsby"


const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`

const Content = styled.div`
   display: flex;
   flex-direction: center;
   justify-content: center;
   text-align: center;
   flex-wrap: wrap;
   padding: 0 20px;

   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   color: #4e4b6b;

   ${bp.md`
      justify-content: space-around;
      max-width: 900px;
      text-align: left;
   `}


   h3 {
      font-family: "CircularStd-Bold", Helvetica, Arial, serif;
      font-size: 22.0px;
      color: #69668e;
      text-align: center;
      line-height: 28.0px;
      margin-bottom: 10px;

      ${bp.md`
         text-align: left;
      `}
   }

   p {
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      color: #69668e;
      margin-bottom: 20px;

      ${bp.md`
         line-height: 20px;
      `}
   }

   a {
      text-decoration: none;
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      font-size: 11.9px;
      line-height: 15.0px;
      color: #4e4b6b;

      &:hover {
         transform: translate(5px, 0);
         transition: all 0.2s ease-in-out;
      }
   }
`

const ContentLink = styled(Link)`
         text-decoration: none;
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      font-size: 11.9px;
      line-height: 15.0px;
      color: #4e4b6b;

      &:hover {
         transform: translate(5px, 0);
         transition: all 0.2s ease-in-out;
      }
`

const Title = styled.h2`
   font-size: 30.0px;
   line-height: 35.0px;
   color: #4e4b6b;
   margin-bottom: 50px;

    ${bp.sm`
      font-size: 30.531px;
      line-height: 54.045px;
    `}
`

const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: #FFFFFF;
   box-shadow: 0 11px 35px 0 rgba(0,0,0,0.05);
   border-radius: 9.41px;
   padding: 40px 30px;
   margin: 15px 0;
   max-width: 400px;

   ${bp.md`

   `}
`

const Icon = styled.img`
    margin-bottom: 10px;

    ${bp.md`
      align-self: flex-start;
    `}
`

const Arrow = styled.img`
   height: 7px;
    width: 4px;
    margin-left: 10px;
`;

const LearnMore = () => {
   return (
      <Container>
         <Title>Learn more.</Title>
         <Content>
            <Card>
               <Icon src={megaphone} alt="megaphone" />
               <h3>On the blog</h3>
               <p>Check out what we have to say about everything money related.</p>
               <a href="https://blog.22seven.com/" target="_blank" rel="noopener noreferrer">
                  See what we are saying
                  <Arrow src={arrow} alt="arrow" />
               </a>
            </Card>
            <Card>
               <Icon src={hiring} alt="22seven hiring" />
               <h3>Jobs</h3>
               <p>Find out a little more about what we do, why and how we do it, and how you might be able to do it with us.</p>
               <ContentLink to="/jobs/">
                  Careers at 22seven
                  <Arrow src={arrow} alt="arrow" />
               </ContentLink>
            </Card>
            <Card>
               <Icon src={hand} alt="hand" />
               <h3>Get in touch</h3>
               <p>If you have questions, however simple or technical, we’d like to answer them. Or visit us at the office.</p>
               <ContentLink href="/contact/">
                  Contact us
                  <Arrow src={arrow} alt="arrow" />
               </ContentLink>
            </Card>
            <Card>
               <Icon src={testPilot} alt="test pilot" />
               <h3>Test Pilot community</h3>
               <p>There’s lots happening at 22seven and we want you to be a part of it. So we’d like to invite you to join our Test Pilot community.</p>
               <a href="https://blog.22seven.com/2018/06/join-our-test-pilot-community/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <Arrow src={arrow} alt="arrow" />
               </a>
            </Card>  
         </Content>  
      </Container> 
   )
}

export default LearnMore;
