import React from "react";
import { ListItem } from ".";

const faqData = [
  {
    title: 'What is Lunar Pay?',
    content: 'Lunar Pay is a revolutionary financial platform on the MultiversX blockchain, designed to simplify and enhance financial operations in the Web3 ecosystem. It offers a smart contract-based wallet for managing financial transactions with enhanced flexibility and control.'
  },
  {
    title: 'What makes Lunar Pay secure?',
    content: 'Lunar Pay prioritizes security by being non-custodial and permissionless. This means users have full control over their funds without needing extra permission to use the platform. Additionally, regular security audits and compliance with blockchain regulations enhance the platform\'s safety.'
  },
  {
    title: 'Can Lunar Pay automate payroll processes?',
    content: 'Absolutely. Lunar Pay uses the MultiversX blockchain to automate payroll, enabling businesses to efficiently distribute salaries and bonuses while ensuring security and compliance.'
  },
  {
    title: 'Does Lunar Pay support subscription management?',
    content: 'Yes, Lunar Pay offers a crypto subscription solution for businesses, streamlining the process of generating subscription revenue and maximizing customer retention.'
  },
  {
    title: 'How can Lunar Pay assist in portfolio management?',
    content: 'Lunar Pay facilitates efficient token transfers to multiple recipients and provides users with insights into their expenditures and anticipated earnings, aiding in effective portfolio management.'
  },
  {
    title: 'What is Lunar Pay Donations?',
    content: 'Lunar Pay Donations is a feature designed for content creators, nonprofit organizations, and individuals to manage and accept recurring donations seamlessly on the MultiversX blockchain.'
  },
  {
    title: 'Who can benefit from using Lunar Pay?',
    content: 'Lunar Pay is tailored for individuals, businesses, content creators, and nonprofit organizations looking for an efficient, secure, and user-friendly platform for managing financial transactions in the Web3 space.'
  },
  {
    title: 'Is Lunar Pay compliant with financial regulations?',
    content: 'Yes, Lunar Pay is developed with a strong focus on compliance. We continually monitor regulatory changes and ensure that our platform adheres to the relevant laws and regulations in the blockchain and cryptocurrency sectors.'
  },
  {
    title: 'How can I start using Lunar Pay?',
    content: 'Getting started with Lunar Pay is simple. Just sign up on our website, and you can begin managing your financial transactions immediately.'
  },
  {
    title: 'Are there any fees associated with using Lunar Pay?',
    content: 'Lunar Pay charges a transaction fee of 0.5% per transaction. This fee structure is designed to sustain our platform while keeping it accessible to a wide range of users. Besides this, there are the MultiversX blockchain fees, which are minimal.'
  },
  {
    title: 'What kind of customer support does Lunar Pay offer?',
    content: 'We offer robust customer support including a helpdesk, phone and email support to ensure our users have all the assistance they need.'
  }
];

export const FrequentlyAskedQuestions: React.FC = () => {
  
  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      <h1 className="text-2xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
      <ul>
        {faqData.map((item, index) => (
          <ListItem
            key={item.title}
            title={item.title}
            content={item.content}
            isFirst={index === 0}
          />
        ))}
      </ul>
    </div>
  )
}
