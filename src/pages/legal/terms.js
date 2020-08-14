import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout'

import HeaderLegal from '../../components/Headers/HeaderLegal'
import TermsContent from '../../components/legal/TermsContent'

const Terms = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderLegal
            title="These are our terms."
            text="When you use 22seven, this is what you agree to. We know it’s legal stuff, but please read it. We’d like you to understand it."
         />
         <TermsContent />
      </Layout>
   )
}

export default Terms;