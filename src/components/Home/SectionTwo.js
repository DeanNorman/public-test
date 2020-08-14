import React from 'react';
import styled, { css } from 'styled-components';

import personalisedBudget from '../../images/public-section-2---right.svg';

import background from '../../images/homepageCurves/blobTwo.png';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   z-index: 1;   
   text-align: center;


${bp.md`
   text-align: right;
   margin-top: 100px;
`}


   a {
      text-decoration: none;
      color: #4e4b6b;
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
   /* flex-wrap: wrap; */
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 
   
   ${bp.md`
      flex-direction: row;
   `}
`

const Background = styled.div`

display:none;
background-color: rgba(255,255,255,0.0);
/* TODO: right calc fix */
right: calc(0.00% - 581px);

top: 2110px;

height: 802px;
width: 782px;
position: absolute;
margin: 0;
z-index: -1;

${bp.md`
   display: block;
    height: 767px;
    width: 327px;
    top: 1330px;
    right: 0px;
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

const SectionTwo = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
            <Column>
               <h2>Get a personalised budget,<br/>automatically.</h2>
               <p>It’s generated for you. And based on your own, actual<br />spending. See exactly how much you spend on what<br />each month. Know what you‘ve already spent and<br />have left to spend, and find more money.</p>
            </Column>
            <Column left>
               <img src={personalisedBudget} alt="Personalised Budget" />
            </Column>
         </Content> 
      </Container> 
   )
}

export default SectionTwo;