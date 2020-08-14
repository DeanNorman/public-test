import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout'

import HeaderLegal from '../../components/Headers/HeaderLegal'
import FaisDisclosuresContent from '../../components/legal/FaisDisclosuresContent'

const FaisDisclosures = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderLegal
            title="Here are our FAIS disclosures."
            text="This is legal stuff and has to be worded in legalese, but we’d be happier if you read it anyway. Luckily, it's short."
         />
         <FaisDisclosuresContent />
      </Layout>
   )
}

export default FaisDisclosures;