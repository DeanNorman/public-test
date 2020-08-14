import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
   const {
      site: {
         siteMetadata
      }
      } = useStaticQuery(graphql`
      {
         site {
            siteMetadata {
               description
               data
               title
               description
            }
         }
      }
   `)
      console.log(siteMetadata);
   return (
      <div>
        <h1>Title:{siteMetadata.title}</h1>
         <h2>description: {siteMetadata.description}</h2>
      </div>
   )
}

export default Header;
