import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

import HeaderHome from '../components/Headers/HeaderHome';
import SectionSecurity from '../components/Home/SectionSecurity';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';
import Testimonials from '../components/Home/Testimonials';
import Privacy from '../components/Home/Privacy';
import HowItWorks from '../components/Home/HowItWorks';
import Svens from '../components/Home/Svens';

const index = () => {
   return (
      <Layout>
         <Helmet>
               <meta charSet="utf-8" />
               <title>22seven | Budgeting and Investing App</title>
               <link rel="canonical" href="http://mysite.com/example" />
               <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=2PHAosPEgH4M1GJs0dYKQzKz8ilTtAbL"> </script>
         </Helmet>

         <HeaderHome />
         <SectionSecurity />
         <SectionOne />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
         <Testimonials />
         <Privacy />
         <HowItWorks />
         <Svens />

      </Layout>
   )
}

export default index;
