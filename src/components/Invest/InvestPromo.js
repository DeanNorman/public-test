import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
font-family: "CircularStd-Book", Helvetica, Arial, serif;
font-size: 12.0px;
color: #fff;
justify-content: flex-end;
margin-right: 8vw;

`;

const Content = styled.div`
   /* max-width: 300px; */
   padding: 20px;
   background-color: #6b678f;
   border-radius: 5px;
   /* height: 120px; */

   p{
      line-height: 15px;
      margin: 0;
      font-size: 12px;
   
   }

`

const Title = styled.p`
   padding-bottom: 10px;
   color: #fff !important;
`

const Copy = styled.p`
      color: #fff !important;
`

const InvestPromo = () => {
   return (
      <Container>
         <Content>
            <Title> 👋   <strong>Pssssssst!</strong></Title>
            <Copy>For a limited time, you can put a minimum of R250<br />into your goals (instead of the usual R350). Once off or<br /> monthly. Or both!</Copy>         
         </Content>
      </Container> 
   )
}

export default InvestPromo;