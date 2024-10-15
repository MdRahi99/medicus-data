import { FaUserMd, FaFileInvoice, FaClipboardCheck, FaHospital, FaNotesMedical } from 'react-icons/fa';
import services_1 from "../images/services_1.png";
import services_2 from "../images/services_2.png";
import services_3 from "../images/services_3.png";
import services_4 from "../images/services_4.png";
import services_5 from "../images/services_5.png";

export const servicesData = [
  {
    id: 1,
    title: 'Smart Patient Onboarding',
    description: 'Seamlessly transfer and integrate patient data for quick, error-free onboarding.',
    extendedDescription: 'Our Smart Patient Onboarding system revolutionizes the way medical practices handle new patients. By leveraging advanced data integration techniques, we ensure a smooth transition of patient information from various sources into your system. This not only saves time but also significantly reduces the chance of errors in patient records. The system is designed to be user-friendly, allowing your staff to focus more on patient care rather than paperwork.',
    icon: <FaUserMd size={28} className="text-primary" />,
    stat: '30 min saved per patient',
    image: services_1
  },
  {
    id: 2,
    title: 'AI-Powered Documentation',
    description: 'Automate consultation notes and reports with advanced AI technology.',
    extendedDescription: 'Our AI-Powered Documentation system is at the forefront of medical technology. By utilizing state-of-the-art natural language processing and machine learning algorithms, we can automatically generate accurate and detailed consultation notes and reports. This not only saves time for healthcare providers but also ensures consistency and completeness in medical documentation. The system learns from each interaction, continuously improving its accuracy and efficiency.',
    icon: <FaClipboardCheck size={28} className="text-primary" />,
    stat: '35% accuracy improvement',
    image: services_2
  },
  {
    id: 3,
    title: 'Intelligent Billing System',
    description: 'Optimize invoicing and payment processes to maximize revenue.',
    extendedDescription: "Our Intelligent Billing System streamlines the entire financial process for medical practices. By automating invoicing and integrating with various payment systems, we help maximize your revenue while minimizing errors and delays. The system uses machine learning to identify potential billing issues before they occur, ensuring smooth transactions and improved cash flow. It also provides detailed financial analytics to help you make informed decisions about your practice's financial health.",
    icon: <FaFileInvoice size={28} className="text-primary" />,
    stat: '12% revenue increase',
    image: services_3
  },
  {
    id: 4,
    title: 'Smart Form Automation',
    description: 'Auto-fill insurance and hospital forms with validated patient data.',
    extendedDescription: 'Say goodbye to tedious form-filling with our Smart Form Automation system. By leveraging the patient data already in your system, we can automatically populate insurance forms, hospital admission documents, and other necessary paperwork. This not only saves time but also significantly reduces errors that can occur during manual data entry. The system is intelligent enough to flag any inconsistencies or missing information, ensuring that all forms are complete and accurate before submission.',
    icon: <FaHospital size={28} className="text-primary" />,
    stat: '60% error reduction',
    image: services_4
  },
  {
    id: 5,
    title: 'Comprehensive Health Analytics',
    description: 'Analyze and compare hospital reports with patient history for better insights.',
    extendedDescription: 'Our Comprehensive Health Analytics tool brings the power of big data to your medical practice. By analyzing and comparing hospital reports with detailed patient histories, we provide unprecedented insights into patient health trends, treatment efficacy, and potential areas for improvement in care delivery. The system uses advanced algorithms to identify patterns that might be missed by human analysis, helping healthcare providers make more informed decisions and potentially catching health issues before they become serious problems.',
    icon: <FaNotesMedical size={28} className="text-primary" />,
    stat: '25% diagnostic accuracy boost',
    image: services_5
  },
];