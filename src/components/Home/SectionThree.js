import React from 'react';
import styled from 'styled-components';

import temp from '../../images/sectionThree.svg';
import background from '../../images/homepageCurves/blobFour.png';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   /* margin-top: 100px; */
   text-align: center;
   z-index: 1;

${bp.md`
   text-align: left;
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
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 
   
   ${bp.md`
      flex-direction: row;
   `}
`

const Background = styled.div`
background-color: rgba(255,255,255,0.0);
    top: 2697px;
    height: 879px;
    width: 1116px;
    position: absolute;
    margin: 0;
    left: calc(0.00% - 853px);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.72;
    z-index: -1;

    ${bp.sm`
    top: 1637px;
    height: 813px;
    width: 1116px;
    left: calc(0.00% - 634px);
    opacity: 0.72;
    `}
`

const Column = styled.div`
align-self:center;

${bp.xs`
   padding-right: ${props => props.right ? '50px' : '0'};
`}

padding-left: ${props => props.left ? '10px' : '0'};
`

const SectionThree = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
         <Content>
         <Column right>
            <img src={temp} alt="Nudges"/>
         </Column>
         <Column>
            <h2>Find relevant<br />insights, regularly.</h2>
            <p>Nudges are hints and observations about your<br />money. See things you didn’t know or hadn’t<br />considered, and use your money better.</p>
         </Column>
         </Content>
      </Container> 
   )
}

export default SectionThree;










