import {
    FaCode,
    FaDesktop,
    FaMicrochip,
    FaMobile,
    FaReact,
    FaRProject,
    FaSchool,
} from "react-icons/fa6";
import profileImg from "../assets/heroImage.jpeg";
import { FaProjectDiagram } from "react-icons/fa";
import aboutImg from "./2582650.jpg"

export const assets = {
    profileImg,
    aboutImg
};

export const navMenu = ["Home", "Work", "Skills", "About", "Contact"];

export const skillsData = [
    {
        icon: FaMicrochip,
        title: "Backend",
        technologies: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "MVC Architecture"
        ],
    },
    {
        icon: FaReact,
        title: "Frontend / Web",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "API Integration",
            "JSON",
            "React.Js"
        ],
    },
    {
        icon: FaDesktop,
        title: "Database",
        technologies: [
            "MongoDB",
            "MySQL",
            "Database Design",
            "Indexing"
        ],
    },
    {
        icon: FaCode,
        title: "Developer Tools",
        technologies: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code"
        ],
    },
    {
        icon: FaMobile,
        title: "Core CS",
        technologies: [
            "OOP",
            "Data Structures",
            "Algorithms"
        ],
    },
];

export const projectData = [
    {
        title: "AI-Powered Exam Preparation Platform",
        description:
            "Full-stack AI learning platform generating notes, summaries, and diagrams using Gemini API with secure JWT authentication.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        tech: ["Node.js", "Express.js", "MongoDB", "Gemini API", "Stripe"],
    },
    {
        title: "JobWorld – Recruitment Platform",
        description:
            "Backend recruitment system with job posting, candidate management, and role-based authentication.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
        title: "TripNest Admin Operations",
        description:
            "Developed backend services for an admin panel to manage bookings, users, and operations. Built RESTful APIs with secure authentication and role-based access control.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
        title: "ChatGPT Clone (Backend)",
        description:
            "Built backend for an AI chat application integrating external AI APIs. Implemented prompt handling, API routing, and response management with scalable architecture.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        tech: ["Node.js", "Express.js", "REST API", "AI API"],
    }
];
export const profileData = [
    {
        icon: FaCode,
        title: "Languages & Tech",
        technologies: [
            "Java",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
    },
    {
        icon: FaSchool,
        title: "Education",
        technologies: [
            "B.Tech - Computer Science & Business Systems",
            "CGPA: 8.14"
        ],
    },
    {
        icon: FaProjectDiagram,
        title: "Projects",
        technologies: [
            "2 Major Backend Projects",
            "25+ APIs Built"
        ],
    },
];