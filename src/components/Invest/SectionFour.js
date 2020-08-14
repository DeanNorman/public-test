import React from 'react';
import styled, { css } from 'styled-components';

import sectionTwo from '../../images/invest/sectionFour.svg';

import background from '../../images/homepageCurves/blobTwo.png';
import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 1;   
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   padding: 0 50px;
   line-height: 20.74px;
   width: 320px;
   align-self: center;

   ${bp.lg`
      text-align: right;
      width: 900px;
      flex-direction: row;
   `}

   h2 {
         line-height: 35.0px;
         font-size: 25px;
      }

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }

   br {
         display: none;
      ${bp.sm`
         display: block;
      `}
   }
`

const Column = styled.div`
   align-self:center;
   order: -1;
   ${bp.xs(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}

   ${bp.sm(css`
      order: ${props => props.left ? '-1' : '0'};
   `)}


   ${bp.lg(css`
      order: 0;
      padding-left: ${props => props.left ? '50px' : '0'};
   `)}
`

const Phone = styled.div`
    width: 322px;
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

const SectionFour = () => {
   return (
      <Container>
         <Background>
            <img src={background} alt="22seven Service Providers"/>
         </Background>
            
         <Content>
            <Column>
               <h2>Add money<br/> whenever you want.</h2>
               <p>
               If you can’t commit to a monthly contribution right<br/> away, no sweat! You can invest in your goals<br/> monthly, once off, or both. Toggle debit orders on<br/> or off whenever you like, so you have the<br/> flexibility to adjust to life as it happens.
               </p>
            </Column>
            <Column left>
               <Phone>
                <img src={sectionTwo} alt="Get a plan" />
               </Phone>
            </Column>
         </Content> 
      </Container> 
   )
}

export default SectionFour;