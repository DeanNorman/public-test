import React from 'react';
import styled, { css } from 'styled-components';

import personalisedBudget from '../../images/sectionFour.svg';
import linkArrow from '../../images/linkArrow.png';
import { breakpoints as bp } from '../../styling/index';


const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   text-align: right;
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 1;   

${bp.md`
   text-align: right;
`}

   a {
      text-decoration: none;
      color: #69668e;
      font-size: 15px;
   }

   a:hover {
      transition: all 0.2s ease-in-out;
      margin-right: -5px;
   }   

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 

   ${bp.md`
      flex-direction: row;
   `}
   
`



const Column = styled.div`
align-self:center;
padding-right: ${props => props.right ? '50px' : '0'};
padding-left: ${props => props.left ? '50px' : '0'};

order: ${props => props.left ? '-1' : '0'};;
${bp.md(css`
      order: 0;
   `)}
`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;

const SectionFour = () => {
   return (
      <>
      <Container>
         <Content>
         <Column>
            <h2>Invest in your goals and<br />reach them sooner.</h2>
            <p>Putting money towards your future can be a pain. But<br />the right planning can change that. Set, track and<br /> invest in your life goals from as little as R250.</p>
            <a href="/invest/">
               Learn more about investing 
               <Arrow src={linkArrow} alt="link" />
            </a>
         </Column>
         <Column left>
            <img src={personalisedBudget} alt="" />
            </Column>
         </Content>
      </Container> 
     </>
   )
}

export default SectionFour;