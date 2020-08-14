import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import mail from '../../images/contact/mail.svg'
import phone from '../../images/contact/phoneIcon.svg'

import linkArrow from '../../images/linkArrow.png';

const Container = styled.div`
   font-family: 'CircularStd';
   margin-bottom: 20px;
`
const Content = styled.div`
   display:flex;
   justify-content: center;
   padding: 20px 0;
   flex-wrap:wrap;
   transition: all 0.2s ease-in-out;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 320px;
  margin: 10px 30px;
`

const Title = styled.p`
   font-weight: 300;
   line-height: 20px;
   font-size: 16px;
   color: #69668e;
   text-align: center;
   font-weight: bold;
   margin-top: 10px;

   ${bp.md`
      align-self: end;
   `}

`

const Circle = styled.div`
   display: flex;
   justify-content: center;
   background-color: #fff;
   width: 80px;
   height: 80px;
   border-radius: 1000px;

   box-shadow: 0px 0px 230px 3px rgba(112,112,112,0.5);
   margin-bottom: 20px;
   align-self: center;
   
  

   ${bp.md`
       align-self: flex-start;
   `}
`

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;

const ContactItem = styled.div`
   display: flex;
   flex-direction: column;
   margin: 15px 0;
   text-align: center;

   ${bp.md`
         text-align: left;
   `}

   p {
      
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      font-size: 16.0px;
      color: rgba(105, 102, 142, 1.0);
      line-height: 20.0px;
      margin: 0px;
   }

   a {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      text-decoration: underline;
      color: #69668e;
      font-size: 15px;
      font-weight: 300;
   }

   a:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }
`

const ContactDetails = () => {
   return (
      <Container>
         <Content>
            <Column>
               <Circle>
                  <Aligner>
                     <img src={mail} alt="eye"/>
                  </Aligner>
               </Circle>            
                  <Title>By Email.</Title>
                  <ContactItem>
                     <p>General enquiries and support</p>
                     <a href="mailto:thesvens@22seven.com" target="_blank" rel="noopener noreferrer">
                        thesvens@22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </a>
                  </ContactItem>
                  <ContactItem>
                     <p>Security</p>
                     <a href="mailto:security@22seven.com" target="_blank" rel="noopener noreferrer">
                           security@22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </a>
                  </ContactItem>
                  <ContactItem>
                     <p>Media-related stuff or PR</p>
                     <a href="mailto:prteam@22seven.com" target="_blank" rel="noopener noreferrer">
                           prteam@22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </a>
                  </ContactItem>
                  <ContactItem>
                     <p>Jobs</p>
                     <a href="mailto:awesomejobs@22seven.com" target="_blank" rel="noopener noreferrer">
                           awesomejobs@22seven.com
                        <Arrow src={linkArrow} alt="link" />
                     </a>
                  </ContactItem>
            </Column>
            <Column>
               <Circle>
                  <Aligner>
                     <img src={phone} alt="eye"/>
                  </Aligner>
               </Circle>      
               <Title>By phone.</Title>      
               <ContactItem>
                  <p>The svens</p>
                  <a href="tel:+27875504331" target="_blank" rel="noopener noreferrer">
                           +27 87 550 4331
                     <Arrow src={linkArrow} alt="link" />
                  </a>
                  <br/>
                  <p>Between 8am and 8pm every day</p>
               </ContactItem>
            </Column>
         </Content>
      </Container>
   )
}

export default ContactDetails;