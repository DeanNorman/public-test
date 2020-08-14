import React from 'react';
import styled from 'styled-components';
import svens from '../../images/svens.png';

import email from '../../images/email.svg'
import phone from '../../images/phone.svg'
import linkArrow from '../../images/linkArrow.png';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   font-weight: 300;
   text-align: center;
   padding-top:100px;
   z-index: 1;

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


p { 
   font-weight: 300;
   font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
      max-width: 300px;

}

a {
   color: #4e4b6b;
   display: inline-block;
   align-self: initial;
   text-decoration: underline;
}

br {
   
   ${bp.sm`
      display: none;
   `}
}
`

const SvenTeam = styled.img`
    /* height: 118px; */
    max-width:300px;
    align-self: center;

    ${bp.sm`
      max-width: 500px;
    `}

`
const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
align-items: center;

${bp.md`
     flex-direction: row;
   `}


a {
   display: flex;
   align-items: center;
   font-size:15px;
   text-decoration: none;
   margin-bottom: 15px;

   ${bp.sm`
      margin-bottom: 0px;
   `}
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

const Icon = styled.img`
   padding-right: 10px;
`


const SvensContact = () => {
   return (
      <Container>
         <Content>
            <SvenTeam src={svens} alt="Svens"/>
            <h2>Get really good support from real, live people.</h2>
            <p>The Svens, our support team, are<br/> available from 8am to 8pm.</p>
            <Contact>
            <a href="mailto:thzesvens@22seven.com">
               <Icon src={email} />
                  thesvens@22sven.com
               <Arrow src={linkArrow} alt="link" />
            </a>
            <a href="tel:+27875504331">
               <Icon src={phone} />
                  +27 87 8550 4331
               <Arrow src={linkArrow} alt="link" />
            </a>
            </Contact>
         </Content>
      </Container>
   )
}

export default SvensContact;