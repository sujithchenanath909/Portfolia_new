export const profile = {
  name: 'Sujith Chenanath',
  role: 'Technical Lead || Solutions Architect',
  tagline: 'Backend systems, UI & test automation',
  bio: "Dedicated Technical Lead and Senior Software Engineer with over 12 years of experience architecting, defining, and delivering scalable, high-performance enterprise software solutions. I specialize in leveraging Java Enterprise Edition, Spring Integration, and Agile methodologies to transform complex business challenges into robust, reliable, and innovative digital products. Throughout my career, I have spanned multiple diverse domains—including E-commerce and Core Banking—with the past 4+ years deeply focused on the intricate world of banking payments.As a technical leader, my impact goes beyond code; I bridge the gap between technical vision and execution by: Driving Architecture & Design: Leading the delivery of resilient, distributed software systems that meet strict operational excellence and high-availability standards.Empowering Teams: Fostering highly collaborative, cross-functional environments and mentoring engineering teams to accelerate delivery and elevate code quality.Domain Leadership: Translating complex banking, payment, and transactional workflows into seamless technical requirements that directly drive business value.I am driven by a passion for continuous learning, engineering excellence, and creating a lasting impact through high-quality, impactful software engineering. Let’s connect to discuss scalable architecture, fintech innovations, or team leadership.",
  location: 'India',
  email: 'sujithchenanath@gmail.com',
  phone: '+91 7403382065',
  socials: {
    github: 'https://github.com/sujithchenanath909',
    linkedin: 'https://www.linkedin.com/in/sujithchenanath/',
    instagram: 'https://www.instagram.com/sujithchenanath/',
  },
};

export const stack = [
  {
    key: 'frontend',
    label: 'front-end',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    key: 'backend',
    label: 'back-end',
    items: ['Java', 'Spring Boot', 'Hibernate', 'Node.js'],
  },
  {
    key: 'test-automation',
    label: 'test-automation',
    items: ['JUnit', 'TestNG', 'Selenium', 'Appium', 'Cypress', 'Cucumber', 'RestAssured'],
  },
  {
    key: 'tools',
    label: 'db-and-tools',
    items: ['MySQL', 'MongoDB', 'Git', 'Jenkins', 'Maven'],
  },
];

export const projects = [
  {
    id: 0,
    title: 'Weather App',
    description: 'Returns real-time climate conditions for a searched location, built with React and a public weather API.',
    image: '/images/weather-app.png',
    tags: ['React'],
    demo: 'https://sujithchenanath909.github.io/WeatherApp/',
    repo: 'https://github.com/sujithchenanath909/WeatherApp',
  },
  {
    id: 1,
    title: 'SmartBrain Face Detector',
    description: "Detects faces in a supplied image using Clarifai's machine-learning API, with a Node.js service layer.",
    image: '/images/face-detector.png',
    tags: ['React.js', 'JavaScript', 'Clarifai API', 'Node.js'],
    repo: 'https://github.com/sujithchenanath909/FaceDetectorApp',
  },
  {
    id: 2,
    title: 'Corona-Virus Tracker',
    description: 'A Spring Boot and Thymeleaf app that surfaces nationwide COVID-19 case counts and trends.',
    image: '/images/covid-tracker.png',
    tags: ['Java 8', 'Spring Boot'],
    repo: 'https://github.com/sujithchenanath909/CoronaVirusTracker',
  },
  {
    id: 3,
    title: 'Test Automation Framework — Cucumber',
    description: 'A Maven-based Java, TestNG and Selenium framework integrated with Cucumber, Log4j and Extent Reports.',
    image: '/images/test-framework-cucumber.jpg',
    tags: ['Java 8', 'TestNG', 'Selenium', 'Cucumber', 'Log4j'],
    repo: 'https://github.com/sujithchenanath909/SeleniumFrameWorkSkelton',
  },
  {
    id: 4,
    title: 'Test Automation Framework — JSON-driven',
    description: 'A Maven-based Java, TestNG and Selenium framework with Log4j reporting and JSON-driven test data.',
    image: '/images/test-framework-json.png',
    tags: ['Java 8', 'TestNG', 'Selenium', 'JSON', 'Log4j'],
    repo: 'https://github.com/sujithchenanath909/Selenium_Shoptimize',
  },
];

// Chronological career log — styled like commit history in the UI.
export const timeline = [
  {
    year: '2013',
    range: '2013',
    hash: 'a1f9c02',
    title: 'Started the journey',
    org: null,
  },
  {
    year: '2013',
    range: '2013 – 2016',
    hash: 'b47e1d8',
    title: 'Junior Programmer',
    org: 'MRCMPU Ltd',
  },
  {
    year: '2016',
    range: '2016 – 2021',
    hash: 'c8a2f63',
    title: 'Technology Analyst · Java Full-Stack',
    org: 'Infosys Ltd',
  },
  {
    year: '2021',
    range: '2021 – 2022',
    hash: 'd903b17',
    title: 'Technology Lead',
    org: 'Netmeds.com',
  },
  {
    year: '2022',
    range: '2022 – present',
    hash: 'e5c4a90',
    title: 'Senior Developer',
    org: 'Oracle Financial Services',
    current: true,
  },
];
