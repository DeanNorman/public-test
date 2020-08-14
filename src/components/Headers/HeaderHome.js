import React from 'react';
import styled, { css } from 'styled-components';
import playButton from '../../images/play-button.svg';
import phone from '../../images/public-header.png';
import appStore from '../../images/public-mobile-badgeappstore-1@2x.png';
import googlePlay from '../../images/public-mobile-badgegoogle-play-1@2x.png';

import background from '../../images/homepageCurves/public-header.png';

import { breakpoints as bp } from '../../styling/index';

const Container = styled.div`
   display: flex;
   justify-content: center;
   background-color: #4e4b6b;
   color: #fff;
   min-height: 600px;
   background: url(${background}) no-repeat;
   
   ${bp.lg`
      background-size: cover;
   `}
`

const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   text-align: center;
   
   p {
      font-family: 'CircularStd';
      font-weight: 300;
      line-height: 20px;
   }

   ${bp.sm`
      text-align: left;
   `}

   ${bp.lg`
      max-height: 425px;
      max-width: 100%;
   `}

   ${bp.xl`
      width: 100%;
    max-width: 80%;
   `}
`

const Column = styled.div`
   ${props => !props.phone ? ''
      : css`
         ${bp.md`
             display: flex;
         `}
          display: flex;
         
      `
   } 
`

const Title = styled.h1`
   font-size: 30px;
   font-family: 'CircularStd';
   ${bp.sm`
      font-size: 50px;
   `}
`

const Description = styled.p`
   font-size: 13px;
   ${bp.sm`
      font-size: 16px;
   `}
`

const Phone = styled.img`
   height: 339px;
   width: 193px;

   ${bp.md`
      height: 527px;
      width: 299px;
      margin-bottom: -210px;
       
   `}
`

const AppLink = styled.img`
    height: 42px;
    width: 139px;
    margin: 10px 0;
   &:hover {
   box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
   }
`

const AppLinksContainer = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
   width: 100%;
   align-self: center;
   justify-content: space-between;

   ${bp.md`
      flex-direction: row;
   `}
`

const SignUpBtn = styled.a`
   display: none;
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;
   margin-bottom: 10px;

   &:hover {
      transform: translate(0, -5px);
      transition: all 0.2s ease-in-out;
   }

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.md`
      display: inline-flex;
      width: 176px;
      margin-bottom: 20px;
   `}
`

const MobileSignUpBtn = styled.a`
   display: inline-flex;
   background-color: #13c6b9;
   height: 45px;
   width: 100%;
   border-radius: 4px;
   justify-content: center;
   align-content: center;
   text-decoration: none;

   p {
      font-family: 'CircularStd';
      font-weight: 300;
      font-size: 17px;
      margin: 0;
      color: #fff;
      align-self:center;
   }

   ${bp.md`
      display: none;
   `}
`
const WatchVideo = styled.a`
   text-decoration: none;
   display: inline-flex;
   color: #fff;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
   
   width: 180px;
   justify-content: space-evenly;
   p { 
      margin: 0;
   }

   ${bp.sm`
     margin-top: 20px;
      margin-left:10px;
   `}

${bp.md`

      margin-left:20px;
   `}

&:hover {
      transform: translate(0, -5px);
      transition: all 0.2s ease-in-out;
   }
`

const MobileColumn = styled.div`
   display: flex;
   flex-direction: column;
   width: 75%;
   max-width: 320px;

   ${bp.sm`
      max-width: 330px;
   `}
   ${bp.md`
      display: none;
   `}
`


const LargeAppLinks = styled.div`
   display: none;
   ${bp.lg`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;

   `
   }
`

const MediumAppLinks = styled.div`
   display: none;
   ${bp.md`
      display: flex;
      a {
       margin-right: 10px;
      }
   `
   }
      ${bp.lg`
      display: none;
   `
   }
`

const HeaderHome = () => {
   return (
      <Container>
         <Content>
             <Column>
               <Title>Boss your money.</Title>
               <Description>Manage your money more easily and invest<br/>
                  in your goals with the free 22seven app.</Description>
               
               <SignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </SignUpBtn>

               <WatchVideo href="https://www.youtube.com/watch?v=Rk6PbEDa0OM" target="_blank">
                  <img src={playButton} alt="play" />
                  <p>Watch the video</p>
               </WatchVideo>

               <MediumAppLinks>
                  <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                     <AppLink src={googlePlay} alt="Googleplay"/>
                  </a>
                  <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                     <AppLink src={appStore} alt="appstore"/>
                  </a>
               </MediumAppLinks>

            
            </Column> 
            
            <Column right phone>
               <Phone src={phone} alt="iphone" />
               <LargeAppLinks>
               <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                     <AppLink src={googlePlay} alt="Googleplay"/>
                  </a>
                  <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                     <AppLink src={appStore} alt="appstore"/>
                  </a>
               </LargeAppLinks>
            </Column>

            <MobileColumn>
               <MobileSignUpBtn href="https://www.22seven.com/app/signup" target="_blank">
                  <p>Sign up. It&apos;s free.</p>
               </MobileSignUpBtn>
               <AppLinksContainer>
                  <a href="https://play.google.com/store/apps/details?id=com.twentytwoseven.android" target="_blank>">
                     <AppLink src={googlePlay} alt="Googleplay"/>
                  </a>
                  <a href="https://apps.apple.com/us/app/apple-store/id611120440" target="_blank>">
                     <AppLink src={appStore} alt="appstore"/>
                  </a>
               </AppLinksContainer>
            </MobileColumn> 

         </Content>
      </Container> 
   )
}

export default HeaderHome;
