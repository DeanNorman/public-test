import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import respect from '../../images/jobs/respect.svg'
import smile from '../../images/jobs/smile.svg'



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

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 290px;
  margin: 10px 30px;
  align-items: center;

  ${bp.md`
         text-align: left;
      `}

  p { 
      font-weight: 300;
      line-height: 20px;
      font-size: 14px;
      color: #69668e;
      text-align: center;

      ${bp.md`
        align-self: end;
         text-align: left;
      `}

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
   box-shadow: 0px 6px 29px -13px rgba(0,0,0,0.49);
   margin-bottom: 20px;
  

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

const OurCulture = () => {
   return (
      <Container>
         <Content>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={respect} alt="eye"/>
               </Aligner>
            </Circle>            
            <p><strong>Build awesome experiences.</strong></p>
               <p>We work tirelessly at exploring human behaviour to design and build awesome experiences. We do this to help people become more aware of their money decisions and start making better ones so they can do more of the things that matter most to them.</p>
               
         </Benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={smile} alt="eye"/>
               </Aligner>
            </Circle>            
               <p><strong>Have fun while doing it.</strong></p>
               <p>Creating something extraordinary doesn’t come easily, but we believe that the best ideas come from people who are having fun. So you’ll be challenged. You’ll laugh. Hopefully you won’t cry much. And you’ll have the opportunity to make a difference in people’s lives.</p>
         </Benefit>
         </Content>
      </Container>
   )
}

export default OurCulture;