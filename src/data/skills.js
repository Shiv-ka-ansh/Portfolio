import {
    FiLayout,
    FiServer,
    FiDatabase,
    FiTerminal,
    FiTool,
    FiFeather,
} from "react-icons/fi";

/**
 * Skills Data
 * 
 * COLOR PALETTE:
 * - Primary: #213448
 * - Secondary: #547792
 * - Tertiary: #94B4C1
 * - Accent: #EAE0CF
 * 
 * Each skill group contains:
 * - title: Category name
 * - description: Brief explanation of expertise
 * - icon: React icon component
 * - stack: Array of technologies
 * - accent: Gradient classes using new palette
 */
export const skillGroups = [
    {
        title: "Backend Development",
        description:
            "REST API development, server-side logic, and database integration.",
        icon: FiServer,
        stack: ["Node.js", "Express.js", "REST APIs", "API Integration"],
        accent: "from-[#547792]/25 via-[#94B4C1]/10 to-[#213448]/40",
    },
    {
        title: "Frontend Development",
        description:
            "Building responsive user interfaces with modern frameworks and libraries.",
        icon: FiLayout,
        stack: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        accent: "from-[#94B4C1]/20 via-[#547792]/10 to-[#213448]/40",
    },
    {
        title: "Cloud & Hosting",
        description:
            "Deployment, server management, and cloud infrastructure setup.",
        icon: FiDatabase,
        stack: ["AWS EC2", "VPS Hosting", "DNS Configuration", "Nginx"],
        accent: "from-[#EAE0CF]/15 via-[#94B4C1]/10 to-[#213448]/40",
    },
    {
        title: "DevOps (Learning)",
        description:
            "Containerization and cloud deployment for production environments.",
        icon: FiTerminal,
        stack: ["Docker", "Google Cloud Run"],
        accent: "from-[#547792]/20 via-[#EAE0CF]/10 to-[#213448]/40",
    },
    {
        title: "Version Control",
        description:
            "Collaborative development with Git-based workflows and team practices.",
        icon: FiTool,
        stack: ["Git", "GitLab", "GitHub"],
        accent: "from-[#94B4C1]/25 via-[#547792]/15 to-[#213448]/40",
    },
    {
        title: "Full Stack Integration",
        description: "Connecting frontend and backend systems with clean APIs.",
        icon: FiFeather,
        stack: ["API Integration", "Frontend-Backend Connectivity", "REST"],
        accent: "from-[#EAE0CF]/20 via-[#94B4C1]/10 to-[#213448]/40",
    },
];
