/**
 * Experience Data
 * 
 * Timeline-compatible data structure for career/experience section.
 * Used by the Timeline component.
 * 
 * Each item contains:
 * - year: Time period
 * - title: Role/Position
 * - subtitle: Company name
 * - description: Brief overview (optional)
 * - highlights: Array of responsibilities/achievements
 * - tags: Technologies/skills used
 */
export const experienceTimeline = [
    {
        year: "Jan 2026 – Present",
        title: "Full Stack Developer",
        subtitle: "Vedseem Infotech",
        description:
            "Transitioned from internship to full-time role. Currently learning Docker and Google Cloud deployment in production environments.",
        highlights: [
            "Developed and maintained backend REST APIs using Node.js and Express",
            "Integrated frontend applications with backend APIs",
            "Assisted in application deployment and environment setup",
            "Managed DNS records and VPS hosting tasks",
            "Worked with Git-based workflows for team collaboration",
        ],
        tags: ["Node.js", "Express.js", "AWS EC2", "VPS", "DNS", "Git"],
    },
    {
        year: "Oct 2025 – Dec 2025",
        title: "Full Stack Developer Intern",
        subtitle: "Vedseem Infotech",
        description:
            "Backend-focused internship with hands-on experience in REST API development and cloud deployment.",
        highlights: [
            "Developed backend APIs using Node.js and Express",
            "Handled AWS EC2 deployment, server setup, and basic production issues",
            "Performed API integration with simple frontend interfaces",
            "Assisted in DNS configuration and hosting setup",
            "Used GitLab for version control",
        ],
        tags: ["Node.js", "Express.js", "AWS EC2", "GitLab", "Nginx"],
    },
];

/**
 * Experience Card Data (for the highlight cards beside timeline)
 */
export const experienceHighlights = {
    company: "Vedseem Infotech",
    role: "Full Stack Developer",
    year: "Jan 2026 – Present",
    type: "Full-Time",
    summary:
        "Backend-focused Full Stack Developer with hands-on experience in REST API development, API integration, AWS EC2 deployment, VPS hosting, and DNS configuration. Currently learning Docker and Google Cloud deployment.",
    stack: ["Node.js", "Express.js", "AWS EC2", "VPS", "DNS", "Docker", "Git"],
};
