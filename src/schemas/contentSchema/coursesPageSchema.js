import { uuid } from "helpers/utils/uuid";
import {
  COURSES_PAGE_IMAGES,
  COVER_IMAGES,
  COURSES_LOGO_IMAGES,
  ABOUTUS_PAGE_IMAGES,
  COMPANY_LOGO_IMAGES,
  JOB_ORIENTED_IMAGES,
  TOOLS_LOGO_IMAGES,
} from "assets/images";

export const cloudDevopsSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.cloudDevopsCoverImage,
    headingText: "Cloud Computing & Devops Training Program",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "8",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "10", subHeading: "Platforms", borderShow: true },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "6 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose Cloud & Devops as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Increase Demand",listText:
      "The demand of cloud computing and DevOps professionals is increasing rapidly because nowadays almost all the companies and startups are moving their infrastructure to the cloud platforms and adopting DevOps practices for the development of their products & services." },
      { id: uuid(), cardText: "Lot of Opportunities",listText:
      "It offers a lot of opportunities with career growth & stability. You can work as cloud architect, AWS solutions architect, build & release engineer, DevOps engineer, automation engineer and many more.", },
      { id: uuid(), cardText: "Competitive Salaries & Benefits",listText:
      "The cloud computing and DevOps specialization offers competitive salaries and benefits. The cloud & DevOps professionals are getting above-average salaries and enjoying work benefits like remote job, flexible schedules, etc." },
      { id: uuid(), cardText: "Latest Technology Trends",listText:
      "The cloud & DevOps professionals always need to stay up-to-date with the latest tools & technology trends and also need to continuously improve their skills." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Cloud & Devops",
    paragraphText:
      "Cloud computing enables companies to reduce the investment in purchasing expensive hardware and maintaining the infrastructure. Companies are paying for cloud services on the basis of pay & use and accessing the resources from anywhere to achieve remote working and collaboration. With DevOps, companies are maintaining development operations, deployment and release software updates & new features quickly and efficiently.",
    cardTextData: [
      { id: uuid(), cardText: "Linux & Shell Scripting" },
      { id: uuid(), cardText: "Cloud Computing & AWS" },
      { id: uuid(), cardText: "Version Control, Git & Github" },
      { id: uuid(), cardText: "Agile Devlopment & Devops" },
      { id: uuid(), cardText: "Jenekins & Docker" },
      { id: uuid(), cardText: "Ansible & Kubernetes" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a Cloud Computing and DevOps professional, you will have a variety to job roles to work and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "Cloud Architect" },
      { id: uuid(), listText: "Cloud Operation Engineer" },
      { id: uuid(), listText: "AWS Solution Architect" },
      { id: uuid(), listText: "Automation Engineer" },
      { id: uuid(), listText: "DevOps Engineer" },
      { id: uuid(), listText: "Build and Release Engineer etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Cloud Architect" },
      { id: uuid(), listText: "Cloud Operation Engineer" },
      { id: uuid(), listText: "AWS Solution Architect" },
      { id: uuid(), listText: "Automation Engineer" },
      { id: uuid(), listText: "DevOps Engineer" },
      { id: uuid(), listText: "Build and Release Engineer etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Cloud Computing & DevOps Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work with virtual machines, cloud services, containers, version control system & DevOps tools.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from B.tech or M.tech (any specialization), BCA or MCA, B.Sc. or M.Sc. (CS / IT) can join the Cloud Computing & DevOps training program . The student must have hands-on experience with operating system with basic knowledge of shells or windows commands.",
    paragraphText2:
      "Any working professional, belongs to computer science or IT specialization, having some experience in IT or related industry and now looking for salary hike or promotions can also join the Cloud Computing & DevOps  training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Clod Computing & DevOps Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will go through with with cloud infrastructure components such as virtual machines, storage, and networking, and will deploy & manage applications on cloud platforms. The candidates will learn how to work with different cloud computing and DevOps tools, such as AWS, version control or git, Jenkins, Docker, Ansible & Kubernetes, and understand how to integrate these tools into their workflow.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Cloud Computing & DevOps training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      {
        id: uuid(),
        text: "Knowledge of operating system & shell script (preferred).",
      },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};

export const dataScienceSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.dataScienceCoverImage,
    headingText: "Data Science and Machine Learning",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "12",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "40+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "6 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose Data Science & ML as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Global Demand",listText:
      "Data science and machine learning are the rapidly growing fields, and there is a huge demand for highly skilled professionals who can process large datasets, extract insights & value from data for better decision making." },
      { id: uuid(), cardText: "Diverse Career Options",listText:
      "Choosing data science or machine learning as a career, offers a diverse range of job opportunities, so you can work as a data analyst, data engineer, business consultant, machine learning engineer, etc." },
      { id: uuid(), cardText: "Competitive Salaries",listText:
      "With expertise in data science and machine learning you would always be high valued and can command competitive salaries with career stabilities." },
      { id: uuid(), cardText: "Technology Advancements",listText:
      "In the data science and machine learning specialization you always deals with new tools and technologies. This makes it a dynamic and exciting field to work in. The roles are quite challenging and intellectually stimulating that requires problem-solving skills and creativity." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "DS / ML Engineer",
    paragraphText:
      "With technology advancement, there is an explosion of data generated & processed everyday. Almost every business or organization is increasingly looking to analyze this data and make decision to gain a competitive advantage. The data science and machine learning professionals are skilled at analyzing and interpreting the large datasets to generate valuable insights for making business decisions and improving the performance.",
    cardTextData: [
      { id: uuid(), cardText: "Python, NumPy, Pandas & Web Scraping" },
      { id: uuid(), cardText: "Probability & Statistics" },
      {
        id: uuid(),
        cardText: "Machine Learning & Natural Language Processing",
      },
      { id: uuid(), cardText: "Model Evaluation & Optimization" },
      { id: uuid(), cardText: "Deep Learning using TensorFlow" },
      { id: uuid(), cardText: "Data Visualization using Tableau" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a data science and machine learning professional, you will have a diverse range of job opportunities to work and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "Data Analyst" },
      { id: uuid(), listText: "Data Scientist" },
      { id: uuid(), listText: "Machine Learning Engineer" },
      { id: uuid(), listText: "Data Engineer" },
      { id: uuid(), listText: "Business Intelligence Analyst" },
      { id: uuid(), listText: "Quantitative Analyst, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Research Scientist" },
      { id: uuid(), listText: "Artificial Intelligence Engineer" },
      { id: uuid(), listText: "Project Consultant" },
      { id: uuid(), listText: "Team Lead" },
      { id: uuid(), listText: "Project Manager" },
      { id: uuid(), listText: "Project Head, etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Data Science and Machine Learning Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to extract insights from the data and develop predictive models for decision making.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from B.tech or M.tech (any specialization), BCA or MCA, B.Sc. or M.Sc. (CS / IT / Maths) can join the data science and machine learning training program . The student must have strong mathematical, statistical & analytical thinking capabilities.",
    paragraphText2:
      "Any working professional, belongs to computer science or IT specialization, having sound knowledge in mathematics, statistics & reasoning and now looking for salary hike or promotions can also join the data science and machine learning training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Data Science & Machine Learning Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will go through with programming methodologies, data models, logics & transitions, various python libraries, code implementation, mathematical equations, assignments, and mini projects that will help you to become an expert data science and machine learning professional. You would get a hands-on expertise over the most in-demand concepts, libraries and tools.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Data Science & Machine Learning training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      { id: uuid(), text: "With strong mathematical & statistical skills." },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};

export const designThinkingSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.digitalMarketingCoverImage,
    headingText: "Design Thinking & UI/UX Training Program",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      { id: uuid(), heading: "50+", subHeading: "Exercises", borderShow: true },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Professional Tools",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5-6 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, You Should Join Design Thinking & UI/UX ?",
    cardTextData: [
      { id: uuid(), cardText: "High Demand",listText:
      "Nowadays, many organizations are working on providing an excellent user experience to their users/customers, due to the reason the demand for design thinking & UI/UX professionals is increasing significantly." },
      { id: uuid(), cardText: "Creative & Innovative",listText:
      "Design Thinking and UI/UX professionals always deal with high levels of creativity, engaging solutions, and innovation. This offers a pleasing and rewarding career path to those who enjoy their creative & innovative journey." },
      { id: uuid(), cardText: "Diverse Opportunities",listText:
      "Design Thinking and UI/UX professionals always have a wide range of working sectors they never get limited to any specific industry which shows that the professionals always have a diverse range of career opportunities." },
      { id: uuid(), cardText: "Good Salary",listText:
      "As the demand for expert designers is increasing so the average salary is also increasing and making it a lucrative career path." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Design Thinking & UI/UX",
    paragraphText:
      "Design Thinking and UI/UX Design can provide a lot of career opportunities because the companies that prioritize design thinking and UI/UX are focusing to provide better and more intuitive user experiences to their customers. This leads to increased customer satisfaction, engagement, retention, and loyalty.",
    cardTextData: [
      { id: uuid(), cardText: "Design Thinking Mindset" },
      { id: uuid(), cardText: "Design Concepts" },
      { id: uuid(), cardText: "Ideas & Brainstorming" },
      { id: uuid(), cardText: "Prototyping & Mockups" },
      { id: uuid(), cardText: "UI Design using Figma" },
      { id: uuid(), cardText: "Projects & Case Studies" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a Design Thinking and UI/UX professional, you will have a lots of career options and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "UI/UX Designer" },
      { id: uuid(), listText: "Product Designer" },
      { id: uuid(), listText: "User Experience Designer" },
      { id: uuid(), listText: "Interaction Designer" },
      { id: uuid(), listText: "Information Architect" },
      { id: uuid(), listText: "User Interface Designer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "UX Researcher" },
      { id: uuid(), listText: "Design Strategist" },
      { id: uuid(), listText: "Design Thinking Coach" },
      { id: uuid(), listText: "Creative Director" },
      { id: uuid(), listText: "Design Consultant" },
      { id: uuid(), listText: "Business Advisor, etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Design Thinking & UI/UX Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to design products or services by focusing on user experiences, engagement, retention, and loyalty.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from Engineering, Computer Science, Information Technology or related specialization can join this design thinking and UI/UX design training program.",
    paragraphText2:
      "Any working professional who have some IT or related work experience and now looking for department switch or salary hike or promotions, can also join this design thinking and UI/UX design training program.",
    paragraphText3:
      "Anyone who is looking to design innovative product, mobile app or web platform or dreaming to go for his/her own start-up, can join this design thinking and UI/UX design training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Design Thinking & UI/UX Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will go through with various concepts & principles of design thinking, various case studies and exercise from finding a problem to designing a user centric prototype or mock-ups. For UI/UX design, you will learn, practice and get hand-on experience with designing tools MS-PowerPoint and Figma.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Design Thinking & UI/UX training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      { id: uuid(), text: "Any Engg / Management graduate" },
      { id: uuid(), text: "Must be creative" },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};

export const javaFullStackSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.javaFullStackCoverImage,
    headingText: `Java Full Stack`,
    subHeadingText: `Training Program`,
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "8",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "5+", subHeading: "Projects", borderShow: true },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "6 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose Java Full Stack as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Universal Demand",listText:
      "Java is the top and widely used programming language used to develop highly secured and reliable applications. The demand of java professionals are always high which leads to more job opportunities and high salaries." },
      { id: uuid(), cardText: "Versatility",listText:
      "Java is a versatile language because it is used in back-end development, API’s & micro services development, handling business logics and can be integrated with a variety of databases and development frameworks." },
      { id: uuid(), cardText: "Large Community",listText:
      "There is a large community of java developers around the globe and a great wealth of resources available online, including documentation, blogs, tutorials and forums which are beneficial for learning and professional development of individuals." },
      { id: uuid(), cardText: "Future Proof",listText:
      "Since its birth, java is still a widely used language which proves that it is a stable and future proof technology so it is best suit for those who want to build a long term career in a specific domain." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Java Full Stack",
    paragraphText:
      "Java Full Stack Development provides a wide range of career opportunities like job security, high demand, versatility and professional development which makes it best option for those candidates who are interested in pursuing a career in technology by building most reliable and secure software or applications.",
    cardTextData: [
      { id: uuid(), cardText: "Java Basics & OOPS" },
      { id: uuid(), cardText: "Data Structure & JDBC" },
      { id: uuid(), cardText: "HTML, CSS & JavaScript" },
      { id: uuid(), cardText: "Servlet & JSP Technologies" },
      { id: uuid(), cardText: "MySQL & MongoDB Database" },
      { id: uuid(), cardText: "Spring & Hibernate Framework" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a Java Full Stack Engineer, you will have a variety to job roles to work and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "Java Software Developer" },
      { id: uuid(), listText: "Java Application Developer" },
      { id: uuid(), listText: "Java Web Developer" },
      { id: uuid(), listText: "Java Architect" },
      { id: uuid(), listText: "API Designer" },
      { id: uuid(), listText: "Java Trainer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Java Full Stack Developer" },
      { id: uuid(), listText: "Java Cloud Developer" },
      { id: uuid(), listText: "Java Technical Lead" },
      { id: uuid(), listText: "Java Consultant" },
      { id: uuid(), listText: "Java Test Automation Engineer" },
      { id: uuid(), listText: "Project Head, etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Java Full Stack Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work with Object oriented programming, Java, Web Technologies, Database and popular Java frameworks like Spring & Hibernate.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from B.tech or M.tech (any specialization), BCA or MCA, B.Sc. or M.Sc. (CS / IT) can join the Java Full Stack training program . The student must have basic knowledge of computer and have interest in software development.",
    paragraphText2:
      "Any working professional, belongs to computer science or IT specialization, having some experience in software industry or related industry and now looking for department switch, salary hike or promotions can also join the Java Full Stack training program. ",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Java Full Stack Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will go through with programming methodologies, oops concepts, java approaches, String handling, exception handling, multithreading, web technologies, database connectivity, API Design, popular java frameworks and mini projects that will help you to become an expert java full stack professional. You would get a hands-on expertise over the most in-demand concepts, tools & frameworks.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1:Introduction",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Java Full Stack training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      { id: uuid(), text: "Having interest in software development." },
      { id: uuid(), text: "Knowledge of computer (recommended)." },
    ],
  },
};

export const mernStackSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.mernStackCoverImage,
    headingText: "Full Stack Web Development with MERN",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "8",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "5+", subHeading: "Projects", borderShow: true },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose full stack web development as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Universal Demand",listText:
      "Nowadays, the popularity of web based applications and services is rapidly increasing so the demand for skilled full stack web developers is on the rise. Every organization looking to work with these developers who can develop and manage their web applications and services." },
      { id: uuid(), cardText: "Opportunities for Innovation",listText:
      "It offers a lot of opportunities to work on a variety of projects, from developing an attractive UI, adding the functionalities to enhancing the existing ones. Hence the professionals gets the opportunity for creativity or innovation in solving problems." },
      { id: uuid(), cardText: "Versatility",listText:
      "The full stack web developers are proficient in all the phases of web developer from front-end, API’s, web services to back-end. They have the ability to work on a wide range of web based projects." },
      { id: uuid(), cardText: "Career Growth",listText:
      "After having some working experience and expertise, the full stack web developers can progress into senior, leadership or managerial roles. These job roles makes them highly valued in the industry." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Full Stack Web Development",
    paragraphText:
      "Full stack web development helps businesses and organizations to improve the user experience, increase the efficiency, providing better services, gain competitive advantages, reduce maintenance costs and integrate or collaborate with other systems. Full stack development enables businesses to design & develop web applications or services which can be accessed from any location with any device. Overall, full stack web development provides flexibility to the businesses and help them to reach to a wide audience.",
    cardTextData: [
      { id: uuid(), cardText: "HTML, CSS & Bootstrap" },
      { id: uuid(), cardText: "JavaScript" },
      { id: uuid(), cardText: "Version Control, Git & GitHub" },
      { id: uuid(), cardText: "React JS Library" },
      { id: uuid(), cardText: "Node JS & Express JS Frameworks" },
      { id: uuid(), cardText: "MySQL & MongoDB Database" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a full stack web developer, you will have a variety to job roles to work and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "Front End Developer" },
      { id: uuid(), listText: "Back End Developer" },
      { id: uuid(), listText: "MERN Stack Developer" },
      { id: uuid(), listText: "Software Developer" },
      { id: uuid(), listText: "Full Stack Developer" },
      { id: uuid(), listText: "UI/UX Designer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Senior Software Developer" },
      { id: uuid(), listText: "API Engineer" },
      { id: uuid(), listText: "Senior Web Developer" },
      { id: uuid(), listText: "Team Lead" },
      { id: uuid(), listText: "Project Manager" },
      { id: uuid(), listText: "Chief Technical Officer, etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Full Stack Web Development Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to develop web applications by working with front-end, back-end along with database connectivity and management.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from BCA or MCA, B.Sc. or M.Sc. (CS / IT ) or B.tech or M.tech (any specialization), can join the full stack web development training program using MERN. The student must have basic computer knowledge and interest in websites or internet tools.",
    paragraphText2:
      "Any working professional, having some experience in IT or related industry and now looking for salary hike or promotions can also join the full stack web development  training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Full Stack Web Development Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "The objective of full stack web development training is to equip candidates with the skills and knowledge to become expert in developing complete web applications or services, mastering front-end & back-end development along with the database connectivity and management. The students will go through with some dummy & live projects to gain hands-on experience and improve their problem solving skills.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Full Stack Web Development training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      { id: uuid(), text: "A bachelor’s / master’s degree in relevant areas." },
      { id: uuid(), text: "Basic knowledge of computer & programming." },
      { id: uuid(), text: "Must have interest in websites & internet tools." },
    ],
  },
};

export const trainTheTrainerSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.digitalMarketingCoverImage,
    headingText: "Train The Trainer Program (Become a digital trainer)",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "8",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "10+", subHeading: "Tools", borderShow: true },
      {
        id: uuid(),
        heading: "2/3",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "3-5 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose Digital Training as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Increasing Demand",listText:
      "Nowadays the demand of digital training professionals is rapidly increasing in India and it is expected to continue in the next coming years. Many Ed-Tech startups or companies are looking for the digital training professionals." },
      { id: uuid(), cardText: "Lot of Opportunities",listText:
      "It offers a lot of opportunities including online course development, learning experience designer, curriculum developer and many more. You can also work as subject matter expert, which is very popular in the present time." },
      { id: uuid(), cardText: "Competitive Salaries",listText:
      "Due to the high demand of digital training professionals who have expertise in various domain and tools, ed-tech companies are offering huge benefits like work from home, flexibility & comfort along with the competitive salaries in the market." },
      { id: uuid(), cardText: "Latest Technology Trends",listText:
      "You need to be updated with the lates technologies and trends, if you want to work like an expert. Many technologies & tools are available which makes your work easy and ensures the quality." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Train The Trainer",
    paragraphText:
      "If you are looking for various ways to engage your students and improve their learning experiences then Learn2Earn Labs is offering Train The Trainer program by which you can create high-quality e-content, video lectures, tutorials, and other digital learning materials that will captivate your students attention and motivate or inspire them to learn.",
    cardTextData: [
      { id: uuid(), cardText: "E-Content Development" },
      { id: uuid(), cardText: "PowerPoint & Google Workspace" },
      { id: uuid(), cardText: "Video Editing & Camtasia" },
      { id: uuid(), cardText: "YouTube Channel Management" },
      { id: uuid(), cardText: "Online Live Classes Tools" },
      { id: uuid(), cardText: "Best Practices & ChatGPT" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a digital training professional, you will have a variety to job roles to work and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After having practical knowledge in digital training, you can also work for your own, like",
    cardListTextData1: [
      { id: uuid(), listText: "Subject Matter Expert" },
      { id: uuid(), listText: "Online Course Designer" },
      { id: uuid(), listText: "Online Course Facilitator" },
      { id: uuid(), listText: "Curriculum Developer" },
      { id: uuid(), listText: "Learning Experience Designer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Freelancing" },
      { id: uuid(), listText: "Online Teacher" },
      { id: uuid(), listText: "Training Consultant" },
      { id: uuid(), listText: "Blogger" },
      { id: uuid(), listText: "Training Business, etc." },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Train The Trainer Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work in diverse areas from digital content design & development to successfully training delivery through digital platforms.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate having interest in teaching / training / content design & development, can join the Train the Trainer program . The student must have basic computer knowledge.",
    paragraphText2:
      "Any teaching professional or academician or working professional, having interest in teaching / training / content design & development or looking for job switch or skill development can join the Train The Trainer program offered by Learn2Earn Labs.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Train The Trainer Program in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "The training program is designed to equip teachers, educators and academicians with the necessary skills and knowledge to design and develop high quality, engaging and effective e-content using a set of software tools and deliver it to the students through YouTube and online live classes.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Train The Trainer training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      { id: uuid(), text: "A valid bachelor’s / master’s degree" },
      { id: uuid(), text: "Interest in teaching or e-content design" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const htmlCssJSScheme = {
  landingPageSection: {
    imagePath: COVER_IMAGES.mernStackCoverImage,
    headingText: "Front-End Design (HTML, CSS & JavaScript)",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "5",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "500+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "HTML, CSS & JS",
    paragraphText:
      "HTML, CSS and JavaScript are the three core and essential technologies used in website design and front-end web development. With the growing demand of websites & internet, companies are looking for skilled professionals who can work in the Front-End Development and UI Designing. These technologies allows designers & developers to create interactive, responsive & attractive websites or web applications providing seamless user experience.",
    cardTextData: [
      { id: uuid(), cardText: "Front End Design Concepts" },
      { id: uuid(), cardText: "Hyper Text Markup Language" },
      { id: uuid(), cardText: "Cascading Style Sheets" },
      { id: uuid(), cardText: "Responsive Design" },
      { id: uuid(), cardText: "JavaScript" },
      { id: uuid(), cardText: "Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "HTML, CSS & JS Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to design the web pages using HTML, CSS & JavaScript by managing the styles, responsiveness and interactivity.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the HTML, CSS & JavaScript training program . The student must have interest in website designing with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn website designing or front end designing can join the HTML, CSS & JavaScript training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to learn website designing or front end designing can join the HTML, CSS & JavaScript training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "HTML, CSS & JavaScript Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the HTML, CSS & JavaScript training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for HTML, CSS & JavaScript training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in programming" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const javaSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.javaProgramming,
    headingText: "Become an Expert in Java Programming",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "5",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "800+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "30/60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Java Programming",
    paragraphText:
      "In the present scenario, Java is one of the languages or technologies which is used to develop a wide range of software applications across the world. You can get the support of extensive libraries, frameworks & platforms for developing web applications, mobile applications, enterprise applications, web services, microservices, handling the database operations and many more with java programming. Hence, Java is a valuable technology to learn and work if you are looking for career stability & growth.",
    cardTextData: [
      { id: uuid(), cardText: "Java Core Programming" },
      { id: uuid(), cardText: "Graphical User Interface" },
      { id: uuid(), cardText: "Database Connectivity" },
      { id: uuid(), cardText: "Collection & Generics" },
      { id: uuid(), cardText: "Servlet & Java Server Pages" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Java Programming Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to write java programs by understanding the object oriented programing & software development concepts.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Java Programming training program. The student must have interest in programming with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the Java Programming training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the Java Programming training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Java Programming Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the java programming training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Java Programming training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in programming" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const pythonSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.pythonProgramming,
    headingText: "Become an Expert in Python Programming",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "5",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "800+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "30/60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Python Programming",
    paragraphText:
      "Nowadays, Python is the preferred language to work in the area of data science and machine learning because of its ability to automate tasks by writing less code statements. It is the most demanding language for data scientists, machine learning experts, business intelligence professionals & research analysts, who uses python codes to analyze and visualize complex data sets for better decision making.",
    cardTextData: [
      { id: uuid(), cardText: "Python Core Programming" },
      { id: uuid(), cardText: "Control Flow Statements" },
      { id: uuid(), cardText: "Exception Handling & File Handling" },
      { id: uuid(), cardText: "NumPy & Pandas Library" },
      { id: uuid(), cardText: "Data Visualization & Web Scrapping" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Python Programming Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to write programs by using python programming, tools, libraries, case studies and to work on minor projects.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Python Programming training program. The student must have interest in programming with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the Python Programming training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the Python Programming training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Python Programming Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Python programming training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Python Programming training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in programming" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const linuxSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.linuxAndAWS,
    headingText: "Become an Expert with Linux and AWS",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "4",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "300+",
        subHeading: "Exercises",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Linux & AWS",
    paragraphText:
      "Linux and AWS are the two most demanding areas in the world of cloud computing and service management and have a vast scope in IT service industries. The combination of Linux & Amazon Web Services provides software developers and project managers, a powerful and dynamic platform to develop and deploy scalable applications. With Linux & AWS, developers can build and deploy flexible and robust applications in the cloud.",
    cardTextData: [
      { id: uuid(), cardText: "Linux & Shell Scripting" },
      { id: uuid(), cardText: "Configuration & Management" },
      { id: uuid(), cardText: "AWS & EC2 Instance" },
      { id: uuid(), cardText: "Security, Storage & Load Balancing" },
      { id: uuid(), cardText: "Version Control & Databases" },
      { id: uuid(), cardText: "Virtual Private Cloud & NAT Gateway" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Linux & AWS Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work on Linux, resource management, cloud environment and managing AWS services.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Linux & AWS training program . The student must have interest in operating system and software development with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn about Linux, Shell Scripting, Cloud Computing & Amazon Web Services (AWS) can join the Linux & AWS training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to learn about  Linux, Shell Scripting, Cloud Computing & Amazon Web Services (AWS) can join the Linux & AWS training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Linux & AWS Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Linux & AWS training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Linux & AWS training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in Linux & AWS" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const mySQLSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.mySQLProgramming,
    headingText: "Become an Expert MySQL DBA",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "7",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "200+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "30/45",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "MySQL Database",
    paragraphText:
      "MySQL is one of the popular open-source relational database management system which is widely used in handling the database of web applications, e-commerce websites, mobile applications and content management systems due to its flexibility, easiness and scalability which makes it an ideal choice for both small and large scale applications. MySQL provides an efficient and robust platform to create, store, organize and retrieve data quickly and easily.",
    cardTextData: [
      { id: uuid(), cardText: "Database & SQL Commands" },
      { id: uuid(), cardText: "CRUD Operations" },
      { id: uuid(), cardText: "Functions & Aggregates" },
      { id: uuid(), cardText: "Indexing & Optimization" },
      { id: uuid(), cardText: "Stored Procedures & Triggers" },
      { id: uuid(), cardText: "Exercises & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "MySQL-DBA Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work on MySQL database, CRUD Operations, data retrieval, indexing, managing user and permissions, etc.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the MySQL Database training program . The student must have interest in database and software development with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn about database operations can join the MySQL Database training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to learn about database operations can join the MySQL Database training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "MySQL Database Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the MySQL Database training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for MySQL Database training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in Database" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const programmingSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.programmingFundamentals,
    headingText: "Programming Fundamentals (C, C++ and Data Structure)",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "5",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "500+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Programming Fundamentals",
    paragraphText:
      "In the present scenario, C, C++and Data Structure are the fundamentals courses that are use to teach programming and implementation logics. As programming is all about solving problems by writing code statements or programs, hence learning to data types, variables, loops, functions, arrays, linked lists, stacks, queues, trees and graphs can help you understand how to solve complex problem.",
    cardTextData: [
      { id: uuid(), cardText: "Programming Concepts" },
      { id: uuid(), cardText: "Control Flow & Transitions" },
      { id: uuid(), cardText: "C Programming Language" },
      { id: uuid(), cardText: "C++ Programming Language" },
      { id: uuid(), cardText: "Data Structure & Algorithms" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Programming Fundamentals Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to extract insights from the data and develop predictive models for decision making.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the programming fundamentals training program . The student must have interest in programming with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the programming fundamentals training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the programming fundamentals training program.",
    secondSectionForProgrammingDetails: {
      headingTextData: "Option to choose, separate program",
      paragraphTextData:
        "If you want to enhance your programming skills & concepts then you can also choose a specific training program.",
      cardData: [
        {
          id: uuid(),
          cardText: "C Programming",
          cardImagePath: COURSES_PAGE_IMAGES.cLanguageImage,
          pathName: "/c-programming-course",
        },
        {
          id: uuid(),
          cardText: "C++ Programming",
          cardImagePath: COURSES_PAGE_IMAGES.cppLanguageImage,
          pathName: "/cpp-programming-course",
        },
        {
          id: uuid(),
          cardText: "Data Structure & Algorithms",
          cardImagePath: COURSES_PAGE_IMAGES.dataStructureImage,
          pathName: "/data-structure-and-algorithm-course",
        },
      ],
    },
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Programming Fundamentals Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the complete programming fundamentals training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for programming fundamentals training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in programming" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const cProgrammingSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.cProgramming,
    headingText: "Become an Expert in C Programming",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "4",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "200+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "30/60",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "C Programming",
    paragraphText:
      "In the present scenario, C programming is one of the fundamentals courses that are use to teach programming concepts and implementation logics. As programming is all about solving problems by writing code statements or programs, hence with C language you can learn about data types, variables, loops, functions, arrays, strings, structure, file handling, etc. and can write programs to solve complex problem.",
    cardTextData: [
      { id: uuid(), cardText: "Programming Basics" },
      { id: uuid(), cardText: "Control Flow & Transitions" },
      { id: uuid(), cardText: "Arrays & Functions" },
      { id: uuid(), cardText: "Pointers & Memory Allocation" },
      { id: uuid(), cardText: "String Handling & Structures" },
      { id: uuid(), cardText: "File Handling & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "C Programming Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to understand the C programing concepts and write programs to solve complex problems.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the C programming training program . The student must have interest in programming with basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the C programming training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the C programming training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "C Programming Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During this C Programning training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for C programming training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student / job seeker / working professional can join",
      },
      { id: uuid(), text: "Having interest in programming" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const cPlusSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.cProgramming,
    headingText: "Become an Expert in C++ Programming",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "4",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "200+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "30/60",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "C++ Programming",
    paragraphText:
      "In the present scenario, C++ programming is one of the fundamentals courses that are use to teach advance programming concepts and implementation logics to develop projects . With C++ language you can learn about control flows, operators, arrays, functions, pointers, object oriented programming, exception handling, templates etc. and can work on minor projects.",
    cardTextData: [
      { id: uuid(), cardText: "Programming & Control Flow" },
      { id: uuid(), cardText: "Object Oriented Programming" },
      { id: uuid(), cardText: "Arrays & Functions" },
      { id: uuid(), cardText: "Pointers & Memory Allocation" },
      { id: uuid(), cardText: "Exception Handling & Templates" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "C++ Programming Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to understand the C++ programing concepts and their implementation to develop projects.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the C++ programming training program . The student must have interest in programming with basic c programming and basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the C++ programming training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the C++ programming training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "C++ Programming Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During this C++ Programming training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for C++ programming training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having basic C programming knowledge" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const dsSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.cProgramming,
    headingText: "Data Structure & Algorithms",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "8",
        subHeading: "Training Modules",
        borderShow: true,
      },
      { id: uuid(), heading: "200+", subHeading: "Programs", borderShow: true },
      {
        id: uuid(),
        heading: "60",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Data Structure & Algorithms",
    paragraphText:
      "Data Structure is all about the fundamental concepts which forms the backbone of effective programming and software development. By using the DSA concepts and methodologies, programmers can write more clear and concise code by using optimized memory and reducing the runtime complexity for solving real world problems.",
    cardTextData: [
      { id: uuid(), cardText: "Algorithms" },
      { id: uuid(), cardText: "Data Structures" },
      { id: uuid(), cardText: "Tree Based Data Structure" },
      { id: uuid(), cardText: "Graph Based Data Structure" },
      { id: uuid(), cardText: "Sorting & Searching Algorithms" },
      { id: uuid(), cardText: "Dynamic Programming" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Data Structure Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to understand the algorithms & data structures to write more clear and concise code by using optimized memory and reducing the runtime complexity.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Data Structure & Algorithms training program . The student must have interest in programming with basic c programming and basic computer knowledge.",
    paragraphText2:
      "Students from any specializations of B.Tech / M.Tech / BCA / MCA / B.Sc. / M.Sc, who are looking to learn programming and enhance their practical skills can join the Data Structure & Algorithms training program.",
    paragraphText3:
      "Working professionals or job seekers, who are looking to enhance their programming skills can join the Data Structure & Algorithms training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Data Structure Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During this Data Structure training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Data Structure & Algorithms training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having basic C programming knowledge" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const socialMediaSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.socialMediaMarketing,
    headingText: "Become an expert Social Media Marketer",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "7",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30/60/90",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Social Media Marketing",
    paragraphText:
      "With the rise of social media and social commerce, Social Media Marketing is providing services to businesses and individuals to reach their target audience and promote their products and services through various social media channels. Social Media Marketing covers a wide range of tools & techniques like organic social media management, paid or sponsored advertising, influencer marketing, social media analytics, etc. which makes it an essential skill to succeed in the digital marketing industry.",
    cardTextData: [
      { id: uuid(), cardText: "Facebook Marketing" },
      { id: uuid(), cardText: "Instagram Marketing" },
      { id: uuid(), cardText: "LinkedIn Marketing" },
      { id: uuid(), cardText: "Twitter Marketing" },
      { id: uuid(), cardText: "YouTube Marketing" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Social Media Marketing Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work with various social media platforms like Facebook, Instagram, Twitter, LinkedIn, YouTube, etc. to promote services or products.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Social Media Marketing training program. The student must have basic computer knowledge and have interest in social media, & advertising.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about marketing & advertising through social media can join the Social Media Marketing training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about marketing & advertising through social media to start their online work or freelancing can join the Social Media Marketing training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Social Media Marketing Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Social Media Marketing training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Social Media Marketing training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in advertising." },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const googleAdsSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.googleAds,
    headingText: "Become an expert in Google Ads",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "10",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30/60",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Google Ads",
    paragraphText:
      "Nowadays, Google Ads become a very powerful tool used by businesses to reach their target audience through display ads, video ads, paid search, etc. Millions of businesses are using the platform to promote their services and products or increase their online visibility or drive traffic to their websites. Businesses are preferring Google Ads due to its high ROI (Return on Investment), as they only pay when someone clicks on their ads which makes Google Ads a cost-effective advertising solution.",
    cardTextData: [
      { id: uuid(), cardText: "Targeting & Keywords" },
      { id: uuid(), cardText: "Budget & Bidding" },
      { id: uuid(), cardText: "Ad-creation, Conversion & Analytics" },
      { id: uuid(), cardText: "Remarketing & Retargeting" },
      { id: uuid(), cardText: "Forecasting & Planning" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Google Ads Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to reach the target audiences of business through display ads, video ads and paid search using Google Ads.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Google Ads training program. The student must have basic computer knowledge and have interest in campaign designing & advertising.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about campaign designing & advertising. can join the Google Ads training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about campaign designing & advertising to start their online work or freelancing can join the Google Ads training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Google Ads Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Google Ads training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Goolge Ads training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in advertising." },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const wordpressSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.wordpressAndBlogging,
    headingText: "Become an expert in WordPress & Blogging",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "9",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30/60",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "WordPress & Blogging",
    paragraphText:
      "WordPress is one of the popular content management system (CMS) used to creating, designing and managing websites, It provides a user friendly interface with customizable themes which makes it a go-to platform for bloggers, website designer and businesses. With the ability of blog writing with WordPress many people or businesses use to express their thoughts, share information & content and promote their products and services.",
    cardTextData: [
      { id: uuid(), cardText: "Domain & Hosting" },
      { id: uuid(), cardText: "Planning & Architecture" },
      { id: uuid(), cardText: "SEO & E-Commerce" },
      { id: uuid(), cardText: "Blogging & Content Design" },
      { id: uuid(), cardText: "Content Promotion" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "WordPress & Blogging Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work WordPress, webpage design, themes, plugins, SEO, landing pages, blogging, website customization etc.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the WordPress & Blogging training program. The student must have basic computer knowledge and have interest in content design, website design & blogging.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about website design & blogging can join the WordPress & Blogging training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about website design & blogging to start their online work or freelancing can join the WordPress & Blogging training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "WordPress & Blogging Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the WordPress & Blogging training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for WordPress & Blogging training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in website design & blogging" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const seoSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.searchEngineOptimizationn,
    headingText: "Become a certified SEO Expert",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "5",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "SEO Certification",
    paragraphText:
      "Nowadays, The demand of Search Engine Optimization (or SEO) is increased due to the growing importance of digital presence of any business or due to expanded competition. The main aim of Search Engine Optimization is to improve the visibility and ranking of websites or blogs in search engine result pages. SEO covers a wide range of techniques and tools which are used by businesses and industries in their digital marketing strategies & promotions.",
    cardTextData: [
      { id: uuid(), cardText: "SEO Basics & Background" },
      { id: uuid(), cardText: "Keyword Research, Analysis & Clustering" },
      { id: uuid(), cardText: "On-Page/On-Site SEO" },
      { id: uuid(), cardText: "On-Page SEO Activities" },
      { id: uuid(), cardText: "Off-Page/Off-Site SEO" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "SEO Certification Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to work with SEO tools and techniques, keyword research and their impact on Search Engine Result Page (or SERP).",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the SEO Certification training program. The student must have basic computer knowledge and have interest in content design, website design & blogging.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to enhance their SEO skills can join the SEO Certification training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about SEO to start their online work or freelancing can join the SEO Certification training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "SEO Certification Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the SEO Certification training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for SEO Certification training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in website or content design" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const contentMarketingSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.contentMarketing,
    headingText: "Become an expert in Content Marketing",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "20+",
        subHeading: "Topics & Strategies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Content Marketing",
    paragraphText:
      "Nowadays, businesses and individuals are using various content formats like blog posts, infographics, podcasts, and videos to reach their target audience. In this respect, content marketing provides a strategic marketing approach that involves creating & sharing valuable content to attract and engage the audience and drive profitable customer actions. The scope of content marketing has further expanded due to the emergence of new technologies such as AI and machine learning which allows businesses and individuals to customize their content to deliver a better user experience.",
    cardTextData: [
      { id: uuid(), cardText: "Content Design & Creation" },
      { id: uuid(), cardText: "AIDA Model & Strategies" },
      { id: uuid(), cardText: "Content Marketing Channels" },
      { id: uuid(), cardText: "Strategies & Challenges" },
      { id: uuid(), cardText: "Engaging Content Writing" },
      { id: uuid(), cardText: "Assignments & Minor Projects" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Content Marketing Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to reach the target audiences by using various content formats like blog posts, infographics, podcasts and videos.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Content Marketing training program. The student must have basic computer knowledge and have interest in content creation and their promotions.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about content creation and promotions can join the Content Marketing training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about content creation and promotions to start their online work or freelancing can join the Content Marketing training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Content Marketing Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Content Marketing training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Content Marketing training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in content marketing" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const affiliateMarketingSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.affiliateMarketing,
    headingText: "Become an expert in Affiliate Marketing",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "20+",
        subHeading: "Topics & Strategies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "10+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Affiliate Marketing",
    paragraphText:
      "With the rise of e-commerce, Affiliate Marketing has become a popular way for social media influencers, bloggers, YouTubers, and other content creators to monetize their platforms. Affiliate Marketing is a cost-effective way for businesses and individuals to reach large audience groups, increase revenue and generate profits. It is a kind of performance-based marketing where affiliates get rewards from businesses for bringing their visitors or customers to their web portals through their own marketing efforts.",
    cardTextData: [
      { id: uuid(), cardText: "Niche Selection & Advertising Model" },
      { id: uuid(), cardText: "Amazon Affiliate Associates" },
      { id: uuid(), cardText: "Strategies For Getting Traffic" },
      { id: uuid(), cardText: "Affiliate Marketing Website Components" },
      { id: uuid(), cardText: "Web Analytics & Coupon System" },
      { id: uuid(), cardText: "Useful Tools & Referral System" },
    ],
  },

  cloudDevopsTrainingSection: {
    headingText: "Affiliate Marketing Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to use Affiliate Marketing for getting the rewards from businesses to reach large audience groups, increase revenue and generate profits.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText:
          "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any student can join the Affiliate Marketing training program. The student must have basic computer knowledge and have interest in online earning, product selling & promotions.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about sales and promotions can join the Affiliate Marketing training program.",
    paragraphText3:
      "Housewives, Homemakers or any person, who wants to learn about sales and promotions to start their online work or freelancing can join the Affiliate Marketing training program.",
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Affiliate Marketing Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During this Affiliate Marketing training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Affiliate Marketing training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Any student/job seeker/working professional can join",
      },
      { id: uuid(), text: "Having interest in sales & promotions" },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const fullStackEngineer = {
  landingPageSection: {
    imagePath: COVER_IMAGES.fullStackEngineerCoverImage,
    headingText: "Become a Full Stack Software Engineer",
    subHeadingText: "With 8+ LPA Guaranteed Package",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "25",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "4",
        subHeading: "Capstone Projects",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "600+",
        subHeading: "Training Hours",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "8 LPA+",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, choose full stack as a career ?",
    cardTextData: [
      { id: uuid(), cardText: "Full Stack Engineers are in Demand",listText:
      "The demand for full-stack software professionals has been increased as business organizations continue to expand their online presence. They always look to hire professionals who can work in multiple domains." },
      { id: uuid(), cardText: "Versatility & Job Security",listText:
      "The Versatility of Full Stack engineers makes them valuable to businesses and provide them stability in the constantly changing industry." },
      { id: uuid(), cardText: "Handsome Salary",listText:
      "The full stack software professionals are often paid well due to their variety of skills, experience and high demands." },
      { id: uuid(), cardText: "Promotions & Career Growth",listText:
      "As they can work in different specializations hence they get promotions frequently and can become team leads, project managers, consultant, CTO’s, or even start their own businesses.", },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Full Stack Engineer",
    paragraphText:
      "In general, the developers who work on web services usually stick with front-end components or back-end logic or development operations and face difficulty. The same problem also occurs with others when they stick with the requirements & processes belonging to different domains. But a full stack professional is someone who handles and manages most of the operations, that's why they are in demand.",
    cardTextData: [
      {
        id: uuid(),
        cardText: "Front End (HTML, CSS, JavaScript, EcmaScript & ReactJS)",
      },
      { id: uuid(), cardText: "Database (MySQL & MongoDB)" },
      {
        id: uuid(),
        cardText: "Deployment (Jenkins, Docker, Ansible & Kubernetes)",
      },
      { id: uuid(), cardText: "Back End (Java, Spring & Hibernate)" },
      { id: uuid(), cardText: "Server & Network (Linux & AWS )" },
      { id: uuid(), cardText: "Project Management (Agile Model & Jira)" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Middle Level Career Options",
    cardHeadingText2: "Top Level Career Options",
    paragraphText:
      "As a full stack software professional, you have many different specializations so you will have different options to start your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After two to five years of experience, you can apply for job roles, like",
    cardListTextData1: [
      { id: uuid(), listText: "Full Stack Developer" },
      { id: uuid(), listText: "System Engineer" },
      { id: uuid(), listText: "SDE – I / II" },
      { id: uuid(), listText: "Front End Developer" },
      { id: uuid(), listText: "System Architect" },
      { id: uuid(), listText: "DevOps Engineer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "SDE – III" },
      { id: uuid(), listText: "Project Consultant" },
      { id: uuid(), listText: "Team Lead" },
      { id: uuid(), listText: "Enterprise Architect" },
      { id: uuid(), listText: "Project Manager" },
      { id: uuid(), listText: "Project Head" },
      { id: uuid(), listText: "Chief Technical Officer (CTO)" },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Full Stack Training Program",
    paragraphText:
      "TThis program is designed to provide students with the knowledge and hands-on skills needed to succeed in project development field and perform like an expert.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText: "of a year or 600 hours duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Capstone Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from B.tech or M.tech (any specialization), BCA or MCA, B.Sc. or M.Sc. (CS / IT) can join the full stack training. The student must secured at-least 60% marks throughout the graduation or post graduation degree for getting the job guarantee promise.",
    paragraphText2:
      "Any working professional, belongs to computer science or IT specialization and now looking for salary hike or promotions can also join the full stack training program.",
    secondSectionForFullStack: {
      headingTextDataForFullStack: "Get Real Work Experience",
      paragraphText1ForFullStack:
        "Our USP is to give students, deep practical knowledge in a specific domain and help them getting their dream jobs.",
      paragraphText2ForFullStack: "",
      listDataTextForFullStack: [
        { id: uuid(), headingText: "Practice,", normalText: "what you learn" },
        {
          id: uuid(),
          headingText: "Implement,",
          normalText: "what you practice",
        },
        {
          id: uuid(),
          headingText: "Present,",
          normalText: "what you implement",
        },
      ],
      imagePathData: COVER_IMAGES.girlWithMacbook,
    },
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will go through with programming methodologies, development approaches, case studies, code deployment, design thinking concepts, assignments, and mini projects that will help you to become an expert full stack engineer. You would get a hands-on expertise over the most in-demand technologies, platforms and tools.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
  },
  technologiesAndPlatforms: {
    headingTextData: "Technologies & Platforms",
    sliderData: [
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.javaLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.javaEELogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.htmlCssJsLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.bootstrapLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.reactLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.springLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.springHibernateLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.mySqlLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.mongoDbLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.githubLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.ubuntuLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.awsLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.jenkinsLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.dockerLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.kubernatesLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.jiraSoftwareLogo },
      { id: uuid(), imagePath: COURSES_LOGO_IMAGES.figmaLogo },
    ],
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Full Stack Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  guidanceSection: {
    headingText: "Under Guidance Of",
    cardPicData: {
      imagePath: ABOUTUS_PAGE_IMAGES.mohitSinghImage,
      imageHeadingText: "Mohit Singh",
      imageEducationText: "M.Tech, B.Tech (C.S.E)",
    },
    cardInfoData: {
      paragraphText1:
        "Mr. Mohit Singh is a professional full-stack trainer, project consultant and startup mentor. He is holding expertise in Java, Application Design, MERN Stack, DevOps, Design Thinking and User Experience Design.",
      paragraphText2:
        "He has trained thousands of students & hundreds of employed professionals. He completed his trainings in Google, Gurugram and short term projects in IIT Delhi, IIT BHU & IIT Jodhpur.",
      paragraphText3:
        "He is also recognized as Mentor with MEITY Startup Hub, startup India, Punjab Startup, startup Uttarakhand, Mumbai State Innovation Society, Atal Innovation Mission, etc. in the area of education & utility services.",
    },
  },
  companyPortfolio: {
    headingTextData: "Our students are working with Top Companies",
    sliderData: [
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.nttDataLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.commvaultLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.accentureLogoo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.globalLogicLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.congnizantLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.morganStanleyLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.tcsLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.publicisSapientLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.mobileProgrammingLogo },
    ],
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Full Stack Engineer training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      {
        id: uuid(),
        text: "Knowledge of operating system & shell script (preferred).",
      },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
  jobOrientedPrograms: {
    headingText: "Other Job Oriented Training Programs",
    cardData: [
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.javaFullStackImage,
        courseNameText: "Java Full Stack",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/java-full-stack-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.mernStackDevelopmentImage,
        courseNameText: "Full Stack Web Development",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/full-stack-web-development-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.dataScienceImage,
        courseNameText: "Data Science & Machine Learning",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/data-science-and-machine-learning-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.cloudComputingAndDevopsImage,
        courseNameText: "Cloud Computing & DevOps",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/cloud-computing-and-devops-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.digitalMarketingImage2,
        courseNameText: "Digital Marketing",
        courseDurationText: "Duration : 6 months | 12 Months",
        pathName: "/social-media-marketing-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.uiuxCourseImage,
        courseNameText: "Design Thinking & UI/UX",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/design-thinking-and-ui-ux-course",
      },
    ],
  },
};

export const digitalMarketing = {
  landingPageSection: {
    imagePath: COVER_IMAGES.digitalMarketingCoverImage,
    headingText: "Become a Professional Digital Marketer",
    paragraphText: "With Job Gurantee",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "15+",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "50+",
        subHeading: "Professional Tools",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "100+",
        subHeading: "Case Studies",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "3-5 LPA",
        subHeading: "Avg. Salary Package",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, you should join Digital Marketing ?",
    cardTextData: [
      { id: uuid(), cardText: "Digital Marketing is in Demand",listText:
      "Every business needs a digital marketer to promote their product or service digitally. Every organization need to promote their products or service or content by attractive posts, images, videos, campaigns & websites." },
      { id: uuid(), cardText: "Offering Good Salary Packages",listText:
      "People are living digital life they interact with each other via social media or internet so digital marketing is in demand." },
      { id: uuid(), cardText: "Lost of Freelancing Work",listText:
      "With digital marketing, you can work with any company to market their product or service or to manage their content over website or mobile app." },
      { id: uuid(), cardText: "Digital is the Future",listText:
      "You can design the content, work with the advertiser, you can design websites, develop ecommerce websites, you can start your earning by working online, you can work as a freelancer or open your own advertising agency and many more."},
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Digital Marketing",
    paragraphText:
      "Nowadays, businesses are leveraging digital platforms or channels to reach  their target audience and the demand of online marketing is increasing hence the scope of digital marketing is continuously growing. Digital Marketers can work with various industries like advertising, e-commerce, digital media, healthcare, education , travelling and many more.",
    cardTextData: [
      { id: uuid(), cardText: "Search Engine Optimization" },
      { id: uuid(), cardText: "WordPress & Blogging" },
      { id: uuid(), cardText: "Social Media Marketing" },
      { id: uuid(), cardText: "Google Ads & Analytics" },
      { id: uuid(), cardText: "Email & Mobile Marketing" },
      { id: uuid(), cardText: "Digital Display Advertising" },
    ],
  },
  careerOptionSection: {
    headingText: "Career Options",
    cardHeadingText1: "Job Roles",
    cardHeadingText2: "Career Interest",
    paragraphText:
      "As a digital marketing professional, you will have a diverse range of job opportunities to work for businesses or someone else or for your own and get success in your career.",
    cardParagraphText1:
      "After successfully completion of training, you can apply for various job roles, like",
    cardParagraphText2:
      "After having practical knowledge in digital marketing you can also have other options, like",
    cardListTextData1: [
      { id: uuid(), listText: "Social Media Marketer" },
      { id: uuid(), listText: "Campaign Designer" },
      { id: uuid(), listText: "SEO Consultant" },
      { id: uuid(), listText: "Business Development Executive" },
      { id: uuid(), listText: "Ads Manager" },
      { id: uuid(), listText: "Website Designer" },
      { id: uuid(), listText: "Digital Marketer, etc." },
    ],
    cardListTextData2: [
      { id: uuid(), listText: "Freelancing" },
      { id: uuid(), listText: "Marketing Agency" },
      { id: uuid(), listText: "Content Designing" },
      { id: uuid(), listText: "Media & Advertising" },
      { id: uuid(), listText: "Influence Marketing" },
      { id: uuid(), listText: "Digital Marketing Consultant" },
      { id: uuid(), listText: "Business" },
    ],
  },
  availableProgramsSection: [
    {
      id: uuid(),
      imagePath: COURSES_LOGO_IMAGES.threeMonthsMarketing,
      text1: "Digital Marketing Executive",
      text2: "Duration : 3 months",
      text3: "(Job Assistance)",
      buttonText: "Download Syllabus",
    },
    {
      id: uuid(),
      imagePath: COURSES_LOGO_IMAGES.sixMonthsMarketing,
      text1: "Digital Marketing Associate",
      text2: "Duration : 6 months",
      text3: "(Job Guarantee)",
      buttonText: "Download Syllabus",
    },
    {
      id: uuid(),
      imagePath: COURSES_LOGO_IMAGES.oneYearMarketing,
      text1: "Digital Marketing Professional",
      text2: "Duration - 12 months",
      text3: "(Job Guarantee)",
      buttonText: "Download Syllabus",
    },
  ],
  cloudDevopsTrainingSection: {
    headingText: "Digital Marketing Training Program",
    paragraphText:
      "Learn2Earn Labs offers an extended support to the candidates, train accordingly and help them to get their dream job in renowned companies after completing graduation or postgraduation.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText: "of 3 months or 6 Months Duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Live Project Work",
        paragraphText: "To build your hands-on expertise",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Resume Building Assistance",
        paragraphText: "To create an attractive resume for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate or post graduate student from any specialization can join the digital marketing training program . The student must have basic knowledge of computer and internet tools.",
    paragraphText2:
      "Any working professional who is looking for job switch and now looking for salary hike or promotions can also join the digital marketing training program.",
    paragraphText3:
      "Any house-wife, girl or home makers looking for part time earning can also join the digital marketing training program, if they have basic knowledge of computer and internet tools.",
    paragraphText4:
      "Any Business owner or shop keeper, who wants to promote their products and services online can also join the digital marketing training program.",
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During training you will work on multiple case studies, human psychology, design thinking concepts, content design, assignments, and mini projects that will help you to become a confident digital marketer. You would get a hands-on expertise over the most in-demand skills, techniques and tools.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
  },
  technologiesAndPlatforms: {
    headingTextData: "50+ Popular Tools Covered",
    sliderData: [
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleAdsLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleAnalyticsLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleConsoleLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.facebookLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.mozLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.semrushLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.screenFrog },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.ahrefLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.canvaLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.mailChimpLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.uberSuggest },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.wordpressLogo }
    ],
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Digital Marketing Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  guidanceSection: {
    headingText: "Under Guidance Of",
    cardPicData: {
      imagePath: ABOUTUS_PAGE_IMAGES.shubendraGuptaImage,
      imageHeadingText: "Dr. Shubhendra Gupta",
      imageEducationText: "Ph.D., B.Ed, M.Sc (Physics)",
    },
    cardInfoData: {
      paragraphText1:
        "Dr. Shubhendra Gupta is an experienced digital marketer, Business Consultant and startup mentor with a demonstrated history of working in the information technology and services industry.",
      paragraphText2:
        "He use to train students & working professionals for getting better job opportunities and train business owners in generating profits or leads. His areas of interest are Digital Marketing, Business Development, Data Analysis, Strategic Planning, Market Research & Reality, User Testing, Website design, etc.",
      paragraphText3:
        "He is also recognized as Mentor with MEITY Startup Hub & Punjab Startup in the area of education & business consultation.",
    },
  },
  companyPortfolio: {
    headingTextData: "Our students are working with Top Companies",
    sliderData: [
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.nttDataLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.commvaultLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.accentureLogoo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.globalLogicLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.congnizantLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.morganStanleyLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.tcsLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.publicisSapientLogo },
      { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.mobileProgrammingLogo },
    ],
    discountAndOffersSection: {
      discountHeadingText: "Discount & Offers",
      discountCard: [
        {
          id: uuid(),
          cardText: "25% Cashback Available",
          cardImage: COURSES_PAGE_IMAGES.cashbackImage,
        },
        {
          id: uuid(),
          cardText: "Work Incentives",
          cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
        },
      ],
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Digital Marketing training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      {
        id: uuid(),
        text: "Knowledge of operating system & shell script (preferred).",
      },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
  jobOrientedPrograms: {
    headingText: "Other Job Oriented Training Programs",
    cardData: [
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.javaFullStackImage,
        courseNameText: "Java Full Stack",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/java-full-stack-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.mernStackDevelopmentImage,
        courseNameText: "Full Stack Web Development",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/full-stack-web-development-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.dataScienceImage,
        courseNameText: "Data Science & Machine Learning",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/data-science-and-machine-learning-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.cloudComputingAndDevopsImage,
        courseNameText: "Cloud Computing & DevOps",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/cloud-computing-and-devops-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.digitalMarketingImage2,
        courseNameText: "Digital Marketing",
        courseDurationText: "Duration : 6 months | 12 Months",
        pathName: "/social-media-marketing-course",
      },
      {
        id: uuid(),
        imagePath: JOB_ORIENTED_IMAGES.uiuxCourseImage,
        courseNameText: "Design Thinking & UI/UX",
        courseDurationText: "Duration : 4 months | 6 Months",
        pathName: "/design-thinking-and-ui-ux-course",
      },
    ],
  },
};

export const powerBI = {
  landingPageSection: {
    imagePath: COVER_IMAGES.digitalMarketingCoverImage,
    headingText: "Business Intelligence with Power BI",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "16",
        subHeading: "Training Modules",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "200+",
        subHeading: "Exercises",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "30",
        subHeading: "Days Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Minor Projects",
        borderShow: false,
      },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Training Roadmap",
    headingSecondaryText: "Power BI",
    paragraphText:
      "Nowadays, Power Bi is used in helping businesses and managers to make data-driven decisions by providing insights into their data and analyzing reports. With Power Bi, people create interactive reports, dashboards, visualizations, etc. which they share with others to facilitate business collaboration and better decision-making. Power Bi can be easily integrated with Microsoft tools like Excel, Teams, SharePoint, etc. which further expands its scope.",
    cardTextData: [
      { id: uuid(), cardText: "Power Query & M Language" },
      { id: uuid(), cardText: "Data Analysis Expression" },
      { id: uuid(), cardText: "Text & Logical Functions" },
      { id: uuid(), cardText: "Math & Statistical Functions" },
      { id: uuid(), cardText: "User Interface, Grouping & Binning" },
      { id: uuid(), cardText: "Power BI Services & Visualizations" },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Power BI Training Program",
    paragraphText:
      "This program is designed to train students with the skills and experience to help businesses and managers to make data-driven decisions by providing insights into their data and analyzing reports using Power Bi.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText: "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Portfolio Building Assistance",
        paragraphText: "To create an attractive portfolio for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate student can join the Power Bi training program. The student must have basic computer knowledge and have interest in business intelligence, consultation and mentoring.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about business intelligence, consultation and mentoring can join the Power Bi training program."
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Power Bi training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Power BI Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Power BI training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      {
        id: uuid(),
        text: "Knowledge of operating system & shell script (preferred).",
      },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};

export const mentorship = {
  landingPageSection: {
    imagePath: COVER_IMAGES.digitalMarketingCoverImage,
    headingText: "Get Higher Salary & Promotion With Our Mentorship",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "20+",
        subHeading: "Specializations",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "4/6",
        subHeading: "Training Certificates",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "6/12",
        subHeading: "Months Duration",
        borderShow: true,
      },
      {
        id: uuid(),
        heading: "5+",
        subHeading: "Capstone Projects",
        borderShow: false,
      },
    ],
  },
  cloudDevopsCareerSection: {
    headingText: "Why, you should join our mentorship program ?",
    cardTextData: [
      { id: uuid(), cardText: "Project Knowledge",listText:
      "Working on projects helps you to develop important skills like time management, problem-solving, teamwork, leadership, presentations, etc. which are highly valued by corporate professionals or companies." },
      { id: uuid(), cardText: "Working Experience",listText:
      "If you have some work experience then you can easily get a good job and a decent package as per your choice, because companies always offer high salaries and pleasant perks to experienced candidates." },
      { id: uuid(), cardText: "Freelancing Projects",listText:
      "You can start your professional journey by project outsourcing or freelancing during your studies & we will help you get these projects to enhance your expertise and start your earning on the basis of your contribution." },
      { id: uuid(), cardText: "Professional Development",listText:
      "For having a good career and stability, you need to know about all the aspects of the professional journey of a successful & highly motivated candidate and train yourself accordingly so it would be hard to compete with you." },
    ],
  },
  trainingRoadmapSection: {
    headingPrimaryText: "Mentorship Roadmap",
    headingSecondaryText: "With Learn2Earn Labs",
    paragraphText:
      "Learn2Earn Labs offers a mentorship program for students and working professionals and help them in getting higher salary packages. During the mentorship, we provide a perfect learning & development path which includes video tutorials & learning references, valid training certificates, professional development training, interview preparation, job recommendations, working experience, etc. so the candidates get a good job with a higher salary. Under this mentorship program, we also provide freelancing project leads and support to the candidates on the basis of their contribution.",
    cardTextData: [
      { id: uuid(), cardText: "Video Tutorial & Learning References" },
      { id: uuid(), cardText: "Valid Training Certificates" },
      { id: uuid(), cardText: "Professional Development" },
      { id: uuid(), cardText: "Interview Preparation" },
      { id: uuid(), cardText: "Freelancing Projects" },
      { id: uuid(), cardText: "Working Experience" },
    ],
  },
  cloudDevopsTrainingSection: {
    headingText: "Mentorship Program By Learn2Earn Labs",
    paragraphText:
      "This program is designed to guide students in respect of their good career and getting a higher salary package by offering them a perfect learning path, career guidance, valid certification, working experience, and many more.",
    buttonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage1,
        subheadingText: "Practical Based Sessions",
        paragraphText: "Training program available in four months & six months duration",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage2,
        subheadingText: "Dummy Projects",
        paragraphText: "To build your hands-on expertise & portfolio",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage3,
        subheadingText: "Portfolio Building Assistance",
        paragraphText: "To create an attractive portfolio for you",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage4,
        subheadingText: "Interview Preparation",
        paragraphText: "So you can present yourself in a better way",
      },
      {
        id: uuid(),
        imagePath: COURSES_PAGE_IMAGES.careerSupportImage5,
        subheadingText: "Mentoring & Job Assistance",
        paragraphText: "To help you in getting good career or placements",
      },
    ],
  },
  whoCanJoinSection: {
    headingText: "Who can join",
    paragraphText1:
      "Any graduate student can join the Power Bi training program. The student must have basic computer knowledge and have interest in business intelligence, consultation and mentoring.",
    paragraphText2:
      "Working professionals or job seekers, who are looking to learn about business intelligence, consultation and mentoring can join the Power Bi training program."
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "During the Mentorship training program, you will go through with the below course modules & topics.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1",
        listText: "Introduction & Python Programming",
      },
      { id: uuid(), moduleName: "Module 2", listText: "Numpy" },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
  },
  trainingModeSection: {
    headingText: "Training Mode",
    cardData1: {
      headingText1: "Online Live Classes are also available",
      listTextData: [
        { id: uuid(), listText: "4x more effective way of learning" },
        {
          id: uuid(),
          listText: "Hands-on experience with projects & assignments",
        },
        {
          id: uuid(),
          listText: "Virtual class with real interaction with trainer",
        },
        { id: uuid(), listText: "Monitoring support & troubleshooting issues" },
        { id: uuid(), listText: "Masterclass from industry experts & leaders" },
        { id: uuid(), listText: "Live class recordings for revision purpose" },
      ],
      buttonText1: "Apply Now",
    },
    cardData2: {
      headingText2: "Mentorship Training in Agra",
      addressHeading: "Learn2Earn Labs",
      addressText:
        "F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
      phoneText: "Call: +91-9548868337",
      buttonText2: "Download Syllabus",
    },
  },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Mentorship training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "A bachelor’s / master’s degree in Engg / Computers.",
      },
      {
        id: uuid(),
        text: "Knowledge of operating system & shell script (preferred).",
      },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};
