import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import HeaderContact from '../components/Headers/HeaderContact'
import SvensContact from '../components/Contact/SvensContact'
import ContactDetails from '../components/Contact/ContactDetails'
import Map from '../components/Contact/Map'

const contact = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderContact />
         <ContactDetails />
         <Map />
         <SvensContact />
      </Layout>
   )
}

export default contact;