export const portfolio = {
  name: "Saif Ullah",
  firstName: "Saif",
  lastName: "Ullah",
  headline: "Software Engineering Graduate & Full-Stack Developer",
  intro:
    "Passionate about building real products that solve real problems specializing in React, Node.js, and Flutter development.",
  email: "saifboss313@gmail.com",
  phone: "+92 315 5856 179",
  location: "Islamabad, Pakistan",
  resumeUrl: "/Saif_Ullah_CV.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/saif-ullah-094bb6270/",
    github: "https://github.com/Saifullah-Zakaib",
    instagram: "https://www.instagram.com/saifullah_oficial?igsh=MWlrdmhkZnA4MmJ4bw==",
  },
  about: {
    p1: "A Software Engineering graduate driven by curiosity and creativity — building scalable, production-ready applications across web and mobile. I specialize in full-stack web development and mobile app development, with hands-on experience shipping real products. From a SaaS freelancer portal with Stripe payments to a national mental health platform affiliated with Harvard Medical School, I build things that actually work and matter.",
    p2: "My tech stack includes React, Node.js, MongoDB, Express.js, and Flutter. I have also worked with AI integrations, REST APIs, and cloud deployments — and I am actively exploring how AI can be embedded into products to create smarter, more useful user experiences.",
    highlights: [
      { title: "Full-Stack Development", desc: "Expertise in modern web technologies" },
      { title: "Mobile App Development", desc: "Building cross-platform mobile solutions" },
      { title: "Scalable Solutions", desc: "Creating applications that grow with business needs" },
    ],
    core: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB & SQL",
      "Flutter & Dart",
      "TypeScript",
      "Cloud Platforms",
    ],
  },
  skills: [
    {
      title: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Django", level: 70 },
      ],
    },
    {
      title: "Database & Cloud",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "AWS Basics", level: 55 },
      ],
    },
    {
      title: "Mobile Development",
      items: [
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 80 },
        { name: "React Native", level: 45 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
  ],
  tools: [
    "VS Code", "Git & GitHub", "Docker", "Postman", "Figma",
    "MongoDB Compass", "Chrome DevTools", "Vercel",
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "FAST-NUCES",
      location: "Peshawar, Pakistan",
      period: "Jul. 2025 – Sep. 2025",
      bullets: [
        "Built the MVP of Zehni Sehat, a national mental health and wellbeing platform for Pakistan, using the MERN Stack (MongoDB, Express, React, Node.js).",
        "Developed a Flutter-based mobile application for the Dual-Brain Psychology project, enabling users to interact with an AI-powered mental wellbeing avatar.",
        "Trained conversational AI using curated psychology research content and structured session data.",
        "Worked under academic supervision with affiliations to Harvard Medical School and McLean Hospital (USA).",
      ],
    },
    {
      role: "Technical & Development Director",
      company: "MLSA Society FAST-NUCES",
      location: "Peshawar, Pakistan",
      period: "Aug. 2025 – Present",
      bullets: [
        "Led technical workshops and trained students on modern software development tools.",
        "Organized industrial tours and coordinated technical events, strengthening leadership and teamwork.",
      ],
    },
    {
      role: "Software Engineer",
      company: "KPK Culture & Tourism Authority",
      location: "Peshawar, Pakistan",
      period: "Nov. 2023 – Dec. 2023",
      bullets: [
        "Collaborated on the creation of the Software Requirement Specification (SRS) document for KPK Culture & Tourism Authority.",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "Tela — Freelancer Client Portal SaaS",
      description:
        "Built a full stack SaaS platform that replaces the scattered freelancer workflow — no more WhatsApp threads, Google Drive folders, or chased invoices. Freelancers onboard clients through a branded portal, track milestones, share deliverables, and collect payments via Stripe, all in one place. Clients get a clean dedicated login to review progress, approve work, and pay invoices without ever leaving the platform.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "REST APIs"],
      live: "https://telaapp.me",
      github: null,
    },
    {
      title: "ClassSphere VR",
      description:
        "Developed an immersive VR-based virtual classroom integrating Flutter mobile app with Unity (VR/XR), featuring AI-driven virtual lectures and real-time interaction with custom-designed VR environments and avatars.",
      tech: ["Flutter", "Unity", "Node.js", "MongoDB", "Blender", "REST APIs"],
      live: null,
      github: null,
    },
    {
      title: "Sports ERP System",
      description:
        "Built a comprehensive full-stack ERP system for sports equipment manufacturing with role-based dashboards for 6 departments, featuring automated order routing, real-time inventory alerts, and smart order processing with auto-generated production orders.",
      tech: ["Python", "Django", "MySQL", "React", "Bootstrap 5", "Chart.js", "REST APIs"],
      live: "https://erp-production-5c9c.up.railway.app",
      github: null,
    },
  ],
  otherProjects: [
    {
      title: "MechConnect",
      description:
        "Full stack web platform connecting car owners with mechanics/electricians for emergency repairs, schedule appointments, and track vehicle history.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Saifullah-Zakaib/MechConnect",
      live: "https://mechconnect.site.je",
    },
    {
      title: "FitFocus",
      description:
        "Full-stack fitness assistant web app enabling users to track workouts, diet, and goals. Includes weight tracking, food diary, calorie monitoring, and AI-driven personalized workout/nutrition insights.",
      tech: ["HTML5", "CSS3", "JavaScript", "Django", "SQLite"],
      github: "https://github.com/Saifullah-Zakaib/FitFocus",
      live: null,
    },
    {
      title: "CV Checker",
      description:
        "Flask-based resume parser using scikit-learn K-means clustering and TF-IDF vectorization to group resumes by content similarity, integrating spaCy for skill extraction and Random Forest for job title prediction.",
      tech: ["Flask", "Python", "Pandas", "Numpy", "Spacy", "HTML5", "CSS3"],
      github: "https://github.com/Saifullah-Zakaib/CV-Checker",
      live: null,
    },
    {
      title: "Hospital Management System",
      description:
        "A console-based Hospital Management System written in C++ that helps manage and organize hospital operations.",
      tech: ["C++", "OOP"],
      github: "https://github.com/Saifullah-Zakaib/Hospital-Management-System",
      live: null,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Saifullah-Zakaib",
      live: "https://saif-portfolio-81.vercel.app",
    },
  ],
};
