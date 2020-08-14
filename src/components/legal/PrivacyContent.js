import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from "gatsby"
import { breakpoints as bp } from '../../styling/index'

import linkArrow from '../../images/legal/arrow.png'

const baseFontStyles = css`
   font-family: 'CircularStd';
   color: #69668e;
`
const baseLinkStyles = css`
   text-decoration: underline;
   color: #69668e;
   font-size: 13px;

   &:hover {
      transform: translate(5px, 0);
      transition: all 0.2s ease-in-out;
   }
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
`

const Content = styled.div`
   ${baseFontStyles}
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
   background: #f1f2f3;
   padding: 30px;
   margin-top: 15px;
   width: 90%;
   p {
      font-size: 14.0px;
      line-height: 22.0px;
      font-weight: 300;
   }

   li {
      margin: 0;
      font-weight: 400;

      p{
         margin-bottom:10px;
      }
   }

   ${bp.md`
      width: 70%;
      padding: 50px;
      max-width: 900px;
   `}
`

const TitleContent = styled.div`
      font-family: 'CircularStd';
`

const Title = styled.h2`
      font-family: 'CircularStd';
      color: #4e4b6b;
      text-align: center;
      margin-bottom:10px;
`
const SubTitle = styled.p`
   font-size: 14.0px;
    color: rgba(105, 102, 142, 1.0);
    text-align: center;
    line-height: 20.74px;
    font-weight: 300;
`

const ContentTitle = styled.p`
   font-family: "CircularStd-Bold", Helvetica, Arial, serif;
   font-weight: 600 !important;
   margin-bottom: 10px;
   font-size: 15px !important;
`

const Arrow = styled.img`
       height: 7px;
    width: 4px;
    margin-left: 5px;
`
const InternalLink = styled(Link)`
   ${baseLinkStyles}
`
const ExternalLink = styled.a`
   ${baseLinkStyles}
`

