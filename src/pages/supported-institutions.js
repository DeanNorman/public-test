import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import { breakpoints as bp } from '../styling/index'
import closeImg from '../images/close.png'

import { Link } from 'gatsby';

const Background = styled.div`
      width: 100%;
    min-width: 320px;
    height: calc(0.00% + 838px);
    min-height: 2309px;
    position: relative;
    /* overflow: hidden; */
    margin: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(106, 102, 143, 1.0);

   ${bp.md`
       min-height: 1400px;
   `}


`
const Container = styled.div`
   display: flex;
   background-color: #6a668f;
   flex-direction: column;
   align-items: center;
   height:100%;

`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 30px;
   height: 100%; 
   ${bp.md`
      flex-direction: row;

   `}
`
const Title = styled.h1`
   font-family: "CircularStd-Bold", Helvetica, Arial, serif;
   font-size: 30.0px;
   color: #4e4b6b;
   text-align: center;
   line-height: 40.0px;
   padding: 70px 40px 0px 40px;
   max-width: 300px;
   align-self: center;

   ${bp.md`
      align-self: auto;
      padding: 70px 40px 10px 9px;
      width: 100%;
      max-width: 90%;
   `}
`

const Column = styled.div`
    display: flex;
    align-self: center;
    font-family: "CircularStd-Book", Helvetica, Arial, serif;
    font-size: 14.0px;
    color:#ffffff;
    width: 100%;
    line-height: 21.0px;


    ${bp.md`
      align-self: auto;
      max-width: auto;
      padding: 0 20px;
   `}
`

const Close = styled.div`

    position: absolute;
    right: 0px;
   img {
      background-color: rgba(255,255,255,0.0);
    top: 40px;
    height: 23px;
    width: 23px;
    position: relative;
    margin: 0;
    right: 40px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
   }
`
const SupportedInstitutions = () => {
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <Background>
         <Container>
               <Close>
               <Link to="/">
                  <img src={closeImg} alt="close" />
               </Link>
               </Close>
               <Title>
                  All financial institutions you can link accounts from  &nbsp;<span role="img" aria-label="hands up">🙌</span>
               </Title>
            <Content>
               <Column>
                10X Investments<br/>Absa Bank<br/>ABSA Wealth and Investment Management<br/>ABSA Capital<br/>ABSA Online Share Trading<br/>ABSA Retirement Funds<br/>Ackermans<br/>African Bank<br/>Alexander Forbes<br/>Allan Gray<br/>Audi Financial Services<br/>Ashburton Investments<br/>Avios<br/>British Airways<br/>BMW Financial Services<br/>Boutique Collective Investments<br/>Cadiz<br/>Capitec<br/>Clicks Clubcard<br/>Computershare<br/>Coronation<br/>Deutsche Asset and Wealth Management<br/>Diners Club<br/>Dis-Chem Rewards<br/>Discovery<br/>Easy Equities<br/>Edgars<br/>ETF SA<br/>ETF RA<br/>Exclus1ves<br/>FNB<br/>FNB Securities<br/>Fairbairn Capital<br/>Ford Credit<br/>Ford
            </Column>
            <Column>
                Game<br/>GT247.com<br/>Imara<br/>Investec Asset Management<br/>Investec Wealth &amp; Investment<br/>Investec Private Bank<br/>Ip Management Company<br/>Kulula.com<br/>Kulula Travelbank<br/>Liberty<br/>Link Market Services<br/>Luno<br/>Makro<br/>Marriott<br/>Metropolitan<br/>MFC<br/>Momentum<br/>Momentum Collective Investments<br/>Momentum FundsAtWork<br/>Momentum Retirement Administrators<br/>Mr Price Money<br/>Nedbank<br/>Nedbank Greenbacks<br/>Nedbank Private Wealth<br/>Nedbank Private Wealth Online Share Trading<br/>Nedgroup Investments<br/>Nedbank Online Share Trading<br/>NMG Benefits<br/>NMG Smart Fund<br/>Old Mutual<br/>Old Mutual Money Account<br/>PayPal<br/>Pick n Pay Smart Shopper<br/>PPS Investments<br/>Prudential
            </Column>
            <Column>
                PSG Asset Management<br/>PSG Online<br/>MyPSG<br/>RECM<br/>RMB<br/>RCS<br/>RSA Retail Savings Bonds<br/>SA Home Loans<br/>Sanlam<br/>Sanlam iTrade<br/>Sanlam Private Wealth<br/>Sasfin<br/>Satrix<br/>SatrixNOW<br/>Standard Bank<br/>Standard Bank Rewards<br/>Standard Bank Online Share Trading<br/>Standard Bank uCount Rewards<br/>Stanlib<br/>Sygnia Alchemy<br/>The Foschini Group (TFG)<br/>The Body Shop<br/>Truworths<br/>Volkswagen Financial Services<br/>Virgin Money<br/>Wellness Warehouse<br/>WesBank<br/>Woolworths<br/>Woolworths Financial Services
            </Column>
            </Content>
         </Container>
         </Background>
      </>
   )
}

export default SupportedInstitutions;