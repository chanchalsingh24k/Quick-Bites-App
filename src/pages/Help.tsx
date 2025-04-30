import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSection {
  id: string;
  title: string;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqSections: FAQSection[] = [
  {
    id: 'partner-onboarding',
    title: 'Partner Onboarding',
    questions: [
      {
        id: 'partner-restaurant',
        question: 'I want to partner my restaurant with QuickBite',
        answer: "To partner your restaurant with QuickBite, you'll need to fill out our registration form and provide necessary documentation. Our team will guide you through the process.",
      },
      {
        id: 'mandatory-docs',
        question: 'What are the mandatory documents needed to list my restaurant on QuickBite?',
        answer: 'The mandatory documents include: FSSAI license, GST registration, Shop & Establishment license, Pan Card, and Menu Card with prices.',
      },
      {
        id: 'google-reserve',
        question: 'I want to opt-out from Google reserve',
        answer: 'You can opt-out from Google reserve by contacting our partner support team or updating your preferences in the partner dashboard.',
      },
      {
        id: 'go-live',
        question: 'After I submit all documents, how long will it take for my restaurant to go live on QuickBite?',
        answer: 'Once all documents are verified, it typically takes 3-5 business days for your restaurant to go live on QuickBite.',
      },
      {
        id: 'onboarding-fees',
        question: 'What is this one time Onboarding fees? Do I have to pay for it while registering?',
        answer: 'There is a one-time onboarding fee that covers platform integration and setup. This fee is payable during the registration process.',
      },
      {
        id: 'support-contact',
        question: 'Who should I contact if I need help & support in getting onboarded?',
        answer: 'You can reach our partner support team at partner.support@QuickBite.com or call our dedicated partner helpline.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    questions: [
      {
        id: 'terms',
        question: 'Terms of Service',
        answer: 'Please review our comprehensive terms of service that govern the use of our platform.',
      },
      {
        id: 'privacy',
        question: 'Privacy Policy',
        answer: 'Our privacy policy details how we collect, use, and protect your personal information.',
      },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    questions: [
      {
        id: 'delivery-time',
        question: 'What is the average delivery time?',
        answer: 'Our average delivery time is 30-45 minutes, depending on the distance and order volume.',
      },
      {
        id: 'payment-methods',
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit/debit cards, UPI, net banking, and cash on delivery.',
      },
    ],
  },
  {
    id: 'QuickBitemart',
    title: 'QuickBite Onboarding',
    questions: [
      {
        id: 'QuickBite-partner',
        question: 'How can I become an QuickBite partner?',
        answer: 'To become an QuickBite partner, please fill out our dedicated QuickBite partnership form.',
      },
    ],
  },
  {
    id: 'irctc',
    title: 'IRCTC FAQ',
    questions: [
      {
        id: 'irctc-delivery',
        question: 'How does IRCTC food delivery work?',
        answer: 'We deliver food to train passengers at selected railway stations. Order must be placed at least 2 hours before the train arrival.',
      },
    ],
  },
];

const Help = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('partner-onboarding');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
          <p className="text-gray-600 mb-8">Let's take a step ahead and help you better.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="space-y-1">
              {faqSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setExpandedSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    expandedSection === section.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              {faqSections.map((section) => (
                <div
                  key={section.id}
                  className={expandedSection === section.id ? '' : 'hidden'}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.questions.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedQuestion(expandedQuestion === item.id ? null : item.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                        >
                          <span className="font-medium text-gray-900">{item.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedQuestion === item.id ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedQuestion === item.id && (
                          <div className="px-4 pb-4 text-gray-600">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
  