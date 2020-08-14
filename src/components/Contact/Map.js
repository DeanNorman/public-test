import React from 'react';
import styled from 'styled-components';


import { breakpoints as bp } from '../../styling/index';
import linkArrow from '../../images/linkArrow.png';


const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   ${bp.sm`
          align-items: center;   
   `}

`
const Content = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: flex-start;
   background: #f1f2f3;

   ${bp.md`
   margin-top: 30px;
        flex-direction: row;
        min-width: 700px;
   `}
`

const MapText = styled.div`
   display: flex;
   flex-direction: column;
   padding: 30px;
   height: 211px;
   ${bp.lg`
      width: 50%;
   `}

   h3 {
      font-family: "CircularStd-Bold", Helvetica, Arial, serif;
      font-size: 22.05px;
      color: rgba(78, 75, 107, 1.0);
      text-align: left;
      line-height: 25.72px;
   }

   p {
      font-family: "CircularStd-Book", Helvetica, Arial, serif;
    font-size: 14.0px;
    color: rgba(105, 102, 142, 1.0);
    text-align: left;
    line-height: 22.0px;
}
   
`

const MapEmbed = styled.div`
   width: 100%;
   height: 320px;


   ${bp.lg`
      width: 50%;
   `}

   iframe {
      margin: 0;
   }
`

const GetDirections = styled.a`
   display: flex;
   align-items: center;
   font-size:15px;
   text-decoration: none;
   margin-bottom: 15px;


   font-family: "CircularStd-Medium", Helvetica, Arial, serif;
    font-size: 11.9px;
    color: rgba(78, 75, 107, 1.0);
    text-align: left;
    line-height: 15.0px;

   ${bp.sm`
      margin-bottom: 0px;
   `}

   &:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }
`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;




const Map = () => {
   return (
      <Container>
         <Content>
            <MapText>
               <h3>HQ. Cape Town.</h3>
               <p>
                  Come meet us in person.<br/>
                  Find us at 60 Hout Street in Cape Town.
               </p>
               <GetDirections 
                  href="https://www.google.com/maps/place/60+Hout+St,+Cape+Town+City+Centre,+Cape+Town,+8000/@-33.921382,18.42018,19z/data=!4m5!3m4!1s0x1dcc67669e2e43e9:0x3509d20df38736d5!8m2!3d-33.9213453!4d18.419971?hl=en" 
                  target="_blank">
                     Get Directions
                  <Arrow src={linkArrow} alt="link" />
               </GetDirections>
            </MapText>
            <MapEmbed>
            <iframe 
               title="22seven Location"
               frameBorder="0" 
               width="100%"
               height="100%"
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d827.6918846276827!2d18.42018!3d-33.921382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67669e2e43e9%3A0x3509d20df38736d5!2s60+Hout+St%2C+Cape+Town+City+Centre%2C+Cape+Town%2C+8000!5e0!3m2!1sen!2sza!4v1547897126239" >
            </iframe>
            </MapEmbed>

         </Content>
      </Container>
   )
}

export default Map;