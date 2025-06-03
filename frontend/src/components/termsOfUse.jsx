import React, { useState } from 'react';
import { 
  ChevronRightIcon, 
  CheckCircle2Icon, 
  ShieldIcon,
  GlobeIcon,
  LockIcon,
  FileTextIcon,
  ScaleIcon,
  BanIcon,
  MessageSquareIcon,
  AlertTriangleIcon
} from 'lucide-react';
import DefaultLayout from "../layout/DefaultLayout";
import { motion } from 'framer-motion';

const TermSection = ({ title, content, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center 
        py-5 px-4 text-left 
        hover:bg-gray-50 transition-colors 
        focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        <span className="flex items-center text-xl font-semibold text-gray-800">
          <Icon 
            className={`mr-4 transition-all duration-300
            ${isOpen ? 'text-blue-600 scale-110' : 'text-blue-500'}`} 
            size={24}
          />
          {title}
        </span>
        <ChevronRightIcon 
          className={`text-gray-500 
          transform transition-transform duration-300
          ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 pb-6 text-gray-700 space-y-4"
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

const TermsOfUse = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle2Icon,
      content: (
        <>
          <p>By accessing and using the Shotokan United Kenya website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-blue-800 mb-2">Key Points:</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>These terms apply to all users, members, and visitors</li>
              <li>Terms may be updated without prior notice</li>
              <li>Continued use implies acceptance of current terms</li>
              <li>Users must be at least 13 years old to use our services</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Membership and Registration",
      icon: ShieldIcon,
      content: (
        <>
          <p>Membership in Shotokan United Kenya requires registration and adherence to our guidelines. Members must provide accurate and complete information during registration.</p>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-green-800 mb-2">Registration Requirements:</h3>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Valid email address and contact information</li>
              <li>Accurate personal details</li>
              <li>Strong password creation</li>
              <li>Agreement to receive essential communications</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Training and Events",
      icon: FileTextIcon,
      content: (
        <>
          <p>Participation in training sessions and events is subject to specific terms and conditions. All participants must follow safety guidelines and instructor directions.</p>
          
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-purple-800 mb-2">Training Guidelines:</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Proper attire and equipment required</li>
              <li>Adherence to dojo etiquette</li>
              <li>Prompt arrival to scheduled sessions</li>
              <li>Respect for instructors and fellow students</li>
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
          <p>We prioritize the protection of your personal information and comply with relevant data protection regulations.</p>
          
          <div className="bg-orange-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-orange-800 mb-2">Data Protection Measures:</h3>
            <ul className="list-disc list-inside space-y-2 text-orange-700">
              <li>Secure data storage and transmission</li>
              <li>Limited data sharing with third parties</li>
              <li>Regular security audits</li>
              <li>User control over personal information</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Code of Conduct",
      icon: ScaleIcon,
      content: (
        <>
          <p>Members must maintain appropriate behavior and respect for others while using our services or participating in activities.</p>
          
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-red-800 mb-2">Prohibited Conduct:</h3>
            <ul className="list-disc list-inside space-y-2 text-red-700">
              <li>Harassment or discrimination</li>
              <li>Disruptive behavior</li>
              <li>Unauthorized recording or photography</li>
              <li>Violation of safety protocols</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Payment and Refunds",
      icon: BanIcon,
      content: (
        <>
          <p>All payments for membership, events, or services are subject to our payment and refund policies.</p>
          
          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Payment Terms:</h3>
            <ul className="list-disc list-inside space-y-2 text-yellow-700">
              <li>Fees must be paid in advance</li>
              <li>Refunds available within 48 hours of purchase</li>
              <li>No refunds for attended sessions</li>
              <li>Late payment fees may apply</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Communication",
      icon: MessageSquareIcon,
      content: (
        <>
          <p>By using our services, you agree to receive communications from Shotokan United Kenya regarding your membership, events, and important updates.</p>
          
          <div className="bg-indigo-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Communication Channels:</h3>
            <ul className="list-disc list-inside space-y-2 text-indigo-700">
              <li>Email notifications</li>
              <li>SMS alerts for important updates</li>
              <li>In-app notifications</li>
              <li>Newsletter subscriptions</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Liability and Disclaimers",
      icon: AlertTriangleIcon,
      content: (
        <>
          <p>Participation in martial arts activities involves inherent risks. Members acknowledge these risks and agree to our liability terms.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Important Notices:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Participation at own risk</li>
              <li>Medical clearance recommended</li>
              <li>Insurance coverage advised</li>
              <li>Limitation of liability</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-3">
              Terms and Conditions
            </h1>
            <p className="text-center flex items-center justify-center gap-2">
              <GlobeIcon className="w-5 h-5" />
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {terms.map((term, index) => (
              <TermSection 
                key={index} 
                title={term.title} 
                content={term.content}
                icon={term.icon}
              />
            ))}
          </div>
          
          <div className="p-8 bg-gray-50">
            <p className="text-gray-700 mb-6 text-center">
              By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Accept Terms
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                Print Terms
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default TermsOfUse;