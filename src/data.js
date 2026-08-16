export const profile = {
  name: "Satoshi Fukushima",
  role: "Senior FullStack Engineer",
  location: "Tokyo, Japan",
  email: "satoshifukushima96@outlook.com",
  summary: [
    "I'm a software engineer based in Tokyo with about 8 years of experience, mostly building web applications and mobile apps, though I've also worked on blockchain projects and some AI/computer vision work earlier in my career.",
    "My background is pretty varied — I've built everything from a robot navigation system using TensorFlow and OpenCV, to crypto wallets, social apps, fitness platforms, and more recently e-commerce and business tools. I tend to get involved across the full stack and usually stay on a project through testing and maintenance, not just the initial build.",
    "I studied computer science at Tokyo University of Science and have been working professionally since early 2018. I'm comfortable jumping into unfamiliar domains and figuring things out as I go.",
  ],
};

export const experience = [
  {
    title: "Senior FullStack Engineer",
    company: "Freelancer",
    location: "Tokyo, Japan",
    period: "2024 — Present",
    summary:
      "Most of my recent work has been contract-based, building web apps across a range of industries.",
    projects: [
      {
        name: "DXBuild",
        description:
          "A construction management platform handling everything from estimates and ordering through to billing and profit tracking. Revamped the core management features, including daily cost reporting and per-project margin visibility.",
        stack: ["Angular", "Express.js", "MongoDB", "AWS Amplify"],
      },
      {
        name: "Brain",
        description:
          "An online marketplace where writers sell article content directly to readers. Handled payment integration, access control so only paying users can view content, and basic recommendation logic for repeat purchases.",
        stack: ["Nuxt 3", "Ruby on Rails", "MySQL"],
      },
      {
        name: "Gacha System",
        description:
          "An online gacha system where users spin for randomized items, with configurable rarity tiers and event-specific settings. Covered development through ongoing maintenance and integrated Stripe for payments.",
        stack: ["Next.js", "Express.js", "MySQL", "AWS EC2"],
      },
      {
        name: "Mign",
        description:
          "A business productivity app built from requirements gathering through deployment, with multi-device support (phones, tablets, desktop) as a core requirement. Stayed in regular contact with the client post-launch to refine based on real usage.",
        stack: ["Django", "Python", "MySQL", "AWS EC2"],
      },
    ],
  },
  {
    title: "Senior FullStack Engineer & Blockchain Developer",
    company: "Servichain Co., Ltd.",
    location: "Denmark",
    period: "Jan 2021 — Dec 2023",
    summary:
      "Worked on a mix of blockchain products and consumer apps, often as team lead.",
    projects: [
      {
        name: "Cauris",
        description:
          "A blockchain wallet handling both cryptocurrency and fiat currency, designed to be usable by people without a technical background. Led a five-person team on this for nearly three years.",
        stack: ["React.js", "React Native", "Node.js", "Go", "MongoDB", "PostgreSQL"],
      },
      {
        name: "Klubby",
        description:
          "A Web3 chat app where crypto communities are gated by token ownership. Technically interesting for its AWS serverless architecture and real-time requirements — put a lot of effort into test design given the cost of production bugs in a financial app.",
        stack: ["AWS CDK", "Lambda", "React.js", "Ionic", "DynamoDB"],
      },
      {
        name: "NOVA",
        description:
          "A social media app aiming for something simpler than Instagram or Twitter — just sharing with friends, no algorithmic feed, no clutter. Led a six-person team.",
        stack: ["React.js", "Node.js", "Firebase", "Apollo", "Ionic"],
      },
      {
        name: "Smaller projects",
        description:
          "A Flutter-based dating app with Twilio SMS verification, a 360° video sharing platform with VR device support, and Stronger — a camera-based livestream fitness app where users compete in real-time challenges.",
        stack: ["Flutter", "Twilio"],
      },
    ],
  },
  {
    title: "Senior FullStack Engineer & AI Engineer",
    company: "Social Robotics Co., Ltd.",
    location: "Tokyo, Japan",
    period: "Jan 2018 — Dec 2020",
    summary:
      "My first job after university, and the work was quite different from anything I'd done before.",
    projects: [
      {
        name: "Robot Autonomous Navigation",
        description:
          "The robot uses its onboard camera to figure out where it is and how to get where it needs to go. Built the image processing pipeline and path-calculation algorithms — my first real exposure to computer vision and machine learning at production scale. Led a team of around 20.",
        stack: ["OpenCV", "TensorFlow", "C++", "Python", "AWS"],
      },
      {
        name: "International Payments Platform",
        description:
          "A large financial platform processing international payments in over 150 currencies, with about 100 people involved in total — good experience navigating a much larger team and codebase.",
        stack: ["React.js", "Vue.js", "Node.js", "Python", "Go", "MongoDB", "PostgreSQL"],
      },
    ],
  },
];

export const education = {
  school: "Tokyo University of Science",
  degree: "B.S. Computer Science",
  date: "March 2017",
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript / TypeScript", "Python", "Go", "C++"],
  },
  {
    category: "Frontend",
    items: ["React.js", "React Native", "Next.js", "Vue.js", "Nuxt 3", "Angular", "Ionic", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Ruby on Rails", "Django"],
  },
  {
    category: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS EC2", "AWS Lambda", "AWS CDK", "AWS Amplify", "Firebase"],
  },
  {
    category: "AI / Computer Vision",
    items: ["TensorFlow", "OpenCV"],
  },
];
