import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout'

import HeaderLegal from '../../components/Headers/HeaderLegal'
import InvestTermsContent from '../../components/legal/InvestTermsContent'

const TermsAndConditions = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderLegal
            title="Our investing terms and conditions."
            text="Hello! It’s nice to see a visitor on this page. (Most people just tick the box.)
            So welcome. Make yourself at home. And let us know if you need anything."
         />
         <InvestTermsContent />
      </Layout>
   )
}

export default TermsAndConditions;