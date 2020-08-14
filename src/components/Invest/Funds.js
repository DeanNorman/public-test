import React from 'react';
import styled from 'styled-components';



import investOne from '../../images/invest/investOne.png';
import investTwo from '../../images/invest/investTwo.png';
import investThree from '../../images/invest/investThree.png';
import investFour from '../../images/invest/investFour.png';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   font-family: 'CircularStd';
   color: #4e4b6b;
   min-height: 300px;
   text-align: center;
   z-index: 0;
   margin-top: 40px;
   
   /* padding: 0 20px; */
   h1 {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
   }

   p {
      text-align: center;
      font-weight: 300;
      max-width: 230px;
      margin: 0 auto;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
      width: 350px;
      margin-bottom: 20px;
      
      ${bp.sm`
         width: 100%;
         max-width: 630px;
      `}

   ${bp.md`
        margin-bottom: 40px;
         width: 100%;
    max-width: 650px;
      `}
   }
   br {
      ${bp.md`
         display: none;
   `}
   }
   
`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   height: 100%; 
   text-align: center;
   line-height: 20.74px;
   /* max-width: 350px; */
   align-self: center;

   ${bp.md`
    flex-direction: row;
      
   `} 

   ${bp.lg`
      width: 100%;
      text-align: left;
      flex-direction: row;
     
   `}

   p {
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
   
   }
`



const Column = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      height: 100%;
      max-width: 100%;

   ${bp.md`
      flex-direction: row;
      max-width: 800px;
   `}

   ${bp.xl`
      flex-direction: row;
      max-width: 100%;
   `}

   a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
         &:hover {
            transform: translate(0, -5px);
            transition: all 0.2s ease-in-out;
         }

      ${bp.md`
         flex-direction: row;
         width: 40%;
      `}

      ${bp.lg`
         width: 195px;
      `}
   }
   
   img {
    
      
      /* width: 100%;
      

      ${bp.md`


         width: 50%;
      `}

      ${bp.lg`
         
             width: 50%;`}

      ${bp.xl`
         width: auto;
      `} */
   }



`

const Funds = () => {
   return (
      <Container>
         <h1>A fund for<br /> every goal.</h1>
         <p>With the launch of our Money Market fund, we offer the right tools for every goal. Whether you’re saving for something a few months away, or twenty years from now.</p>
         <Content>
            <Column >
               <a href="/">
                  <img src={investOne} alt="22seven testimonial" />
               </a>            
               <a href="/">
                  <img src={investTwo} alt="22seven testimonial" />
               </a>
               <a href="/">
                  <img src={investThree} alt="22seven testimonial" />
               </a>
               <a href="/">
                  <img src={investFour} alt="22seven testimonial" />
               </a>
            </Column>
         </Content>
      </Container> 
   )
}

export default Funds;