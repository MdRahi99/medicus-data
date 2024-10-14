import { FaUserMd, FaFileInvoice, FaClipboardCheck, FaHospital, FaNotesMedical } from 'react-icons/fa';

export const services = [
    {
        title: 'Smart Patient Onboarding',
        description: 'Seamlessly transfer and integrate patient data for quick, error-free onboarding.',
        icon: <FaUserMd size={28} className="text-primary" />,
        stat: '30 min saved per patient',
    },
    {
        title: 'AI-Powered Documentation',
        description: 'Automate consultation notes and reports with advanced AI technology.',
        icon: <FaClipboardCheck size={28} className="text-primary" />,
        stat: '35% accuracy improvement',
    },
    {
        title: 'Intelligent Billing System',
        description: 'Optimize invoicing and payment processes to maximize revenue.',
        icon: <FaFileInvoice size={28} className="text-primary" />,
        stat: '12% revenue increase',
    },
    {
        title: 'Smart Form Automation',
        description: 'Auto-fill insurance and hospital forms with validated patient data.',
        icon: <FaHospital size={28} className="text-primary" />,
        stat: '60% error reduction',
    },
    {
        title: 'Comprehensive Health Analytics',
        description: 'Analyze and compare hospital reports with patient history for better insights.',
        icon: <FaNotesMedical size={28} className="text-primary" />,
        stat: '25% diagnostic accuracy boost',
    },
];