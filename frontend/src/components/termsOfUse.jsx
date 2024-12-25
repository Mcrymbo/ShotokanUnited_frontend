import React, { useState } from 'react';
import { 
  ChevronRightIcon, 
  CheckCircle2Icon, 
  ShieldIcon,
  GlobeIcon,
  LockIcon,
  FileTextIcon
} from 'lucide-react';
import DefaultLayout from "../layout/DefaultLayout";

const TermSection = ({ title, content, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center 
        py-5 px-4 text-left 
        hover:bg-gray-50 transition-colors 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="flex items-center text-xl font-semibold text-gray-800">
          <Icon 
            className={`mr-4 text-blue-500 
            transition-transform 
            ${isOpen ? 'text-blue-600' : ''}`} 
            size={24}
          />
          {title}
        </span>
        <ChevronRightIcon 
          className={`text-gray-500 
          transform transition-transform 
          ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-4 pb-6 text-gray-700 space-y-4">
          {content}
        </div>
      )}
    </div>
  );
};

const TermsOfUse = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle2Icon,
      content: (
        <>
          <p>By accessing and using our platform, you enter into a legally binding agreement with our organization. These Terms of Use constitute a comprehensive contract that governs your interaction with our services.</p>
          
          <div className="bg-blue-50 p-3 rounded-md mt-4">
            <h3 className="font-semibold text-blue-800 mb-2">Key Highlights:</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Continued platform usage implies full acceptance of current terms</li>
              <li>Terms are subject to periodic updates without prior individual notification</li>
              <li>Users are responsible for reviewing terms regularly</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "User Responsibilities",
      icon: ShieldIcon,
      content: (
        <>
          <p>Users bear comprehensive responsibility for maintaining account security, ensuring all activities comply with our platform's guidelines, and protecting their login credentials.</p>
          
          <div className="bg-green-50 p-3 rounded-md mt-4">
            <h3 className="font-semibold text-green-800 mb-2">Security Requirements:</h3>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Implement strong, unique passwords</li>
              <li>Enable two-factor authentication</li>
              <li>Immediately report unauthorized access</li>
              <li>Do not share account credentials</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Content Usage and Intellectual Property",
      icon: FileTextIcon,
      content: (
        <>
          <p>All content on our platform is protected by international copyright and intellectual property laws. Unauthorized reproduction, distribution, or commercial exploitation is strictly prohibited.</p>
          
          <div className="bg-purple-50 p-3 rounded-md mt-4">
            <h3 className="font-semibold text-purple-800 mb-2">Content Usage Guidelines:</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Personal, non-commercial use only</li>
              <li>Explicit written permission required for any reproduction</li>
              <li>Attribution must be provided for referenced content</li>
              <li>Platform reserves right to pursue legal action for violations</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Privacy and Data Protection",
      icon: LockIcon,
      content: (
        <>
          <p>We are committed to protecting user data through robust security measures, transparent practices, and compliance with global data protection regulations.</p>
          
          <div className="bg-orange-50 p-3 rounded-md mt-4">
            <h3 className="font-semibold text-orange-800 mb-2">Privacy Commitments:</h3>
            <ul className="list-disc list-inside space-y-2 text-orange-700">
              <li>End-to-end data encryption</li>
              <li>Strict non-disclosure of personal information</li>
              <li>Comprehensive anonymization of user data</li>
              <li>Regular third-party privacy audits</li>
              <li>No selling of user data to third parties</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-3">
              Terms of Use
            </h1>
            <p className="text-center flex items-center justify-center gap-2">
              <GlobeIcon className="w-5 h-5" />
              Last Updated: December 4, 2024
            </p>
          </div>
          
          <div>
            {terms.map((term, index) => (
              <TermSection 
                key={index} 
                title={term.title} 
                content={term.content}
                icon={term.icon}
              />
            ))}
          </div>
          
          <div className="p-6 bg-gray-100 text-center">
            <p className="text-gray-700 mb-4">
              By continuing to use our platform, you acknowledge that you have read, understood, and agree to these comprehensive Terms of Use.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Accept Terms
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TermsOfUse;