const PrivacyContent = () => {
   return (
      <Container>
         <TitleContent>
            <Title>Privacy Policy</Title>
            <SubTitle>Version 2.3, 9 February 2018</SubTitle>
         </TitleContent>
         <Content>
         <p>
            22seven is committed to the privacy of your Personal Information. Your information is yours – always. We will always collect the minimum amount of Personal Information necessary to provide the Service to you. Our staff and Authorised Service Providers are bound by confidentiality and privacy obligations that align directly with this Privacy Policy. They are given access only to the information they require to fulfil their responsibilities.
         </p>
         <p>
            This Privacy Policy describes and explains what Personal Information we collect, how we use it and how we protect it. “Personal Information” means any information that is recognised as such under South African Law and includes any information which identifies you (our customer) or which, when linked to other information, can personally identify you.
         </p>

         <ContentTitle>
            What Personal Information does 22seven collect and how is it used?
         </ContentTitle>
         <p>You understand and accept that we may monitor and log user activity, and any material contributed by users, for security purposes in order to identify any actual or potential misuse of our Service Channels.</p>
         <p>We only collect Personal Information that is reasonably necessary for us to provide the Service to you.</p>
         <p>
            <ul>
               <li>Registration Information
                  <p>Name, email address and password you provide when you register to use the Service so that we know who you are, can authenticate your use of the Service and are able to contact you about Service related matters.</p>
               </li>
               <li>Security Credentials
                  <p>Your User ID, PIN, Password and any other required authentication information to automatically collect your Account Information from the secure websites and systems of your nominated Product/Service Providers on your behalf. From the time you submit this information to us it is always transferred and stored in encrypted form. It is stored only by Yodlee (our Authorised Aggregation Service Provider) and is only ever used to collect your account information from your nominated Product/Service Providers on your behalf to be used in the Service. Your Security Credentials are never disclosed to any other third party and at no time can employees of 22seven or Yodlee access them.</p>
               </li>
               <li>Account Information
                  <p>Balances, transactions, debit orders, credit score, tax calculations, cover values, beneficiary details, trading margin, trading positions, asset & fund allocations and other account-specific details that Yodlee’s automated aggregation service collects from your Product/Service Providers on your behalf or that you provide directly to the 22seven Service via the Website or Mobile Applications. You will have full access to this information via the Service. You will also have access to the information and insights our automated algorithms derive from your Account Information. We only store the last four-digits of account and credit card numbers when received as Account Information.</p>
               </li>
               <li>Billing Information
                  <p>Bank account, credit card or other payment details you provide or may have provided. This information is handled separately from your Account Information and is disclosed to our authorised billing service providers during the collection process and is only used for this purpose.</p>
               </li>
               <li>Correspondence Information
                  <p>Information we collect when we receive correspondence from you via email, social media, mobile text messages and phone calls. This includes your sender information, the content of the message and the metadata pertaining to the message. We use this information to communicate with you and to improve the Service.</p>
               </li>
               <li>Public Forum/Message Board Information
                  <p>Your name (as provided at registration) as well as the messages you post on our public forum/message board. This information is visible to all users and will remain as such even if you terminate your use of the Service.</p>
               </li>
               <li>Website and Mobile Application connection information
                  <p>Your IP address, type, version and language of Internet browser, operating system and version, type of device, screen resolution, referring and exit web pages. We use your IP address to understand the geographic makeup of our customer base and to assist with the identification of potential unauthorised access. We use the rest of this information to optimise the usability of the Service on your access device. We may also compile aggregate information to analyse usage patterns and make improvements to our Service.</p>
               </li>
               <li>Additional Verification Information
                  <p>Copies of your identity documents or utility bills in order for us to verify your identity should you be unable to unlock your account through our standard online verification process.</p>
               </li>
               <li>Transaction and Financial Position Reporting
                  <p>Upon your request, we may generate standardised financial reports or transaction reports for you to use and share as you choose. You may also change or revoke access to these reports at your sole discretion.</p>
               </li>
               <li>Financial Product Uptake and Pricing
                  <p>We may require you to provide your cell phone number, date of birth, gender, smoker status, income level, level of education, occupation, occupation activities, residential address, housing details, vehicle details, driver’s license details and other similar details to enable you to take up and/or obtain personalised pricing of financial products.</p>
               </li>
               <li>Optional Personal Information
                  <p>You may also opt to provide us with information such as your age, employment status, marital status, number of children, residential province & city, geolocation, credit score, financial objectives, savings goals, personal interests and other similar details that we may use to customise the Service for you and provide you with more accurate, personal and contextually relevant insights.</p>
               </li>
            </ul>
         </p>
         <ContentTitle>
            Does 22seven ever disclose my Personal Information to third parties?
         </ContentTitle>
         <p>
            We disclose your Personal Information only to our Authorised Service Providers with whom we contract to assist us in providing the Service to you. We make use of Authorised Service Providers to automatically aggregate your Account Information, host and run our servers, send emails, manage support requests and enrich information. They process your Personal Information strictly in accordance with our instructions and for the purpose for which such Personal Information has been disclosed to them. They will always be under obligation to protect your Personal Information on terms that provide the same or equivalent protection as set out in this Privacy Policy.
         </p>
         <p>
            In addition, we may disclose your Personal Information to law enforcement, other government officials, or other third parties as may be necessary in connection with an investigation of fraud, intellectual property infringements, cyber crime, or other activity that is illegal or may expose us or our Authorised Service Providers to legal liability.
         </p>

         <ContentTitle>
            Does 22seven use my information for any purpose other than providing the Service to me?
         </ContentTitle>
         <p>
            We may aggregate and analyse your ‘de-identified’ information (i.e. stripped of all uniquely identifiable attributes and that cannot subsequently be re-identified) with that of other customers and information received from other sources. We will do this to develop market insights, troubleshoot problems, detect and protect against error, fraud and other criminal activity, identify behaviour/usage patterns and improve our Service generally. We may publish or share the insights we develop through this process.
         </p>

         <ContentTitle>Will 22seven ever sell my Personal Information?</ContentTitle>
         <p>No. We collect and use your Personal Information only to provide the Service to you and as set out in this Policy. Your Personal Information remains exactly that – yours.</p>

         <ContentTitle>How does 22seven protect my information?</ContentTitle>
         <p style={{marginBottom : "10px"}}>We use a combination of technical, procedural and operational measures to keep your information safe and secure.</p>
         <InternalLink to="/security/">
               Please read more about our security
               <Arrow src={linkArrow} alt="link" />
         </InternalLink><br/>

         <ContentTitle>Does 22seven use Cookies on its website?</ContentTitle>
         <p>Unless you have disabled Cookies in your Internet browser, we will store Cookies on your computer/device when you visit our website. These Cookies (small text files containing a string of characters) enable us to recognise you as a returning visitor, track your usage behaviour, as well as store your user preferences and other information. We do this to remember information so that you will not have to re-enter it during your visit or the next time you visit the Website. Cookies also allow us to provide custom, personalised content and information, monitor the effectiveness of our marketing campaigns, monitor aggregate metrics such as total number of visitors and pages viewed.</p>

         <ContentTitle>What Personal Information can 22seven staff see?</ContentTitle>
         <p style={{marginBottom : "10px"}}>22seven staff are bound by comprehensive confidentiality obligations. Our staff are given access only to information they are required to see in order for them to fulfil their responsibilities. In all cases we provide access to the minimum amount of information. Given their role, our customer support team has access to the most amount of Personal Information – to enable them to answer your support questions. In addition to Service usage information, our internal systems provide them with secure access to:</p>
         <p>
            <ul>
               <li>Your name and email address</li>
               <li>The names of your Product/Service Providers and account types</li>
               <li>Your account names as well as the last four digits of your account and card numbers</li>
               <li>Transaction dates and descriptions – no transaction or balance amounts  </li>
            </ul>
         </p>

         <ContentTitle>Can I correct my Personal Information?</ContentTitle>
         <p style={{marginBottom : "10px"}}>Yes. You are able to correct inaccurate Personal Information via the Service once you have successfully logged in. Alternatively, you may request us to correct inaccurate information via email at thesvens@22seven.com. We will require that you verify you are in fact the owner of such Personal Information. Once the changes are made we will notify you by email at your nominated email address. If there is any Personal Information not accessible via the Service that you wish to have access to for purposes of correcting.</p>
         <ExternalLink href="mailto:thesvens@22seven.com" target="_blank">
               Contact thesvens@22seven.com
               <Arrow src={linkArrow} alt="link" />
         </ExternalLink><br/>

         <ContentTitle>Is my Personal Information deleted when I close my account?</ContentTitle>
         <p>Yes. When you close your account we delete your Personal Information (including your Security Credentials for your Product/Service Provider websites and your account information). There may be some information that we are required by South African law to retain.</p>

         <ContentTitle>How long does 22seven keep my Personal Information?</ContentTitle>
         <p>We will keep your information for as long as you are an active customer of the Service. We delete your information when you terminate your use of the Service but will retain some Personal Information for so long as we are obliged to do so under South African law. Such information will always be maintained under the same security and privacy controls that are in place for other customers of the Service.</p>

         <ContentTitle>What happens if I wish to opt out of any disclosure of my Personal Information?</ContentTitle>
         <p>You may opt out of disclosure of your Personal Information. Should you choose to do this and should the opt out be in respect of Personal Information necessary to provide the Service, we may not be able to extend certain features to you and in such circumstances, we will notify you of this. Should you still wish to opt out after such notification you will be entitled to do so or terminate your use of the Service, which will result in the deletion of your Personal Information.</p>

         <ContentTitle>Can 22seven change its Privacy Policy and what happens if it does?</ContentTitle>
         <p>Yes. We may change our Privacy Policy at any time. We will notify you of any lessening of your rights or our obligations regarding your Personal Information before such changes are made. We will post the new policy on the Website or Mobile Applications and if you are not happy with the new Privacy Policy you may terminate your use of the Service. The most current version of the policy will govern our use of your information and will always be available at https://www.22seven.com/legal/privacy. By continuing to use the Service after changes to the Privacy Policy become effective, you agree to be bound by the revised Privacy Policy.</p>

         <ContentTitle>What happens if the ownership of 22seven changes hands?</ContentTitle>
         <p>If we become involved in any merger, consolidation, or sale of our assets and this involves the sharing in any way of your Personal Information, we will ensure the confidentiality of such information and let you know before your Personal Information is transferred and becomes subject to a different Privacy Policy. Should you not wish for your Personal Information to be so transferred, you may terminate your use of the Service by closing your account, which will result in the deletion of your Personal Information.</p>

         <ContentTitle>Can I have my name removed from the public forum/message board?</ContentTitle>
         <p style={{marginBottom : "10px"}}>Yes. If you wish to have your name removed from the messages you post to our public forum/message boards please contact us.</p>
         <ExternalLink href="mailto:thesvens@22seven.com" target="_blank">
               Contact thesvens@22seven.com
               <Arrow src={linkArrow} alt="link" />
         </ExternalLink><br/>

         <ContentTitle>Who should I contact if I have any comments, questions, concerns or complaints?</ContentTitle>
         <p style={{marginBottom : "10px"}}>If you have any questions, comments or concerns about our Privacy Policy, please contact us.</p>
         <ExternalLink href="mailto:thesvens@22seven.com" target="_blank">
               Contact thesvens@22seven.com
               <Arrow src={linkArrow} alt="link" />
         </ExternalLink>
         </Content>
      </Container> 
   )
}

export default PrivacyContent;
