import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

import HeaderAbout from '../components/Headers/HeaderAbout';
import OurStory from '../components/About/OurStory';
import LearnMore from '../components/About/LearnMore';
import Questions from '../components/About/Questions';

const about = () => {
   return (
      <Layout>

         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>

         <HeaderAbout />
         <OurStory />
         <LearnMore /> 
         <Questions />
      </Layout>
   )
}

export default about;