import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

import linkArrow from '../../images/linkArrow.png';
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
  
`
const Content = styled.div`
   display: flex;
   flex-direction: center;
   justify-content: center;
   text-align: left;
   flex-wrap: wrap;
   padding: 0 20px;

   font-family: "CircularStd-Book", Helvetica, Arial, serif;
   color: #4e4b6b;

   ${bp.md`
      justify-content: space-around;
      max-width: 1100px;
      text-align: left;
   `}
`
const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: #f1f2f3;
   padding: 40px 30px;
   margin: 15px 15px;
   max-width: 490px;

   h3 {
      font-family: "CircularStd-Bold", Helvetica, Arial, serif;
      font-size: 30px;
      line-height: 35px;
   }

   p {
      font-size: 14.0px;
      line-height: 22px;
   }

   a {
      font-family: "CircularStd-Medium", Helvetica, Arial, serif;
      text-decoration: none;
      color: #69668e;
      font-size: 16px;
   }

   a:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }

`

const Arrow = styled.img`
    height: 9px;
    width: 5px;
    margin-left: 10px;
`;
const SecurityInformation = () => {
   return (
      <Container>
         <Content>
            <Card>
               <h3>How your account login details are kept safe.</h3>
               <p>The usernames, passwords and other authentication information you provide to us are passed, in encrypted format, directly through to Yodlee – our information aggregation partner. 22seven never stores them. Yodlee stores them in encrypted format and only the system that actually collects your information is able to decrypt them when required to do so. At no time can 22seven or Yodlee staff access your credentials. Yodlee’s security overview provides more information on their security.</p>
               <a href="https://www.yodlee.com/legal/yodlee-security" target="_blank" rel="noopener noreferrer">
                  More about our Yodlee Security
                  <Arrow src={linkArrow} alt="link" />
               </a><br/>
               <a href="https://conversations.22seven.com/hc/en-us/articles/360016980233" target="_blank" rel="noopener noreferrer">
               FNB client? Set up an FNB  “view-only” profile    
               <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>
            <Card>
               <h3>How your information is kept secure while travelling over the internet.</h3>
               <p>All information that is transferred over the Internet between your computer or device and our servers is encrypted using 256-bit encryption. We use an Extended Validation SSL certificate provided by Entrust - a globally trusted digital certificate authority. This ensures that, even if intercepted, your information remains protected. In addition, all information transferred between our servers and those of our service providers, like Yodlee, is encrypted. This ensures that at no time is your information visible in clear-text whilst in transit.</p>
               <a href="https://www.entrustdatacard.com/" target="_blank" rel="noopener noreferrer">
                  More about Entrust
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>
            <Card>
               <h3>How the physical servers that hold your information are secured.</h3>
               <p>All our servers are hosted in a secure Internet hosting facility operated by an industry-leading hosting-provider. Their facilities are certified against the internationally recognised ISO27001 security standard and validated under the Payment Card Industry Data Security Standard (PCI DSS).</p>
               <a href="https://www.pcisecuritystandards.org/pci_security/" target="_blank" rel="noopener noreferrer">
                  More about PCI DSS
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>
            <Card>
               <h3>Who has access to the servers and other technology that holds your information.</h3>
               <p>Access to our servers, databases and other infrastructure as well as internal systems is very tightly restricted. Only the 22seven team members who absolutely have to have access are able to do so. We regularly review each individual’s access rights and make necessary changes to ensure that we adhere to our ‘only the information you need’ policy.</p>
               <a href="https://conversations.22seven.com/hc/en-us/articles/200576508-Who-has-access-to-the-servers-and-other-technology-that-holds-your-information-" target="_blank" rel="noopener noreferrer">
                  Help centre conversation
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>

            <Card>
               <h3>How we know our security is up to standard.</h3>
               <p>We regularly have our security posture reviewed by industry-experts. These assessments look at the security of our technical infrastructure (servers, firewalls, networks etc.), our applications (including our website and internal systems) as well as our software development and deployment standards and practices. We immediately address any areas that pose a viable security risk.</p>
               <a href="https://blog.22seven.com/2018/03/security-privacy-and-your-peace-of-mind/" target="_blank" rel="noopener noreferrer">
                  Need more peace of mind?
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>

            <Card>
               <h3>How we’re insured.</h3>
               <p>22seven is covered by Beazley, the world's leading cyber insurer. If data or information that you’ve entrusted to us is lost, stolen or compromised because of something we or Yodlee did (or didn’t do), and money is stolen from you because of it, we’re insured and will refund you. If you have a claim, it needs to be validated, and we will help you with the investigation.</p>
               <a href="https://www.beazley.com/london_market/specialty_lines/professional_liability/technology_media_and_business_services/beazley_breach_response.html" target="_blank" rel="noopener noreferrer">
                  More about Beazley
                  <Arrow src={linkArrow} alt="link" />
               </a>
            </Card>
         </Content>
      </Container>
   )
}

export default SecurityInformation;