import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout'

import HeaderLegal from '../../components/Headers/HeaderLegal'
import PrivacyContent from '../../components/legal/PrivacyContent'

const Privacy = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderLegal
            title="We respect your privacy."
            text="Our Privacy Policy confirms that your information belongs to you: we won’t sell it to anyone, nor will we use it to spam you. Here is our Privacy Policy in full."
            icon
         />
         <PrivacyContent />
      </Layout>
   )
}

export default Privacy;