import React from 'react';
import styled, { css } from 'styled-components';

import noFee from '../../images/invest/noFee.svg';
import world from '../../images/invest/world.svg';
import clock from '../../images/invest/clock.svg';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   font-family: 'CircularStd';
   color: #4e4b6b;
   text-align: center;
   z-index: 1;


`
const Content = styled.div`
   display:flex;
   flex-direction: ${props => props.benefit ? 'row' : 'column'};
   justify-content: center;
   padding: 20px 0;
   flex-wrap:wrap;
   transition: all 0.2s ease-in-out;
   p {
      font-weight: 300;
      margin-bottom: 10px;
      font-size: 15px;
    }

`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 200px;
  margin: 10px 30px;
  align-items: center;

  p { 
   font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   }
`

const Circle = styled.div`
   display: flex;
   justify-content: center;
   background-color: #fff;
   width: 80px;
   height: 80px;
   border-radius: 1000px; 
   margin: 0.5em;
   box-shadow: 0px 0px 230px 3px rgba(112,112,112,0.5);
   margin-bottom: 20px;
`

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;


      ${props => !props.clock ? ''
         : css`
          img {

          
            margin-top: -4px;
            margin-left: -2px;
         }
         `
      }
`
const InvestBenefits = () => {
   return (
   <Container>
      <Content benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={noFee} alt="eye"/>
               </Aligner>
            </Circle>   
            <p><strong>No brokers. No extra fees.</strong></p>       
            <p>We offer low cost index tracker unit trust funds. And don’t charge an advice fee. So you’re able to make the most of your money’s growth.</p>
         </Benefit>

         <Benefit>
         <Circle>
               <Aligner clock>
                  <img src={clock} alt="eye"/>
               </Aligner>
            </Circle>  
               <p><strong>Paperless. And done in minutes.</strong></p>
               <p>No complicated forms. No queues. No calls. And no fuss. You’ll be done in minutes. And when you need to make changes in future that’s all on the app too.</p>
         </Benefit>

         <Benefit>
         <Circle>
               <Aligner>
                  <img src={world} alt="eye"/>
               </Aligner>
            </Circle>  
               <p><strong>Local or international.</strong></p>
               <p>Our funds represent the top listed companies around the world.</p>
         </Benefit> 

      </Content> 
   </Container> 
   )
}

export default InvestBenefits;