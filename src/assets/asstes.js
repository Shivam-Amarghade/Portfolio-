import {
    FaCode,
    FaDesktop,
    FaMicrochip,
    FaMobile,
    FaReact,
    FaSchool,
    FaDiagramProject,
    FaBuildingColumns,
    FaAward
} from "react-icons/fa6";
import profileImg from "../assets/heroImage.jpeg";
import aboutImg from "./2582650.jpg";
import edakImg from "./edak.png";

export const assets = {
    profileImg,
    aboutImg,
    edakImg
};

export const personalInfo = {
    name: "Shivam Amarghade",
    title: "Software Engineer / Full-Stack Developer",
    location: "Bhopal, MP (Open to relocate – Indore & Worldwide)",
    phone: "+91 8223846001",
    email: "shivamamarghade@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivam-amarghade",
    github: "https://github.com/Shivam-Amarghade",
    resumeLink: "/Shivam_Amarghade_Resume.pdf"
};

export const navMenu = ["Home", "Experience", "Work", "Skills", "About", "Contact"];

export const experienceData = [
    {
        role: "Software Engineering & AI Foundation Intern",
        company: "MPOnline Limited (Joint Venture – Govt of MP & TCS)",
        location: "Bhopal, MP",
        duration: "May 2026 – Oct 2026 (6 Months)",
        type: "Enterprise Internship",
        description:
            "Worked on frontend engineering and module testing for E-DAK, an enterprise Correspondence Management System deployed across government departments on a live e-Governance platform serving real citizens.",
        keyPoints: [
            "Contributed to E-DAK enterprise correspondence portal (live at edak.mponline.gov.in)",
            "Collaborated with 3 cross-functional teams (developers, QA, business analysts) over a 6-month live delivery cycle",
            "Applied React.js, Node.js, Express.js and database concepts to production-grade government applications",
            "Conducted end-to-end module testing, functional verification, and QA re-validation"
        ],
        liveUrl: "https://edak.mponline.gov.in",
        image: edakImg
    }
];

export const projectData = [
    {
        title: "E-DAK — Enterprise Correspondence Management Portal",
        category: "Enterprise & Govt",
        featured: true,
        stats: "Live e-Governance Platform • MPOnline & TCS",
        description:
            "Enterprise-grade Correspondence Management System used by government bodies, institutions, and organizations to streamline official communications and citizen workflows. Delivered during MPOnline internship.",
        image: edakImg,
        tech: ["React.js", "JavaScript", "REST APIs", "Module Testing", "e-Governance"],
        github: "https://github.com/Shivam-Amarghade",
        demo: "https://edak.mponline.gov.in",
        isLiveGov: true
    },
    {
        title: "AI-Powered Exam Preparation Platform",
        category: "AI & Full Stack",
        featured: true,
        stats: "Gemini API • Stripe Subscriptions • Render",
        description:
            "Independently designed, coded, and deployed a full-stack learning platform featuring secure JWT authentication, 15+ RESTful API endpoints, Gemini API content generation, and Stripe credit-based payments. Optimized MongoDB indexing, improving API response times by ~40%.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Stripe", "Render"],
        github: "https://github.com/Shivam-Amarghade",
        demo: "https://github.com/Shivam-Amarghade",
        isLiveGov: false
    },
    {
        title: "JobWorld – Backend Recruitment Platform",
        category: "Backend & Systems",
        featured: true,
        stats: "12+ REST APIs • Role-Based Access Control",
        description:
            "Engineered complete backend architecture and database schemas managing job postings, applicants, and recruiter workflows. Built JWT authentication with strict role-based access control for 3 roles (Admin, Recruiter, Candidate) and centralized validation.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "Error Handling"],
        github: "https://github.com/Shivam-Amarghade",
        demo: "https://github.com/Shivam-Amarghade",
        isLiveGov: false
    },
    {
        title: "TripNest Admin Operations Platform",
        category: "Backend & Systems",
        featured: false,
        stats: "15+ REST Endpoints • High Reliability",
        description:
            "Robust backend services and admin panel APIs for managing travel bookings, user data, activity logs, and operations with high-performance querying and role-based permissions.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
        tech: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "RBAC"],
        github: "https://github.com/Shivam-Amarghade",
        demo: "https://github.com/Shivam-Amarghade",
        isLiveGov: false
    }
];

export const skillsData = [
    {
        icon: FaMicrochip,
        title: "Backend Engineering",
        category: "backend",
        level: "92%",
        technologies: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "MVC Architecture",
            "Centralized Error Handling"
        ],
    },
    {
        icon: FaReact,
        title: "Frontend Development",
        category: "frontend",
        level: "88%",
        technologies: [
            "React.js",
            "Redux",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "API Integration",
            "Responsive Design"
        ],
    },
    {
        icon: FaDesktop,
        title: "Databases & Storage",
        category: "database",
        level: "88%",
        technologies: [
            "MongoDB",
            "Mongoose ODM",
            "MySQL",
            "Database Indexing",
            "Schema Optimization"
        ],
    },
    {
        icon: FaCode,
        title: "Languages & Tools",
        category: "tools",
        level: "90%",
        technologies: [
            "Java",
            "JavaScript",
            "Git & GitHub",
            "Postman API Testing",
            "Render Deployment"
        ],
    },
    {
        icon: FaMobile,
        title: "AI & Modern Workflows",
        category: "ai",
        level: "85%",
        technologies: [
            "Gemini API Integration",
            "Antigravity",
            "Cursor & Claude Code",
            "Prompt Engineering"
        ],
    },
    {
        icon: FaSchool,
        title: "CS Fundamentals",
        category: "core",
        level: "85%",
        technologies: [
            "Data Structures",
            "Algorithms",
            "OOP (Object-Oriented)",
            "System Reliability"
        ],
    },
];

export const achievementsData = [
    {
        title: "Programming in Java",
        issuer: "NPTEL Certification",
        description: "Comprehensive certification covering advanced Object-Oriented Programming and Java fundamentals."
    },
    {
        title: "Reverse Coding X",
        issuer: "Shaastra 2026 — IIT Madras",
        description: "Problem-solving and algorithmic reverse engineering competition at IIT Madras annual technical festival."
    },
    {
        title: "Academic Excellence — 9.3 SGPA",
        issuer: "OIST Bhopal (7th Semester)",
        description: "Maintained strong academic standing across CS & Business Systems curriculum (8.14 Cumulative CGPA)."
    }
];

export const profileData = [
    {
        icon: FaCode,
        title: "Technical Stack",
        technologies: [
            "Java & JavaScript",
            "Node.js, Express & React.js",
            "MongoDB & MySQL",
            "Redux & REST APIs"
        ],
    },
    {
        icon: FaSchool,
        title: "Education & OIST",
        technologies: [
            "B.Tech in CS & Business Systems (2022–2026)",
            "CGPA: 8.14 / 10 (9.3 SGPA in 7th sem)",
            "Oriental Institute of Science & Technology"
        ],
    },
    {
        icon: FaBuildingColumns,
        title: "Enterprise Experience",
        technologies: [
            "Software & AI Intern at MPOnline (MP Govt + TCS)",
            "Worked on live E-DAK e-Governance platform",
            "Cross-functional enterprise collaboration"
        ],
    },
];