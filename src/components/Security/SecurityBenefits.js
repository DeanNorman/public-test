import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import bank from '../../images/security/bank.svg'
import entrust from '../../images/security/entrust.svg'
import noTouch from '../../images/security/noTouch.svg'
import umbrella from '../../images/security/umbrella.svg'


const Container = styled.div`
   font-family: 'CircularStd';
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
  max-width: 200px;
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
   box-shadow: 0px 0px 230px 3px rgba(112,112,112,0.5);
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

const SecurityBenefits = () => {
   return (
      <Container>
         <Content>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={bank} alt="eye"/>
               </Aligner>
            </Circle>            
               <p><strong>We use the same security measures as your bank does.</strong></p>
               <p>22seven adheres to the same procedures and standards used by banks, the military and governments around the world. Our security is also regularly, independently reviewed and audited by industry experts.</p>
         </Benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={entrust} alt="eye"/>
               </Aligner>
            </Circle>            
               <p><strong>Your information is always encrypted.</strong></p>
               <p>256-bit encryption, certified by Entrust, keeps your information indecipherable and private, always.</p>
         </Benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={umbrella} alt="eye"/>
               </Aligner>
            </Circle>      
            <p><strong>You can feel reassured because we’re insured.</strong></p>
               <p>22seven is insured by Beazley. So if your information is compromised because of our negligence – which we never expect to happen – we’re covered and will refund you.</p>
              
         </Benefit>
         <Benefit>
            <Circle>
               <Aligner>
                  <img src={noTouch} alt="eye"/>
               </Aligner>
                 
           
            </Circle>          
            <p><strong>22seven is READ ONLY. No one can touch your money.</strong></p>
               <p>When you link accounts to 22seven, you give us “read-only” access. That means we can only fetch your information to show it to you. No one can move money from your linked accounts - not even you.</p>     
             
         </Benefit>

         </Content>
      </Container>
   )
}

export default SecurityBenefits;