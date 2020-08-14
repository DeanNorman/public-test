import React from 'react';
import styled, { css } from 'styled-components'
import { breakpoints as bp } from '../../styling/index'

const baseFontStyles = css`
   font-family: 'CircularStd';
   color: #69668e;
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
`

const FaisDisclosuresContent = () => {
   return (
      <Container>
         <TitleContent>
            <Title>FAIS disclosures.</Title>
         </TitleContent>
         <Content>
         <p>
            22seven Digital (Pty) Ltd (company registration number 2010/011767/07) (“22seven”) is a juristic representative of Old Mutual Life Assurance Company (South Africa) Ltd (company registration number 1999/004643/06) (“Old Mutual”) which is a licensed Financial Services Provider (FSP number 703) in terms of the Financial Advisory and Intermediary Services Act 37 of 2002 (“FAIS”). A copy of the Old Mutual FSP license is available on request. 22seven is authorised to provide intermediary services on behalf of Old Mutual as it relates to the unit trust funds (as listed below) offered by Old Mutual Unit Trust Managers (RF) (Pty) Ltd (company registration number 1965/008471/06)(“Old Mutual Unit Trust”). 22seven is not authorised to provide advice as defined in FAIS. Old Mutual will only accept responsibility for intermediary services rendered by 22seven where provided in respect of the following Unit Trust funds:
         </p>
         <p>
            Old Mutual Top 40 Index Fund,<br/>
            Old Mutual Core Balanced Fund,<br/>
            Old Mutual FTSE RAFI® All World Index Feeder Fund,<br/>
            Old Mutual Money Market Fund.
         </p>
         <p>
            Old Mutual has a complaints resolution process and will reply to any written complaint. A copy of the complaints process is available upon request. Complaints may be addressed to thesvens@22seven.com If you are dissatisfied with the response, you may refer your complaint to the Old Mutual Compliance Officer, or if you are still dissatisfied with your response, to the Office of the Ombud for Financial Services Providers.
         </p>
         <p>Compliance with the FAIS Act (Old Mutual) is monitored by:</p>
         <p>
            The Executive Compliance Officer, Retail Affluent<br/>
            Old Mutual Life Assurance Company (South Africa) Limited<br/>
            P.O. Box 66, Cape Town, 8000. Telephone: +27 (0) 21 509 2127 (telephone)<br/>
            e-mail: compliance@22seven.com<br/>
            Contact details of the FAIS Ombud:<br/>
            PO Box 74571, Lynwood Ridge, 0040,<br/>
            phone: 012 348 3447<br/>
            email: info@faisombud.co.za<br/>
            website: www.faisombud.co.za<br/>
         </p>
         <p>Old Mutual holds professional indemnity and fidelity insurance.</p>
         <p>
            22seven, Old Mutual and Old Mutual Unit Trust will be required to obtain and share your personal information for the purpose of rendering intermediary services to you. Your personal information will be kept by 22seven, Old Mutual and Old Mutual Unit Trust on a confidential basis and will not be made available to third parties unless so authorised, in writing by you, or if 22seven, Old Mutual or Old Mutual Unit Trust is required to do so in the public interest or under any law.
         </p>
         </Content>
      </Container> 
   )
}

export default FaisDisclosuresContent;
