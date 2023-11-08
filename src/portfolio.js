/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zaid",
  title: "Hi all, I'm Zaid",
  subTitle: emoji(
    "As a seasoned software engineer with a Master's in Applied Computing, I specialize in JavaScript, React.JS, and React Native. My expertise lies in optimizing software, and enhancing user experiences, all while accelerating the software development lifecycle"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zaid296imtiaz",
  linkedin: "https://www.linkedin.com/in/zaid-imtiaz-chughtai/",
  gmail: "zaid296imtiaz@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop interactive and modern websites using front-end technology stacks including JavaScript, ReactJS, and Redux,"
    ),
    emoji(
      "⚡ Engineer Android and iOS applications using React Native from envision to deployment"
    ),
    emoji(
      "⚡ Debug, maintain and upgrade existing React JS and React Native applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Boostrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
    // {
    //   skillName: "Android",
    //   fontAwesomeClassname: "fab fa-android"
    // },
    // {
    //   skillName: "iOS",
    //   fontAwesomeClassname: "fab fa-apple"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/uwin.jpeg"),
      subHeader: "Master of Applied Computing",
      duration: "September 2021 - April 2023",
      desc: "Took courses about Advanced Computing, Advanced Database Topics, Advanced Systems Programming, and others",
      descBullets: [
        "Envisioned and developed a project leveraging augmented reality in a mobile app",
        "Successfully landed and completed an 8 month internship"
      ]
    },
    {
      schoolName: "Sir Syed University of Engineering and Technology",
      logo: require("./assets/images/SSUET_Logo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "January 2015 - December 2018",
      desc: "Took courses about Design Patterns, Web Engineering, Advanced Object Oriented Programming, Operating Systems, and others",
      descBullets: [
        "Lead a team of 4 to develop a final year project using React JS enabling 2 players to participate in a coding competition in real-time",
        "Ranked top 10 in my program"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Unified Communication Systems Co-op",
      company: "BlackBerry",
      companylogo: require("./assets/images/bb_logo.jpeg"),
      date: "Sep 2022 – Apr 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Debugged, optimized, and implemented an access control module in a Vue.JS website",
        "Communicated effectively with technical and non-technical stakeholders, resulting in 10% improved project coordination and delivery",
        "Developed an agent management system in a Next.JS based web application",
        "Facilitated knowledge transfer sessions to cross-functional teams, resulting in a 15% reduction in onboarding time"
      ]
    },
    {
      role: "Contract Senior Software Engineer",
      company: "Hegemonic Softwares",
      companylogo: require("./assets/images/Hegemonic_logo.jpeg"),
      date: "Aug 2021 – Aug 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Spearheaded the development of high-performance applications using React and React Native, resulting in a 15% improvement in user experience and engagement",
        "Championed the use of Agile methodologies, accelerating the software development lifecycle and increasing team productivity by 20%",
        "Ensured AODA/WCAG 2.1 compliance enhancing website accessibility and user experience",
        "Leveraged Docker/Kubernetes for containerization, improving application scalability and reducing deployment time by 10%",
        "Integrated GraphQL for efficient data fetching, reducing server load and improving response times"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Avolox Pvt. Ltd",
      companylogo: require("./assets/images/avolox_logo.jpeg"),
      date: "Aug 2020 – July 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Led and mentored a team of 3 junior developers to successfully deliver a pedometer module in a React Native application, resulting in a 20% increase in user engagement",
        "Improved the efficiency of a React.JS dashboard by streamlining the data processing pipeline, resulting in a 40% decrease in loading time and an increase in customer retention by 18%",
        "Worked with technology partners to ensure the configuration and custom components meet application requirements and performance goals"
      ]
    },
    // {
    //   role: "Software Engineer",
    //   company: "Hashlob",
    //   companylogo: require("./assets/images/hashlob_logo.jpeg"),
    //   date: "Jan 2020 – July 2020",
    //   // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //   descBullets: [
    //     "Attained user-centric design of 3 mobile applications using React Native and Flutter",
    //     "Upgraded a React Native application to the latest version of the stack, improving efficiency by 40%",
    //     "Collaborated with cross-functional teams including Marketing, Developers, Architects, and Business Development teams to develop human-centric design and user experiences"
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Products",
  subtitle: "Projects that I have previously worked on",
  projects: [
    {
      image: require("./assets/images/searchwork_logo.webp"),
      projectName: "Search Work",
      projectDesc:
        "The one stop shop for job seekers and employers",
      descBullets: [
        "Led the software development life cycle, from gathering requirements and drafting technical specifications to coding, testing, and deployment",
        "Implemented advanced search functionalities that allowed job seekers to find jobs based on various parameters like location, job type, salary range, etc. This made the job search process more efficient and user-friendly",
        "Developed a feature-rich dashboard where employers could post jobs, track applications, and manage candidate profiles. This helped employers to manage their recruitment process more effectively",
        "Ensured the security and privacy of user data by implementing industry-standard encryption and data protection measures"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://searchwork.us/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/salaam_takaful_logo.webp"),
      projectName: "Salaam Takaful",
      projectDesc:
        "The largest operator in general Islamic insurance industry of Pakistan",
      descBullets: [
        "Implemented real-time communication (messages and audio/video calls) in the React Native app using SignalR which handled 100+ daily concurrent calls",
        "Integrated 3rd party APIs and developed a discount coupon system, pedometer step counter, and customized service discovry modules using React Native giving the app an edge over the competition",
        "Improved the efficiency of a React JS dashboard by streamlining the data processing pipeline, resulting in a 40% decrease in loading time and an increase in customer retention by 18%"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.salaamtakaful.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/bigbang_logo.webp"),
    //   projectName: "BigBang - Exclusive Deals",
    //   projectDesc:
    //     "Exclusive deals and discounts on a variety of brands and products",
    //   descBullets: [
    //     "Developed and shiped the MVP using React Native and back-end services such as Node JS",
    //     "Attained user-centric design of 3 mobile applications using React Native and Flutter",
    //     "Upgraded 1 application to the latest version of the stack, improving efficiency by 40%"
    //   ],
    //   // footerLink: [
    //   //   {
    //   //     name: "Visit Website",
    //   //     url: "http://nextu.se/"
    //   //   }
    //   // ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NextGen CTO",
      subtitle: "Canvas Credentials (Badgr)",
      image: require("./assets/images/nextgen_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://tinyurl.com/msnvxbk9"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Introduction to Spark SQL and DataFrames",
      subtitle: "LinkedIn",
      image: require("./assets/images/linked_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://tinyurl.com/5n863z5f"
        }
      ]
    },

    {
      title: "Learning MongoDB (2020)",
      subtitle: "LinkedIn",
      image: require("./assets/images/linked_logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://tinyurl.com/yue9s6m9"}
        // {
        //   name: "Final Project",
        //   url: ""
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi?",
  number: "",
  email_address: "zaid296imtiaz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
