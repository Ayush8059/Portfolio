export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Ayush Raj",
    titleSequence: [
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Analyst",
      "B.Tech @ SRM | CGPA 9.34"
    ],
    resumeLink: "/resume/Ayush_Raj_Resume.pdf",
    contact: {
      email: "ayushr8059@gmail.com",
      github: "https://github.com/Ayush8059",
      linkedin: "https://linkedin.com/in/ayushraj",
      phone: "+91 6207707493"
    },
    bio: "Computer Science student specializing in Big Data Analytics with experience in full-stack development, machine learning, and data analytics. Skilled in building scalable web applications, AI-driven solutions, REST APIs, and dashboards using Python, React.js, JavaScript, SQL, and Power BI. Passionate about solving real-world problems through intelligent and user-focused technology solutions.",
    education: {
      university: "SRM Institute of Science and Technology",
      degree: "Bachelor of Technology, Computer Science",
      duration: "2023-2027",
      cgpa: "9.34"
    }
  },
  skills: [
    { category: "Programming", items: ["C++", "Python", "JavaScript", "HTML", "CSS (Tailwind)"] },
    { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Bootstrap"] },
    { category: "Databases & Big Data", items: ["MySQL", "MongoDB", "Supabase"] },
    { category: "Tools", items: ["Power BI", "Git", "Postman", "MySql Workbench", "Figma", "GitHub"] },
    { category: "Core Concepts", items: ["Machine Learning", "REST APIs", "Database Design", "Data Visualization", "Responsive UI"] },
    { category: "Coursework", items: ["DSA", "Design and Analysis of Algorithms", "Data Science Fundamentals", "OS", "DBMS"] }
  ],
  projects: [
    {
      id: "chennai-flood",
      title: "Chennai Flood Prediction",
      tech: ["Random Forest", "XGBoost", "LightGBM", "LSTM", "Python"],
      description: "Hybrid ML + LSTM framework for flood prediction validated against 2021 and 2023 Chennai flood events. Provides risk-weighted resource allocation guidelines per NDMA. Models 30-day rainfall trends.",
      github: "",
      featured: true,
      badge: "Research Project"
    },
    {
      id: "autism-detection",
      title: "Autism Detection using Deep Learning",
      tech: ["Python", "TensorFlow", "CNN", "Transfer Learning", "OpenCV", "Scikit-learn"],
      description: "Deep learning image classification system to detect Autism Spectrum Disorder (ASD) in children aged 2-5.",
      github: "https://github.com/Ayush8059/autism-detection-asd",
      featured: false
    },
    {
      id: "thrive-fashion",
      title: "Thrive Fashion Platform",
      tech: ["React.js", "Tailwind CSS", "Supabase", "Vite", "PostgreSQL"],
      description: "A full-stack sustainable fashion platform emphasizing real-time capabilities and a modern, high-end user experience.",
      github: "https://github.com/Ayush8059/Thrive-Fashion",
      link: "https://thrive-fashion.vercel.app/",
      featured: false
    },
    {
      id: "edtech-dashboard",
      title: "EdTech Lecture Insights Dashboard",
      tech: ["Power BI", "Excel", "DAX"],
      description: "Developed a comprehensive Power BI dashboard to analyze lecture engagement and present rich analytics for educational administration.",
      github: "https://github.com/Ayush8059/EdTech-Recorded-Lectures-Insights",
      featured: false
    },
    {
      id: "finance-manager",
      title: "Finance Manager",
      tech: ["JavaScript", "HTML", "CSS"],
      description: "Personal Finance Management mini-app designed to flexibly track income, expenses, savings, and overall financial goals.",
      github: "https://github.com/Ayush8059/Finance-Manager",
      featured: false
    }
  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "AWS", link: "#" },
    { name: "AWS Certified AI Practitioner", issuer: "AWS", link: "#" },
    { name: "NPTEL — Introduction to Machine Learning", issuer: "NPTEL", link: "#" },
    { name: "NPTEL — Introduction to the Database System", issuer: "NPTEL", link: "#" },
    { name: "3rd Place, Pokeverse Ideathon", issuer: "Competition", link: "#" }
  ]
};
