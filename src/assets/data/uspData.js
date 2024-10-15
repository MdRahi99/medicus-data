import { Shield, Laptop, Zap, Rocket, RefreshCw } from 'lucide-react';
import usp_1 from "../images/usp_1.png";
import usp_2 from "../images/usp_2.png";
import usp_3 from "../images/usp_3.png";
import usp_4 from "../images/usp_4.png";
import usp_5 from "../images/usp_5.png";

export const usps = [
  {
    title: "Swiss regulation compliance",
    icon: Shield,
    shape: "rounded-full h-32 w-32 -top-16 -left-16 bg-primary",
    extendedDescription: "We understand the importance of regulatory compliance in the Swiss healthcare sector. Our solutions are meticulously designed to adhere to all relevant Swiss regulations, including data protection laws and medical practice standards. This ensures that your practice remains fully compliant while benefiting from cutting-edge technology.",
    image: usp_1,
    stat: "100% Compliant with Swiss Regulations"
  },
  {
    title: "Practice information system integration",
    icon: Laptop,
    shape: "h-24 w-24 rotate-45 -bottom-12 -right-12 bg-primary",
    extendedDescription: "Our system is designed to work harmoniously with your existing practice information infrastructure. We offer robust APIs and integration tools that allow for smooth data flow between our platform and your current systems. This ensures that you can leverage our advanced features without disrupting your established workflows.",
    image: usp_2,
    stat: "95% of Practice Management Systems"
  },
  {
    title: "Intuitive user interface",
    icon: Zap,
    shape: "h-32 w-32 rounded-full -top-16 -right-16 bg-primary",
    extendedDescription: "We've invested heavily in creating an intuitive, user-friendly interface that caters specifically to healthcare professionals. Our design philosophy focuses on simplicity and efficiency, allowing you to navigate complex tasks with ease. The result is a significant reduction in training time and an increase in overall productivity.",
    image: usp_3,
    stat: "30% Reduction in Training Time"
  },
  {
    title: "Easy set-up",
    icon: Rocket,
    shape: "h-24 w-24 rotate-45 -top-12 -left-12 bg-primary",
    extendedDescription: "We understand that time is precious in healthcare. That's why we've streamlined our setup process to be as quick and painless as possible. Our team of experts will guide you through each step, ensuring that your system is up and running with minimal disruption to your daily operations. Most practices are fully operational within just a few days.",
    image: usp_4,
    stat: "Average Setup Time: Just 3 Days"
  },
  {
    title: "Free continuous updates",
    icon: RefreshCw,
    shape: "rounded-full h-32 w-32 -bottom-16 -right-16 bg-primary",
    extendedDescription: "In the rapidly evolving world of healthcare technology, staying up-to-date is crucial. We provide free, continuous updates to our system, ensuring that you always have access to the latest features and improvements. Our team of developers works tirelessly to incorporate user feedback and industry trends into regular updates, all at no extra cost to you.",
    image: usp_5,
    stat: "12 Major Updates Per Year, All Free"
  }
];