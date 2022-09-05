import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import CardGradient from '../../components/Generals/CardGradient'
import NeedHelp from '../../components/Generals/NeedHelp'
import sideimg from '../../assets/imgs/terms/ezgif 11.png'
import glow1 from '../../assets/imgs/terms/Path 5.png'
import glow2 from '../../assets/imgs/terms/Path 7.png'

function Terms() {
  return (
    <>
    <div className="terms">
      <section className='terms-head mb-20px'> 
          <CardGradient>
            <Row>
              <Col md={6}>
                <div className="terms-header">
                  <h3 className='app-h3'>Stellar <span className='app-color-primary'>AIO</span></h3>
                  <h1 className='app-h1 mb-3'>Legal Terms</h1>
                  <p>Welcome! Learn everything legally speaking, when using Stellar AIO</p>
                  <div className="legal-btns">
                    <Button className='legal-btn'>Privacy Policy</Button>
                    <Button className='legal-btn'>Terms of Use</Button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="terms-img d-flex justify-content-end">
                  <img src={sideimg} alt="" />
                  <img src={glow1} alt="" className="terms-glow1" />
                  <img src={glow2} alt="" className="terms-glow2" />
                </div>
              </Col>
            </Row>
          </CardGradient>
      </section>
      <section className="terms-privacy-policy mb-40px">
        <CardGradient>
          <h2 className="app-h2 mb-3">PRIVACY POLICY</h2>

          <p>This Privacy Notice: (i) describes how We collect, transfer and manage the personal information You voluntarily provide Us when You access or use Our Services; and (ii) identifies certain options You may have with respect to Your personal information and privacy. </p>

          <h3 className="app-h3">BY PROCEEDING TO ACCESS AND USE OUR SERVICES YOU AGREE TO THE TERMS OF THIS PRIVACY NOTICE AND THEREBY CONSENT TO THE WAY WE PROCESS YOUR PERSONAL INFORMATION AND NON-PERSONAL INFORMATION. ALL CAPITALIZED TERMS USED IN THIS PRIVACY NOTICE WILL HAVE THE MEANING SET FORTH IN ELSEWHERE IN THE AGREEMENT. </h3>

          <h3 className='app-h5'>1.	Privacy Notice Changes</h3>
          <p>
          We may modify this Privacy Notice from time to time to comply with Our legal requirements and to account for changes to Services. The Last Revised date on the top left of the Privacy Notice will identify the date that this Privacy Notice was last updated.  
          </p>

          <h3 className='app-h5'>2.	Legitimate Basis </h3>
          <p>
          You and Us have entered into a binding Agreement. In order to meet Our contractual obligations under the Agreement, We have a legitimate business interest to collect, process and share Your personal information as set forth herein.  We are unable to provide You Services without use of Your personal information. If You do not want Us to use Your personal information, please do not access or use Our Services. 
          </p>

          <h3 className='app-h5'>3.	PERSONAL INFORMATION </h3>
          <p>
          a. <span className="text-decoration-underline">Personal information.</span>  Personal information is information that identifies, relates to, describes, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household. The following are personal information categories We may collect from You: <br /> <br />
          
          i. <span className="text-decoration-underline">Profile Information.</span> Name, postal address, unique personal identifier, telephone number, online identifier, Internet Protocol address, email address, company name, or other similar information. <br />
          ii. <span className="text-decoration-underline">Protected Classification Information.</span> Sex, gender, medical condition (as it may relate to the provisioning of Services) or age.  <br />
          iii.	Transaction Information. Services purchased, obtained, or considered, other purchasing or consuming histories or tendencies. <br />
          iv. <span className="text-decoration-underline">Personal Network Information.</span> Browsing history, search history, information regarding Your interaction with Services, advertisements and/or promotions (please also  see Section 4(c) below). <br />
          v. <span className="text-decoration-underline">Financial Information.</span> Bank account number, credit card number, debit card number, other financial information. <br />
          vi. <span className="text-decoration-underline">Inferences from the foregoing categories.</span>	Additional demographic information reflecting Your preferences and characteristics.

          </p>

          <h3 className="app-h5">4.	Sources of Information</h3>
          <p>
          a. <span className="text-decoration-underline">When You Contact Us.</span>  We receive Your personal information when You contact Us, create an Account and/or when You acquire Services. <br />
          b. <span className="text-decoration-underline">Social Media Platforms.</span>	 If You access Our Services through Discord or another similar service (“Social Media Platform”). We may have access to the profile information associated with Your Social Media Platform account. We may also be able to access information contained in cookies placed on the device used to access and use the applicable Social Media Platform. “Cookies” are text-only pieces of information that a website transfers to an individual’s hard drive or other website-browsing equipment for record-keeping purposes. Cookies allow Services to remember important information that will make Your use of Services more convenient. <br />
          c. <span className="text-decoration-underline">Personal Network Information and Log Data.</span>	 We also collect Your public IP address when You access Services. We may use Your public IP address in order to determine whether certain requests are fraudulent or frivolous and We may automatically cross-reference Your public IP address with Your domain. When accessing Services from Your personal network Your IP address and any associated domain name will be treated as Your "Personal Network Information". "Log Data" does not include Personal Network Information. 

          </p>

          <h3 className="app-h5">5.	Use of Personal Information</h3>
          <p>
          We use personal information as follows: <br /> <br />

          a. To keep You informed about Services, provide You with Services and provide You with customer service and other support related to Services; <br />
          b. To create, develop, operate, deliver, and improve Services; <br /> 
          c. To protect Our Services, and other Users, as well as to enforce Our rights under the Agreement (specifically for anti-fraud purposes and to prevent illegal or unauthorized activity); <br />
          d. To verify that Your identify, Account, payment method, and other relevant information related to Your access and use of Services; <br />
          e.  For internal purposes such as auditing, data analysis, to meet our business obligations and research; and/or <br />
          f. To generate aggregated data which is created after removing personal information that identify You. We may combine that information with information We collect from other Users to improve the quality and value of Services and to analyze and understand how Services are used.

          </p>

          <h3 className="app-h5">6. How we share Your Personal information</h3>
          <p>
          a. <span className="text-decoration-underline">hird Party Service Providers.</span> T We share Your personal information with vendors to who assist Us with making Services available to You, conduct quality assurance testing; provide technical support; and/or to provide other Services to Us (“Third Party Service Providers”). Except as otherwise stated in this Privacy Notice, Third-Party Service Providers are required to use Your personal information other than to provide requested Services. <br />
         b. <span className="text-decoration-underline">Affiliates.</span>  We may share some or all of Your personal information with Our affiliates, in which case We will require Our affiliates to honor this Privacy Notice. <br />
        c. <span className="text-decoration-underline">Legal Compliance.</span> We cooperate with government and law enforcement officials and private parties to enforce and comply with the law. We may disclose Your personal information to government or law enforcement officials or private parties in response to lawful requests when We believe disclosure or sharing is necessary to comply with any legal obligation, enforce the Agreement, respond to claims and legal process, protect Our rights or a third party User, to protect the safety of the public or any person, or to prevent or stop any illegal, unethical or legally actionable activity. <br />
        d. <span className="text-decoration-underline">Corporate Restructuring.</span> We may share some or all of Your personal information in connection with or during negotiation of any merger, financing, acquisition or dissolution transaction, or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of Our business or assets. In the event of an insolvency, bankruptcy, or receivership, personal information may also be transferred as a business asset. <br />
        e. <span className="text-decoration-underline">Legitimate Business Purposes.</span>  We may also disclose Your personal information when it may be necessary for other legitimate purposes as reasonably determined by Us.

          </p>
          <h3 className="app-h5">7. Cookies, Tracking technologies and Behavioral advertising</h3>
          <p> 
            a. <span className="text-decoration-underline">Cookies and Tracking Technologies.</span>  We and Our partners, affiliates, analytics and/or Third Party Service Providers use cookies or other tracking technologies as pixel tags and web beacons. These are used in storing content information and preferences, analyze trends, administer and maintain Services, monitor User interaction with Services and to gather demographic information about Our User base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis. We use cookies to remember User settings for authentication. Users can control the use of cookies at the individual browser level. If You reject cookies, You may still access and use Services, but Your ability to use some features will be fundamentally diminished. These technologies help Us better understand User behavior, tell Us which parts of Services are visited, and facilitate and measure the effectiveness of advertisements and web searches. We treat information collected by cookies and other technologies as non personal information. <br />
            b. <span className="text-decoration-underline">Behavioral Advertising.</span> We may participate in third party behavioral advertising. This means that a third party may use technology to collect information about Your use of Our Services so that other parties can provide advertising about products and services tailored to Your interests. If You do not want third parties to collect and use Your information in this manner You may opt-out at the <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">Digital Advertising Alliance</a>  in the U.S.A.
          </p>

          <h3 className="app-h5">8. Additional Choices</h3>
          <p>
          You have the following choices with respect to your personal information: <br /><br />
          a. <span className="text-decoration-underline">Profile Management.</span> If You want to view, delete or modify Your personal information, you may do so by logging into Your Account.  If for some reason You are unable to manage Your Account on Your own please contact use sending an e-mail to <a href="https://mailto:support@stellara.io" target="_blank" rel="noreferrer">support@stellara.io</a> for assistance.  All requests must include:  (i) “INFORMATION REQUEST” in the e-mail subject line; (ii) Your full name; and (iii) what information of Yours you want to view, delete or modify.  We reserve the right to verify the identity of any person making a request and/or to delete or modify their Account.  If We delete any information, it will be deleted from the active database, but may remain in Our archives.  We will have no liability of any kind resulting from false or erroneous requests or for any modification or deletion made by Us for any reason.  We store personal information for only as long as reasonably necessary to fulfill the purposes described above, as we determine is necessary for business records, and as required under applicable law.

          </p>

          <h3 className="app-h5">9. International Users</h3>
          <p>
          We are based in New York City, United States of America (“U.S.A.”) and the information We collect is governed by New York State and applicable Federal Law.  If You are accessing Services from outside of the U.S.A., please be aware that information collected through Services will be transferred, processed, and used in the U.S.A.  The data protection laws in the U.S.A. may be different from those of the country in which you are located.  Your use of the Services or providing Us with any information therefore constitutes your consent to the transfer to, and processing, usage, sharing and storage of Your information, including personal information, in the U.S.A. as set forth in this Privacy Notice.
          </p>

          <h3 className="app-h5">10. California privacy rights</h3>
          <p>
          a. <span className="text-decoration-underline">California Shine the Light Act.</span>  Pursuant to Section 1798.83 of the California Civil Code, residents of California have the right to request from a business with whom the California resident has an established business relationship, certain information with respect to the types of personal information the business shares with third parties for direct marketing purposes by such third party and the identities of the third parties with whom the business has shared such information during the immediately preceding calendar year. <br /><br />
          To request a copy of the information disclosure provided by Us pursuant to Section 1798.83 of the California Civil Code, Your request must include contact Us at the e-mail or regular mail address specified in the Contacting Us section below with “California Privacy Request” in the first line. <br /><br />
          Please note that under this law, We are not required to respond to Your request more than once in a calendar year, nor are We required to respond to any request that is not sent to the designated e-mail or mailing address. <br /><br />
                b. <span className="text-decoration-underline">California Do Not Track Disclosure. </span>  Do Not Track is a privacy preference that some users may set in their web browsers. When a user turns on the Do Not Track signal, the browser sends a message to websites requesting them not to track the user. At this time, We do not recognize or respond to Do Not Track browser settings or signals and We will still receive information. As a result, We may still collect information about You and Your internet activity, even if You have turned on the Do Not Track signal. <br /><br />
          It is possible that some or all of Our third-party advertising partners or members of their affiliate network may participate in consumer opt-out programs. To learn more about internet-based advertising and consumer opt-out programs go to <a href="http://aboutads.info/choices" target="_blank" rel="noreferrer">http://aboutads.info/choices</a>  or <a href="http://networkadvertising.org/choices" target="_blank" rel="noreferrer">http://www.networkadvertising.org/choices.</a> 

          </p>

          <h3 className="app-h5">11. Information Security and Confidentiality</h3>
          <p>
          No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, although We comply with Our legal obligations in respect of the security of Your personal information We cannot guarantee its absolute security. We use (and require Our Third Party Service Providers to maintain) generally accepted standards of organizational, administrative, physical, procedural, and technological measures designed to protect Your information from improper loss or misuse, and unauthorized access, disclosure, alteration, and destruction during processing. If You have any questions about the security of Your personal information, You can contact Us at the e-mail or regular mail address specified in the Contacting Us section below.
          </p>
          <h3 className="app-h5">12. Data Retention</h3>
          <p>
          We will only retain Your personal information for as long as necessary to fulfill the purposes We collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal information, We consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of Your personal information, the purposes for which We process Your personal information and whether We can achieve those purposes through other means, and the applicable legal requirements. Our default retention period is 1 years.
          </p>

          <h3 className="app-h5">13. Minors</h3>
          <p>
          Our privacy practices are consistent with the Federal Children’s Online Privacy Protection Act (“COPPA”) and We will not knowingly request or collect personal information from any child under the age of majority.  If You are a minor, Your parent(s) or guardian(s) must complete the registration process, in which case he/she/they will take full responsibility for all obligations set forth herein.  BY CREATING A PROFILE, YOU REPRESENT THAT YOU ARE AN ADULT AND ARE EITHER ACCEPTING THIS AGREEMENT ON BEHALF OF YOURSELF OR ON BEHALF OF YOUR CHILD, IN WHICH CASE YOU AGREE TO BE PERSONALLY BOUND BY ALL OF THE TERMS AND CONDITIONS CONTAINED HEREIN.
          </p>

          <h3 className="app-h5">14. Contacting us</h3>
          <p>
          If You have questions or complaints about how We use Your personal information, please contact Us at: support@stellara.io.
          </p>

          <p className='terms-latest-revised'>LAST REVISED: November 22, 2021</p>
        </CardGradient>
      </section>
      <section className="terms-terms-of-use">
        <CardGradient>
          <h2 className="app-h2">TERMS OF USE</h2>

          <h3 className='app-h5'>1. Introduction</h3>
          <p>
          Welcome! You, individually or on behalf of the entity You represent (“You,” “Your”, “Yourself” or “Users”), are entering into an Agreement with Stellar Automation LLC ("Stellar", "We", "Our", or "Us"). The terms of this Agreement include these Terms of License, Our Privacy Notice and other provisions (“Agreement”) that We specify as applicable to Your access and use of: (i) <a href="https://www.stellara.io/" target="_blank" rel="noreferrer">https://www.stellara.io/</a> (the “Site”), (ii) Our software (which includes assess and use of Our Dashboard); and/or (iii) other Stellar related sites, apps, and communications that are offered under this Agreement (collectively as applicable the “Software(s)”). If You do not agree to this Agreement, You must neither access nor use Our Software. In agreeing, You also represent that You have the legal authority to bind Yourself and/or the company You represent, and have disclosed all information to Us as necessary to make the Software available to You. Capitalized terms are as defined throughout this Agreement.
          </p>

          <h3 className='app-h5'>2. Software and Account Requirements</h3>
          <p>
            
            a. <span className='text-decoration-underline'>Software.</span> The Software is designed to assist with the online retail checkout process for products at designated big box retailer websites (“Merchandise”). You are solely responsible for Merchandise acquired through the Software. Please visit Our Site for information related to supported Third-Party Websites. You understand that use of the Software is not endorsed by owners Third-Party Websites and that the owners of Third-Party Websites may attempt to block Your ability to use the Software to acquire Merchandise by blocking the IP address through with You access the Third-Party Website from. Therefore, We strongly encourage the use of a proxy IP address service to mitigate against this risk. <br/>

            b. <span className="text-decoration-underline">Account Requirement.</span> You must have an active Discord account. Your Discord account information is used to register and create an account for access and use of Our Software (“Account”). If You create an account and submit information to Us, You represent and warrant that all such personal information is accurate and current. Additionally, You must promptly update Your Account information in the event of any changes. If We have reason to believe that Your Account information is inaccurate, outdated, and/or incomplete, We may suspend or terminate Your account and/or use of Our Software. You agree not to: (i) access or use our Software using a false identity or information that is not Your own; and/or (ii) create an Account or use the Software if You have been previously removed from the Software. We reserve the right, in Our sole discretion, to accept or reject Your registration to use Our Software and/or as well as suspend or terminate Your Account for any reason, or no reason at all. <br/>

            c. <span className='text-decoration-underline' >Account Security.</span> You are entirely responsible for maintaining the confidentiality of Your password and Account. You are entirely responsible for any and all activities that occur under Your Account. You agree to notify Us immediately of any unauthorized use of Your Account or any other breach of security. We will not be liable for any loss, damages, liability, expenses or attorneys’ fees that You may incur as a result of someone else using Your password or Account, either with or without Your knowledge. You will be liable for losses, damages, liability, expenses and attorneys’ fees incurred by Us or a third party due to someone else using Your Account, regardless of whether they are authorized. <br/>

            ANY SUSPECTED FRAUDULENT, ABUSIVE OR ILLEGAL ACTIVITY THAT MAY BE GROUNDS FOR TERMINATION OF YOUR ACCOUNT AND ACCESS OR USE OF OUR SOFTWARE AND MAY BE REFERRED TO APPROPRIATE LAW ENFORCEMENT AUTHORITIES. THESE REMEDIES ARE IN ADDITION TO ANY OTHER REMEDIES WE MAY HAVE AT LAW OR IN EQUITY.
          </p>

          <h3 className="app-h5">3. License Fee, Refund Policy and Sales Tax. </h3>
          <p>
            <span className='text-decoration-underline'>a. License Fee and Service Fees. </span> <br />
            The Software has been made available to You upon payment of the license fee for the use of the Software. <br />

            Payment of the service fees under those certain Terms of Service relating to the services provided by Stellar AIO LLC for the upkeep and maintenance of the Software is recommended in order to have continued access and use of Software. Failure to pay the foregoing service fees will result in suspension of the upkeep and maintenance services required for the proper functioning of the Software. Payments are processed by <a href="https://stripe.com/" target="_blank" rel="noreferrer"> https://stripe.com/</a> payments and are subject to additional terms and conditions, which we strongly encourage You to review. You will receive a confirmation email confirming Your order when payment has been processed along with a license key used to download, install and activate the Software (“Activation Key”).  <br />

            b. <span className="text-decoration-underline">Refund Policy.</span> You will have ten days after receipt of payment confirmation to request a refund. We will permit refunds for the Software associated with an unused Activation Key. Please email Us at: <a href="https://mailto:support@stellara.io" target="_blank" rel="noreferrer">support@stellara.io</a>  to alter Us of Your desire for a refund. Please include Your name, email address used to process Your subscription payment in the email request You send to Us and We will promptly reply to determine how We can address Your request. We may grant or deny cancellation requests for individual refunds in Our sole and absolute discretion. All sales are final unless We specify otherwise. <br />

            c. <span className="text-decoration-underline">Sales Tax.</span> Price quotes for the Software generally do not include sales tax. If applicable law requires Us to collect sales tax, such tax will be included as a separate charged line item that You are required to pay at the time Your transaction is processed. If You are authorized by Us to resell Our Software, You must provide Us with a valid resale certificate to not be charged sales tax at the time of purchase. If You fail to provide Us with a resale certificate prior to Your purchase of Software for resale You acknowledge and understand that You will be charged sales tax and that such payment of sales tax is nonrefundable from Us.
          </p>

          <h3 className="app-h5">4. License and Restrictions.</h3>
          <p>
              <span className='text-decoration-underline'>a. License Types. </span> <br />

              i. <span className='text-decoration-underline'>Non-transferable License.</span> We hereby grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Software to assist with the checkout process for Merchandise available at supported Third-Party Websites and as expressly permitted by the Agreement. Except for this limited license, we do not grant you any other rights or license. We reserve all rights not expressly granted herein. <br />
              ii. <span className='text-decoration-underline'>Transferable License.</span>  We hereby grant you a limited, non-exclusive, transferable, revocable license to access and use the Software to assist with the checkout process for Merchandise available at supported Third-Party Websites and as expressly permitted by the Agreement. Except for this limited license, we do not grant you any other rights or license. We reserve all rights not expressly granted herein.
              <br />

              b. <span className='text-decoration-underline'>Restrictions.</span>  With respect to the Software, you are prohibited from and agree not to do the following: <br /><br />
              i. You will not use the Software or any information displayed therein to “stalk,” harass, abuse, defame, threaten or defraud other Users; violate the privacy or other rights of Users; or collect, attempt to collect, store, or disclose without permission the location or personal information about other Users; <br />
              ii. You will not include offensive or pornographic Content, or Content that is harmful to the Software; <br />
              iii. You will not use the Software for any commercial or non-private use, such as the sale or advertisement of goods or services, and You understand that the Software are for personal, non-commercial use only in the manner and for the purposes that We intend; 
              <br />
              iv. You will not use the Software for the commission or encouragement of any illegal purpose, or in violation of any local, state, national, or international law, including laws governing criminal acts, prohibited or controlled substances, intellectual property and other proprietary rights, data protection and privacy, and import or export control; <br />
              v. You will not impersonate any person or entity, falsely claim an affiliation with any person or entity; <br />
              vi. You will not remove, circumvent, disable, damage or otherwise interfere with security-related features of the Software; <br />
              vii. You will not intentionally interfere with or damage operation of the Software or any User’s enjoyment thereof, by any means, including uploading or otherwise disseminating viruses, worms, or other malicious code; <br />
              viii. You will not post, store, send, transmit, or disseminate any information or material  which a reasonable person could deem to be objectionable, defamatory, libelous, offensive, obscene, indecent, pornographic, harassing, threatening, embarrassing, distressing, vulgar, hateful, racially or ethnically or otherwise offensive to any group or individual, intentionally misleading, false, or otherwise inappropriate, regardless of whether this material or its dissemination is unlawful; <br />
              ix. You will not attempt to gain unauthorized access to the Software, or any part of it, other Accounts, computer systems or networks connected to the Software, or any part of it, through hacking, password mining or any other means, or interfere or attempt to interfere with the proper working of the Software or any activities conducted on the Software; and/or <br />
              x. You will not probe, scan, or test the vulnerability of the Software or any system or network; use any robot, sniffer, spider, scraper or other automated means to access and/or evaluate the Software.
          </p>
          <h3 className="app-h5">5. User Content and Our Proprietary Rights</h3>
          <p>
          
              a. <span className='text-decoration-underline'>User Content.</span>  You hereby grant Us a non-exclusive, fully-paid, royalty-free, world-wide, universal, transferable license to: display, publicly perform, distribute, store, broadcast, transmit, reproduce perform, distribute, store, broadcast, transmit, modify, prepare derivative works and otherwise use and reuse all or any part of any information that You submit in connection with Your use of the Software (“User Content”). You hereby represent and warrant that You own all rights to Your Content or, alternatively, that You have the right to give us the license described above. You represent and warrant that Your Content does not infringe on the intellectual property rights, privacy rights, publicity rights, or other legal rights of any third-party. You waive and agree never to assert any and all moral rights in and to all of the materials licensed in this Section. We reserve the right to display advertisements in connection with Your User Content. We are not required to host, display, or distribute any of Your User Content and We may refuse to accept or transmit User Content, and may remove or delete all or any portion of User Content from the Software at any time. <br />

              b. <span className='text-decoration-underline'>Our Proprietary Rights.</span> The design of the Software including the text, scripts, graphics, interactive features and the trademarks, service marks and logos contained therein ("Our Content"), are owned by or licensed to Us and are subject to copyright and other intellectual property rights under United States and foreign laws and international conventions.  You agree not to engage in the misuse, copying and/or redistribution of Our Content contained within the Software.
          </p>

          <h3 className='app-h5'> 6. Indemnification and Release</h3>
          <p>
            a. <span className="text-decoration-underline">Users.</span>  You shall indemnify, defend and hold (i) Stellar and its officers, directors, shareholders and agents harmless for any and all losses, fines, claims, costs, disputes, property damage or property loss, death or bodily injury, demands and liabilities (including reasonable attorneys’ fees) arising out of or incurred due to: Your breach of this Agreement; Your use or misuse of the Software; (ii) Your interaction with Third-Party Websites; (iii) Your User Content; Your employees and/or subcontractors; (iv) Your violation of applicable law; and (v) any and all direct or indirect loss, liability, damage, claim, fine, cost or expense, including reasonable attorney’s fees, arising out of or in any way related to Your performance or breach of this Agreement, violation of applicable Law, employees, subcontractors or independent contractors, including, but not limited to, claims for or related to personal injury, property damage, and inability to use the Software to acquire Merchandise via Third-Party Websites (“Claims”).  Stellar reserves the right, at Your expense, to assume the exclusive defense and control of any matter for which You are required to indemnify Us and You agree to cooperate with Our defense of all applicable Claims. You agree not to settle any matter without the prior written consent of Stellar. Stellar will use reasonable efforts to notify You of any such Claim, action or proceeding upon becoming aware of it. <br />
              b. <span className="text-decoration-underline">Stellar.</span>  Stellar shall indemnify, defend and hold You harmless from any and all liabilities, losses, damages, suits, penalties, fines, costs or expenses (including, reasonable attorneys’ fees and other applicable expenses) relating to third-party claims that the Software infringes upon/on that party’s Intellectual Property Rights (“Infringement Claim”).  Our obligation under this is contingent upon Your prompt written notice of any such claim and reasonable assistance in defending any such Infringement Claim. <br />
              c. <span className="text-decoration-underline">Release.</span> To the fullest extent permitted by applicable law, You hereby release and forever discharge Us (and Our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, emotional distress, identity theft, death, and property loss and damage), that has arisen or arises directly or indirectly out of, or relates directly or indirectly to Our Software and this Agreement (including any Third Party Websites). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.” <br />
            WE DISCLAIM ALL LIABILITY, REGARDLESS OF THE FORM OF ACTION, FOR THE ACTS OR OMISSIONS THIRD-PARTY WEBSITES (INCLUDING UNAUTHORIZED USERS, OR “HACKERS”). STELLAR ONLY OFFERS SOFTWARE THAT ASSISTS USERS WITH THE AUTOMATED CHECKOUT PROCESS OF MERCHANDISE SOLD THROUGH THIRD-PARTY WEBSITES. STELLAR NEITHER OWNS NOR CONTROLS THIRD-PARTY WEBSITES AND ARE THEREFORE NOT RESPONSIBLE FOR THIRD-PARTY WEBSITE UPDATES THAT MAY IMPACT THE USE OF THE SOFTWARE. WE RESERVE THE RIGHT TO CHANGE THE SOFTWARE, AND OTHER ITEMS USED OR CONTAINED IN THE SOFTWARE AT ANY TIME WITHOUT PRIOR NOTICE.
          </p>

        <h3 className="app-h5">7. Disclaimer of Warranties </h3>
        
        <p>
          TO THE EXTENT PERMITTED BY APPLICABLE LAW YOU UNDERSTAND AND AGREE THAT THE SOFTWARE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.  STELLAR AND ITS RESPECTIVE SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE AVAILABILITY OF THE SOFTWARE (INCLUDING OUR CONTENT), AND THE USER CONTENT YOU OR OTHER USERS SUBMIT. YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS.  WE DISCLAIM TO THE FULLEST EXTENT PERMISSIBLE BY LAW, AND YOU WAIVE, ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE FUNCTIONS AND FEATURES OF THE SOFTWARE ARE NOT WARRANTED TO BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE. STELLAR DISCLAIMS ANY RESPONSIBILITY FOR THE DELETION, FAILURE TO STORE, MISDELIVERY, OR UNTIMELY DELIVERY OF ANY USER CONTENT AND/OR 
        OUR CONTENT. YOU ASSUME THE ENTIRE RISK OF LOSS OF USER CONTENT AND/OR DAMAGE DUE TO YOUR USE OF THE SOFTWARE. CERTAIN STATE, PROVINCIAL, AND NATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS. 
        </p>

    <h3 className="app-h5">8. Limitation of Liability</h3>

    <p>
      STELLAR SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SOFTWARE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT STELLAR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. <br /> <br />
      STELLAR SHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF: (I) YOUR USE OF OR RELIANCE ON THE SOFTWARE OR YOUR INABILITY TO ACCESS OR USE THE SOFTWARE; OR (II) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU THIRD-PARTY WEBSITES. IN NO EVENT SHALL STELLAR'S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE SOFTWARE AND SHIPMENTS FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION EXCEED FIVE HUNDRED (US $500.00) U.S. DOLLARS. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU AND YOU MAY ALSO HAVE OTHER LEGAL RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION.
    </p>

    <h3 className='app-h5'>9. Third-Party Websites</h3>
    <p>
      The Software may include links to other web sites or services, whether through advertising or otherwise (“Third-Party Websites”).  We do not endorse any Third-Party Website. Furthermore, We make no express or implied warranties with regard to the information, material, Merchandise or services acquired with the use of the Software via Third-Party Websites. We do not control these Third-Party Websites and this Agreement does not apply to companies that Stellar does not own nor control. You should always check the terms of use posted on Third-Party Websites. You agree that Stellar will not be responsible or liable for any loss or damage of any sort incurred as the result of Your interaction with Third-Party Websites.
    </p>

    <h3 className="app-h5">10. Resolving disputes </h3>
    <p>
      a. <span className="text-decoration-underline">General.</span> You and Us agree that any dispute that has arisen or may arise between us relating in any way to Your use of or access to the Software, this Agreement, or otherwise relating to Us in any way (collectively, “Dispute Matters”) will be resolved in accordance with the provisions set forth in this Section 10. <br />
      b. <span className="text-decoration-underline">Informal Resolution.</span> If You have any dispute with Us, You and We agree that before taking any formal action, You will contact Us at <a href="https://support@stellara.io" target="_blank" rel="noreferrer">support@stellara.io</a>  to provide a brief, written description of the dispute and Your contact information; and allow sixty (60) days to pass, during which We will attempt to reach an amicable resolution with You. <br />
      c. <span className="text-decoration-underline">Applicable Law.</span> You and We agree that United States federal law including the Federal Arbitration Act, and (to the extent not inconsistent with or pre-empted by federal law) the laws of the State of New York, USA, without regard to conflict of laws principles, will govern all Dispute Matters. Such body of law will apply regardless of Your residence or the location of where You use the Software. <br />
      d. <span className="text-decoration-underline">Our Arbitration.</span> You and Us agree that this Agreement and each of its parts evidence a transaction involving interstate commerce, and the Federal Arbitration Act applies in all cases and governs the interpretation and enforcement of the arbitration rules and arbitration proceedings. Any Disputed Matter must be asserted individually in binding arbitration administered by the American Arbitration Association (“AAA”) in accordance with its Consumer Arbitration Rules (including utilizing desk, phone or video conference proceedings where appropriate and permitted to mitigate costs of travel). You and Us agree that the arbitrator shall not conduct any form of class or collective arbitration nor join or consolidate claims by or for individuals. You and Us agree that the arbitrator, and not any federal, international, state, or local court or agency, shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, enforceability or formation of this Agreement, including any claim that all or any part of this Agreement is void or voidable or a particular claim is subject to arbitration. You and Us agree that judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. <br />
      e. <span className="text-decoration-underline">The Arbitrator’s Award to You or Us.</span>  You and Us agree that for matters where the relief sought is over $5,000, the arbitrator’s decision will include the essential findings and conclusions upon which the arbitrator based the award. The arbitrator will decide the substance of all claims in accordance with applicable law, including recognized principles of equity, and will honor all claims of privilege recognized by law. The arbitrator shall not be bound by rulings in prior arbitrations involving different Users, but is bound by rulings in prior arbitrations involving the same User to the extent required by applicable law. You and Us agree that the arbitrator’s award shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof. YOU AND US AGREE THAT THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S), FOR EXAMPLE YOUR CLAIMS. ANY RELIEF AWARDED CANNOT AFFECT OTHER USERS. <br />
      f. <span className="text-decoration-underline">Exceptions.</span>  There are only two exceptions to this agreement to arbitrate: <br />
      i. if either party reasonably believes that the other party has in any manner violated or threatened to infringe the intellectual property rights of the other party, the party whose rights have been violated may seek injunctive or other appropriate interim relief in any court of competent jurisdiction; or
      ii. if either party reasonably believes that the applicable dispute can be resolved in a small claims court and such court has jurisdiction. <br />
      g. <span className="text-decoration-underline">Who Bears the Costs of Arbitration.</span>  You and Us agree that payment of all filing, administration, and arbitrator fees will be governed by the AAA’s rules, unless otherwise stated in this agreement to arbitrate. If the value of the relief sought is $5,000 or less, at Your written request, We will reimburse You for the filing, administration, and arbitrator fees associated with the arbitration following the earlier of the arbitrator’s decision or settlement, provided that You make your request no more than thirty (30) days following the earlier of such decision or settlement. In the event the arbitrator determines the claim(s) You assert in the arbitration to be frivolous or without merit, You agree that We are relieved of its obligation to reimburse You for any fees associated with the arbitration. <br />
      h. <span className="text-decoration-underline">Judicial Forum for Legal Disputes.</span> In the event that the agreement to arbitrate above is found not to apply to You or to a particular claim or dispute, either as a result of Your decision to opt out of the agreement to arbitrate, as a result of a decision by the arbitrator or a court order, or because You are an international User to which this agreement to arbitrate does not apply, You agree (except as otherwise provided by law) that any claim or dispute that has arisen or may arise between You and Us must be resolved exclusively by a state or federal court located in New York City, New York. You and Us agree to submit to the exclusive personal jurisdiction of the courts located within New York City, New York for the purpose of litigating all such claims or disputes. <br />
      i. <span className="text-decoration-underline">YOU MAY OPT-OUT OF ARBITRATION. </span> YOU CAN CHOOSE TO REJECT THE AGREEMENT TO ARBITRATE PROVISION (“OPT-OUT”) BY EMAILING US AN OPT-OUT NOTICE TO  <a href="https://mailto:support@stellara.io" target="_blank" rel="noreferrer">SUPPORT@STELLARA.IO</a>  (“OPT-OUT NOTICE”) NO LATER THAN THIRTY (30) DAYS OF YOUR ACCEPTANCE OF THIS AGREEMENT. <br />
      j. <span className="text-decoration-underline">Arbitration Opt-Out Procedure.</span> In order to opt-out, You must email Your name, address (including street address, city, state, and zip code), email address and a valid and current government issued form of identification to verify Your identity. If You opt out of the agreement to arbitrate, all other parts of this Agreement will continue to apply to You. <br />
      k. <span className="text-decoration-underline">YOU WAIVE CERTAIN RIGHTS.</span> BY AGREEING TO THIS AGREEMENT, YOU HEREBY IRREVOCABLY WAIVE ANY RIGHT YOU MAY HAVE (I) TO A COURT TRIAL (OTHER THAN SMALL CLAIMS COURT AS PROVIDED ABOVE), (II) TO SERVE AS A REPRESENTATIVE, AS A PRIVATE ATTORNEY GENERAL, OR IN ANY OTHER REPRESENTATIVE CAPACITY, OR TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS, IN ANY LAWSUIT, ARBITRATION OR OTHER PROCEEDING FILED AGAINST US AND/OR RELATED THIRD PARTIES, AND (III) TO A TRIAL BY JURY EVEN IF ANY ARBITRATION IS NOT REQUIRED UNDER THIS AGREEMENT. 
      STATUTE OF LIMITATIONS FOR YOUR CLAIMS. REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF OR RELATED TO USE OF THE SITE, THE SOFTWARE, OR THIS AGREEMENT MUST BE FILED WITHIN ONE (1) YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION ARISES OR IT WILL BE FOREVER BARRED.
    </p>

    <h3 className="app-h5">11. Additional Provisions</h3>
      <p>
        a. <span className="text-decoration-underline">Compliance and Choice of Law.</span>  Each party will comply with all laws applicable to this Agreement. This Agreement shall be governed by the laws of the State of New York without giving effect to its principles regarding conflicts of law. All disputes shall be resolved exclusively in state or federal court in New York City, New York. You acknowledge that the Software is of United States origin and agree to comply with all export laws and regulations of the United States. <br />
        b. <span className="text-decoration-underline">Force Majeure.</span>  We will not be liable for any failure or delay in performance to the extent caused by any circumstances beyond Our reasonable control. <br />
        c. <span className="text-decoration-underline">Severability; Headings.</span>  The unenforceability of any provision of this Agreement will not affect the enforceability of any other provision. If any provision of this Agreement is deemed to conflict with another, Stellar will have the sole right to elect which provision remains in force. Headings are provided for convenience only. <br />
        d. <span className="text-decoration-underline">Non-waiver.</span>  We reserve all rights under applicable law. Our non-enforcement of any provision of this Agreement or under applicable law will not be construed as Our waiver of any enforcement rights under the same or different circumstances at any time in the future. <br />
        e. <span className="text-decoration-underline">Termination.</span>  We may suspend or terminate your access to the Software or Your Account at Our discretion without explanation and notice, though We will strive to provide a timely explanation. All provisions of this Agreement which by their nature should survive termination shall survive termination, including ownership, fees, warranty disclaimers, indemnity and limitations of liability. <br />
        f. <span className="text-decoration-underline">Electronic Communications.</span>  You consent to receive communications from Us electronically, and agree that all terms, conditions, or otherwise, provided to You electronically satisfy any legal requirement that would be satisfied if they were in writing. <br />
        g. <span className="text-decoration-underline">Modifications.</span>  PLEASE NOTE THAT THIS AGREEMENT IS SUBJECT TO CHANGE BY US IN OUR SOLE DISCRETION AT ANY TIME. When changes are made, We will make a new copy of the Agreement available to You through the Software. We will also update the "Last Revised" date at the top of the Agreement. If We make any material changes, and You have created an Account, We may also send an e-mail to You at the last e-mail address You provided to Us. Any changes to the Agreement will be effective immediately. We may require You to provide consent to the updated Agreement in a specified manner before further use of the Software is permitted. If You do not agree to any change(s) after receiving a notice of such change(s), please stop all access and use of the Software. Otherwise, Your continued access and use of the Software constitutes Your acceptance of such change(s). <br />
        h. <span className="text-decoration-underline">Entire Agreement.</span>  This Agreement contains the entire agreement of the parties and supersedes all other agreements and understandings with respect to the matters contained herein. <br />
        i. <span className="text-decoration-underline">California Users and Residents.</span>  Pursuant to California Civil Code Section 1789.3, questions about pricing, complaints, or inquiries must be addressed to Our agent for notice and sent via certified mail to: 30 N. Gould St. Ste R, Sheridan, WY 82801 California Users are also entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210. <br />
        j. <span className="text-decoration-underline">Privacy Notice.</span> Our collection, use, and sharing of Your personal information is subject to Our Privacy Notice.  You understand that through Your access and use of the Software You consent to the collection, retention, use, and sharing of this information as set forth in Our Privacy Notice. <br />
        k. <span className="text-decoration-underline">Support.</span>  If you have any questions about this Agreement, please contact Stellar at <a href="https://mailto:support@stellara.io" target="_blank" rel="noreferrer">support@stellar.io.</a> 
      </p>
        <p className='terms-latest-revised'>LAST REVISED: JUNE 4, 2022</p>
        </CardGradient>
      </section>
      <div className="about-need-help">
        <NeedHelp/>
      </div>
    </div>
      
    </>
  )
}

export default Terms