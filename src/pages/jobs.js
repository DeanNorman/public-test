import React from 'react'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

import HeaderJobs from '../components/Headers/HeaderJobs'
import OurCulture from '../components/jobs/OurCulture'
import GeneralContent from '../components/jobs/GeneralContent'
import ApplyJobs from '../components/jobs/ApplyJobs'
import NoJobs from '../components/jobs/NoJobs'

const jobs = () => {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>22seven | Budgeting and Investing App</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <HeaderJobs />
         <GeneralContent
            title="Our culture."
            text="We come to do beautiful, epic, awe-inspiring work. More than that, we want our work to contribute something positive to the world."
         />
         <OurCulture />
     
         <NoJobs />
             <br/><br/>
         <GeneralContent
            title="The Office."
            text="Our HQ is in one of the oldest theatres in South Africa, right in the middle of the Cape Town City Bowl. Imagine if you smashed a temple of amazingness into a really comfortable lounge with great art on the walls. That still wouldn’t be as awesome as our offices. Needless to say, anyone who wants to work with us should be in Cape Town, or plan to be."
            officeImage
         />
         <ApplyJobs />
      </Layout>
   )
}

export default jobs;