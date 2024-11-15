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
  username: "wailb entafat",
  title: "Hi all, I'm wail",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://utfs.io/f/YgE7O4LBcLOxMh1QthrANg7VbGBKkRCFlf1Sipu0J8Y9Zsec", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wailbentafat",
  linkedin: "https://www.linkedin.com/in/wailbentafat/",
  gmail: "saadpasta70@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-next-js"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fab fa-fastapi"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Udemy",
    logo: require("./assets/images/U.png"), // Replace with your logo if you have one
      subHeader: "Diploma in Python, JavaScript, Flutter",
      duration: "Completed in 2023",
      desc: "Completed courses in Python, JavaScript, and Flutter."
    },
 
  {
    schoolName: "USTHB",
    //logo: require("./assets/images/usthbLogo.png"), // Replace with your logo if you have one
    subHeader: "Bachelor of Computer Science",
    duration: "2023 - ..",
    desc: "computer science with specialization in Software Engineering."
  }
],
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend", 
      progressPercentage: "60%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Djezzy",
     companylogo: require("./assets/images/djezzy.jpeg"), 
      date: "decembre 2023 – fevrier 2024 ",
      desc: "Worked as a backend developer, assisting in developing and maintaining backend services and APIs."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME BIG PROJECTS I WORKED ON",
  projects: [
    {
      // image: require("./assets/images/ecosphereLogo.png"), // Replace with your project image
      projectName: "Ecosphere",
      projectDesc: "A platform to provide sustainable solutions for the ecosystem.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecosphere.celec.club/"
        }
      ]
    },
    {
      // image: require("./assets/images/novemberPlatformLogo.png"), // Replace with your project image
      projectName: "November Platform",
      projectDesc: "A platform to introduce Algerians and tourists to Algerian history. Mobile and Web App.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/wailbentafat/mobile_app"
        }
      ]
    },
    {
      // image: require("./assets/images/caatLogo.png"), 
      projectName: "Caat Assurance AI Integration",
      projectDesc: "A mobile app integrated with AI to solve problems in the insurance sector.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/caat"
        }
      ]
    },
    {
      // image: require("./assets/images/hotelManagementLogo.png"), // Replace with your project image
      projectName: "Hotel Management System",
      projectDesc: "A hotel management system built with Django (backend).",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/hotels-management"
        }
      ]
    },
    {
      // image: require("./assets/images/nasaLogo.png"), // Replace with your project image
      projectName: "NASA Hackathon App",
      projectDesc: "A 3D Orrery with built-in VR game.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/nasa-hakathon-app"
        }
      ]
    },
    {
      // image: require("./assets/images/gymLogo.png"), // Replace with your project image
      projectName: "Gym Management Platform",
      projectDesc: "A platform for gym management with mobile and desktop apps that use QR codes.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/gym-management"
        }
      ]
    },
    {
      // image: require("./assets/images/habitTrackingLogo.png"), // Replace with your project image
      projectName: "Advanced Habit Tracking",
      projectDesc: "A habit tracking app built with Go and React.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/habit-tracking"
        }
      ]
    },
    {
      // image: require("./assets/images/ecommerceLogo.png"), // Replace with your project image
      projectName: "Full-Stack Ecommerce Website",
      projectDesc: "An e-commerce platform built using React and Go.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/full-stack-ecommerce"
        }
      ]
    },
    {
      // image: require("./assets/images/onlineFormsLogo.png"), // Replace with your project image
      projectName: "Online Forms Backend",
      projectDesc: "A backend for online forms built using Django.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/online_forms"
        }
      ]
    },
    {
      // image: require("./assets/images/imageProcessingLogo.png"), // Replace with your project image
      projectName: "Image Processing Backend",
      projectDesc: "Backend for image processing tasks using Django.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/image-processing-backend"
        }
      ]
    },
    {
      // image: require("./assets/images/proxyServerLogo.png"), // Replace with your project image
      projectName: "Proxy Server",
      projectDesc: "A proxy server built using Go for handling network traffic.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/proxy-server"
        }
      ]
    },
    {
      // image: require("./assets/images/hackathonPlatformLogo.png"), // Replace with your project image
      projectName: "satim Platform",
      projectDesc: "A platform for integrating custom client service AI that responds to users.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/wailbentafat/hakathon-platform"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Hackathon Wins that I am proud of!",
  achievementsCards: [
    {
      title: "Hackathon Wins",
      subtitle: "Participated in various hackathons and secured wins in NCSA, Squid Tech, and MLW.",
      image: require("./assets/images/H.jpeg"),
      footerLink: [
        {
          name: "View More About My Hackathon Wins",
          url: "https://github.com/wailbentafat" 
        }
      ]
    },
    {
      title: "Udemy Certifications",
      subtitle: "Completed courses in Python, JavaScript, and Flutter.",
      image: require("./assets/images/U.png"), // Uncomment if you have a logo image
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/verify/"
        }
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+213557621956",
  email_address: "wailbentafat@gmail.com"
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
  isHireable,
  resumeSection
};
