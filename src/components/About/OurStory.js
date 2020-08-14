import React from 'react';
import styled from 'styled-components'

import { breakpoints as bp } from '../../styling/index'

import story from '../../images/about/story.svg';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   img {
      align-self: center;
   }

`

const Content = styled.div`
   display: flex;
   flex-direction: center;
   justify-content: center;
   text-align: center;
   flex-wrap: wrap;
   padding: 0 20px;

   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   color: #4e4b6b;

   p {
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      color: #69668e;
   }




   ${bp.sm`
      flex-direction: row;
      
      div {
         flex-direction: row;
         
         padding: 0 20px;
         text-align: left;
         justify-content: space-evenly;
      }      
   `}

`

const Title = styled.h2`
   font-size: 30.0px;
   line-height: 35.0px;
   color: #4e4b6b;
   margin-bottom: 50px;

    ${bp.sm`
      font-size: 30.531px;
      line-height: 54.045px;
    `}
`

const Column = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 291px;

   ${bp.sm`
      max-width: 343px;
   `}
`


const OurStory = () => {
   return (
      <Container>
         <Title>Our story.</Title>
         <Content>
            <Column>
               <p>The old problem is our relationship with money. We all have regrets about things we did, or didn’t do, or don’t think we’ll be able to do, with money. Money feels limiting when it could be liberating.<br /><br />

               The new solution lies in what we know and have now that we didn’t know or have a few years ago. Thanks to new insights in psychology, we know more about how people think and behave with money, and why. Thanks to new technology, we have tools to do things in radically different ways.</p>
            </Column>
            <Column>
               <p>Using these new insights and smart technology, 22seven can help people do better with their money. To see new things about it, feel more confident about it, find more of it, use it wiser and grow it smarter.<br /><br />

               This was the conviction we launched with as an independent startup in January 2012. It was an ideal Old Mutual shared when they purchased 22seven a year later. Now we’re older, wiser, and more convinced of it than ever.</p>
            </Column>
         </Content>  
         <img src={story} alt="22seven story" />
      </Container> 
   )
}

export default OurStory;
