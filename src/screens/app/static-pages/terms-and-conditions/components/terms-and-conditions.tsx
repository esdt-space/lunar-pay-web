import { ListItem } from "./list-item"

export const TermsAndConditions: React.FC = () => {
 
  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      <h1 className="text-2xl font-bold mb-12 text-center">Terms and Conditions</h1>
      <h2 className="font-bold mb-6 mt-10">1. Introduction</h2>
      <ul>
        <ListItem 
          title={'1.1 Welcome to Lunar Pay'}
          content={'Welcome to Lunar Pay, a pioneering financial platform designed for the evolving landscape of Web3 and blockchain technology. Our services are provided via our website, mobile applications, and other digital mediums. By accessing or using Lunar Pay, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully.'}
        />
        <ListItem 
          title={'1.2 About Lunar Pay'}
          content={'Lunar Pay operates on the MultiversX blockchain, offering innovative financial solutions such as a personalized funding wallet, automated payroll management, subscription services, portfolio management, and a platform for handling donations. Our mission is to simplify and enhance financial operations in the Web3 ecosystem, providing flexibility, security, and efficiency.'}
        />
        <ListItem 
          title={'1.3 Purpose of these Terms'}
          content={'These Terms serve as a legal agreement between you (the user) and Lunar Pay, setting forth the rights and obligations of both parties. They govern your access to and use of our services, including any content, functionality, and services offered on or through Lunar Pay'}
        />
        <ListItem 
          title={'1.4 Privacy Policy'}
          content={'Your use of Lunar Pay is also governed by our Privacy Policy, which outlines our practices concerning the handling of your personal data. By using Lunar Pay, you consent to the collection and use of this information as set forth in the Privacy Policy.'}
        />
        <ListItem 
          title={'1.5 User Acknowledgment'}
          content={'By using Lunar Pay, you acknowledge that you have the requisite understanding and knowledge of blockchain and Web3 technologies. You understand the inherent risks associated with digital and cryptographic systems and agree to bear such risks.'}
        />
        <ListItem 
          title={'1.6 Platform Nature'}
          content={'Lunar Pay is a platform that facilitates various financial transactions and services. It is important to note that we do not offer traditional banking or financial services and should not be considered as a financial institution.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">2. Acceptance of Terms</h2>
      <ul>
        <ListItem
          title={'2.1 Agreement to Terms'}
          content={'By accessing or using Lunar Pay, including browsing our website, registering an account, or engaging in any transactions through our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you should not use or access Lunar Pay.'}
        />
        <ListItem
          title={'2.2 Legal Capacity'}
          content={'You represent and warrant that you have the legal capacity to enter into binding agreements. If you are using Lunar Pay on behalf of a business, organization, or other entity, you represent that you have the authority to bind such entity to these Terms.'}
        />
        <ListItem
          title={'2.3 Modifications to Terms'}
          content={"Lunar Pay reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms."}
        />
        <ListItem
          title={'2.4 Electronic Agreement'}
          content={'This Agreement is an electronic contract that sets out the legally binding terms of your use of Lunar Pay services. You indicate your acceptance of this Agreement and all of the terms and conditions contained or referenced in this Agreement by continuing to use Lunar Pay services after registration.'}
        />
        <ListItem
          title={'2.5 User Responsibilities'}
          content={'In agreeing to these Terms, you also agree to: (a) provide accurate, current, and complete information about yourself as prompted by our registration forms ("Registration Data"); (b) maintain the security of your password and identification; (c) maintain and promptly update the Registration Data, and any other information you provide to Lunar Pay, to keep it accurate, current, and complete; and (d) accept all risks of unauthorized access to the Registration Data and any other information you provide to Lunar Pay.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">3. Eligibility</h2>
      <ul>
        <ListItem
          title={'3.1 Age and Capacity'}
          content={'To access or use Lunar Pay, you must be at least 18 years old or the age of majority in your jurisdiction, whichever is higher. By using Lunar Pay, you represent and warrant that you have the legal capacity to enter into a binding contract with us and are not barred from doing so under any applicable laws.'}
        />
        <ListItem
          title={'3.2 Responsibility for Activities'}
          content={'You are responsible for all activities that occur under your account. If you suspect or become aware of any unauthorized use of your account or any other security breach, you must immediately notify Lunar Pay.'}
        />
        <ListItem
          title={'3.3 User Declarations'}
          content={"By using Lunar Pay, you declare that your funds are obtained legally and that you will not use Lunar Pay's services for money laundering, illegal transactions, or any other illicit activity."}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">4. Lunar Pay Services</h2>
      <ul>
        <ListItem
          title={'4.1 Description of Services '}
          content={'Lunar Pay offers a range of financial services on the MultiversX blockchain, including but not limited to, the Vault for personalized financial transactions, automated payroll management, subscription services, portfolio management, and a platform for handling donations.'}
        />
        <ListItem
          title={'4.2 Service Modifications '}
          content={'Lunar Pay reserves the right to modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without notice. You agree that Lunar Pay shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Services.'}
        />
        <ListItem
          title={'4.3 Service Availability '}
          content={'While we strive to ensure the Services are always accessible, we cannot guarantee uninterrupted service due to maintenance, updates, or factors beyond our control. We will make reasonable efforts to provide advance notice of any significant disruptions.'}
        />
        <ListItem
          title={'4.4 Service Usage Limits '}
          content={'Lunar Pay may impose certain limitations on the use of its services, such as transaction limits or service-specific rules. These limitations are designed to enhance security, comply with legal requirements, or manage system resources.'}
        />
        <ListItem
          title={'4.5 Third-Party Services '}
          content={'Our services may integrate with or offer links to third-party websites, applications, or services. We do not control and are not responsible for the content, privacy policies, or practices of any third-party services. You acknowledge that your use of such services is governed by their respective terms and conditions.'}
        />
        <ListItem
          title={'4.6 Service Accuracy '}
          content={'We make every effort to ensure that information provided as part of the Services is accurate and up to date. However, this information should not be relied upon as comprehensive or error-free.'}
        />
        <ListItem
          title={'4.7 Service Interruptions'}
          content={'Lunar Pay will strive to maintain continuous operation of its services but does not guarantee uninterrupted service. Lunar Pay is not liable for any loss or damage arising from service interruptions, including interruptions that may affect the processing of transactions.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">5. User Accounts</h2>
      <ul>
        <ListItem
          title={'5.1 Account Creation'}
          content={'To use certain features of Lunar Pay, you may be required to create an account. When creating your account, you agree to provide accurate, current, and complete information and to update this information to keep it accurate, current, and complete.'}
        />
        <ListItem
          title={'5.2 Account Responsibility'}
          content={'You are solely responsible for safeguarding your account password and for all activities that occur under your account. Lunar Pay is not liable for any loss or damage arising from your failure to protect your account credentials.'}
        />
        <ListItem
          title={'5.3 Account Security'}
          content={'You agree to immediately notify Lunar Pay of any unauthorized use of your account or any other breach of security. Lunar Pay will not be liable for any loss or damage arising from your failure to comply with this requirement.'}
        />
        <ListItem
          title={'5.4 Account Usage'}
          content={'Your account is personal to you and you may not transfer or share your account with any third party. Any such transfer or sharing shall constitute a breach of these Terms and may result in immediate account termination.'}
        />
        <ListItem
          title={'5.5 Accurate Information'}
          content={'It is crucial that the information you provide upon registration, and at all subsequent times, be accurate, complete, and up-to-date. This includes your contact information, identity verification, and any other information required by Lunar Pay.'}
        />
        <ListItem
          title={'5.6 Account Termination'}
          content={'Lunar Pay reserves the right to terminate or suspend your account at any time for any reason, including but not limited to, a violation of these Terms, upon notice to you. Upon termination, the rights and licenses granted to you under these Terms will immediately cease, and you must cease all use of the Services.'}
        />
        <ListItem
          title={'5.7 Inactive Accounts'}
          content={'Lunar Pay reserves the right to deactivate or terminate accounts that are inactive for an extended period. You will be notified prior to any action taken on an inactive account.'}
        />
        <ListItem
          title={'5.8 Data Retention and Deletion'}
          content={'Upon termination or deactivation of your account, Lunar Pay may retain your information for a certain period for backup, archival, or audit purposes. You may request the deletion of your account data in accordance with our Privacy Policy.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">6. User Conduct</h2>
      <ul>
        <ListItem
          title={'6.1 Acceptable Use Policy'}
          content={'By using Lunar Pay, you agree to adhere to our Acceptable Use Policy. This includes, but is not limited to, refraining from using our services for any unlawful purpose, not attempting to breach or circumvent any security or authentication measures, and not uploading or transmitting viruses or other harmful materials.'}
        />
        <ListItem
          title={'6.2 Prohibited Activities'}
          content={'You may not use Lunar Pay to conduct any fraudulent, abusive, or otherwise illegal activity. Engaging in activities that defraud Lunar Pay or other users, or that are harmful to the operation of Lunar Pay or the wider community, is strictly prohibited.'}
        />
        <ListItem
          title={'6.3 Respectful Interaction'}
          content={'You must interact respectfully with other Lunar Pay users and our staff. Harassment, abuse, or any form of discrimination against other users or Lunar Pay staff is unacceptable and will result in immediate account suspension or termination.'}
        />
        <ListItem
          title={'6.4 Reporting Misconduct'}
          content={'If you encounter any conduct that violates these Terms, please report it to us immediately. Lunar Pay is committed to ensuring a safe and compliant platform for all users.'}
        />
        <ListItem
          title={'6.5 Intellectual Property Respect'}
          content={'You must respect the intellectual property rights of Lunar Pay and third parties. Any unauthorized use of copyrighted material, trademarks, or other proprietary information without the express permission of the owner is a violation of these Terms.'}
        />
        <ListItem
          title={'6.6 Non-Interference'}
          content={"You may not interfere with or attempt to disrupt Lunar Pay's services, including but not limited to any actions that impose an unreasonable or disproportionately large load on our infrastructure."}
        />
        <ListItem
          title={'6.7 Responsibility for User Content'}
          content={'You are solely responsible for the content you provide while using Lunar Pay, including any data, text, information, usernames, images, graphics, or other materials.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">7. Fees and Transactions</h2>
      <ul>
        <ListItem
          title={'7.1 Transaction Fees'}
          content={'Lunar Pay charges a transaction fee of 0.5% per transaction. These fees are subject to change, and Lunar Pay reserves the right to adjust these fees as necessary. Changes to our fee structure will be communicated to users in advance.'}
        />
        <ListItem
          title={'7.2 Fee Disclosure'}
          content={'All applicable fees will be disclosed at the time of transaction. By completing a transaction, you agree to pay all associated fees, and you acknowledge that these fees are non-refundable, except as required by law.'}
        />
        <ListItem
          title={'7.3 Payment Methods'}
          content={'Lunar Pay accepts various payment methods for funding your account or settling transactions. It is your responsibility to ensure that all payment information is accurate and that you have sufficient funds to cover all transactions and fees.'}
        />
        <ListItem
          title={'7.4 Currency Transactions'}
          content={'All transactions will be conducted in the specified cryptocurrencies or digital assets supported by Lunar Pay. Exchange rates, where applicable, will be determined at the time of the transaction.'}
        />
        <ListItem
          title={'7.5 Transaction Limits'}
          content={'Lunar Pay may impose transaction limits on your account, including limits on the amount or number of transactions within a certain period. These limits are for security and regulatory compliance and may be adjusted at Lunar Pay’s discretion.'}
        />
        <ListItem
          title={'7.6 Unauthorized Transactions'}
          content={'You must inform Lunar Pay immediately if you believe there has been an unauthorized transaction or security breach in your account. Lunar Pay will investigate and, where appropriate, take steps to rectify the issue. However, Lunar Pay is not liable for any loss resulting from unauthorized transactions.'}
        /> 
      </ul>
      <h2 className="font-bold mb-6 mt-10">8. Risks</h2>
      <ul>
        <ListItem
          title={'8.1 Acknowledgment of Risks'}
          content={'By using Lunar Pay, you acknowledge and agree that there are risks associated with utilizing an Internet-based deal execution and cryptocurrency system including, but not limited to, the risk of failure of hardware, software, and Internet connections. You acknowledge that Lunar Pay shall not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the services, however caused.'}
        />
        <ListItem
          title={'8.2 Market Risks'}
          content={'Cryptocurrency markets are volatile and shift quickly in terms of liquidity, market depth, and trading dynamics. You are fully responsible for understanding and considering the risks associated with cryptocurrencies and blockchain-based systems. You should not engage in transactions unless you have a thorough understanding of these risks.'}
        />
        <ListItem
          title={'8.3 Regulatory Risks'}
          content={'The regulatory status of cryptocurrencies and blockchain technology is unclear or unsettled in many jurisdictions. Changes in laws or regulations may materially impact the use, transfer, exchange, and value of cryptocurrencies and could limit or prevent the functionality of Lunar Pay.'}
        />
        <ListItem
          title={'8.4 Security Risks'}
          content={'While Lunar Pay takes considerable steps to ensure platform security, there is an inherent risk in transmitting and storing information in digital and electronic formats. The risk of breach or unauthorized access always exists, and you acknowledge that Lunar Pay shall not be liable for any loss or damage arising from such risks.'}
        />
        <ListItem
          title={'8.5 Blockchain Risks'}
          content={'Blockchain technologies are subject to changes, which might alter the way transactions are conducted. This includes, but is not limited to, forks, discontinuation of a blockchain, or changes in blockchain validation rules.'}
        />
        <ListItem
          title={'8.6 Asset Risks'}
          content={'Cryptocurrency assets are not backed by any government or other entity. Therefore, they have no intrinsic value, and their value is subject to significant fluctuations influenced by external factors including economic, financial, regulatory, or political events.'}
        />
        <ListItem
          title={'8.7 Technology Risks'}
          content={'You acknowledge that the nature of cryptocurrency transactions may lead to an increased risk of fraud or cyber attack and that Lunar Pay shall not be responsible for any theft or loss of cryptocurrency due to vulnerabilities in technology.'}
        />
        <ListItem
          title={'8.8 Personal Responsibility'}
          content={"You are solely responsible for assessing and managing the risks associated with using Lunar Pay's services, and you agree to hold Lunar Pay harmless for any damages or losses that may arise from these risks."}
        />
        <ListItem
          title={'8.9 Advice and Decisions'}
          content={'Lunar Pay does not provide investment, legal, or tax advice. All trading decisions, including those related to cryptocurrency assets, are made solely by you, and you are fully responsible for all aspects of your interaction with Lunar Pay.'}
        />    
      </ul>
      <h2 className="font-bold mb-6 mt-10">9. Security</h2>
      <ul>
        <ListItem
          title={'9.1 Platform Security Measures'}
          content={'Lunar Pay employs a variety of security measures designed to protect the integrity and confidentiality of user information and transactions. These measures include, but are not limited to, encryption, access controls, and regular security audits.'}
        />
        <ListItem
          title={'9.2 User Security Responsibilities'}
          content={'You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for the security of your system and to maintain a means external to our site for any reconstruction of any lost data.'}
        />
        <ListItem
          title={'9.3 Reporting Security Breaches'}
          content={'If you become aware of any unauthorized use of your account or any other breach of security, you agree to notify Lunar Pay immediately. Lunar Pay will not be liable for any loss or damage arising from your failure to comply with this section.'}
        />
        <ListItem
          title={'9.4 Phishing and Scams'}
          content={'Be aware of phishing and scams. Lunar Pay will never ask you for your passwords or to confirm sensitive account details via unsolicited emails or phone calls. Report any suspicious communication purporting to be from Lunar Pay.'}
        />
        <ListItem
          title={'9.5 Security Compromises'}
          content={'Lunar Pay is not responsible for any damages or losses resulting from system failures, unauthorized access, or other anomalies within the network. We recommend that you review your account regularly and report any unusual activity.'}
        />
        <ListItem
          title={'9.6 Responsibility for Your Devices'}
          content={'You are responsible for securing any device or network through which you access Lunar Pay services. This includes using virus protection, firewalls, and other security measures.'}
        />      
      </ul>
      <h2 className="font-bold mb-6 mt-10">10. Resource Plan</h2>
      <ul>
        <ListItem
          title={'10.1 Human Resources'}
          content={'Lunar Pay commits to maintaining a highly skilled and professional team to support our services. This includes ongoing training and development to ensure our staff can provide the best possible service to our users.'}
        />
        <ListItem
          title={'10.2 Financial Resources'}
          content={'Lunar Pay will responsibly manage financial resources to ensure the longevity and stability of the platform. This includes prudent budgeting, investment in technology and infrastructure, and maintaining reserves for unforeseen expenses.'}
        />
        <ListItem
          title={'10.3 Technological Resources'}
          content={'We continuously invest in advanced technology to enhance the performance, security, and user experience of our platform. This includes regular updates, security enhancements, and the adoption of innovative blockchain solutions.'}
        />
        <ListItem
          title={'10.4 Infrastructure Management'}
          content={'Our infrastructure is designed to scale and adapt to the growing needs of our users. We employ robust cloud services and data centers to ensure reliable access to our services at all times.'}
        />
        <ListItem
          title={'10.5 Compliance and Legal Resources'}
          content={'Lunar Pay dedicates resources to ensure compliance with relevant laws and regulations. This includes legal expertise and aligning our operations with current financial and data protection regulations.'}
        />       
      </ul>
      <h2 className="font-bold mb-6 mt-10">11. Financial Plan and Risk Management</h2>
      <ul>
        <ListItem
          title={'11.1 Financial Strategy'}
          content={"Lunar Pay's financial strategy is designed to ensure sustainable growth and stability of the platform. This includes careful management of revenues, such as transaction fees, and strategic investment back into the platform for development and improvement."}
        />
        <ListItem
          title={'11.2 Monetization and Revenue Generation'}
          content={'Lunar Pay generates revenue primarily through transaction fees and may explore other monetization strategies that align with our mission and user experience. Any changes to our revenue model will be communicated to users in advance.'}
        />
        <ListItem
          title={'11.3 Budgeting and Expenditure'}
          content={'Lunar Pay adheres to strict budgeting and expenditure controls to manage financial resources effectively. This includes regular financial auditing and reporting to maintain transparency and accountability.'}
        />
        <ListItem
          title={'11.4 Risk Identification'}
          content={'Lunar Pay continuously identifies and assesses risks that could impact our financial stability and operational effectiveness. This includes market risks, regulatory changes, technological advancements, and cybersecurity threats.'}
        />
        <ListItem
          title={'11.5 Risk Mitigation Measures'}
          content={'We implement robust risk mitigation strategies, including diversifying our investment, maintaining reserves, employing advanced security measures, and staying adaptable to changes in the blockchain and financial sectors.'}
        />
        <ListItem
          title={'11.6 User Financial Responsibility'}
          content={'Users are responsible for understanding the financial implications of using Lunar Pay, including being aware of transaction fees, the nature of cryptocurrency transactions, and the risks involved.'}
        />
        <ListItem
          title={'11.7 Continual Financial Review'}
          content={'Lunar Pay continually reviews its financial plans and strategies to ensure they align with our operational goals, market changes, and user needs.'}
        />
        <ListItem
          title={'11.8 Financial Contingency Planning'}
          content={'We maintain contingency plans to address potential financial challenges or crises. This includes setting aside emergency funds and having strategies in place for various financial scenarios.'}
        /> 
      </ul>
      <h2 className="font-bold mb-6 mt-10">12. Disclaimer of Warranties</h2>
      <ul>
        <ListItem
          title={'12.1 "As Is" Basis'}
          content={'Lunar Pay provides its services on an "as is" and "as available" basis. We make no representations or warranties of any kind, whether express, implied, statutory, or otherwise regarding the services, including any warranty that the services will be uninterrupted, error-free, or free of harmful components, or that the content is accurate, reliable, or up to date.'}
        />
        <ListItem
          title={'12.2 No Implied Warranties'}
          content={'To the full extent permitted by applicable law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and quiet enjoyment.'}
        />
        <ListItem
          title={'12.3 No Warranty of Accuracy'}
          content={'We do not warrant that the information on our platform is accurate, reliable, up-to-date, or correct; that the platform will meet your requirements; or that any defects or errors will be corrected.'}
        />
        <ListItem
          title={'12.4 Service Changes and Availability'}
          content={'Lunar Pay reserves the right to modify, suspend, or discontinue, temporarily or permanently, any part of its services with or without notice. We do not guarantee the availability of our services, and they may be subject to limitations, delays, and other problems.'}
        />
        <ListItem
          title={'12.5 Third-Party Services'}
          content={'Lunar Pay does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Lunar Pay service or any hyperlinked website or service, and Lunar Pay will not be a party to or in any way monitor any transaction between you and third-party providers of products or services.'}
        />
        <ListItem
          title={'12.6 Your Responsibility'}
          content={'You understand and agree that you use all Lunar Pay services at your own risk and discretion. You will be solely responsible for any damage to your computer system, loss of data, or any other loss or damage that results from the use of Lunar Pay services.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">13. Limitation of Liability</h2>
      <ul>
        <ListItem
          title={'13.1 Scope of Liability'}
          content={'Lunar Pay, its affiliates, officers, employees, agents, partners, and licensors will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.'}
        />
        <ListItem
          title={'13.2 Cap on Liability'}
          content={'To the maximum extent permitted by applicable law, the total liability of Lunar Pay and its affiliates, officers, employees, agents, partners, and licensors, for any claim under these Terms, including for any implied warranties, is limited to the amount you paid us to use the applicable service(s) in the past twelve months.'}
        />
        <ListItem
          title={'13.3 Exclusions'}
          content={'The limitations of damages set forth above are fundamental elements of the basis of the bargain between Lunar Pay and you. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitations may not apply to you.'}
        />
        <ListItem
          title={'13.4 Essential Services'}
          content={'You acknowledge that Lunar Pay has offered its services, set its prices, and entered into these Terms in reliance upon the warranty disclaimers and the limitations of liability set forth herein, that the warranty disclaimers and the limitations of liability set forth herein reflect a reasonable and fair allocation of risk between you and Lunar Pay, and that the warranty disclaimers and the limitations of liability set forth herein form an essential basis of the bargain between you and Lunar Pay.'}
        />
      </ul>
      <h2 className="font-bold mb-6 mt-10">14. Governing Law</h2>
      <ul>
        <ListItem
          title={'14.1 Jurisdiction'}
          content={'These Terms and Conditions shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law principles.'}
        />
        <ListItem
          title={'14.2 Compliance with Local Laws'}
          content={'While Lunar Pay operates under the jurisdiction of Romania, you are responsible for compliance with all local laws and regulations applicable to your use of our services in your own location.'}
        />
        <ListItem
          title={'14.3 Dispute Resolution'}
          content={'Any disputes arising out of or in connection with these Terms and Conditions or your use of Lunar Pay services will be resolved through arbitration in accordance with the rules of the Justice Court in Romania. By using Lunar Pay, you agree to submit to the jurisdiction of this body.'}
        />
        <ListItem
          title={'14.4 Legal Proceedings'}
          content={'In the event that arbitration is not applicable or if judicial intervention is required, legal proceedings must be filed in the courts located within Romania. By agreeing to these Terms and Conditions, you consent to the jurisdiction of these courts.'}
        />
        <ListItem
          title={'14.5 Legal Effectiveness'}
          content={'If any provision of these Terms and Conditions is found to be invalid or unenforceable under applicable law, that provision will be amended and interpreted to accomplish the objectives of such provision to the greatest extent possible, and the remaining provisions will continue in full force and effect.'}
        />
        <ListItem
          title={'14.6 Legal Notices'}
          content={'All legal notices or demands to or upon Lunar Pay shall be made in writing and sent to Lunar Pay personally, by courier, certified mail, or email to the address provided in the Contact Information section. The notice shall be effective when it is received by Lunar Pay in any of the above-mentioned ways.'}
        />
        <ListItem
          title={'14.7 Waiver of Class Actions'}
          content={'You and Lunar Pay hereby waive any right to assert any claims against the other party as a representative or member in any class or representative action, except where such waiver is prohibited by law or deemed by a court of law to be against public policy.'}
        />       
      </ul>
      <h2 className="font-bold mb-6 mt-10">15. Contact Information and Communication</h2>
      <ul>
        <ListItem
          title={'15.1 Contacting Lunar Pay'}
          content={"For any questions, concerns, or feedback regarding these Terms and Conditions, or for assistance with any aspect of our service, you can contact Lunar Pay at the following:Email Address contact@lunarpay.finance Telephone Number: [Insert Telephone Number]"}
        />
        <ListItem
          title={'15.2 Customer Support'}
          content={'Lunar Pay offers customer support services to assist with any issues related to your account, transactions, or use of our platform. Our customer support team is available via email or phone, and their operating hours are [Insert Hours of Operation].'}
        />
        <ListItem
          title={'15.3 Feedback and Suggestions'}
          content={'We welcome and encourage feedback, comments, and suggestions for improvements to the Lunar Pay services ("Feedback"). You may submit Feedback by emailing us, using our contact form, or through other communication channels provided by Lunar Pay.'}
        />
        <ListItem
          title={'15.4 Official Communication'}
          content={'Official communications from Lunar Pay to users regarding account information, service changes, or other essential updates will be delivered through the email address associated with your account or through in-app notifications.'}
        />
        <ListItem
          title={'15.5 Response Time'}
          content={'While Lunar Pay endeavors to respond to all inquiries and feedback promptly, response times may vary based on the volume of inquiries, the complexity of the issue, and availability of our support staff.'}
        />
        <ListItem
          title={'15.6 Public Forums and Social Media'}
          content={'Interactions with Lunar Pay on public forums, social media platforms, or similar channels are subject to the terms and policies of those respective platforms. Any information shared in these forums should be considered public and non-confidential.'}
        />
        <ListItem
          title={'15.7 Updates to Contact Information'}
          content={'Lunar Pay reserves the right to update its contact information at any time. Changes will be communicated through our website or via email to registered users.'}
        />
      </ul>
    </div>
  )
}