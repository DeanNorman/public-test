import React from 'react'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

import HeaderJobs from '../components/Headers/HeaderJobs'
import JobDevOps from '../components/JobsRole/JobDevOps'

const devops = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderJobs />
         <JobDevOps />
      </Layout>
   )
}

export default devops;