import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import HeaderPartners from '../components/Headers/HeaderPartners'
import PartnersCards from '../components/Partners/PatnersCards'

const partners = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderPartners
            title="Partners."
            text="While we aim to use insights and smart technology to help people do better with their money, we also believe that finding the right collaborations can further this goal."
         />
         <PartnersCards />
      </Layout>
   )
}

export default partners;