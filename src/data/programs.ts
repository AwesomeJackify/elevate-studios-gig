
import outsoleLogo from "../assets/images/programs/outsole/outsoleLogo.png";
import kumeteLogo from "../assets/images/programs/kumete/kumeteLogo.png";
import elevateLogo from "../assets/images/programs/elevate/elevateLogo.png";

import outsoleImg1 from "../assets/images/programs/outsole/outsole1.jpg";
import elevateImg1 from "../assets/images/programs/elevate/elevate1.jpeg";
import kumeteImg1 from "../assets/images/programs/kumete/kumete1.jpeg";

const programs = [
  {
    name: "Outsole",
    mainHeading:
      "Outsole - Sneaker Donation Drive",
    mainSummary: "At Outsole, we're on a mission to make a positive impact—one sneaker at a time. Our nationwide sneaker donation drive collects new and preloved sneakers, which we clean, restore, and package in custom sneaker boxes for families in need. But we're not just about footwear; we're committed to sustainability and environmental stewardship, too.",
    secondaryHeading: "Our Mission",
    secondarySummary: "We believe that everyone deserves access to quality footwear, and we're dedicated to uplifting families across the nation. Every pair of sneakers we receive helps not only those in need but also the planet. In partnership with Mana Tahuna Charitable Trust, for every sneaker donated, we plant a native tree. Together, we're working towards a greener future!",
    topics: [
      {
        title: "Donate",
        description: "Clean out your closets! We accept both new and gently-used sneakers. Your contributions can make a real difference."
      },
      {
        title: "Clean & Restore",
        description: "Our team of dedicated volunteers ensures each pair is cleaned and restored to meet our quality standards."
      },
      {
        title: "Package with Care",
        description: "Sneakers are packaged in custom sneaker boxes, ready to be delivered to families in need."
      }
    ],
    logo: outsoleLogo,
    image: outsoleImg1,
    url: "/programs",
  },
  {
    name: "Kumete",
    mainHeading:
      "Kumete - Health and Wellbeing",
    mainSummary: "At Kumete, we believe that every individual has unique strengths and potential. Our program integrates Māori and Pasifika values, creating a supportive environment where participants can thrive. We utilise culturally relevant practices and frameworks to guide our approach, ensuring that our solutions resonate with the communities we serve.",
    secondaryHeading: "Empowering Workshops and Wananga",
    secondarySummary: "We offer a range of empowering workshops and wananga tailored to meet the needs of our participants. Our sessions focus on",
    topics: [
      {
        title: "Building Resilience",
        description: "Equip yourself with tools and strategies to navigate life's challenges with confidence."
      },
      {
        title: "Leadership Development",
        description: "Nurture your leadership skills through interactive sessions that inspire and empower."
      },
      {
        title: "Cultural Connection",
        description: "Strengthen your identity and sense of belonging by engaging with the rich traditions and values of our communities."
      }
    ],
    logo: kumeteLogo,
    image: kumeteImg1,
    url: "/programs",
  },
  {
    name: "Elevate",
    mainHeading: "Elevate - Financial Literacy & Mentorship",
    mainSummary: "At Elevate, we are dedicated to empowering our communities through financial literacy. Our program focuses on strengthening the financial capabilities of our whānau, enabling them to make informed decisions that lead to a brighter future.",
    secondaryHeading: "Our Mission",
    secondarySummary: "We believe that financial literacy is a fundamental skill that can transform lives. Our mission is to equip individuals and families with the knowledge and tools they need to navigate their financial journeys confidently. By fostering a culture of learning and support, we aim to create a resilient community where everyone can thrive.",
    topics: [
      {
        title: "Business Acumen",
        description: "For aspiring entrepreneurs, we offer guidance on starting and managing a business, covering essential topics such as business planning, financing, and marketing."
      },
      {
        title: "Financial Literacy",
        description: "Our sessions cover fundamental concepts such as understanding credit, loans, and investments, empowering participants to make informed financial decisions."
      },
      {
        title: "Wealth Creation",
        description: "We teach strategies for building wealth over time, helping participants understand investments and long-term financial planning."
      },
      {
        title: "Mortgage Advice",
        description: "Our program includes guidance on homeownership, helping individuals navigate mortgage options and make informed decisions about buying a home."
      },
      {
        title: "Investing",
        description: "We provide insights into various investment opportunities, equipping participants with the knowledge to make smart investment choices that align with their financial goals."
      }
    ],
    logo: elevateLogo,
    image: elevateImg1,
    url: "/programs",
  },
];

export default programs;