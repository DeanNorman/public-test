import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';


import HeaderInvest from '../components/Headers/HeaderInvest';
import SectionOne from '../components/Invest/SectionOne';
import SectionTwo from '../components/Invest/SectionTwo';
import SectionThree from '../components/Invest/SectionThree';
import SectionFour from '../components/Invest/SectionFour';
import SectionFive from '../components/Invest/SectionFive';
import SectionSix from '../components/Invest/SectionSix';

import Twitter from '../components/Invest/Twitter';
import Funds from '../components/Invest/Funds';
import InvestBenefits from '../components/Invest/InvestBenefits';
import Tax from '../components/Invest/Tax';


export const invest = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderInvest />
         <SectionOne />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
         <SectionFive />
         <SectionSix />
         <Twitter />
         <Funds />
         <InvestBenefits />
         <Tax />
      </Layout>
   )
}

export default invest;