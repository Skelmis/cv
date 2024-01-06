import {GitHubIcon, LinkedInIcon, XIcon} from "@/components/icons";

export const RESUME_DATA = {
    name: "Ethan McKee-Harris",
    initials: "EMH",
    location: "Wellington, New Zealand",
    locationLink: "https://www.google.com/maps/place/Wellington",
    about:
        "Ethical hacker and open source developer attempting to make the world a better place one piece of software at a time.",
    summary:
        "As a cyber security consultant, I have helped to improve the security posture for many clients in both the public and private sector." +
        " Within the security industry I currently specialise in testing web applications and auditing the security of voice biometric systems. " +
        "In my spare time I build software within various domains, each piece serving it's own purpose. Further, " +
        "I also manage a couple open source communities with the goal of improving the ecosystem for our end users.",
    avatarUrl: "https://avatars.githubusercontent.com/u/47520067?v=4",
    personalWebsiteUrl: "https://skelmis.co.nz",
    contact: {
        email: "ethanmkh2@gmail.com",
        // tel: "+",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/Skelmis",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ethan-m-h/",
                icon: LinkedInIcon,
            }
        ],
    },
    education: [
        {
            school: "The University of Waikato",
            degree: "Bachelor of Science majoring in Computer Science",
            start: "2020",
            end: "2022",
        },
    ],
    work: [
        {
            company: "ZX Security",
            link: "https://zxsecurity.co.nz/",
            badges: [],
            title: "Junior Security Consultant → Security Consultant",
            start: "2023",
            end: "Present",
            description:
                "I work as a security consultant conducting ethical hacking for our clients. My areas of speciality include web application's and voice biometrics.",
        },
        {
            company: "Endace",
            link: "https://www.endace.com/",
            badges: [],
            title: "Test Engineer",
            start: "2022",
            end: "2022",
            description:
                "Continued to expand the functionality of internal tooling while conducting further automated test development.",
        },
        {
            company: "Endace",
            link: "https://www.endace.com/",
            badges: ["Internship"],
            title: "Software Quality Assurance Intern",
            start: "2021",
            end: "2022",
            description:
                "I spent 13 weeks working at Endace as an intern in the quality assurance team. Over this\n" +
                "period, I developed automation tools to take certain task execution times from days to minutes.",
        },
    ],
    skills: [
        "Web Application Penetration Testing",
        "Voice Biometric Penetration Testing",
        "Static Code Analysis",
        "Python",
        "Java",
        "SQL",
        "Mongo DB",
        "Websockets",
        "Infrastructure Management",
        "Client Interaction's & Technical Reporting"
    ],
    projects: [
        {
            title: "Dark Haven Photography",
            techStack: [
                "Photography",
            ],
            description: "I do photography in my spare time under this brand",
            link: {
                label: "darkhaven.co.nz",
                href: "https://darkhaven.co.nz",
            },
        },
        {
            title: "Various CVE's",
            techStack: [
                "Python",
                "Websockets",
            ],
            description: "The only Discord suggestions bot you'll ever need",
            link: {
                label: "A list of my CVE's",
                href: "https://data.skelmis.co.nz/achievements",
            },
        },
        {
            title: "Discord Anti Spam",
            techStack: [
                "Python",
            ],
            description: "A Python package for automated moderation of spam within text mediums, primarily Discord.",
            link: {
                label: "Discord Anti Spam github",
                href: "https://github.com/Skelmis/Discord-Anti-Spam",
            },
        },
        {
            title: "Alaric",
            techStack: [
                "Python",
                "Mongo DB",
            ],
            description: "A simplistic yet powerful asynchronous MongoDB query engine",
            link: {
                label: "Alaric github",
                href: "https://github.com/Skelmis/Alaric",
            },
        },
        {
            title: "Function Cooldowns",
            techStack: [
                "Python",
            ],
            description: "A simplistic decorator based approach to rate limiting function calls",
            link: {
                label: "Function cooldowns github",
                href: "https://github.com/Skelmis/Function-Cooldowns",
            },
        },
        {
            title: "Zonis",
            techStack: [
                "Python",
                "Websockets",
            ],
            description: "Agnostic & simple inter process communication for Python programs",
            link: {
                label: "Zonis github",
                href: "https://github.com/Skelmis/Zonis",
            },
        },
        {
            title: "Suggestions bot",
            techStack: [
                "Python",
                "Mongo DB",
            ],
            description: "The only Discord suggestions bot you'll ever need",
            link: {
                label: "suggestions.gg",
                href: "https://suggestions.gg/",
            },
        },
        {
            title: "Nextcord",
            techStack: [
                "Python",
            ],
            description: "A popular Python wrapper for the Discord API that I help to manage the open source community for",
            link: {
                label: "Nextcord github",
                href: "https://github.com/nextcord/nextcord/",
            },
        },
    ],
} as const;
