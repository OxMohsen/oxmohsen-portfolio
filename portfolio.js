import emoji from "react-easy-emoji";

export const greetings = {
    name: "Mohsen Falakedin",
    title: "Hi all, I'm Mohsen",
    description: "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, PHP, Next.js and Blockchain development on Ethereum, Solidity and Web3.js. I'm a self-taught developer and I'm always learning new things.",
    resumeLink: "#",
};

export const openSource = {
    githubUserName: "OxMohsen",
};

export const contact = {};

export const socialLinks = {
    telegram: "https://t.me/OxMohsen",
    instagram: "https://www.instagram.com/OxMohsen",
    twitter: "https://twitter.com/OxMohsen",
    github: "https://github.com/OxMohsen",
};

export const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [{
        title: "Full Stack Development",
        lottieAnimationFile: "/lottie/skills/fullstack.json",
        skills: [
            emoji("⚡ Building eCommerce websites and web applications using php"),
            emoji("⚡ Building telegram bots and user bots using php and python"),
            emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
            emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA"),
            emoji("⚡ Building responsive static websites using Next.js"),
        ],
        softwareSkills: [
            {
                skillName: "PHP",
                fontAwesomeClassname: "logos:php",
            },
            {
                skillName: "Python",
                fontAwesomeClassname: "logos:python",
            },
            {
                skillName: "Django",
                fontAwesomeClassname: "vscode-icons:file-type-django",
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: "logos:javascript",
            },
            {
                skillName: "Nextjs",
                fontAwesomeClassname: "vscode-icons:file-type-light-next",
            },
            {
                skillName: "HTML-5",
                fontAwesomeClassname: "vscode-icons:file-type-html",
            },
            {
                skillName: "CSS-3",
                fontAwesomeClassname: "vscode-icons:file-type-css",
            },
            {
                skillName: "NPM",
                fontAwesomeClassname: "logos:npm-icon",
            },
            {
                skillName: "Yarn",
                fontAwesomeClassname: "logos:yarn",
            },
        ],
    },
    {
        title: "Cloud Infra-Architecture",
        lottieAnimationFile: "/lottie/skills/cloudinfra.json",
        skills: [
            emoji("⚡ Experience of working on multiple cloud platforms"),
            emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
            emoji("⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"),
        ],
        softwareSkills: [
            {
                skillName: "AWS",
                fontAwesomeClassname: "logos:aws",
            },
            {
                skillName: "Azure",
                fontAwesomeClassname: "logos:microsoft-azure",
            },
            {
                skillName: "Heroku",
                fontAwesomeClassname: "logos:heroku-icon",
            },
            {
                skillName: "PostgreSQL",
                fontAwesomeClassname: "logos:postgresql",
            },
            {
                skillName: "Github",
                fontAwesomeClassname: "akar-icons:github-fill",
            },
            {
                skillName: "Docker",
                fontAwesomeClassname: "logos:docker-icon",
            },
            {
                skillName: "Github Actions",
                fontAwesomeClassname: "logos:github-actions",
            },
            {
                skillName: "Nginx",
                fontAwesomeClassname: "logos:nginx",
            },
        ],
    },
    {
        title: "Blockchain",
        lottieAnimationFile: "/lottie/skills/ethereum.json",
        skills: [
            emoji("⚡ Experience in developing Smart Contract using Solidity & Ethereum"),
            emoji("⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"),
            emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
        ],
        softwareSkills: [{
            skillName: "Ethereum",
            fontAwesomeClassname: "logos:ethereum",
        },
        {
            skillName: "Solidity",
            fontAwesomeClassname: "logos:solidity",
        },
        {
            skillName: "Web3js",
            fontAwesomeClassname: "logos:web3js",
        },
        {
            skillName: "Metamask",
            fontAwesomeClassname: "logos:metamask-icon",
        },
        ],
    },
    ],
};

export const SkillBars = [
    {
        Stack: "Python",
        progressPercentage: "85",
    },
    {
        Stack: "PHP",
        progressPercentage: "90",
    },
    {
        Stack: "Solidity",
        progressPercentage: "60",
    },
    {
        Stack: "NodeJS",
        progressPercentage: "60",
    },
    {
        Stack: "SQL",
        progressPercentage: "65",
    },
    {
        Stack: "HTML/CSS",
        progressPercentage: "60",
    },
    {
        Stack: "Problem Solving",
        progressPercentage: "90",
    },
];

export const educationInfo = [{
    schoolName: "SJA University",
    subHeader: "Master of Information Technology (Software Engineering)",
    duration: "September 2014 - September 2018",
    desc: "Do the following research:",
    descBullets: [
        "search engine for research",
        "generate citation based on DOI",
    ],
},];

export const experience = [
    {
        role: "Full Stack Developer",
        company: "SJAU",
        companylogo: "/img/logo/sjau-logo.jpg",
        date: "Sep 2017 - Sep 2018",
        desc: "Worked as php web developer for SJAU. I built a website using php, html, css, javascript, jquery, ajax, mysql and bootstrap.",
    },
    {
        role: "Backend Developer",
        company: "Top GSM",
        companylogo: "/img/logo/top-gsm-logo.jpg",
        date: "Dec 2018 – Jan 2019",
        desc: "Worked as Backend Developer for Top GSM. I built a customer support widget connected to Telegram using php socket and telegram bot api.",
    },
    {
        role: "Blockchain Developer",
        company: "CBM",
        companylogo: "/img/logo/cbm-coin-logo.jpg",
        date: "Nov 2020 – Dec 2021",
        desc: "Worked as Blockchain Developer for CBM coin. I developed a smart contract using Solidity and Tron and deployed it on the Tron network.",
    },
    {
        role: "Full Stack Developer",
        company: "Carbo",
        companylogo: "/img/logo/carbo-logo.jpg",
        date: "Apr 2021 - Aug 2021",
        desc: "Worked as a Full Stack Developer for Carbo. I built a website using wordpress also created some web scrapping scripts using python.",
    },
    {
        role: "Full Stack Developer",
        company: "Carbo Travel",
        companylogo: "/img/logo/carbo-travel-logo.jpg",
        date: "Sep 2021 - Jan 2022",
        desc: "Worked as a Full Stack Developer for Carbo. I built a website using wordpress",
    },
    {
        role: "Backend Developer",
        company: "Tiva Soft",
        companylogo: "/img/logo/tiva-group-logo.jpg",
        date: "Jan 2022 - Mar 2022",
        desc: "Worked as a Backend Developer for Tiva Soft Group. I built a website using prestashop and create Rest API using php.",
    },
];

export const projects = [
    {
        name: "MadelineprotoPluginSystem",
        desc: "plugin system for MadelineProto",
        github: "https://github.com/OxMohsen/MadelineprotoPluginSystem",
    },
    {
        name: "BotMethod",
        desc: "Telegram API Method - BotMethod help you to easily use Telegram API",
        github: "https://github.com/OxMohsen/BotMethod",
    },
    {
        name: "oxmohsen-portfolio",
        desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/oxmohsen/oxmohsen-portfolio",
        link: "https://oxmohsen.ir",
    },
];
