import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import officeImg from '../../images/jobs/office.png'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
   padding: 0 23px;

   ${bp.sm`
      padding: 0px;
   `}
   ${props => !props.officeImage ? ''
      : css`
         ${bp.md`
            flex-direction: column;
            align-items: center;
         `}
         
      `
   } 


`
const Content = styled.div`
   font-family: 'CircularStd';
   color: #4e4b6b;
   display:flex;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   max-width: 457px;

   h2 {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 15px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
      font-size: 14px;
      line-height: 20px;
      max-width: 530px;
      color: #69668e;
   }
`

const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 30px;
   max-width: 850px;
`
const Office = styled.img`
   width: 100%;
   padding: 20px;
`

const GeneralContent = ({ title, text, officeImage }) => {
   return (
      <Container officeImage>
         <Content>
            <h2>{title}</h2>
            <p>{text}</p>

         </Content>
     
         { officeImage && 
             <ImageContainer>
               <Office src={officeImg} />
            </ImageContainer>
         }
         
      </Container>
   )
}

export default GeneralContent;