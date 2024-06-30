//Skills
import { ImMobile } from "react-icons/im";
import { IoMdPricetags } from "react-icons/io";
import Testing from '../assets/icons/carbon_ibm-engineering-test-mgmt.png'
import { FaCode } from "react-icons/fa6";

export const skills = [
    {
      id: 1,
      icon: <ImMobile size={40} className="text-teal-600"/>,
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      icon: <IoMdPricetags size={40} className="text-teal-600"/>,
      title: "Front-End Frameworks",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      image: Testing,
      title: "Testing and Debugging",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      icon: <FaCode size={40} className="text-teal-600"/>,
      title: "Cloud Services",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    }
  ];

  // Portfolio
  import Project1 from '../assets/icons/Image.png'
  import Project2 from '../assets/icons/Image (2).png'
  import Project3 from '../assets/icons/Image (3).png'
  
  export const portfolios = [
    {
      id: 1,
      image: Project1,
      title: "Ahuse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkUrl: "http://",
    },
    {
      id: 2,
      image: Project2,
      title: "App Dashboard",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkUrl: "http://",
    },
    {
      id: 3,
      image: Project3,
      title: "Easy Rent",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkUrl: "http://",
    }
  ];

  import Dianne from "../assets/icons/Avatar Image (2).png"
  import Kriston from "../assets/icons/Avatar Image.png"
  import Murphy from "../assets/icons/Avatar Image (1).png"

  // Feedback
  export const feedbacks = [
    {
      id: 1,
      name: "Dianne Russell",
      image: Dianne,
      company: "Starbucks",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      name: "Kristin Watson",
      image: Kriston,
      company: "Louis Vuitton",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      name: "Kathryn Murphy",
      image: Murphy,
      company: "McDonald's",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    }
  ];


