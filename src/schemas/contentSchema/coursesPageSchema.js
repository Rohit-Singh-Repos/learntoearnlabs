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
    headingText: "Become a",
    subHeadingText:"Cloud and DevOps Engineer",
    paragraphText:"With Job Assistance",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "9",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Linux",listText:"Introduction to Linux, Linux Distributions & Shell, Virtual Machine & Installation, vim editor, Linux Commands, Directory Structure, File System, User Management, Group Management, Password Properties, Managing Permissions, ACL, Managing Processes, Managing Partitions, Managing Softwares, Links & Tar, Logs, Logical Volume Manager, Scheduling Tasks, Kernel, Http Configuration, Firewall Configuration, Password Resetting, Shell Scripting."},
        {id:uuid(),moduleName:"Module 2 : Cloud Computing & AWS",listText:"Introduction to AWS & Cloud Computing, IAM, Roles, Policies and Access Management, Billing Dashboard & Free Tier Services, EC2 Fundamentals, Instance creation, SSH, AMI Types & Security Key Pairs, S3 Buckets & objects, storage classes, Load Balancing, access lists & policies, security & encryption, cross region replication, s3 versioning control, AWS snowball, CloudFront, AWS Databases, Dynamo DB, Redshift, Aurora, RDS Instance, RDS Encryption & Security, RDS Backups, ElastiCache, CloudWatch & Cloud Trail, Virtual Private Cloud (VPC), NAT Gateway, Network ACL, VPN & VPC, VPC Endpoints, Route 53, AWS Lambda & API Gateway."},
        {id:uuid(),moduleName:"Module 3 : Agile & DevOps",listText:"Introduction to Software Development, Development Models (Waterfall, Iterative, Spiral, RAD, Agile, etc.), Agile Development Model, Introduction to DevOps, DevOps Life Cycle & DevOps Tools."},
        {id:uuid(),moduleName:"Module 4 : Git & GitHub",listText:"Introduction to Version Control & Git, Command Line Interface, GitHub & Repositories, staging, cloning, push operation, branching, merging, forking & pull requests."},
        {id:uuid(),moduleName:"Module 5 : Jenkins",listText:"Introduction to Continuous Integration & Jenkins, Jenkins Installation, Dashboard Overview, Job Creation, Search Panel, Jenkins Configuration, Jenkins Plugin, Role Base Access, Git Integration, Trigger Build, Build Periodically, Poll SCM, Environment Variables, Parameterized Jobs, Code Coverage, Timeout & TimeStamp, Job Management, User Management, Jenkins Logs Custom Workspace, Upstream / Downstream Jobs, Pipelining, Continuous Deployment, Continuous Delivery, Parallel Jobs, Master Slave, Input Parameters, Post Actions, Slack Notifications."},
        {id:uuid(),moduleName:"Module 6 : Ansible",listText:"Introduction to YAML & Ansible, inventory, playbook, modules, variables, control flow (conditions & loop), Roles, Asynchronous Actions, Polling, Strategies, Error, Ansible Vault, LookUps, Custom Module."},
        {id:uuid(),moduleName:"Module 7 : Docker",listText:"Introduction to Container, Container Vs Virtual Machine, Introduction to Docker, Installation & Environment, Commands, Objects, Registry, DockerHub, Docker Compose, Docker Swarm, Architecture, Files, Images, Storage & Volumes, Drivers, Networks, Monitoring."},
        {id:uuid(),moduleName:"Module 8 : Kubernetes",listText:"Introduction to Kubernetes, Architecture Overview, Pod & Kubectl, Pod’s Container, Cluster IP, Node Port, Replication Controller, Deployment in Kubernetes, Kubernetes Rollout, Resource Request & Resource Limits, Namespace, Service DNS, Resource Quota, Limit Range, Config Map, Kubernetes Secret, taint & toleration, Scheduling & Volume Overview."},
        {id:uuid(),moduleName:"Module 9 : Project Work & Exercises",listText:"Project work and practical exercises are essential components of AWS and DevOps training as they provide hands-on experience and real-world scenarios that cannot be replicated through theoretical learning alone. By applying concepts and techniques learned in the classroom to actual projects and exercises, students gain a deeper understanding of how to design, implement, and manage cloud-based infrastructures and DevOps practices effectively."},
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
    headingText: "Become an expert in",
    subHeadingText: `Data Science and Machine Learning`,
    paragraphText:"With Job Assistance",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "14+",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction to Data Science & Python Programming",listText:"Data Science : Evolution of Data Science, Application of Data Science, Data Science Development Methodology, Case Study.Python : Introduction & Environment setup, Python Fundamentals, tokens, keywords, literals, identifiers, operators, variables, taking input from user, exception handling, data types (number, string, list, tuple, set, dictionary), control flow, conditional statements (if, elif, else), iterative statements or loops (while, for), nested loops, loop control statements, functions, return statement, range in functions, variable scopes, type of arguments, lambda functions, filter & map functions, packages, import statement, dir function, important modules in python (sys, os, math, datetime, random, etc.), file handling in python (opening, closing, reading, writing, renaming & removing), classes & objects, variable scope & global keyword, case studies."},
        {id:uuid(),moduleName:"Module 2 : NumPy",listText:"Introduction to NumPy, installing NumPy, N-Dimensional array, array creation routines (array of ones & zeros, from existing data, using numerical ranges, etc.), Arithmetic Operators, Single Dimensional Arrays, Multi-Dimensional Arrays, matrix product, NumPy functions (universal functions, aggregate functions, & logic functions), Indexing of NumPy arrays, fancy indexing, slicing of NumPy arrays, Iterating in a NumPy array, array manipulation, changing array shape, transpose like operations, joining arrays (concatenate, stack, column_stack, hstack & vstack) , splitting arrays (split, hsplit & vsplit), file handling in NumPy (loading and saving data in binary  file, loading and saving  data in text file), merging NumPy arrays, NumPy case study – creating NumPy array, indexing & slicing, statistical calculation using NumPy, mathematical operation using NumPy, sorting a NumPy array."},
        {id:uuid(),moduleName:"Module 3 : Pandas",listText:"Introduction to pandas, functionality of pandas, significance of pandas, installing pandas, pandas data structure, pandas series, pandas dataframe, imporing data or reading data from CSV file, Excel file & JSON file, exporting data or writing data to CSV file & Excel file, Essential functionality of series & dataframe, selecting columns, selecting rows, adding columns, removing columns, removing rows, updating cells, filtering a dataframe (using a single value, & using a list), concatenate rows & columns, append rows, & merge data, join operation (left, right, outer, inner), data cleaning, handling missing data using pandas, inspecting and removing duplicates, replacing values, groups & aggregation, grouping data using pandas, case studies."},
        {id:uuid(),moduleName:"Module 4 : Data Visualization using MatPlotLib & Seaborn",listText:"Introduction to Data Visualization, Libraries and tools for data visualization, Introduction to Matplotlib library, types of plots & charts (line plot, bar chart, horizontal bar chart, stacked bar chart,  grouped bar chart, histogram, etc.), introduction to Seaborn library, benefits of Seaborn library, types of plots & charts (line plot, bar plot, scatter plot, histogram, box plot, pie chart, heat map, etc.), plotting different types of plots & charts, customizing visualizations using Matplotlib (style, labels & ticks, colors, linestyle, markers, & legend), saving plots, subplots, grid, case studies."},
        {id:uuid(),moduleName:"Module 5 : Web Scrapping",listText:"Introduction to Web Scrapping, use cases, need of web scrapping in data science, web scrapping process flow, popular tools for web scrapping, requests, Introduction to Beautiful soup library, installing beautiful soup, creating soup, types of objects, inspecting a web page, web scrapping demonstration using beautiful soup."},
        {id:uuid(),moduleName:"Module 6 : Statistical Analysis",listText:"Introduction to Data types, categorical data, numerical data, data I/O. Introduction to statistics, statistical analysis divisions, population & sample. Introduction to measures of central tendency (mean, median & mode), calculate measure of central tendency using python. Introduction to measures of Dispersion (range, interquartile range, variance, & standard deviation), skewness & kurtosis, calculate measures of dispersion using python. Introduction to measures of position (percentiles, quartiles, & standard scores), calculate measures of position using python. Introduction to Exploratory Data Analysis (EDA), significance of EDA, data analysis techniques, EDA classification, Basics of Univariate Non-Graphical EDA, existence of outliers, detecting and removing of outliers, measures of shape, data visualization using statistical graphs – Pie charts, , Bar graphs,  Histograms,  Line  graphs,  Box plots,  Dot plots,  Basics of Multivariate EDA, analyzing multivariate Non-Graphical EDA, perform cross tabulation on data, covariance & correlation, association, causation, correlation matrix, Analyzing multivariate graphical EDA, visualize data using scatter plot, visualize data using heat maps."},
        {id:uuid(),moduleName:"Module 7 : Probability Theory",listText:"Introduction to Probability, Need for probability theory, common concepts of probability, probability demonstration using python, union & intersection of events, classify joint and disjoint events, dependency of events, calculating probability of events, conditional probability. Introduction of Bayes’ theorem, need for Bayes’ theorem, calculating probability through Bayes’ theorem, application of Bayes’ theorem in data science, introduction to expected values, need for calculating expected values, problem demonstration. Introduction to Probability Distributions (PD), effect of standard deviation on distribution, standardization, Z-score, Skewness & kurtosis in Distribution graph, problem demonstration, types of probability distributions, t-distribution, degree of freedom (mean), problem demonstration. Introduction to sampling distribution, need for sampling distribution, case studies, standard error, standard error of mean, problem demonstration, central limit theorem, case study and exercises. Introduction to Inferential statistics, forms of statistical inference, Estimation, Bias of an Estimator, point estimation and interval estimation, Mean Square Error (MSE), Bias & variance using Bull’s Eye diagram, confidence interval, Margin of Error, confidence interval estimation, problem demonstration. Introduction to Hypothesis, statistical hypothesis, hypothesis testing, decision errors in hypothesis testing, decision rules, introduction to statistical test, P-value & critical value, calculating P-value from Z-scores, thumb rule in hypothesis testing, case study, One tailed test, two tailed test, z-test, hypothesis test for single population mean (T-Test), independent two sample T-Test, performing T-Test, problem demonstration, basics of Chi-square test, types of chi-square test, problem demonstration, Examine National Health & Nutrition Examination Survey (NHANES) data – case study."},
        {id:uuid(),moduleName:"Module 8 : Natural Language Processing",listText:"Introduction to Natural Language Processing, Use cases of NLP, need of processing textual data, Application of NLP, install natural Language Tool Kit (NLTK), download NLTK packages, NLTK exercises, Introduction to text preprocessing & tokenization, types of tokenizers (bigrams, trigrams & ngrams), creating tokens using NLTK, Part of Speech (POS) tagging, steps of POS tagging, stop words, removing stop words using NLTK, problem demonstration. Introduction to stemming, stemming using NLK, Porter & Lancaster stemmer, NonEnglish stemmer, introduction to Lemmatization,  Lemmatization using NLTK, problem demonstration. Introduction to  Named  Entity  Recognition (NER), NER using NLTK, Word Sense Disambiguation (WSD),  WSD using NLTK, problem demonstration. Introduction to  Feature  Extraction,  Bag-of-Words model,   case  study   &  exercises,  Term Frequency – Inverse Document Frequency (TF-IDF), implement TF-IDF using Python, problem demonstration. Introduction to Sentiment Analysis, TextBlob for sentiment analysis, steps to perform sentiment analysis, sentiment analysis of twitter data using NLP, problem demonstration."},
        {id:uuid(),moduleName:"Module 9 : Supervised Machine Learning",listText:"Introduction to Machine Learning, AI vs Machine Learning vs Deep Learning, machine learning applications, types of machine learning, Reward or Penalty (RL), Data preprocessing, data preprocessing techniques, imputing missing values, handling categorical values, scaling the data, StandardScaler, MinMaxScaler, RobustScaler, Normalization, feature selection, problem demonstration. Introduction to data splitting, training data, testing data, supervised learning, types of supervised learning, regression & its types, Linear regression & its types, problem demonstration, r-square, variance inflation factor (VIF), problem demonstration. Introduction to gradient descent, error minimization, regularization and its types, ridge regression, lasso regression, elastic net regression, regression case study, introduction to classification algorithm,  problem demonstration. Introduction to logistic regression, logistic regression : functions, odds, activation function, cost function, update function, problem demonstration. Introduction to decision tree, decision tree terminology, CART algorithm, problem demonstration, introduction to impurity, gini impurity, building decision tree, selecting best feature to split, information gain, ID3 algorithm, entropy, problem demonstration. Introduction to Random Forest, Ensemble methods : Bagging & Boosting, Creating random forest, introduction to performance measurements, SMOTE, precision, recall & FI score, problem demonstration. Introduction to Naïve Bayes, conditional probability & Bayes theorem,  Naïve bayes calculation, naïve bayes in Scikit module, gaussian naïve bayes, Bernoulli naïve bayes, multinominal naïve bayes, problem demonstration. Introduction to K Nearest Neighbor, KNN working, distance metric, minkowski distance, significance of K in KNN algorithm, problem demonstration. Introduction to Support Vector Machine, SVM terminologies, calculating hyperplane, soft margin classifier, nonlinear SVM, Kernel Trick, SVM Kernels, Gaussian RBF, Polynomial kernel, problem demonstration."},
        {id:uuid(),moduleName:"Module 10 : Unsupervised Machine Learning",listText:"Introduction to Dimensionality, Curse of Dimensionality, Dimensionality Reduction, Techniques of Dimensionality Reduction, Introduction to Principal Component Analysis (PCA), Dimensionality Reduction with PCA, Working with Dimensional Data, Problem Demonstration. Introduction to Linear Discriminant Analysis (LDA), Working of LDA, LDA & PDA comparison, other techniques for dimensionality reduction, missing value ratio, low variance filter, random forest, high correlation filter, Problem Demonstration. Introduction to Unsupervised Learning, Process Flow & Example, Clustering, types of clustering (exclusive, overlapping & hierarchical), K-Means Clustering Algorithm, Elbow Method, Applying K-Means Algorithm on 2D plots,  Problem Demonstration. Introduction to Fuzzy C-Means Clustering, Problem Demonstration,  DBSCAN (Density Based Spatial Clustering of Application with Noise) clustering algorithm, Problem Demonstration. Introduction to Association Rule Mining, Parameters (Support, Confidence, Lift), Generating Association Rules, Apriori Algorithm, Market Based Analysis, Problem Demonstration. Introduction to Recommendation System, Cosine-Based Similarity, Coverage, Common types of Recommender System, User Based Collaborative Filtering (UBCF), Content Based Filtering (CBF), User Driven Content and Service, Recommending similar movie to the user. Introduction to Time Series Analysis, Time Series Components (Trend, Seasonality, Cyclical Patterns,  & Irregularity), Forms of Data (Stationary Data & Nonstationary Data), methods to check for stationary of data, Augmented Dicky-Fuller (ADF) Test, converting nonstationary data to stationary data, AutoCorrelation Function (ACF) and Partial AutoCorrelation Function (PACF), Auto Regression Model, Moving Average Model, Autoregressive Moving Average (ARMA) Model, ARIMA Model, Problem Demonstration & Case Studies."},
        {id:uuid(),moduleName:"Module 11 : Model Evaluation & Optimization",listText:"Introduction to Model Selection, Resampling Techniques for Model Selection, Resampling Measures, K-Fold Cross Validation, Introduction to Model Evaluation, Problem Demonstration. Model Evaluation Metrics for Regression, Model Evaluation Metrices for Classification, Test Statistics, Confusion Matrix, Calculating Confusion Matrix, Problem Demonstration. Introduction to ROC Curve, Understanding the operation of ROC, Plotting ROC Curve, AUC Curve Operation, Problem Demonstration, Introduction to Precision and Recall, F1 Score, Problem Demonstration. Introduction to Hyperparameter Tuning, Types of Hyperparameter Optimization, Manual Search, Grid Search, Random Search, perform Grid Search, Problem Demonstration. Introduction to Ensemble Learning, Ensemble Learning Methods (Bagging, Boosting & Stacking), Bagging stages, Bagging Workflow, Problem Demonstration, Bagging Vs Boosting, Boosting Algorithms, Adaptive Boosting (AdaBoost), Gradient Boosting, Extreme Gradient Boosting (XGBoost), Problem Demonstration. Introduction to Model Optimization, Elements of Optimization, Linear Programming Basics, Linear Programming Applications, Problem Demonstration, formulating Optimization Problem, Stochastic Gradient Descent (SGD), Accelerated Gradient Methods, Second-Order Methods, Problem demonstration & Case Studies."},
        {id:uuid(),moduleName:"Module 12 : Deep Learning using Tensorflow",listText:"Introduction to deep learning, use cases, structure & functionality of human brain, functionality of a machine, Neural Network, Artificial Neural Network, biological vs artificial neuron. Introduction to Perceptron, Activation Function, sigmoid function, Tanh function, Rectified Liner Unit (ReLu) function, Softmax function, Multilayer Perceptron (MLP), Neural Network Evaluation, Improving Neural Network Performance, Gradient Descent to Cost Function. Introduction to Backpropagation, Learning Rate, Neural Network Learning, Exercises. Introduction to TensorFlow, basic components, building & running a graph, Eager Execution, Introduction to Keras, TensorFlow installation, building a neural network in TensorFlow, problem demonstration, Image classification using TensorFlow. Introduction to Convolutional Neural Network (CNN), Limitations of Multilayer Perceptron, CNN vs MLP, Working of Convolutional Layer, ReLu, Pooling Layer, Fully Connected Layer, Image Recognition, Rules of Image Recognition Process, Image classification using CNN, Libraries Required for Prediction, building a CNN model, Problem Demonstration. Introduction to Recurrent Neural Network (RNN), Issues with Feed Forward Network, Architecture of RNN (One to One, Many to One, One to Many, & Many to Many), Problem Demonstration, Training RNN, Long Short-Term Memory (LSTM) networks, Issues with RNN, LSTM Structure (Forget gate, Input gate, & Output gate), Problem Demonstration. Introduction to Reinforcement Learning (RL) , use cases and challenges, RL Process, Reward Hypothesis, RL Agent Components (Environment, Agent and Information State), RL Agent Taxonomy Types, Value Based RL, Policy Based RL, & Model Based RL. Case Studies & Exercises."},
        {id:uuid(),moduleName:"Module 13 : Data Visualization using Tableau",listText:"Introduction to Tableau, Tableau Products, VizQL language, Data Connections, Connect to data from file, server or database, Creating Bar Charts, Line Charts & Pie Charts. Introduction to Data Grouping (group by header, group by data window, visual grouping, group hierarchies, etc.), Filtering (filtering by headers, filtering by filter cards, filtering by general tab, filtering by wildcard tab, filtering by condition tab, filtering by top tab, etc.), Problem Demonstration. Introduction to Hierarchies, creating a hierarchy, built-in hierarchies, understanding data granularity, data granularity using marks card, Sorting using toolbar, sorting using pill, sorting using marks card, sorting by legends, Problem Demonstration. Introduction to Data Blending, data blending with Tableau, Problem Demonstration, basics of Joins & Union, Inner Join, Left Outer Join, Right Outer Join, Full Outer Join, Cross Join, Joins vs Blending, Problem Demonstration. Introduction to Calculations in Tableau, types of calculations, ways to create a calculated field, Problem Demonstration, Built-In Functions (Number Function, String Function, Date Function, Logical Function, Aggregate Function, Problem Demonstration. Introduction to Table Calculations, Quick Table Calculation, Tableau Parameters, User Input Analysis, What-If Analysis, Level of Detail Calculations (LOD), LOD Parameters, Fixed LOD Expression, Include LOD Expression, Exclude LOD Expression, LOD use cases and Problem Demonstration. Introduction to Trend Lines and Reference Lines, Creating a Trend Line, Visual Grouping, p-value, R-Squared, Editing Trend Lines, Type of Trend Lines, Linear Trend, Logarithmic Trend, Exponential Trend, Polynomial Trend, Problem Demonstration. Introduction to Forecasting, Forecasting Length, Forecasting Source Data, Forecast Model, Summary Box, Problem Demonstration. Introduction to Mapping, Classification of Maps, Filled Map, Symbol Map, Density Map, Connect to a Spatial File, Interpretation of Spatial Data, Map Views from a Spatial File, Aggregate & Disaggregate Map Views, Working with Additional Data, Map Views for Analysis, Joining Spatial Files, Problem Demonstration. Introduction to Web Mapping Services (WMS), Connect to a WMS Server, WMS Background Map, Problem Demonstration, Compare Chart Items, Static Composition, Correlation, Time Comparison, Distribution, Location, KPI’s. Introduction to Dashboards in Tableau, Dashboard Approaches, Dashboard Interface, Dashboard Objects, Manipulating Objects, Web Page Object, Image Object, Building Dashboard, Problem Demonstration. Introduction to Dashboard Layouts, Containers, Tiled, Floating, Positioning & Sizing, Filtering, Dashboard Formatting, Problem Demonstration, Interactive Dashboards, Types of Actions, Filter Actions, Highlight Actions, URL Actions, Designing Dashboard for Tablets, Designing Dashboards for Mobile Phones, Problem Demonstration. Introduction to Story Points, Creating Story Point, Data Visualization Best Practices, Case Studies and Problem Demonstration."},
        {id:uuid(),moduleName:"Module 14 : Project Work & Exercises",listText:"This Data science and machine learning training program includes a range of project work and exercises to help students apply their learning to real-world problems and build portfolio.  The projects and exercises are designed to give students hands-on experience with data analysis, modeling, and communication, and to build their problem-solving skills."},
       
        
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
    headingText: "Become an expert in",
    subHeadingText:"Design Thinking & UI/UX",
    paragraphText:"With Job Assistance",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction to Design Thinking",listText:"Introduction to Design Thinking, Importance of Design Thinking, how design thinking works, Design Process, characteristics of Design, application of Design Thinking, Designer vs Non-Designer Thinking, Design thinking vs problem solving approaches, human-centered approach."},
        {id:uuid(),moduleName:"Module 2 : Empathy",listText:"Introduction to Empathy, Why to Empathize, Understand the Market, User, Technology and Perceived Constraints, Technique to Empathize, User Research, Interviews, Surveys, Observations, Shadowing, User Personas, User Needs & goals, Creating User Personas, Empathy Mapping, Cultural Sensitivity, Conducting User Research, User Engagement Technique, Empathic Communication, Synthesize the findings from user research."},
        {id:uuid(),moduleName:"Module 3 : Define & Ideate",listText:"Design Principles (aesthetic, functional and ethical), Input & Start Point of Deisgn, gathering input from stakeholders, concept of design space, Explore and Generate Ideas, physical workspaces and digital collaboration tools, Idea Generation, Brainstorming, Mind Mapping, SCAMPER, Evaluating Ideas, Problem Identification and Definition, Problem Statements, Reframing, Problem Solving Techniques, Root Cause Analysis, FishBone Diagrams, Decision Tress  &  Risk Analysis to make effective decisions, Identify & Prioritize Constraints, discovering new opportunities & ideas."},
        {id:uuid(),moduleName:"Module 4 : UX /UI Factors Influencing User Experience",listText:"User-Centered Design Process,  Conceptualization & Ideation, User’s Mental Model, Products Designed on User’s Mental Model, Confused Mental Models, Products Designed on Confused Mental Model, UCD Process, Persona Mapping, Story Boarding, Scenario Map, Empathy Mapping. Methods of UX research – Qualitative / Quantitative, Data Gathering Methods & Sources, Expert Review, Interviews, Surveys & Email Questionnaire, Observation – Eye Tracking, Clickstream Analysis, Focus Group, User Groups, Market Segments, Competitor Analysis, User Stories, Task Flow, Information Architecture."},
        {id:uuid(),moduleName:"Module 5 : User Interface & Visual Design",listText:"Cognitive Studies for Better User Experience, Gestalt Principles, Applying gestalt principles to UI/UX, Gestalt Principles in Web Design, Gestalt Principles in Mobile App Design, Examples of Gestalt Principles in Action, Microcopy, Visual Design, Color Theory, Tools for Designing with Color, Typography, How Typography Determines Readability, Combining Fonts, User Interface Elements, Using Graphics & Illustrations to Finalize Designs, Informational Components, Containers, UI Controls / Patterns, Input Controls, Navigational Components, Accessibility in Design, Types of Disabilities."},
        {id:uuid(),moduleName:"Module 6 : UI Prototyping & Styling",listText:"Introduction to Prototyping & Wireframing, sketching techniques, creating reusable design components, Fidelity of a Prototype - Low / Medium / High, Paper Prototyping, Digital Prototype, HTML Prototype, Sketching Techniques, Grid & Layout Systems, Interaction Design, tools & techniques for interactive prototyping, Organization Schemes, Information Design, Navigation, Flat vs Deep Hierarchies, Associative Navigation, creating & presenting a comprehensive prototype."},
        {id:uuid(),moduleName:"Module 7 : UX Research & Testing",listText:"Introduction to Heuristic Evaluation, Assessing Prototypes, Writing Good Heuristic Evaluations, Visibility of System Status, User Control and Freedom, Engagement Levels, Error Tolerance, Aesthetic & Minimalist Design, Planning & Conducting Usability Test, Surveys and E-mail Surveys, Survey Tools, A/B Testing, UX Laws, Design Validation & Tradeoffs, Heatmaps with Tools like Hotjar User Testing."},
        {id:uuid(),moduleName:"Module 8 : Figma",listText:"Introduction to Figma, Figma Design File, Shapes, Selection, Typography, Design Tree, First Design, Colors, Drawing Tools, Margin, Padding, AutoLayout, Formatting Principles, Figma Constraints, Website Design, Styles and Components, Component Variants, Layout Grids & Design, Responsive Design, Material Design, Tailwind UI, Designing Mobile Apps, Iconography, Boolean Groups, Figma Token, Animations."},
        {id:uuid(),moduleName:"Module 9 : Projects & Exercises",listText:"At the end of training, you need to go through with some design projects and exercises to increase your productivity and to build your experience."},
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
      { id: uuid(), text: "Any Engineering / Management graduate." },
      { id: uuid(), text: "Must have problem solving skills and creativity." },
      { id: uuid(), text: "Having basic programming & development knowledge." },
    ],
  },
};

export const javaFullStackSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.javaFullStackCoverImage,
    headingText: `Become a`,
    subHeadingText: `Java Full Stack Developer`,
    paragraphText:"With Job Assistance",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "14",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Software Development & Object Oriented Programming",listText:"Introduction to Software Development, Software Development Life Cycle, Software Development Models, DFD, ER Diagram, Unified Modelling Language, Software Types, Programming Languages & Types, Object Oriented Programming."},
        {id:uuid(),moduleName:"Module 2 : Java Core Programming",listText:"Introduction to Object Oriented Programming & Java, methods, variables, constructor & blocks, control flow (if-else, switch, while loop, do while loop, for loop, return, break, continue, etc.), OOPS concepts (Inheritance, Polymorphism, Encapsulation & abstraction), Inner classes (regular, method local, static, & anonymous), Inner interfaces, Wrapper classes, String Handling, Exception Handling, Multithreading, File Handling, Input-Output. Introduction to GUI, component, container, AWT, Java Foundation Classes (swing), Layout Managers, Event Handling, Event Listeners and Handlers, Adapter Classes, Lambda Expression, Serialization, Regular Expression."},
        {id:uuid(),moduleName:"Module 3 : Collection Framework,  Generics & Concurrency",listText:"Introduction to Collection Framework, Arrays vs Collections, Key Interfaces, List, Set, SortedSet, NavigableSet, Queue, Map, SortedMap, NavigableMap, ArrayList and Vector, Stack, LinkedList, Iterator, ListIterator, HashSet, LinkedHashSet, SortedSet, TreeSet, Concurrent Collections. Introduction to Enumeration, Enum examples & use cases, Introduction to Generics, Time Safety, Type Casting, Generic Methods. Introduction to Concurrency & Thread Enhancement, Thread Group, java.util.concurrent packages, thread synchronization mechanism & java locks, java thread pools, java thread local, execution mechanism & case studies."},
        {id:uuid(),moduleName:"Module 4 : MySQL Database & Java Database Connectivity",listText:"Introduction to Database & MySQL, MySQL Installation, MySQL Structure, Schema (Create, Drop & User Database), Table Operations, Create, Drop, Alter, Rename, Update, Add, Column Insert, Update, Delete, Select, Where, AND, OR, NOT, In, Between, Limit, Order By, Offset, Count, Sum, Avg, Min, Max, Nested Queries, Clause, Search Pattern, Foreign Key & Joins. Introduction to JDBC, JDBC drivers, Required Interfaces, Execute methods, CRUD operations, Aggregate functions, Transaction Management, PreparedStatement, stored procedures, callable statement, batch updates, date values, BLOB & CLOB, connection pooling, transaction management & savepoints, MetaData, ResultSet types, RowSets and RowID"},
        {id:uuid(),moduleName:"Module 5 : Hypertext Markup Language (HTML)",listText:"Introduction to HTML5, Environmental setup of HTML5, HTML tags, elements and attributes, Syntax of HTML, Custom Attributes, Line Breaks, Spacing & Comments, HTML head tag, Setting Website Icon & Title, Background Images & Colors, Block & Inline Level Elements, Text Formatting Tags, Heading & Quotes, Images, Linking Web Pages, Creating Lists, Play Audio & Video, Embedding External Content, Creating Tables, Forms & Inputs, Semantic Elements, Using Emoji, Entities & Symbols in Website."},
        {id:uuid(),moduleName:"Module 6 : Cascading Style Sheets (CSS)",listText:"Introduction to CSS3, CSS3 Environmental Setup with HTML5, Linking CSS3 with HTML5, Priority of CSS3 Stylesheets, Comments in CSS3 Properties & Selectors in CSS3, CSS IMPORTANT Rule, Priority of CSS Stylesheets according to Selectors, Text Colors & Transparency in CSS3, CSS Dimensions & Units, Shorthand Properties Backgrounds, Gradients Properties, Text Styling, Text Fonts, Google Fonts & Icons. CSS3 Box Model (Border, Margin, Padding, Shadowing, Redefining box-width, outlines etc.) Floats, Clear & Overflow, CSS3 Display Property, CSS Element Visibility, Position & Layering, Transitions & Animations, Creating Column Layouts, CSS Counters, Creating Tables Using CSS, Transforming CSS Elements, Clipping, Shaping, Masking & Filters."},
        {id:uuid(),moduleName:"Module 7 : JavaScript",listText:"Introductions to JavaScript, Variables, let & const keyword, string handling, operators, control flow (if-else, switch, while loop, do while loop, for loop, break, continue, etc.), Array operations, objects & functions, scopes, methods (forEach, sort, find, some, fill, splice, map, filter, reduce, call, apply, bind, etc.). Object cloning, keyword (this, new, class, extends & super) , arrow functions, function declarations & expressions, getter & setter methods, static methods, closures, Document Object Model, DOM Manipulation using JavaScript, attributes, Lists, JavaScript Events, callbacks, promise, Introduction of AJAX & ES6."},
        {id:uuid(),moduleName:"Module 8 : Servlet & Java Server Pages",listText:"Introduction to Servlet, Application types, web application directory structure, servlet execution, important methods, servlet communications, CRUD Operations, RequestDispatcher, Servlet Filters, Session Tracking, URL Rewriting, cookies, hidden form fields, Servlet Listeners & Events, Annotations in Servlet. Introduction to JSP, Servlet vs JSP, Model Architecture, Scripting Elements (Scriptlets, Expression, Declarations, Comments), JSP Implicit Object, JSP Directives (page, include, taglib), JSP scopes (Page, Request, Session, Application), JSP Actions (standard, custom), Exception handling, JSTL (Core tags, SQL tags, xml tags, function tags, etc"},
        {id:uuid(),moduleName:"Module 9 : MongoDB Database",listText:"Introduction to MongoDB, MongoDB Terminology, MongoDB client-server connection, MongoDB Installation, CRUD (create, read, update, delete) operations. Data Modelling overview & approaches, data modelling in MongoDB, Types of Data Models, Flat Schema, Star Schema, Hierarchical Schema, Relational Schema, Object Relational Schema, Introduction to MongoDB Architecture, Distributed database, MongoDB instance, Introduction to MongoDB Compass, MongoDB Compass Dashboard, code implementation, Cursors, Query Optimization, Distributed queries."},
        {id:uuid(),moduleName:"Module 10 : Spring",listText:"Introduction to Spring, Dependency Injection, Data Integration, IOC Container, Maven Project for Spring & Dependencies, Spring Configuration, Injecting Collections, Injecting Reference Type & Constructor, Spring Bean, Life Cycle Methods, Annotations, Spring Bean Scope, Spring Expression Language. Introduction to Spring JDBC, Database Setup, CRUD Operations, Row Mapper, Introduction to Spring ORM, CRUD Operations using Spring ORM, Introduction to Spring MVC, MVC Design Pattern, Tomcat Configuration, JSP Expression Language, JSTL, Handling Forms, Redirecting in Spring MVC, Error Handling, Exception Handling, Spring MVC Interceptor, Aspect Oriented Programming (AOP)."},
        {id:uuid(),moduleName:"Module 11 : Spring Boot",listText:"Introduction to Spring Boot, Auto Configuration, Spring Initializr, Spring Tool Suite, JSP view, Introduction to JPA, Repository, DB Configuration, CRUD Operations, Custom Finder Methods, JPQL and Native Queries. Introduction to API & Web Services, Understand REST API, Spring Boot Dev Tools, Creating REST API (get functionality, PostMapping, DeleteMapping, PutMapping, ResponseEntity), Server Side Form Validation, Spring Security, Role Based Authorization, Login Functionality, Configuration and Customization, Introduction to JWT, JWT Authentication, Unit Testing of Spring Boot Projects."},
        {id:uuid(),moduleName:"Module 12 : Hibernate",listText:"Introduction to Hibernate & ORM Tool, Maven Project for Hibernate & Dependencies, Hibernate Configuration, Annotations, Saving data and images, Object Fetching (get & load method), embedding objects, Hibernate Mapping (one to one, one to many & many to many), Lazy & Eager Loading, Hibernate Object States, Introduction to HQL (Hibernate Query Language), Native SQL Queries, Cascading, Cashing, Hibernate Criteria API, Hibernate Integration with Spring MVC."},
        {id:uuid(),moduleName:"Module 13 : Version Control, Git & GitHub",listText:"Introduction to Version Control & Git, Command Line Interface, GitHub & Repositories, initialization, status, add, staging, commit, diff, checkout, cloning, push operation, branching, fetching & merging, forking & pull requests."},
        {id:uuid(),moduleName:"Module 14 : Capstone Projects",listText:"Utility based major projects to increase your productivity and to build your experience. E-Commerce Web Project, LMS Project, Informative Blog"},
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
    headingText: "Become a",
    subHeadingText:"Full Stack Web Developer",
    paragraphText:"With Job Assistance",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "16",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1: Introduction to Web Development",listText:"Introduction to Web Application, basics on web application, web application VS websites, building block of web app development, frontend & backend development, APIs, web services, microservices, market trends and career scope."},
        {id:uuid(),moduleName:"Module 2 : Hyper Text Markup Language (HTML)",listText:"Introduction to HTML5, Environmental setup of HTML5, HTML tags, elements and attributes, Syntax of HTML, Custom Attributes, Line Breaks, Spacing & Comments, HTML head tag, Setting Website Icon & Title, Background Images & Colors, Block & Inline Level Elements, Text Formatting Tags, Heading & Quotes, Images, Linking Web Pages, Creating Lists, Play Audio & Video, Embedding External Content, Creating Tables, Forms & Inputs, Semantic Elements, Using Emoji, Entities & Symbols in Website."},
        {id:uuid(),moduleName:"Module 3 : Cascading Style Sheets (CSS)",listText:"Introduction to CSS3, CSS3 Environmental Setup with HTML5, Linking CSS3 with HTML5, Priority of CSS3 Stylesheets, Comments in CSS3 Properties & Selectors in CSS3, CSS IMPORTANT Rule, Priority of CSS Stylesheets according to Selectors, Text Colors & Transparency in CSS3, CSS Dimensions & Units, Shorthand Properties Backgrounds, Gradients Properties, Text Styling, Text Fonts, Google Fonts & Icons. CSS3 Box Model (Border, Margin, Padding, Shadowing, Redefining box-width, outlines etc.) Floats, Clear & Overflow, CSS3 Display Property, CSS Element Visibility, Position & Layering, Transitions & Animations, Creating Column Layouts, CSS Counters, Creating Tables Using CSS, Transforming CSS Elements, Clipping, Shaping, Masking & Filters, Modular CSS, CSS3 Miscellaneous (Vendor & Autoprefixing, Initial, Inherit & Auto, Misc. Properties, Misc. Pseudo Elements, Misc. Pseudo Classes etc.)"},
        {id:uuid(),moduleName:"Module 4 : Bootstrap",listText:"Introduction to Bootstrap, Web Design – Wireframing, Navigation Bar, Grid Layout System, Bootstrap Containers, Bootstrap Buttons, Font Awesome, Styling, Bootstrap Carousel, Cards, Media Query Break Points, Combining Selectors, Selector Priority."},
        {id:uuid(),moduleName:"Module 5 : JavaScript",listText:"Introductions to JavaScript, Variables, let & const keyword, string handling, operators, control flow (if-else, switch, while loop, do while loop, for loop, break, continue, etc.), Array operations, objects & functions, scopes, methods (forEach, sort, find, some, fill, splice, map, filter, reduce, call, apply, bind, etc.). Object cloning, keyword (this, new, class, extends & super) , arrow functions, function declarations & expressions, getter & setter methods, static methods, closures, Document Object Model, DOM Manipulation using JavaScript, attributes, Lists, JavaScript Events, callbacks, promise, Introduction of AJAX."},
        {id:uuid(),moduleName:"Module 6 : Node JS Framework",listText:"Introduction to Back End Development, skills required for backend, Introduction to Node JS, V8 engine, Problems before Node JS, Node JS installation, REPL, CLI, Client Server Architecture, Server Deployment in Node JS, Source Code, Single Threaded Model, Event Loop, PayPal Problems & Solution. Basics of NPM, NPM installation, Modules (Core Modules, User Defined Modules, & Third Party Modules), OS Module, Path Module, FS Module (Sync & Async), Packages in Node JS, package.json, package-lock.json, Http Module, Handling Routes, Event Loop Code Examples,  URL Module, Verbs in HTTP, Headers in Node JS, Status Codes, API in NodeJS, Working with Nodemon, User inputs, file system, Asynchronous Data Handling, Async Patterns (Blocking code, Setup Promises, Refractor to Async, Node’s native option, Events Emitter, Streams."},
        {id:uuid(),moduleName:"Module 7 : Express JS Framework",listText:"Introduction to Express JS, creating a server using express, HTTP Request/Response Cycle, starter project installs, Http (basics, headers, request object, html file, examples), API VS SSR, Params, Query String, express routing, express router, Middleware setup, Middleware functions, get & post method, web server, Introduction to Nginx, Nginx Architecture, Introduction to CORS, Properties of Domain & URL, Cross-Origin Requests, MVC Architecture, Install Postman, Working with Postman"},
        {id:uuid(),moduleName:"Module 8 : Database Management",listText:"Introduction to Database, Need of Database, RDBMS, NoSQL DBMS, NoSQL Database Categories."},
        {id:uuid(),moduleName:"Module 9 : MySQL Database",listText:"Introduction to Database & MySQL, MySQL Installation, MySQL Structure, Schema (Create, Drop & User Database), Table Operations, Create, Drop, Alter, Rename, Update, Add, Column Insert, Update, Delete, Select, Where, AND, OR, NOT, In, Between, Limit, Order By, Offset, Count, Sum, Avg, Min, Max, Nested Queries, Clause, Search Pattern, Foreign Key & Joins."},
        {id:uuid(),moduleName:"Module 10 : MongoDB Database",listText:"Introduction to MongoDB, MongoDB Terminology, MongoDB client-server connection, MongoDB Installation, CRUD (create, read, update, delete) operations, Data Modelling overview & approaches, data modelling in MongoDB, Types of Data Models, Flat Schema, Star Schema, Hierarchical Schema, Relational Schema, Object Relational Schema, Introduction to MongoDB Architecture, Distributed database, MongoDB instance, Connecting MongoDB & NodeJS (local instance & cloud instance), Introduction to MongoDB Compass, MongoDB Compass Dashboard, code implementation, Cursors, Query Optimization, Distributed queries."},
        {id:uuid(),moduleName:"Module 11 : Mongoose",listText:"Introduction to Mongoose, Object Mapping via Mongoose, creating models, exporting model, MVC Architecture, Consuming models, creating locations controller, creating parameterized API."},
        {id:uuid(),moduleName:"Module 12 : ECMAScript (ES6 or Modern JavaScript)",listText:"Introduction to ECMAScript, ES6 variables, let, var, const, arrow function, template literal, default parameter, spread operators, rest operators, rest params, class in JavaScript, class methods, object shorthand, map data type, set data type, map filter reduce, array destructuring, object destructuring, getter & setter methods."},
        {id:uuid(),moduleName:"Module 13 : React JS Library",listText:"Introduction to ReactJS, features of ReactJS, Single page & Multipage Application, web app architecture patterns, MVC Architecture. Introduction to React Architecture, client side architecture, advantages & disadvantages of React, reasons to use React, DOM Manipulation, Virtual DOM, npm libraries & package.json for React, folder structure in React, creating first React app, React Element, React Function, React Components, class component, functional component, constructors within the components, defining multiple components, introduction to Props, ways of writing Props, class based Props, function based Props, Introduction to States, setState method, React Component life cycle, Mounting, Updating, unmounting, React Bootstrap Typeahead, passing values between the components, React Events,Conditional, Rendering, React Form, adding and handling React Forms, Form Submission, multiple input fields, validating form input, JSX overview, JSX use cases, API Overview, types of APIs, Rest API, navigation using links, 404 page, implementing styles using NavLink, URL parameter overview, URL parameter configuration, Styling : Inline Styling, stylesheet, JavaScript classes limitations, React Hooks overview, useState() hook, useEffect() hook, useContext() hook, useRef() hook, useReducer() hook, useMemo() hook, useCallback() hook, useLayoutEffect() hook, useDebugValue() hook, custom hooks in React."},
        {id:uuid(),moduleName:"Module 14 : Version Control, Git & GitHub",listText:"Introduction to Version Control & Git, Command Line Interface, GitHub & Repositories, initialization, status, add, staging, commit, diff, checkout, cloning, push operation, branching, fetching & merging, forking & pull requests."},
        {id:uuid(),moduleName:"Module 15 : Miscellaneous ",listText:"MERN App – Connecting API with React, Deploying MERN app on live cloud server or AWS, server side rendering with EJS, JWT Authentication, Streams, Sockets & Events, NodeJS with MySQL, API’s (POST, PUT & DELETE)  with MySQL."},
        {id:uuid(),moduleName:"Module 16 : Capstone Projects",listText:"Utility based major projects to increase your productivity and to build your experience. E-Commerce Web Portal, Informative Blog or Portfolio."},
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
    imagePath: COVER_IMAGES.trainTheTrainer,
    headingText: "Join our",
    subHeadingText:"Train The Trainer Program",
    paragraphText:"To become a digital trainer",
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
          "Training program available in 2 months and 3 months duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1: Digital Training & E-Content Development",listText:"Introduction to digital training & E-content, Overview of e-content development and its role in education, Understanding the benefits of e-content for teaching and learning, Understanding the benefits of using e-content in the classroom, Types of e-content, such as videos, interactive presentations, and multimedia, Overview of the tools and technologies used for e-content development, Techniques for planning and designing e-content, Understanding the principles of instructional design, Best practices for creating effective e-content"},
        {id:uuid(),moduleName:"Module 2 : Google Workspace",listText:"Introduction to Google Workspace : Overview of the required Google Workspace tools and their functionalities, Understanding the benefits of using Google Suite in the classroom, Creating a Google account and accessing Google Workspace. Google Drive and Docs : Understanding the key features and functionalities of Google Drive and Docs, Techniques for organizing and sharing files and documents on Google Drive, Tips for creating and formatting documents using Google Docs. Google Sheets : Understanding the key features and functionalities of Google Sheets, Techniques for organizing and managing data using Google Sheets, Tips for creating and formatting spreadsheets using Google Sheets. Google Slides : Understanding the key features and functionalities of Google Slides, Techniques for creating and formatting presentations using Google Slides, Tips for adding multimedia and interactivity to Google Slides presentations. Google Forms : Understanding the key features and functionalities of Google Forms, Techniques for creating and administering surveys and quizzes using Google Forms, Tips for analyzing and interpreting data collected through Google Forms. Google Classroom : Understanding the key features and functionalities of Google Classroom, Techniques for creating and managing classes using Google Classroom, Tips for assigning and grading assignments using Google Classroom"},
        {id:uuid(),moduleName:"Module 3 : PowerPoint",listText:"Introduction to PowerPoint : Overview of PowerPoint and its role in education, Understanding the benefits of using PowerPoint in the classroom, Creating a new PowerPoint presentation and choosing a template. Designing Effective Slides : Principles of effective slide design, Techniques for creating visually appealing and engaging slides, Tips for using text, images, and multimedia in PowerPoint. Formatting and Editing Slides : Techniques for formatting text and objects in PowerPoint, Understanding slide transitions and animations, Tips for editing and modifying slides in PowerPoint. Creating Interactive and Multimedia Content : Techniques for adding multimedia elements to PowerPoint slides, Creating hyperlinks and action buttons, Incorporating interactive elements such as quizzes and games. Presenting with PowerPoint : Tips for preparing and rehearsing a PowerPoint presentation, Understanding the importance of audience engagement, Strategies for using PowerPoint effectively during a presentation. Advanced PowerPoint Techniques : Advanced formatting techniques, Creating custom animations & slide shows, Using PowerPoint as a video creation tool."},
        {id:uuid(),moduleName:"Module 4 : Camtasia",listText:"Introduction to Camtasia : Overview of Camtasia and its role in education, Understanding the benefits of using Camtasia, Installing and setting up Camtasia. Recording and Editing Screen Captures : Techniques for recording and editing screen captures using Camtasia, Tips for improving the quality of screen captures, Understanding basic video editing techniques. Creating and Editing Audio Narration : Techniques for creating and editing audio narration using Camtasia, Tips for improving the quality of audio narration, Understanding the importance of audio quality in educational videos. Adding Multimedia Elements : Techniques for adding multimedia elements such as images, text, and video clips to educational videos, Tips for using animations and transitions to enhance educational videos, Understanding copyright and fair use of multimedia elements in educational videos. Creating Interactive Elements : Techniques for creating interactive elements such as quizzes and hotspots in educational videos, Tips for creating interactive elements that enhance student engagement and learning, Understanding the importance of feedback in interactive elements. Publishing and Sharing Educational Videos : Techniques for publishing and sharing educational videos using Camtasia, Understanding different video file formats and their compatibility with different devices and platforms, Strategies for sharing videos."},
        {id:uuid(),moduleName:"Module 5 : YouTube",listText:"Introduction to YouTube : Overview of YouTube and its role in education, Understanding the benefits of using YouTube in the classroom, Creating a YouTube channel and setting up a profile. Creating and Uploading Videos : Techniques for creating and uploading videos to YouTube, Understanding basic video editing techniques, Tips for improving the quality of videos uploaded to YouTube. Understanding Copyright and Fair Use : Understanding copyright law and fair use in the context of YouTube videos, Techniques for finding and using creative commons licensed content in YouTube videos, Strategies for avoiding copyright infringement on YouTube. Optimizing Videos for Search and Discovery : Techniques for optimizing YouTube videos for search and discovery, Understanding YouTube search algorithm and video ranking factors, Strategies for promoting videos and building a subscriber base. Creating Playlists and Annotations : Techniques for creating playlists and annotations on YouTube, Understanding the benefits of playlists and annotations in organizing and promoting videos, Strategies for using playlists and annotations to enhance student learning and engagement"},
        {id:uuid(),moduleName:"Module 6 : ChatGPT",listText:"Determine the Purpose and Scope of the Content, choose a Platform or Tool to Use with ChatGPT, Input Your Prompts and Parameters, Train and Fine-Tune ChatGPT, Generate Content and Refine, Review and Edit, Publish and Promote."},
        {id:uuid(),moduleName:"Module 7 : Best Practices for E-Content Development and Delivery",listText:"Understanding the principles of effective e-content development and delivery, Techniques for evaluating and improving e-content, Strategies for managing and organizing e-content for effective delivery. Best practices for integrating e-content into the curriculum and classroom instructions."},
        {id:uuid(),moduleName:"Module 8 : Evaluation and Assessment of E-Content Development and Delivery",listText:"Understanding the importance of evaluation and assessment in e-content development and delivery, Techniques for assessing the effectiveness of e-content, Strategies for using assessment data to improve e-content and delivery. Best practices for continuous improvement of e-content development and delivery."},
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
    headingText: "Improve your",
    subHeadingText:"Frontend Development Skills",
    paragraphText:"With HTML,CSS and JavaScript",
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
          "Training program available in 60 days and 90 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : HTML (Hypertext Markup Language)",listText:"Introduction to HTML5, Environmental setup of HTML5, HTML tags, elements and attributes, Syntax of HTML, Custom Attributes, Line Breaks, Spacing & Comments, HTML head tag, Setting Website Icon & Title, Background Images & Colors, Block & Inline Level Elements, Text Formatting Tags, Heading & Quotes, Images, Linking Web Pages, Creating Lists, Play Audio & Video, Embedding External Content, Creating Tables, Forms & Inputs, Semantic Elements, Using Emoji, Entities & Symbols in Website."},
        {id:uuid(),moduleName:"Module 2 : CSS (Cascading Style Sheets)",listText:"Introduction to CSS3, CSS3 Environmental Setup with HTML5, Linking CSS3 with HTML5, Priority of CSS3 Stylesheets, Comments in CSS3 Properties & Selectors in CSS3, CSS IMPORTANT Rule, Priority of CSS Stylesheets according to Selectors, Text Colors & Transparency in CSS3, CSS Dimensions & Units, Shorthand Properties Backgrounds, Gradients Properties, Text Styling, Text Fonts, Google Fonts & Icons. CSS3 Box Model (Border, Margin, Padding, Shadowing, Redefining box-width, outlines etc.) Floats, Clear & Overflow, CSS3 Display Property, CSS Element Visibility, Position & Layering, Transitions & Animations, Creating Column Layouts, CSS Counters, Creating Tables Using CSS, Transforming CSS Elements, Clipping, Shaping, Masking & Filters, Modular CSS, CSS3 Miscellaneous (Vendor & Autoprefixing, Initial, Inherit & Auto, Misc. Properties, Misc. Pseudo Elements, Misc. Pseudo Classes etc.)"},
        {id:uuid(),moduleName:"Module 3 : JavaScript",listText:"Introductions to JavaScript, Variables, let & const keyword, string handling, operators, control flow (if-else, switch, while loop, do while loop, for loop, break, continue, etc.), Array operations, objects & functions, scopes, methods (forEach, sort, find, some, fill, splice, map, filter, reduce, call, apply, bind, etc.). Object cloning, keyword (this, new, class, extends & super) , arrow functions, function declarations & expressions, getter & setter methods, static methods, closures, Document Object Model, DOM Manipulation using JavaScript, attributes, Lists, JavaScript Events, callbacks, promise, Introduction of AJAX."},
        {id:uuid(),moduleName:"Module 4 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 90 days training program of HTML, CSS & JavaScript. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 5 : Minor Project Work",listText:"After the completion of all the 90 days module of this HTML, CSS & JavaScript training program, some projects would be assigned to you to improve your practical knowledge and project experiences. Projects : School/College Website Design, E-Commerce Website Design, Social Media Website Design, etc."},
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
    headingText: "Become a",
    subHeadingText:"Skilled Java Programmer",
    paragraphText:"With Project Experience",
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
          "Training program available in 30 days, 60 days and 90 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Course 1 : Java Core Programming (30 Days)",listText:"Introduction to Object Oriented Programming & Java, methods, variables, constructor & blocks, control flow (if-else, switch, while loop, do while loop, for loop, return, break, continue, etc.), OOPS concepts (Inheritance, Polymorphism, Encapsulation & abstraction), Inner classes (regular, method local, static, & anonymous), Inner interfaces, Wrapper classes, String Handling, Exception Handling, Multithreading, File Handling, Input/Output."},
        {id:uuid(),moduleName:"Module 2 : GUI, Event Handling and Java Database Connectivity (30 Days)",listText:"Introduction to GUI, component, container, AWT, Java Foundation Classes (swing), Layout Managers, Event Handling, Event Listeners and Handlers, Adapter Classes, Lambda Expression. Introduction to Database & MySQL, MySQL Installation, MySQL Structure, Schema (Create, Drop & User Database), Table Operations (Create, Drop, Alter, Rename, Update, Add, Column Insert, Update, Delete, Select, etc), Conditions (Where, AND, OR, NOT, etc), Introduction to JDBC, JDBC drivers, Required Interfaces, Execute methods, CRUD operations, Aggregate functions, Transaction Management, PreparedStatement, stored procedures, callable statement, batch updates, date values, BLOB & CLOB."},
        {id:uuid(),moduleName:"Module 3 : Collection, Generics and Java Web Programming (30 Days)",listText:"Introduction to Collection Framework, Arrays vs Collections, Key Interfaces, List, Set, SortedSet, NavigableSet, Queue, Map, SortedMap, NavigableMap, ArrayList and Vector, Stack, LinkedList, Iterator, ListIterator, HashSet, LinkedHashSet, SortedSet, TreeSet, HashMap, LinkedHashMap, Introduction to Generics, Time Safety, Type Casting, Generic Methods. Introduction to Web Technologies (HTML, CSS & JavaScript) & Servlet, Application types, web application directory structure, servlet execution, important methods, CRUD Operations, RequestDispatcher, Servlet Filters, Session Tracking, URL Rewriting, cookies, hidden form fields, Servlet Listeners & Events, Annotations in Servlet. Introduction to JSP, Servlet vs JSP, Model Architecture, Scripting Elements (Scriptlets, Expression, Declarations, Comments), JSP Implicit Object, JSP Directives (page, include, taglib), JSP scopes (Page, Request, Session, Application), JSP Actions (standard, custom)."},
        {id:uuid(),moduleName:"Module 4 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 90 days training program of Java programming. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 5 : Minor Project Work",listText:"After the completion of all the 90 days module of this java programming training program, some projects would be assigned to you to improve your practical knowledge and project experiences. Projects Like : E-Commerce Web Project, Hospital System Web Project, Informative Blog, etc."},
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
    headingText: "Become a",
    subHeadingText:"Skilled Python Programmer",
    paragraphText:"With Project Experience",
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
          "Training program available in 30 days, 60 days and 90 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Python Core Programming (30 Days)",listText:"Introduction & Environment setup, Python Fundamentals, tokens, keywords, literals, identifiers, operators, variables, taking input from user, exception handling, data types (number, string, list, tuple, set, dictionary), control flow, conditional statements (if, elif, else), iterative statements or loops (while, for), nested loops, loop control statements, functions, return statement, range in functions, variable scopes, type of arguments, lambda functions, filter & map functions, packages, import statement, dir function, important modules in python (sys, os, math, datetime, random, etc.), file handling in python (opening, closing, reading, writing, renaming & removing), classes & objects, variable scope & global keyword, case studies."},
        {id:uuid(),moduleName:"Module 2 : NumPy & Pandas Library (30 Days)",listText:"Introduction to NumPy, installing NumPy, N-Dimensional array, array creation, Arithmetic Operators, matrix product, NumPy functions, Indexing of NumPy arrays, fancy indexing, slicing of NumPy arrays, Iterating in a NumPy array, array manipulation, splitting arrays, file handling in NumPy, merging NumPy arrays, sorting a NumPy array. Introduction to pandas, installing pandas, pandas series, pandas dataframe, imporing data or reading data from CSV file, Excel file & JSON file, exporting data or writing data to CSV file & Excel file, Essential functionality of series & dataframe, filtering a dataframe, concatenate rows & columns, append rows, & merge data, data cleaning, handling missing data using pandas, inspecting and removing duplicates, replacing values, groups & aggregation, grouping data using pandas."},
        {id:uuid(),moduleName:"Module 3 : Data Visualization & Web Scrapping (30 Days)",listText:"Introduction to Data Visualization, Libraries and tools for data visualization, Introduction to Matplotlib library, types of plots, introduction to Seaborn library, benefits of Seaborn library, types of plots & charts, plotting different types of plots & charts, customizing visualizations using, saving plots, subplots, grid, case studies. Introduction to Web Scrapping, use cases, web scrapping process flow, popular tools for web scrapping, requests, Introduction to Beautiful soup library, installing beautiful soup, creating soup, types of objects, inspecting a web page, web scrapping demonstration using beautiful soup."},
        {id:uuid(),moduleName:"Module 4 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 90 days training program of python programming. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 5 : Minor Project Work",listText:"After the completion of all the 90 days module of this python programming training program, some projects would be assigned to you to improve your practical knowledge and project experiences."},
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
    headingText: "Become an expert in",
    subHeadingText:"Linux and Amazon Web Services",
    paragraphText:"With Project Experience",
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
          "Training program available in 60 days and 90 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Linux and Shell Scripting",listText:"Introduction to Linux, Linux Distributions & Shell, Virtual Machine & Installation, vim editor, Linux Commands, Directory Structure, File System, User Management, Group Management, Password Properties, Managing Permissions, ACL, Managing Processes, Managing Partitions, Managing Softwares, Links & Tar, Logs, Logical Volume Manager, Scheduling Tasks, Kernel, Http Configuration, Firewall Configuration, Password Resetting, Shell Scripting."},
        {id:uuid(),moduleName:"Module 2 : Amazon Web Services",listText:"Introduction to AWS & Cloud Computing, IAM, Roles, Policies and Access Management, Billing Dashboard & Free Tier Services, EC2 Fundamentals, Instance creation, SSH, AMI Types & Security Key Pairs, S3 Buckets & objects, storage classes, Load Balancing, access lists & policies, security & encryption, cross region replication, s3 versioning control, AWS snowball, CloudFront, AWS Databases, Dynamo DB, Redshift, Aurora, RDS Instance, RDS Encryption & Security, RDS Backups, ElastiCache, CloudWatch & Cloud Trail, Virtual Private Cloud (VPC), NAT Gateway, Network ACL, VPN & VPC, VPC Endpoints, Route 53, AWS Lambda & API Gateway."},
        {id:uuid(),moduleName:"Module 3 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 90 days training program of Linux & AWS. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 4 : Minor Project Work",listText:"This module is available for those who enroll in 90 days training program of Linux & AWS. The candidate will get the benefits of project guidance & project work during the training."},
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
        text: "Any student/job seeker/working professional can join.",
      },
      { id: uuid(), text: "Having interest in Linux & Cloud Computing." },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const mySQLSchema = {
  landingPageSection: {
    imagePath: COVER_IMAGES.mySQLProgramming,
    headingText: "Become an expert",
    subHeadingText:"MySQL Database Administrator",
    paragraphText:"With Project Experience",
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
          "Training program available in 30 days and 45 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 :  Introduction",listText:"Introduction to Databases, database importance, Introduction to MySQL, Installing MySQL on different platforms, Basic MySQL commands."},
        {id:uuid(),moduleName:"Module 2 : Performing Operations",listText:"Understanding data types and constraints, Creating tables using SQL commands, Inserting, updating and deleting data from tables, Altering tables to modify structure, Retrieving Data from Tables, Understanding SQL SELECT statements, Filtering data with WHERE clause, Sorting data with ORDER BY clause, Joining tables using JOIN clause."},
        {id:uuid(),moduleName:"Module 3 : Data Analysis with Functions and Aggregates",listText:"Understanding SQL functions and their types, Using functions to perform calculations on data, Using aggregate functions to summarize data, Grouping data."},
        {id:uuid(),moduleName:"Module 4 : Advanced MySQL",listText:"Subqueries and their types, Correlated subqueries, Self-joins and cross-joins, UNION operator, Indexing and Optimization, Understanding indexes & their types, Creating indexes to improve query performance, Optimizing MySQL queries, analyzing queries."},
        {id:uuid(),moduleName:"Module 5 : Stored Procedures and Triggers",listText:"Introduction to stored procedures, Creating stored procedures, Passing parameters to stored procedures, Introduction to triggers and their types, MySQL Administration, MySQL configuration files and settings, Securing MySQL server, User management and permissions, Backing up and restoring MySQL databases."},
        {id:uuid(),moduleName:"Module 6 : Assignments & Interview Preparation",listText:"The candidate will go through various assignments, & case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 7 : Mini Projects",listText:"The candidate will get the benefits of project guidance & project work during the training."},
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
    headingText: "Programming Fundamentals",
    subHeadingText:"(C, C++ and Data Structure)",
    paragraphText:"Improve your programming skills",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "6",
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
          "Training program available in 30 days and 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : C-Basics (30 Hours/Days)",listText:"Introduction to C Language, Simple C Program, Program execution phases, Backslash character constants, Character set, Constants, Number systems, Format specifiers, Identifiers, Keywords, Variables, Data Types, Arithmetic operators, Increment and decrement operators, Relational operators, Logical operators, bitwise operators, assignment operators, conditional operator, size of operator, comma operator, Type casting operator, data types, input output library functions, control statements (if-else, switch-case, for, while, do-while, nested loop, jump control statements, break, continue, goto, exit, return), functions, return statement, recursion, library functions, local and global variables, storage classes, Pointers, Pointer to Pointer, Pointer Arithmetic, De-reference & increment pointer, pointer to function, Array, types of Arrays, accessing array elements, Pointer to array, Array & functions, Malloc, calloc, realloc, free, core dump, memory leak."},
        {id:uuid(),moduleName:"Module 2 : C-Advance (30 Hours/Days)",listText:"Introduction to String, gets() & puts() functions, String handling functions, Structure, accessing structure members, size of structures, reading and displaying structure variables, array to structure, nested structures, self-referential structures, structure and functions, Union, enum keyword, typedef keyword, introduction to file handling, buffer and streams, working with text files and binary files, file operations using std library and system calls, file management I/O functions, random access files."},
        {id:uuid(),moduleName:"Module 3 : C++ Core Programming (30 Hours/Days)",listText:"Introduction to C++, First C++ Program, How C++ differs from C, Variables Declaration, Function overloading, Optional Parameters, Reference Variables, Operator overloading, Basics of Console Input and Output, Constant Pointers, Dynamic Memory Allocation, Operators - arithmetic, assignment, logical, bitwise, Conditions like if / else / switch, Arrays / multi-dimensional arrays, Loops - for / while / do-while, Functions, overloading functions, passing variables to functions, Structures, References, Pointers, C++ programs & Practices."},
        {id:uuid(),moduleName:"Module 4 : C++ Advance Programming (30 Hours/Days)",listText:"Overview of OOPs Principles, Introduction to classes & objects, Creation & destruction of objects, Data Members, Member Functions, this Pointer, Constructor & Destructor, Static class member, Friend class and functions, Namespace, Introduction to inheritance and benefits, Access Specifier, Base and Derived class Constructors, Types of Inheritance, Down casting and up casting, Function overriding, Virtual functions, Destructor overriding, Polymorphism, Pure virtual functions, Virtual Base Class, C++ Class Hierarchy, File Stream, Text File Handling, Binary File Handling, Error handling during file operations, Overloading << and >> operators, Introduction to Exception, Benefits of Exception handling, Try and catch block, Throw statement, Pre-defined exceptions in C++, Writing custom Exception class, Stack Unwinding, C++ Templates, Function Templates, Class Templates."},
        {id:uuid(),moduleName:"Module 5 : Data Structure & Algorithms (60 Hours/Days)",listText:"Introduction :What is an algorithm, Data Structure and Types, Asymptotic Notations, Master Theorem, Divide and Conquer Algorithm. Data Structure : Stack, Queue, Types of Queues, Circular Queue, Priority Queue, Deque, Linked List, Linked List Operations, Types of Linked List, Hash Table, Heap Data Structure, Fibonacci Heap, Decrease Key and Delete node from Fibonacci Heap. Tree Based Data Structure : Tree Data Structure, Tree Traversal, Binary Tree, Full Binary Tree, Perfect Binary Tree, Complete Binary Tree, Balanced Binary Tree, Binary Search Tree, AVL Tree, B Tree, Insertion into B-tree, Deletion from B-tree, B+ Tree, Insertion on a B+ Tree, Deletion from a B+ Tree, Red Black Tree, Insertion in Red Black Tree, Deletion from Red Black Tree. Graph Based DSA : Graph Data Structure, Spanning Tree, Strongly Connected Components, Adjacency Matrix, Adjacency List, DFS Algorithm, Breadth-first Search, Bellman Ford's Algorithm. Sorting & Searching Algorithms : Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Counting Sort, Radix Sort, Bucket Sort, Heap Sort, Shell Sort, Linear Search, Binary Search. Greedy Algorithms : Greedy Algorithm, Ford-Fulkerson Algorithm, Dijkstra's Algorithm, Kruskal's Algorithm, Prim's Algorithm, Huffman Code. Dynamic Programming : Dynamic Programming, Floyd Warshall Algorithm, Longest Common Subsequence"},
        {id:uuid(),moduleName:"Module 6 : Project Work",listText:"After the completion of all the modules during this programming fundamentals training program, some projects would be assigned to you to improve your practical knowledge and project experiences."},
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
    headingText: "Become an",
    subHeadingText:"Expert in C Programming",
    paragraphText:"Improve your programming skills",
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
          "Training program available in 30 days and 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Basic (30 Hours/Days)",listText:"Introduction to C Language, Simple C Program, Program execution phases, Backslash character constants, Character set, Constants, Number systems, Format specifiers, Identifiers, Keywords, Variables, Data Types, Arithmetic operators, Increment and decrement operators, Relational operators, Logical operators, bitwise operators, assignment operators, conditional operator, size of operator, comma operator, Type casting operator, data types, input output library functions, control statements (if-else, switch-case, for, while, do-while, nested loop, jump control statements, break, continue, goto, exit, return), functions, return statement, recursion, library functions, local and global variables, storage classes, Pointers, Pointer to Pointer, Pointer Arithmetic, De-reference & increment pointer, pointer to function, Array, types of Arrays, accessing array elements, Pointer to array, Array & functions, Malloc, calloc, realloc, free, core dump, memory leak."},
        {id:uuid(),moduleName:"Module 2 : Advance (30 Hours/Days)",listText:"Introduction to String, gets() & puts() functions, String handling functions, Structure, accessing structure members, size of structures, reading and displaying structure variables, array to structure, nested structures, self-referential structures, structure and functions, Union, enum keyword, typedef keyword, introduction to file handling, buffer and streams, working with text files and binary files, file operations using std library and system calls, file management I/O functions, random access files."},
        {id:uuid(),moduleName:"Module 3 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 60 days training program of C programming. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 4 : Minor Project Work",listText:"This module is available for those who enroll in 60 days training program of C Programming. The candidate will get the benefits of project guidance & project work during the training."},
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
    headingText: "Become an",
    subHeadingText:"Expert in C++ Programming",
    paragraphText:"Improve your programming skills",
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
          "Training program available in 30 days and 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : C++ Core Programming (30 Hours/Days)",listText:"Introduction to C++, First C++ Program, How C++ differs from C, Variables Declaration, Function overloading, Optional Parameters, Reference Variables, Operator overloading, Basics of Console Input and Output, Constant Pointers, Dynamic Memory Allocation, Operators - arithmetic, assignment, logical, bitwise, Conditions like if / else / switch, Arrays / multi-dimensional arrays, Loops - for / while / do-while, Functions, overloading functions, passing variables to functions, Structures, References, Pointers, C++ programs & Practices."},
        {id:uuid(),moduleName:"Module 2 : C++ Advance Programming (30 Hours/Days)",listText:"Overview of OOPs Principles, Introduction to classes & objects, Creation & destruction of objects, Data Members, Member Functions, this Pointer, Constructor & Destructor, Static class member, Friend class and functions, Namespace. Introduction to inheritance and benefits, Access Specifier, Base and Derived class Constructors, Types of Inheritance, Down casting and up casting, Function overriding, Virtual functions, Destructor overriding, Polymorphism, Pure virtual functions, Virtual Base Class, C++ Class Hierarchy, File Stream, Text File Handling, Binary File Handling, Error handling during file operations, Overloading << and >> operators, Introduction to Exception, Benefits of Exception handling, Try and catch block, Throw statement, Pre-defined exceptions in C++, Writing custom Exception class, Stack Unwinding, C++ Templates, Function Templates, Class Templates."},
        {id:uuid(),moduleName:"Module 3 : Assignments & Interview Preparation",listText:"This module is available for those who enroll in 60 days training program of C++ programming. The candidate will go through various assignments, and case studies to get hands-on experience. The candidate will also get trained in respect of cracking the viva and interviews."},
        {id:uuid(),moduleName:"Module 4 : Minor Project Work",listText:"This module is available for those who enroll in 60 days training program of C++ Programming. The candidate will get the benefits of project guidance & project work during the training."},
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
    headingText: "Become an",
    subHeadingText:"Expert in Data Structures and Algorithms",
    paragraphText:"Improve your programming skills",
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
          "Training program available in 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction",listText:"What is an algorithm, Data Structure and Types, Asymptotic Notations, Master Theorem, Divide and Conquer Algorithm."},
        {id:uuid(),moduleName:"Module 2 : Exploring Data Structure",listText:"Stack, Queue, Types of Queues, Circular Queue, Priority Queue, Deque, Linked List, Linked List Operations, Types of Linked List, Hash Table, Heap Data Structure, Fibonacci Heap, Decrease Key and Delete node from Fibonacci Heap"},
        {id:uuid(),moduleName:"Module 3 : Tree Based Data Structure",listText:"Tree Data Structure, Tree Traversal, Binary Tree, Full Binary Tree, Perfect Binary Tree, Complete Binary Tree, Balanced Binary Tree, Binary Search Tree, AVL Tree, B Tree, Insertion into B-tree, Deletion from B-tree, B+ Tree, Insertion on a B+ Tree, Deletion from a B+ Tree, Red Black Tree, Insertion in Red Black Tree, Deletion from Red Black Tree"},
        {id:uuid(),moduleName:"Module 4 : Graph Based Data Structure",listText:"Graph Data Structure, Spanning Tree, Strongly Connected Components, Adjacency Matrix, Adjacency List, DFS Algorithm, Breadth-first Search, Bellman Ford's Algorithm"},
        {id:uuid(),moduleName:"Module 5 : Sorting & Searching Algorithms",listText:"Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Counting Sort, Radix Sort, Bucket Sort, Heap Sort, Shell Sort, Linear Search, Binary Search"},
        {id:uuid(),moduleName:"Module 6 : Greedy Algorithms",listText:"Greedy Algorithm, Ford-Fulkerson Algorithm, Dijkstra's Algorithm, Kruskal's Algorithm, Prim's Algorithm, Huffman Code"},
        {id:uuid(),moduleName:"Module 7 : Dynamic Programming",listText:"Dynamic Programming, Floyd Warshall Algorithm, Longest Common Subsequence"},
        {id:uuid(),moduleName:"Module 8 : Assignments & Interview Preparation",listText:"The candidate will get trained in respect of cracking the viva and interviews."},
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
    headingText:"Become a professional",
    subHeadingText:"Social Media Marketer",
    paragraphText:"With Live Projects",
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
          "Training program available in 30 days, 60 days and 90 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction",listText:"Overview, Social Media Optimization, Sales Funnel, AIDA Model for Advertising, Key Concepts, Strategies and Planning, Trends in Social Media, Importance of SMM for Offsite SEO."},
        {id:uuid(),moduleName:"Module 2 : Facebook Marketing",listText:"Overview, Organic Reach Vs Paid Reach, Profile Creation and Optimization, Page Creation, Group Creation, Facebook Market Place And Catalogues, Engagement Increment Techniques, Facebook Business Suite Management, Scheduling And Post Calendar, Integration With Instagram, Facebook Business Manager, Business Account Setup, Business Account Settings, Events Manager, Facebook Pixel Integration, Event Setup Tool, Objectives Of Facebook Marketing, Image Ads, Video Ads, Carousel Ads, Instant Experience Ads, Collection Ads, Audiences Setup, Custom And Remarketing Audience, Commerce Manager, Creative Hub, Facebook Insights, Analytics, Laws And Ethics."},
        {id:uuid(),moduleName:"Module 3 : Instagram Marketing",listText:"Profile Creation and Optimization, Specifications, Tools, Hashtag Research, Boost a Post, Reels, IGTV, Video and Image Specifications, Bio Optimization, Insights and Analysis."},
        {id:uuid(),moduleName:"Module 4 : LinkedIn Marketing",listText:"Account Setup and Profile Creation, Features, Business Page Creation, Groups, Schools and various Courses, LinkedIn Advertising, Sponsored Content, LinkedIn Insight Tag installation, Importance in B2B Industry, Analytics, Job Searching and Posting, Paid vs Free Plan."},
        {id:uuid(),moduleName:"Module 5 : Twitter Marketing",listText:"Account Setup and Profile Optimization, Tweets Ideas, Trends and Explore Option, Niche Selection, Networking and Engagement, Twitter Ads, Goal Selection, Audience Targeting, Budget Allocation, Importance in B2B Industry, App campaign."},
        {id:uuid(),moduleName:"Module 6 : YouTube Marketing",listText:"Channel Setup and Optimization, YouTube SEO, Keywords, Titles and Headlines, Description, Research, Topic Selection for Video Making, Creation and Editing of Videos, Various Tools for Video Editing, Thumbnail Designs, Call to Action, Engagement and Subscription, Passive Income Through YouTube, Video Ad Creation through Google Ads, Types of Video Ads, YouTube Studio, Analytics, Copyright and Strike, Laws and Ethics."},
        {id:uuid(),moduleName:"Module 7 : Minor Project Work",listText:"Available for those who enrolled in 60 days or 90 days training program of Social Media Marketing. During this, the candidate will work on some minor projects under the supervision of respected trainer."},
      
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
    headingText:"Become an expert in",
    subHeadingText:"Google Ads",
    paragraphText:"With Live Projects",
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
          "Training program available in 30 days and 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction",listText:"Google Ads Auction, Relevancy & Quality Score, Types of Ad Campaigns, Selection of Goal, Structure of Google Ads, Dashboard Overview, Basic and Professional account Google Search Network, Google Display Network."},
        {id:uuid(),moduleName:"Module 2 : Targeting & Keywords",listText:"Network Targeting Option, Location Targeting Option, Language Targeting Option, Audience Targeting Option, Ad types, Keywords, Keyword Match Type, Negative Keyword Match Type, Theme of Ad groups Keyword Research, Keyword Planner Tool."},
        {id:uuid(),moduleName:"Module 3 : Budget and Bidding Options",listText:"Daily and Monthly Budget, Shared Budget, Allotment of Budget, ROI (return on investment), Bidding Strategies, CPC (cost per click), CPA (cost per acquisition/action), CPV (cost per view), ROAS (return on average spent), Cost per Conversion Value, Cost per install, CPM (cost per thousand impressions), ECPC (enhanced cost per click), vCPM (viewable cost per thousand impression), Target Impression Share, First Page Bid Estimate Option, Bidding Adjustment, Bid Strategy Statuses, Measurement of viewability, True view active technology."},
        {id:uuid(),moduleName:"Module 4 : Ad Creation",listText:"Search ad Campaign, Sales ad Campaign, Leads ad Campaign, Website traffic ad Campaign, Product and brand Consideration ad Campaign, Product and Brand Consideration ad Campaign, App ad Campaign, Smart ad Campaign, Performance max ad Campaign, No Goal/Objective Selection."},
        {id:uuid(),moduleName:"Module 5 : Ad Types & Ad Extensions",listText:"Search Ads, Display Ads, Gmail Ads, Video ads and its types (YouTube Ads), Performance max ads, Discovery ads, Ad Extensions Uses & Advantage, Callout extensions, Structured snippets, Call extensions Lead form extensions, Location extensions, Affiliate location extensions, Price extensions, App extensions, Promotion extensions."},
        {id:uuid(),moduleName:"Module 6 : Conversion and Analytics",listText:"Campaign URL Option, Conversion Setup, Google Tag manager, Tag Setup, Google Analytics, Cross Reporting, Difference between Conversion and Acquisition."},
        {id:uuid(),moduleName:"Module 7 : Remarketing and Retargeting",listText:"Audience creation, Custom Audience, YouTube Audience, Website Visitors, Remarketing Audience, AIDA Model."},
        {id:uuid(),moduleName:"Module 8 : Forecasting and Planning",listText:"Performance Planner Tool, Reach Planner Tool, Ad Preview and Diagnosis, App Advertising Hub, Campaign Budget Simulator."},
        {id:uuid(),moduleName:"Module 9 : Miscellaneous Things",listText:"Ad Scheduling & Ad Rotation, Content Exclusions In Video Ads, Automated Rule Setup, Google Ads Script, Drafts & Experiments, Setting Up Ad Variations, Copy & Paste Campaigns, Keyword Insertion In Search Ads, Countdown in Text Ads, If Function In Text Ads, Change History, Creation Of Custom Columns, Fixing Of Disapproved Ads, SKTA (Single Keyword Targeted Ads), Duplicate Keywords, Landing Pages, Acquisition & Conversion, GCLID (Google Click Identifier), Google Ads Editor, Google Merchant Centre."},
        {id:uuid(),moduleName:"Module 10 : Minor Project Work",listText:"Available for those who enrolled in 60 days training program of Google Ads. During this, the candidate will work on some minor projects under the supervision of respected trainer."},
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
    headingText:"Learn to create",
    subHeadingText:"Websites & Professional Blogs",
    paragraphText:"With WordPress",
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
          "Training program available in 30 days and 60 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Introduction",listText:"Introduction to WordPress, Content management system, Open-source CMS vs. proprietary / closed source CMS, Local By Flywheel (Local Sites Content files Storage System)"},
        {id:uuid(),moduleName:"Module 2 : Domain & Hosting",listText:"Recommended domain name registrars, buying a domain name, Recommended web hosting providers, right hosting plan of your needs, web hosting account, Hosting types, benefits of paid hosting, disadvantage of free hosting."},
        {id:uuid(),moduleName:"Module 3 : WordPress Environmental SetUp",listText:"WordPress installation, Logging into WordPress, Themes, Modern Web Design trends, choosing a reliable WordPress theme, installing a theme, Installing a child theme, WordPress Settings, General, Writing, Reading, Discussion, Media, Permalinks, Managing users, Plugins installation, Setting up TinyMCE Advanced plugin."},
        {id:uuid(),moduleName:"Module 4 : Website Planning & Architecture",listText:"Planning your website architecture, Creating webpages, Creating subpages, Setting up your main navigation menu, Adding content with the Visual Editor and Text Editor, Adding images to your page, Creating hyperlinks, Publishing your page, Creating posts, Setting up a blog, Creating a contact form, Embedding a contact form, Landing Page Creation, Enabling full width page, Creating a landing page with Elementor Page Builder, How to craft magnetic landing pages, Customizing Website , How to upload a logo, Customizing the sidebar, Customizing the footer."},
        {id:uuid(),moduleName:"Module 5 : SEO & E-Commerce",listText:"Installing WordPress SEO, On-page SEO ranking factors, Maintaining your site speed and loading time, Integrating E-Commerce into Your WordPress Site, Installing Woo-commerce, Creating a product, Checkout and payment gateways"},
        {id:uuid(),moduleName:"Module 6 : Blogging",listText:"Blogging world, Content marketing benefits, need of blogs, Advantage of blogging for businesses, Getting going with your Blog, Objectives, Expectations, Monetization, Great Content Sources and tools, Blogging Calendar, Social media optimization, Niche selection, Practical values, AIDA Model."},
        {id:uuid(),moduleName:"Module 7 : Writing Your Blog",listText:"Title and Headline writing, Anatomy of Blogs, Irresistible introduction writing, Hook text, Alt texts, Images, Keyword importance, consistency and frequency, feedback and comment importance, Call to action, Newsletter and signups."},
        {id:uuid(),moduleName:"Module 8 : SEO & Promotion",listText:"Basics of on page and off page SEO, Blog Optimisation, Keyword importance, Keyword Density, long-tail Keyword usage, Competition analysis, Backlink creation, Do-follow vs No-Follow backlinks, Google search engine working, Once you have started your blog, it’s time to start letting people know about it. Smart ways to promote your blog and build your readership. We will also be looking at the benefits of blogging elsewhere. Optimise your blog to get high rankings in search engines, how to promote your blog in social media, forums, content sharing websites and industry websites. Email marketing of your blog."},
        {id:uuid(),moduleName:"Module 9 : Minor Project Work",listText:"Available for those who enrolled in 60 days training program of WordPress & Blogging. During this, the candidate will work on some minor projects under the supervision of respected trainer."},
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
    headingText:"Become an expert in",
    subHeadingText:"Search Engine Optimization",
    paragraphText:"With Live Projects",
    primaryButtonText: "Apply Now",
    outlinedButtonText: "Download Syllabus",
    cardData: [
      {
        id: uuid(),
        heading: "6",
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
          "Training program available in 30 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : SEO Basics & Background",listText:"Understanding domain/website & how they work, Types of websites & their importance, Basics of world wide web (www) / Internet, What is Internet Marketing/ Digital Marketing, Types of Internet Marketing & their importance, Introduction to Search Engines & their importance, Economical & Social Impact of Major Search Engines, Working of search engines, Search Engines Algorithms & Architecture, Introduction to Google Search Engine, Understanding Search Engine Result Pages (SERPs), Google Search Algorithm & its Capabilities/Functions, Page Rank Technology & it’s impact in Ranking Calculation, Introduction to Google Algorithm Updates."},
        {id:uuid(),moduleName:"Module 2 : Keyword Research, Analysis & Clustering",listText:"Introduction to Keyword Research, Types of Keywords and their impact on SERPs, how to find successful keywords to meet project targets, How to Use Free & Premium Keyword Research Tools, 3 Powerful techniques of Keyword Research, Filter, Cluster & Finalize keywords for the project, Leveraging long tail & Geo intent keywords."},
        {id:uuid(),moduleName:"Module 3 : On-Page / On-Site SEO",listText:"SEO friendly website design & development, SEO friendly site structure & siloing, Understanding HTML needed for SEO, how to ensure usable, crawlable & indexable site structure, what you should know about On-site optimization, Importance of On-page SEO & it’s weightage in Google Ranking, Keywords in Domain Name Vs Branding."},
        {id:uuid(),moduleName:"Module 4 : On-Page SEO Activities",listText:"Title Tag optimization, Meta description tag optimization, Filename optimization, SEO friendly URL structure, Canonical Tags optimization, Website speed optimization with the help of development team, Robots.txt optimization, Sitemap.xml optimization, Integrating keywords throughout webpage, Keyword density management, Using keywords in Heading tags, Image tag optimization (Alt), Rich media optimization (video), Using keywords in Content, Content duplicate check and fix, Content optimization – How to find high quality content, Understanding quality content, engaging content, value added content &, converting content., Optimizing internal links, Outgoing links optimization., 301 URL redirection, 404 error page optimization, Header & Footer optimization, Website auditing tools, On-Page SEO best practices."},
        {id:uuid(),moduleName:"Module 5 : Off-Page / Off-Site SEO",listText:"Introduction to Off-Page SEO, Importance of Off-Page SEO & it’s weightage in Search Rankings, Introduction to Link building, Effect of Backlinks on search engine rankings, Strategy to develop high quality backlinks, Types of backlinks, Google penalties and build future compatible links, Nofollow Vs Dofollow links, Installing Google Analytics, Installing Google webmaster tools, Types of Linking methods – Do’s & Don’ts, Analysing overall backlink profile, Natural backlink profile and its importance, White Hat, Grey Hat & Black Hat links – Do’s and Don’ts, free tools for backlinks building, Tools for backlink building (Ubersuggest, Semrush, Backlinko etc.), High quality backlinks, Free links Vs Paid links, How to do guest blog posting for quality backlinks, Using third party blogs for links and traffic, Google maps & local business listings, Social Bookmarking, Press release backlinks optimization, Videos creation and link building, Pdf creation and link building, RSS feed creation, submission and optimization, Blog creation and targeting for desired keyword ranking, Best practices for Off page SEO."},
        {id:uuid(),moduleName:"Module 6 : Projects & Practices",listText:"Initial Website Analysis & Competitor Analysis : Complete Website Analysis (On-Page & Off-Page), Fix Critical Issues, Cleanup Spam backlinks - Link Profile Cleanup. SEO Project - Requirements & Targets : Discuss and Finalize Client business targets, Based on Client’s business targets, prepare SEO project requirements, Based on Target, finalize client’s products/services/primary keywords, Tracking & Reporting : Tracking target keyword ranking on Google, Introduction to Google Analytics, Generating various types of reports, Report website visitors, geo, traffic sources, time spent, bounce rate and more."},
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
    headingText:"Become an expert in",
    subHeadingText:"Content Marketing",
    paragraphText:"With Live Projects",
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
          "Training program available in 30 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Content Marketing",listText:"Overview, Storytelling, Need of Content for Businesses, Tools and Platform for Content Creation, Content Design, Characteristics and Advantages, AIDA Model, Strategies for Content Development, Content Marketing Channels, Writing Messages and Creating Content, Getting Your Message Into the Media, Content Strategy & Challenges, Types of Content: Lists, Interviews, Case Studies, Collection of Links, Infographics, News, Stories Etc., Niche Oriented Content, Paid Content, Engaging Content Writing, Outsourcing Content, Tools, Blog Marketing, Social Media Marketing Channels, Image Marketing, Video Marketing, Article and Press Release Marketing, Email Marketing, Event Marketing, B2B Marketing."},
        {id:uuid(),moduleName:"Module 2 : Minor Project",listText:"During this, the candidate will work on some minor projects under the supervision of respected trainer."},
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
    headingText:"Become an expert in",
    subHeadingText:"Affiliate Marketing",
    paragraphText:"With Live Projects",
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
          "Training program available in 30 days duration",
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
      moduleTextData:[
        {id:uuid(),moduleName:"Module 1 : Affiliate Marketing",listText:"Overview, Benefits, Networks, Techniques, Niche Selection, Advertising Model, Amazon Associates, Flipkart Affiliate Program, Other Affiliate Program: Vcommision, Click Bank, Etc., Strategies for Getting Traffic, On Page SEO Factors, Components of Affiliate Marketing Website, Common Mistakes, Best practices, Web Analytics, Coupon System, Case Study by Using Tool, Referral System, Social Media Network and Affiliate Marketing."},
        {id:uuid(),moduleName:"Module 2 :Minor Project Work",listText:"During this, the candidate will work on some minor projects under the supervision of respected trainer."},
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
        moduleName: "Module 1 : Object Oriented Programming & Java Concepts",
        listText: "Introduction to Object Oriented Programming & Java, methods, variables, constructor & blocks, control flow (if-else, switch, while loop, do while loop, for loop, return, break, continue, etc.), OOPS concepts (Inheritance, Polymorphism, Encapsulation & abstraction), Inner classes (regular, method local, static, & anonymous), Inner interfaces, Wrapper classes, String Handling, Exception Handling, Multithreading, File Handling, Input-Output. Introduction to GUI, component, container, AWT, Java Foundation Classes (swing), Layout Managers, Event Handling, Event Listeners and Handlers, Adapter Classes, Lambda Expression, Serialization, Regular Expression.",
      },
      { id: uuid(), moduleName: "Module 2 : Generics & Collection Framework", listText: "Introduction to Enumeration, Enum examples & use cases, Introduction to Generics, Time Safety, Type Casting, Generic Methods. Introduction to Collection Framework, Arrays vs Collections, Key Interfaces, List, Set, SortedSet, NavigableSet, Queue, Map, SortedMap, NavigableMap, ArrayList and Vector, Stack, LinkedList, Iterator, ListIterator, HashSet, LinkedHashSet, SortedSet, TreeSet, Concurrent Collections." },
      { id: uuid(), moduleName: "Module 3 : MySQL Database & Java Database Connectivity (JDBC)", listText: "Introduction to Database & MySQL, MySQL Installation, MySQL Structure, Schema (Create, Drop & User Database), Table Operations, Create, Drop, Alter, Rename, Update, Add, Column Insert, Update, Delete, Select, Where, AND, OR, NOT, In, Between, Limit, Order By, Offset, Count, Sum, Avg, Min, Max, Nested Queries, Clause, Search Pattern, Foreign Key & Joins. Introduction to JDBC, JDBC drivers, Required Interfaces, Execute methods, CRUD operations, Aggregate functions, Transaction Management, PreparedStatement, stored procedures, callable statement, batch updates, date values, BLOB & CLOB, connection pooling, transaction management & savepoints, MetaData, ResultSet types, RowSets and RowID" },
      { id: uuid(), moduleName: "Module 4 : Hypertext Markup Language (HTML)", listText: "Introduction to HTML5, Environmental setup of HTML5, HTML tags, elements and attributes, Syntax of HTML, Custom Attributes, Line Breaks, Spacing & Comments, HTML head tag, Setting Website Icon & Title, Background Images & Colors, Block & Inline Level Elements, Text Formatting Tags, Heading & Quotes, Images, Linking Web Pages, Creating Lists, Play Audio & Video, Embedding External Content, Creating Tables, Forms & Inputs, Semantic Elements, Using Emoji, Entities & Symbols in Website." },
      { id: uuid(), moduleName: "Module 5 : Cascading Style Sheets (CSS)", listText: "Introduction to CSS3, CSS3 Environmental Setup with HTML5, Linking CSS3 with HTML5, Priority of CSS3 Stylesheets, Comments in CSS3 Properties & Selectors in CSS3, CSS IMPORTANT Rule, Priority of CSS Stylesheets according to Selectors, Text Colors & Transparency in CSS3, CSS Dimensions & Units, Shorthand Properties Backgrounds, Gradients Properties, Text Styling, Text Fonts, Google Fonts & Icons. CSS3 Box Model (Border, Margin, Padding, Shadowing, Redefining box-width, outlines etc.) Floats, Clear & Overflow, CSS3 Display Property, CSS Element Visibility, Position & Layering, Transitions & Animations, Creating Column Layouts, CSS Counters, Creating Tables Using CSS, Transforming CSS Elements, Clipping, Shaping, Masking & Filters, Modular CSS, CSS3 Miscellaneous (Vendor & Autoprefixing, Initial, Inherit & Auto, Misc. Properties, Misc. Pseudo Elements, Misc. Pseudo Classes etc.)" },
      { id: uuid(), moduleName: "Module 6 : Bootstrap", listText: "Introduction to Bootstrap, Web Design – Wireframing, Navigation Bar, Grid Layout System, Bootstrap Containers, Bootstrap Buttons, Font Awesome, Styling, Bootstrap Carousel, Cards, Media Query Break Points, Combining Selectors, Selector Priority." },
      { id: uuid(), moduleName: "Module 7 : JavaScript", listText: "Introductions to JavaScript, Variables, let & const keyword, string handling, operators, control flow (if-else, switch, while loop, do while loop, for loop, break, continue, etc.), Array operations, objects & functions, scopes, methods (forEach, sort, find, some, fill, splice, map, filter, reduce, call, apply, bind, etc.). Object cloning, keyword (this, new, class, extends & super) , arrow functions, function declarations & expressions, getter & setter methods, static methods, closures, Document Object Model, DOM Manipulation using JavaScript, attributes, Lists, JavaScript Events, callbacks, promise, Introduction of AJAX & ES6." },
      { id: uuid(), moduleName: "Module 8 : Servlet & Java Server Pages", listText: "Introduction to Servlet, Application types, web application directory structure, servlet execution, important methods, servlet communications, CRUD Operations, RequestDispatcher, Servlet Filters, Session Tracking, URL Rewriting, cookies, hidden form fields, Servlet Listeners & Events, Annotations in Servlet. Introduction to JSP, Servlet vs JSP, Model Architecture, Scripting Elements (Scriptlets, Expression, Declarations, Comments), JSP Implicit Object, JSP Directives (page, include, taglib), JSP scopes (Page, Request, Session, Application), JSP Actions (standard, custom), Exception handling, JSTL (Core tags, SQL tags, xml tags, function tags, etc." },
      { id: uuid(), moduleName: "Module 9 : MongoDB", listText: "Introduction to MongoDB, SQL vs NoSQL, Shell, Operations (Create, Read, Update, Delete, etc), Relationships in MongoDB, Native MongoDB Driver." },
      { id: uuid(), moduleName: "Module 10 : React JS", listText: "Introduction to React, JSX & Babel, Expressions, JSX Attributes, React Elements, Inline Styling, React Components, JavaScript ES6 (import, export & modules), Environment Setup, React Props, DevTools, ES6 Map_Filter_Reduce, ES6 Arrow functions, Conditional Rendering, React State, React Hooks – useState, Event Handling, React Forms, Class Component Vs Functional Component, ES6 Spread Operator, Component Tree." },
      { id: uuid(), moduleName: "Module 11 : Spring", listText: "Introduction to Spring, Dependency Injection, Data Integration, IOC Container, Maven Project for Spring & Dependencies, Spring Configuration, Injecting Collections, Injecting Reference Type & Constructor, Spring Bean, Life Cycle Methods, Annotations, Spring Bean Scope, Spring Expression Language. Introduction to Spring JDBC, Database Setup, CRUD Operations, Row Mapper, Introduction to Spring ORM, CRUD Operations using Spring ORM, Introduction to Spring MVC, MVC Design Pattern, Tomcat Configuration, JSP Expression Language, JSTL, Handling Forms, Redirecting in Spring MVC, Error Handling, Exception Handling, Spring MVC Interceptor, Aspect Oriented Programming (AOP)." },
      { id: uuid(), moduleName: "Module 12 : Spring Boot", listText: "Introduction to Spring Boot, Auto Configuration, Spring Initializr, Spring Tool Suite, JSP view, Introduction to JPA, Repository, DB Configuration, CRUD Operations, Custom Finder Methods, JPQL and Native Queries, Introduction to API & Web Services, Understand REST API, Spring Boot Dev Tools, Creating REST API (get functionality, PostMapping, DeleteMapping, PutMapping, ResponseEntity), Server Side Form Validation, Spring Security, Role Based Authorization, Login Functionality, Configuration and Customization, Introduction to JWT, JWT Authentication, Unit Testing of Spring Boot Projects." },
      { id: uuid(), moduleName: "Module 13 : Hibernate", listText: "Introduction to Hibernate & ORM Tool, Maven Project for Hibernate & Dependencies, Hibernate Configuration, Annotations, Saving data and images, Object Fetching (get & load method), embedding objects, Hibernate Mapping (one to one, one to many & many to many), Lazy & Eager Loading, Hibernate Object States, Introduction to HQL (Hibernate Query Language), Native SQL Queries, Cascading, Cashing, Hibernate Criteria API, Hibernate Integration with Spring MVC." },
      { id: uuid(), moduleName: "Module 14 : Linux", listText: "Introduction to Linux, Linux Distributions & Shell, Virtual Machine & Installation, vim editor, Linux Commands, Directory Structure, File System, User Management, Group Management, Password Properties, Managing Permissions, ACL, Managing Processes, Managing Partitions, Managing Softwares, Links & Tar, Logs, Logical Volume Manager, Scheduling Tasks, Kernel, Http Configuration, Firewall Configuration, Password Resetting, Shell Scripting." },
      { id: uuid(), moduleName: "Module 15 : Cloud Computing & AWS", listText: "Introduction to AWS & Cloud Computing, IAM, Roles, Policies and Access Management, Billing Dashboard & Free Tier Services, EC2 Fundamentals, Instance creation, SSH, AMI Types & Security Key Pairs, S3 Buckets & objects, storage classes, Load Balancing, access lists & policies, security & encryption, cross region replication, s3 versioning control, AWS snowball, CloudFront, AWS Databases, Dynamo DB, Redshift, Aurora, RDS Instance, RDS Encryption & Security, RDS Backups, ElastiCache, CloudWatch & Cloud Trail, Virtual Private Cloud (VPC), NAT Gateway, Network ACL, VPN & VPC, VPC Endpoints, Route 53, AWS Lambda & API Gateway." },
      { id: uuid(), moduleName: "Module 16 : Agile & DevOps", listText: "Introduction to Software Development, Development Models (Waterfall, Iterative, Spiral, RAD, Agile, etc.), Agile Development Model, Introduction to DevOps, DevOps Life Cycle & DevOps Tools." },
      { id: uuid(), moduleName: "Module 17 : Git & GitHub", listText: "Introduction to Version Control & Git, Command Line Interface, GitHub & Repositories, staging, cloning, push operation, branching, merging, forking & pull requests." },
      { id: uuid(), moduleName: "Module 18 : Jenkins", listText: "Introduction to Continuous Integration & Jenkins, Jenkins Installation, Dashboard Overview, Job Creation, Search Panel, Jenkins Configuration, Jenkins Plugin, Role Base Access, Git Integration, Trigger Build, Build Periodically, Poll SCM, Environment Variables, Parameterized Jobs, Code Coverage, Timeout & TimeStamp, Job Management, User Management, Jenkins Logs Custom Workspace, Upstream / Downstream Jobs, Pipelining,  Continuous Deployment, Continuous Delivery, Parallel Jobs, Master Slave, Input Parameters, Post Actions, Slack Notifications." },
      { id: uuid(), moduleName: "Module 19 : Ansible", listText: "Introduction to YAML & Ansible, inventory, playbook, modules, variables, control flow (conditions & loop), Roles, Asynchronous Actions, Polling, Strategies, Error, Ansible Vault, LookUps, Custom Module." },
      { id: uuid(), moduleName: "Module 20 : Docker", listText: "Introduction to Container, Container Vs Virtual Machine, Introduction to Docker, Installation & Environment, Commands, Objects, Registry, DockerHub, Docker Compose, Docker Swarm, Architecture, Files, Images, Storage & Volumes, Drivers, Networks, Monitoring." },
      { id: uuid(), moduleName: "Module 21 : Kubernetes", listText: "Introduction to Kubernetes, Architecture Overview, Pod & Kubectl, Pod’s Container, Cluster IP, Node Port, Replication Controller, Deployment in Kubernetes, Kubernetes Rollout, Resource Request & Resource Limits, Namespace, Service DNS, Resource Quota, Limit Range, Config Map, Kubernetes Secret, taint & toleration, Scheduling & Volume Overview." },
      { id: uuid(), moduleName: "Module 22 : JIRA", listText: "Introduction to Project Management & JIRA, Login to ATLASSIAN, creating project, Introduction to Kanban & Scrum, JIRA User Interface, Navigation, Issues, Agile Boards, Search Filters, Dashboard Customization, EPIC, User Story, Sprint, Sprint Management, Software Versions & Software Releases, User Management, Permissions & Project Roles, JIRA Schemes, Team Managed Projects, Roadmaps & Access Restrictions." },
      { id: uuid(), moduleName: "Module 23 : Design Thinking & User Experience", listText: "Introduction to Design Thinking, Design Thinking Mindset, Empathy in Design Thinking, Organize the Ideas, Identify Opportunities, Solve The Problem, Mindset to Find Ideas, Brainstorming, Create a Prototype, Tools to create Mockups, StoryBoarding, Minimum Viable Product, MosCow Method, User Testing, Collect Feedbacks, AB Testing." },
      { id: uuid(), moduleName: "Module 24 : UI/UX with Figma", listText: "Introduction to UI/UX, Figma Design File, Shapes, Selection, Typography, Design Tree, First Design, Colors, Drawing Tools, Margin, Padding, AutoLayout, Formatting Principles, Figma Constraints, Website Design, Styles and Components, Component Variants, Layout Grids & Design, Responsive Design, Material Design, Tailwind UI, Designing Mobile Apps, Iconography, Boolean Groups, Figma Token, Animations." },
      { id: uuid(), moduleName: "Module 25 : Capstone Projects", listText: "Utility based major projects to increase your productivity and to build your experience. Projects like E-Commerce Portal, Informative Blog, LMS Portal, Food Ordering Portal, etc." },
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
        pathName: "/digital-marketing-course",
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
        heading: "25+",
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
      { id: uuid(), cardText: "Lots of Freelancing Work",listText:
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
      detector:"3 Months",
      buttonText: "Download Syllabus",
    },
    {
      id: uuid(),
      imagePath: COURSES_LOGO_IMAGES.sixMonthsMarketing,
      text1: "Digital Marketing Associate",
      text2: "Duration : 6 months",
      text3: "(Job Guarantee)",
      detector:"6 Months",
      buttonText: "Download Syllabus",
    },
    {
      id: uuid(),
      imagePath: COURSES_LOGO_IMAGES.oneYearMarketing,
      text1: "Digital Marketing Professional",
      text2: "Duration - 12 months",
      text3: "(Job Guarantee)",
      detector:"12 Months",
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
        paragraphText: "Training program available in 6 months and 12 months duration",
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
        moduleName: "Module 1 : Introduction to Digital Marketing",
        listText: "Key Concepts of Digital Marketing, Traditional Vs. Digital Marketing, The Opportunity of Digital Marketing, Characteristics of Digital Marketing, Implications of Digital Marketing, Visitor Engagement, Visibility, Inbound Marketing, Importance of Tools, Performance Marketing, Sales Funnel, Conversion Rate Optimization (CRO), Return on Investment (ROI), Key Performance Indicator (KPI), Psychographs.",
      },
      { id: uuid(), moduleName: "Module 2 : Digital Marketing vs Traditional Marketing", listText: "What's the difference between digital marketing and traditional marketing, and why does it matter, Benefits of Traditional Marketing, The Downside to Traditional Marketing, Benefits of Digital Marketing, Why Digital Marketing Wins Over Traditional Marketing, Tools of Digital Marketing, How We Use Both Digital & Traditional Marketing, Case Study of Digital Marketing Strategies Vs Digital Marketing." },
      { id: uuid(), moduleName: "Module 3 : Search Engine Optimization (or SEO)", listText: "Introduction, Introduction to SERP, Search Engines, Search Engines Working, Major Functions of a Search Engine, Crawling & Indexing, Google Search Tips On-Page SEO : Introduction, Domain Name, Page Naming {URL Structuring} & Folder Naming, Image Naming, Image Title & Alt Tags Creation, Meta Tags, Meta Description. Keywords, Author Redirection, Tags, Headings Tags {H1 To H6} Content Writing, SEO Friendly Content Writing, Anchor Text, Link Title, Internal Linking, Robots.Txt File Use & Creation, Html Sitemap Creation, Xml Site Map Creation, Site Tracking Tools (Google Analytics Tool). Off-Page SEO : Introduction, Backlinks, Importance of Backlinks, Backlink Earning, Do- Follow Vs No- Follow Backlinks, Google Page Rank, Search Engine Submissions, Directory Submissions, Article Writing, Press Release Writing & Submissions, Blog Posting & Comment Writing, Business Listing, Social Bookmarking, Social Networking, RSS Feeds, Do’s & Don’ts of Link Building, Easy Link Acquisition Techniques, Domain Authority & Page Authority. Search Engine Algorithms :  Introduction, Working of Algorithm, Search Engine Algorithm Updates, Search Engine Penalties & Recoveries, Search Engine Penalty, Google Hummingbird Algorithm, Google Panda Algorithm, Google Penguin Algorithm, Google EMD Update, Website Recovery, Google Search Central." },
      { id: uuid(), moduleName: "Module 4 : Keyword Research", listText: "Introduction, Niche, Different Types of Keywords, Google Keyword Planner Tool, Keywords Research, Understanding Keywords Mix, Importance of Keyword Research, Long Tail Keywords, Keyword Stuffing, Keywords in Content, Tools for Keyword Research, Google Suggest, Ubersuggest, Ahref and Semrush, Hashtags." },
      { id: uuid(), moduleName: "Module 5 : Local SEO & SEO Audit", listText: "What is Local SEO, Google places optimization, Classified submissions, Citation, NAP, Top tools for SEO, Monitoring SEO process, Preparing SEO reports, how to create SEO Strategy for your business, what is link juice, Importance of domain and page authority." },
      { id: uuid(), moduleName: "Module 6 : WordPress Website Designing and Development", listText: "Domain Name & Existence, Webhosting, Types of Hosting, Paid & Free Hosting, Advantage of Paid Hosting, Functionality of Website, DNS.Introduction, WordPress Tools, Menus, Post, Page, Media, Appearance, Themes, Widgets, Header, Footer, Plugins, Single Page Website, Pop-Up Maker, Extensions, Elementor page builder." },
      { id: uuid(), moduleName: "Module 7 : Search Engine Marketing (PPC) (Pay Per Click)", listText: "Key PPC Concepts, Strengths of Pay Per Click, PPC, CPA, CPC, CTR, Impressions, Landing Page Conversion, Frequency, Introduction to Google Ads & Bing Ads, Need of SEM, Advantages of PPC." },
      { id: uuid(), moduleName: "Module 8 : Google Analytics – 4", listText: "Introduction, Installation, Demo Account, Google Analytics Universal and Google Analytics- 4, Account Overview, Real Time Report, Acquisition Report, Engagement Report, Retention Report, Plugins for WordPress, Users Report, Events Creation, Dimension & Metrices, Explore Report, Internal Traffic, Landing Page Report, Segments, Funnel Exploration, Open and Closed Funnel, Debug View, Cohort Analysis, Report Identity, Cohort Analysis, Filters." },
      { id: uuid(), moduleName: "Module 9 : Google Tag Manager", listText: "Introduction, Tags & Triggers, Setup & Installation, Workspace, Working with Tags, Events & Tracking, Video Tracking Event, Text Tracking, Button Click Tracking, Outbound Clicks Tracking, Advanced Settings, LinkedIn Insight Tag Installation, Container & Versions, Scroll & Depth Tag, Element Visibility Trigger, Facebook Pixel Tracking." },
      { id: uuid(), moduleName: "Module 10 : Google Ads", listText: "Introduction to Google Ads, Google Ads Auction, Relevancy & Quality Score, Types Of  Ad Campaigns, Selection Of Goal, Keyword Match Type, Structure Of Google Ads, Negative Keyword Match Type, Dashboard Overview, Search Ads Creation, Location Targeting Option, Language Targeting Option, Audience Targeting Option, Budget & Bidding Option, Ad Extensions Uses & Advantage, Conversion Creation, Ad Scheduling & Ad Rotation, Campaign URL Option, Ad Groups, Keyword Research In Google Ads, Bidding Strategies, Well Formatted Search Ads.Introduction Of Display Ads, Display Ad Creation, Content Targeting, Bid Strategy Statuses, Introduction to Video Campaigns & Types, Custom Video Campaign Creation, YouTube Video Ad Sequence Creation, Content Exclusions In Video Ads, How to Calculate Monthly & Daily Budget, Concept Of Shared Budget, App Promotion Campaign, Performance Max Campaign, HTML5 Assets In Google Ads, Automated Rule Setup, Google Ads Script, Drafts & Experiments, Setting Up Ad Variations, Ad Preview & Diagnosis Tool, Copy & Paste Campaigns, Keyword Insertion In Search Ads, Countdown in Text Ads, If Function In Text Ads, Change History, Smart Ad Campaigns, Measure of Performance, Remarketing & Custom Audience Creation, Creation Of Custom Columns, Discovery Campaigns, Fixing of Disapproved Ads, Reach Planner Tool, Campaign Budget Simulator, Performance Planner, SKTA (Single Keyword Targeted Ads), Duplicate Keywords, Landing Pages, Acquisition & Conversion, GCLID (Google Click Identifier), First Page Bid Estimate Option in Google Ads, Google Ads Editor, Google Merchant Center." },
      { id: uuid(), moduleName: "Module 11 : Digital Display Advertising", listText: "Key Digital Display Concepts, Benefits of Digital Display, Challenges of Digital Display, Business Value, Running Effective Ads, Ad Formats, Ad Features, Ad Display Frequency, Campaign Planning, Campaign Steps, Target Audience, Campaign Objectives, Campaign Budget, Tracking Your Campaign, Optimizing the Campaign, Laws & Guidelines." },
      { id: uuid(), moduleName: "Module 12 : Content Designing", listText: "Website Content Design, Facebook Content Design, LinkedIn Content Design, Display Ads Content Design, MS Power Point, Image and Video Specifications." },
      { id: uuid(), moduleName: "Module 13 : Video Editing Through Camtasia", listText: "Introduction and purpose of Camtasia, Basic Tools, Timeline, Track, Media, Splitting, Video Specifications and size, Library stuff, Callouts, Zoom and Pan, Audio Editing, Transitions, behavior, Cursor effect, Visual Properties, Scrolling Slide and Text, Intros and Outros, Screen recording and self-recording, Voice narration and captions, Export and video file type, Green screen recording and background removal, AI in Videos, Video Specification for YouTube and Social Media platforms." },
      { id: uuid(), moduleName: "Module 14 : Social Media Marketing", listText: "Key Concepts, Social Media Goals, Setting Goals & Priorities. Facebook Features, Facebook Newsfeed, Facebook pixel, Facebook Insights, Facebook Business    Page, Facebook    Advertising,  Facebook   Business   Manager,  Business Account, Facebook Insight, Facebook Analytics. Instagram Features, Video and Images Specifications, Reels, IGTV, Hashtag Research, Profile Optimization. Twitter Features, Twitter Engagement, Twitter Advertising, Twitter Analytics. LinkedIn Account Setup & Profile, LinkedIn Features, LinkedIn Groups, LinkedIn Advertising, LinkedIn Analytics. YouTube Channel Setup, YouTube Insight, YouTube Channels, YouTube Features. Blogging, Content Planning, Scheduling Tools, Pinterest, Instagram, Snapchat, Laws & Guidelines." },
      { id: uuid(), moduleName: "Module 15 : Digital Display Advertising", listText: "Key Digital Display Concepts, Benefits of Digital Display, Challenges of Digital Display, Business Value, Running Effective Ads, Ad Formats, Ad Features, Ad Display Frequency, Campaign Planning, Campaign Steps, Target Audience, Campaign Objectives, Campaign Budget, Tracking Your Campaign, Optimizing the Campaign, Laws & Guidelines." },
      { id: uuid(), moduleName: "Module 16 : E-Mail Marketing", listText: "Key Email Marketing Concepts, Campaign Process, Online Data Capture, Offline Data Capture, Segmentation, Email Design, User Behavior, User Characteristics, Email Copy, Email Structure, Email Delivery, Email Systems, Filtering, Scheduling, Measurement, Key Terms & Metrics, Split Testing, Laws & Guidelines." },
      { id: uuid(), moduleName: "Module 17 : Business Lead Generation", listText: "Understanding lead generation for business, Why lead generation is important, Understanding landing pages, Understanding thank-you page, Landing page vs website, Best practices to create a landing page, Best practices to create a thank-you page, Practical exercise-creating a landing page, Types of landing pages, Reviewing landing pages created by trainees, What is A/B testing, How to do A/B testing, Selecting landing pages after A/B testing, Converting leads into sales, Creating lead nurturing strategy, Understanding lead funnel, Steps in leads nurturing." },
      { id: uuid(), moduleName: "Module 18 : Content Marketing", listText: "Introduction, Importance, Strategies to Develop Content, Content Marketing Strategy, Mapping of Content, 3-D Model for Content Development, Planning & Promotion, Content Writing, Aida Model, Types of Content: Lists, Interviews, Case Studies, Collection of Links, Infographics, News, Stories Etc., Niche Oriented Content, Paid Content, Engaging Content Writing, Outsourcing Content, Tools." },
      { id: uuid(), moduleName: "Module 19 : Blog Writing", listText: "How to Write a Blog, Anatomy, Effect on SEO, Personal & Professional Blog, Setup a Blog,Using & Customization of Blog, Blog Promotion, Money Blogging, Copy Write & Ethics." },
      { id: uuid(), moduleName: "Module 20 : Blog Monetization", listText: "Free WordPress themes for blogging, Google Ad sense, DSP and ASP, Ways to monetize blogs, Google Search Console and Blogging Website, Guest Posting, Niche, Tips and Tricks." },
      { id: uuid(), moduleName: "Module 21 : Affiliate Marketing", listText: "Advertising Model, Amazon Associates, Flipkart Affiliate Program, Other Affiliate Program: Vcommision, Click Bank, Etc., Analytics, Coupon System, Case Study by Using Tool, Referral System." },
      { id: uuid(), moduleName: "Module 22 : Mobile Marketing", listText: "Key Mobile Marketing Concepts, Trends in Mobile, Opportunities & Risks, Mobile Devices, SMS Content, SMS Strategy, Mobile Advertising, Mobile Optimised Websites, Mobile Apps, Attributes of Effective Apps, Step Process for Mobile Apps, Proximity Marketing, QR Codes. Mobile Coupons & Ticketing, Implementation, Strategic Steps, Marketing Goals, Review & Testing, Key Trends, Social Media Channels." },
      { id: uuid(), moduleName: "Module 23 : Quora Ads", listText: "Introductions and benefits, Ad account creation, Overview of Dashboard, Pixel creation, Post Guide, Profile Optimization, Quora Spaces and Business growth, Monetizing your account, Policies and Guidelines, Write and Publish, Quora questions and Google traffic, Research tools, Quality answers, Question Promotion, do’s and don’ts, mistakes to avoid, Backlinks creation, Audience Creation, Campaign creation, Bidding Strategies, Ad sets, Attribution models. " },
      { id: uuid(), moduleName: "Module 24 : WhatsApp Marketing", listText: "Introduction and basics, Business account creation and profile optimization, Hindi version and benefits, Catalogue creation. Dashboard overview, Automated responses, Labels and quick reply, Broadcast list vs Group, Facebook business page and WhatsApp account, WhatsApp business, API, Short link and QR code, Ethics and Guidelines." },
      { id: uuid(), moduleName: "Module 24 : Bing Ads", listText: "Introduction, Ad account creation, Billing methods, Dashboard overview, Keyword research, Audience network, Types of Bing ads, UET tag and Conversion Goals, Bid strategies, Library, Shared budget, Search ads, Negative tools, Webmaster tools, Business Setup, Ethics and Guidelines." },
      { id: uuid(), moduleName: "Module 25 : Online Reputation Management", listText: "Introduction, Brand monitoring, Sentiment analysis, Negative comment management, Reputation building, Strong brand presence, LinkedIn effect." },
      { id: uuid(), moduleName: "Module 26 : Potential AI Tools in Digital Marketing", listText: "AI tools for content design and text generation, copygenius, Wordtune, Quillbot, Canva, Chat GPT, Google sheet integration." },
      { id: uuid(), moduleName: "Module 27 : Freelancing", listText: "Introduction, profile & promotion, freelancer mentality, rules & guidelines, client relationship, self-promotional activities, pros & cons, increasing credibility, home based business, customer based business. Market Analysis, managing competitors, marketing, video proposals, selling & betting, elevator pitch, social media strategy, blogging, email newsletters, financial advices." },
      { id: uuid(), moduleName: "Module 28 : Projects", listText: "During the training, here are some projects to enhance the work experience & knowledge." },
    ],
    contactCardData1: {
      phoneNumber: "+91-9548868337",
    },
    contactCardData2: {
      buttonText: "Submit",
    },
  },
  technologiesAndPlatforms: {
    headingTextData: "80+ Popular Tools Covered",
    sliderData: [
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleAdsLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleAnalyticsLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleConsoleLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.facebookLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.camtasia },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.semrushLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.screenFrog },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.hootSuit },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.canvaLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.mailChimpLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.uberSuggest },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.wordpressLogo },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.hubSpot },
      { id: uuid(), imagePath: TOOLS_LOGO_IMAGES.googleTagManager }
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
  // companyPortfolio: {
  //   headingTextData: "Our students are working with Top Companies",
  //   sliderData: [
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.nttDataLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.commvaultLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.accentureLogoo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.globalLogicLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.congnizantLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.morganStanleyLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.tcsLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.publicisSapientLogo },
  //     { id: uuid(), imagePath: COMPANY_LOGO_IMAGES.mobileProgrammingLogo },
  //   ],
  //   discountAndOffersSection: {
  //     discountHeadingText: "Discount & Offers",
  //     discountCard: [
  //       {
  //         id: uuid(),
  //         cardText: "25% Cashback Available",
  //         cardImage: COURSES_PAGE_IMAGES.cashbackImage,
  //       },
  //       {
  //         id: uuid(),
  //         cardText: "Work Incentives",
  //         cardImage: COURSES_PAGE_IMAGES.workIncentivesImage,
  //       },
  //     ],
  //   },
  // },
  applyNowSection: {
    headingText: "Apply Now",
    paragraphText:
      "Please enter the following details to initiate your application for Digital Marketing training program offered by Learn2Earn Labs, Agra.",
    buttonText: "Submit",
    subheadingText: "Eligibility Criteria",
    paragrphTextData: [
      {
        id: uuid(),
        text: "Having a bachelor’s / master’s degree in any stream.",
      },
      {
        id: uuid(),
        text: "Basic Knowledge of computer.",
      },
      { id: uuid(), text: "Having basic knowledge of marketing and business." },
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
        imagePath: JOB_ORIENTED_IMAGES.fullStackEngineerCoverImage,
        courseNameText: "Full Stack Software Engineer",
        courseDurationText: "Duration : 12 Months",
        pathName: "/full-stack-engineer-course",
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
    imagePath: COVER_IMAGES.powerBI,
    headingText: "Join our",
    subHeadingText:"Power Bi Training Program",
    paragraphText:"With Job Assistance",
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
        paragraphText: "Training program available in 30 days duration",
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
        moduleName: "Module 1 : Introduction",
        listText: "A Brief History of Power BI, Data Visualization, Reporting, Business Intelligence (BI), Traditional BI, Self-Serviced BI, Cloud Based BI, On Premise BI, Power BI Products, Power BI Desktop (Power Query, Power Pivot, Power View), Flow of Work in Power BI Desktop, Power BI Report Server, Power BI Service, Power BI Mobile Flow, Work in Power BI / Power BI Architecture.",
      },
      { id: uuid(), moduleName: "Module 2 : Power Query", listText: "Data Transformation, Benefits of Data Transformation, Shape or Transform Data using Power Query, Overview of Power Query / Query Editor, Query Editor User Interface The Ribbon (Home, Transform, Add Column, View Tabs), The Queries Pane, The Data View / Results Pane, The Query Settings Pane, Formula Bar, Saving the Work, Datatypes, Changing the Datatype of a Column Filter in Power Query, Auto Filter / Basic Filtering Filter a Column using Text Filters, Filter a Column using Number Filters, Filter a Column using Date Filters, Filter Multiple Columns, Remove Columns / Remove Other Columns Name / Rename a Column, Reorder Columns or Sort Columns, Add Column / Custom Column Split, Columns, Merge Columns, PIVOT, UNPIVOT Columns, Transpose Columns, Header Row or Use First Row as Headers, Keep Top Rows, Keep Bottom Rows, Range of Rows, Keep Duplicates, Keep Errors, Remove Top Rows, Remove Bottom Rows, Remove Alternative Rows, Remove Duplicates, Remove Blank Rows, Remove Errors, Group Rows / Group By." },
      { id: uuid(), moduleName: "Module 3 : M Language", listText: "IF ELSE Conditions, Transform Column Types, Remove Columns, Split Columns, Replace Value, Distinct Options and GROUP BY Options Table, Group, Sort with Type Conversions PIVOT, Operation and Table. Pivot List Functions Using Parameters with M Language." },
      { id: uuid(), moduleName: "Module 4 : Data Modeling", listText: "Data  Modeling  Introduction,  Relationship,  Need  of  Relationship,   Relationship   Types/ Cardinality in General, One-to-One, One-to-many (or Many-to-One), Many-to-Many, Auto Detect the relationship, create a new relationship, edit existing relationships, Make Relationship Active or Inactive, Delete a relationship." },
      { id: uuid(), moduleName: "Module 5 : Data Analysis Expression (DAX)", listText: "What is DAX, Calculated Column, Measures, DAX Table and Column Name Syntax, Creating Calculated Columns, Creating Measures Calculated, Columns Vs Measures DAX Syntax & Operators, DAX Operators, Types of Operators, Arithmetic Operators, Comparison Operators, Text Concatenation Operator, Logical Operators." },
      { id: uuid(), moduleName: "Module 6 : DAX Function Types", listText: "Date and Time Functions, Text Functions, Logical Functions, Math & Statistical Functions, Filter Functions." },
      { id: uuid(), moduleName: "Module 7 : Time Intelligence, Date and Time Functions", listText: "YEAR, MONTH, DAY, WEEKDAY, WEEKNUM, FORMAT (Text Function) a Month Name, Weekday Name, DATE, TODAY, NOW, HOUR, MINUTE, SECOND, TIME, DATEDIFF, CALENDAR, Creating Date Dimension Table." },
      { id: uuid(), moduleName: "Module 8 : Text Functions", listText: "LEN, CONCATENATE (&), LEFT, RIGHT, MID UPPER, LOWER, TRIM, SUBSTITUTE, BLANK" },
      { id: uuid(), moduleName: "Module 9 : Logical Functions", listText: "IF, TRUE, FALSE NOT, OR, IN, AND IFERROR SWITCH" },
      { id: uuid(), moduleName: "Module 10 : Math and Statistical Functions", listText: "INT, ROUND, ROUNDUP, ROUNDDOWN, DIVIDE, EVEN, ODD, POWER, SIGN, SQRT, FACT, SUM, SUMX, MIN, MINX, MAX, MAXX, COUNT, COUNTX, AVERAGE, AVERAGEX COUNTROWS, COUNTBLANK" },
      { id: uuid(), moduleName: "Module 11 : Filter Functions", listText: "CALCULATED, ALL, RELATED, Report view." },
      { id: uuid(), moduleName: "Module 12 : Report View User Interface", listText: "Fields Pane, Visualizations pane, Ribbon, Views, Pages Tab, Canvas Visual, Interactions, Interaction Type (Filter, Highlight, None), Visual Interactions Default Behavior, Changing the Interaction." },
      { id: uuid(), moduleName: "Module 13 : Grouping and Binning Introduction", listText: "Using grouping, Creating Groups on Text Columns, Using binning, Creating Bins on Number Column and Date Columns, Sorting Data in Visuals, Changing the Sort Column, Changing the Sort Order, Sort using column that is not used in the Visualization, Sort using the Sort by Column button, Hierarchy Introduction, Default Date Hierarchy, Creating Hierarchy, Creating Custom Date Hierarchy, Change Hierarchy Levels, Drill-Up and Drill-Down Reports, Data Actions, Drill Down, Drill Up, Show Next Level." },
      { id: uuid(), moduleName: "Module 14 : Visualizations", listText: "Visualizing Data, Why Visualizations, Visualization types, Create and Format Bar and Column Charts, Create and Format Stacked Bar Chart Stacked Column Chart Create and Format Clustered Bar Chart, Clustered Column Chart, Create and Format 100% Stacked Bar Chart, 100% Stacked Column Chart Create and, Format Pie and Donut Charts, Create and Format Scatter Charts, Create and Format Table Visual, Matrix Visualization, Line and Area Charts, Create and Format Line Chart, Area Chart, Stacked Area Chart, Combo Charts, Create and Format Line and Stacked Column Chart, Line and Clustered Column Chart, Create and Format Ribbon Chart, Waterfall Chart, Funnel Chart." },
      { id: uuid(), moduleName: "Module 15 : Power BI Service", listText: "Power BI Service Introduction, Power BI Cloud Architecture, Creating Power BI Service Account, SIGN IN to Power BI Service Account, Publishing Reports to the Power BI service, Import / Getting the Report to PBI Service My, Workspace / App Workspaces Tabs, DATASETS, WORKBOOKS, REPORTS, DASHBOARDS, Working with Datasets, Creating Reports in Cloud using Published Datasets." },
      { id: uuid(), moduleName: "Module 16 : Creating Dashboards", listText: "Pin Visuals and Pin LIVE Report Pages to Dashboard, Advantages of Dashboards, Interacting with Dashboards, Formatting Dashboard, Sharing Dashboard." },
      { id: uuid(), moduleName: "Minor Projects", listText: "Below are the tentative details about the projects on which you can work under the guidance of respective faculty member. Marketing campaign analysis: Analyze the effectiveness of a recent marketing campaign by creating a dashboard that displays metrics such as click-through rates, conversion rates, and cost per conversion. Use visualizations such as heatmaps and scatterplots to identify patterns and trends in the data. Website analytics: Analyze the performance of a company's website by creating a dashboard that displays metrics such as page views, bounce rate, and average time on page. Use visualizations such as line charts and scatterplots to identify patterns and trends in the data." },

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
        text: "A bachelor’s / master’s degree in any specialization.",
      },
      {
        id: uuid(),
        text: "Knowledge of data analysis and business intelligence.",
      },
      { id: uuid(), text: "Having basic knowledge of computer." },
    ],
  },
};

export const mentorship = {
  landingPageSection: {
    imagePath: COVER_IMAGES.mentorshipImage,
    headingText: "Get Higher Salaries",
    subHeadingText:"Promotions and Career Stability",
    paragraphText:"With our mentorship program",
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
        paragraphText: "Training program available in 6 months and 12 months duration",
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
      "Any graduate student can join the mentorship program who are looking to improve his/her practical skills & working experience for better career opportunities & get the benefits to work on freelancing projects.",
    paragraphText2:
      "Any Working professional can join the mentorship program who are looking for mentorship support for better career opportunities & job stability."
  },
  programDetailsSection: {
    headingText: "Program Details",
    paragraphText:
      "The main objective of this mentorship program is to train people & students for a better career by providing a perfect learning path for those who have good self-learning capabilities so they can improve their practical knowledge & get experience, recognized training certificates, career support, etc. During the mentorship program, we will focus on improving the quality and practical skills of each candidate and will provide the benefits of freelancing projects & incentives.",
    moduleTextData: [
      {
        id: uuid(),
        moduleName: "Module 1 : Introduction :  Mentorship Program",
        listText: "Under this module, we will discuss upon various topics like Introduction to Mentorship, why mentorship is important for career growth, What to do or not do, What to learn and not to learn, Why to learn and not to learn, How to improve your practical skills, How to work on projects, How to get work experience while studying, How to prepare for an interview, Various factors to consider before joining any company, career growth, etc.",
      },
      { id: uuid(), moduleName: "Module 2 : Learning Content Accessibility", listText: "Under this module, we will provide a perfect learning path & guidance to the enrolled candidate. As a huge amount of learning material is available over the internet & people don’t have any idea about what to learn, where to start, how to explore, etc. so we will provide the relevant video tutorials, and references to the candidates to improve their skills and knowledge. It is required that the enrolled candidates must have the ability of self learning or learning by video tutorials." },
      { id: uuid(), moduleName: "Module 3 : Professional Development Training", listText: "Under this module, we will provide professional development training to the enrolled candidates so they can prepare themselves for better job & career opportunities. The candidates will get support & guidance to work on Personal branding, Profile headlines, LinkedIn summaries, Writing LinkedIn profile, adding media, E-Networking, Job hunting with Facebook, Facebook groups and pages, WhatsApp groups, Telegram groups, sending powerful emails, and Referrals. To showcase their candidature, the candidates will get the guidance & support to use job portals, job boards & understand the requirements like creating and managing profiles over job boards, making it a habit, profile scanning, recruiters and staffing agencies, effective search, finding targets, formal and informal chats. The enrolled candidates will also get guidance support in understanding the interview preparation process so they can focus on various parameters like Company Information, Hiring Process, Job Description, Key Skills employers look for, Preparation and grooming for success, etc. before appearing in any interview. At last, we will train candidates according to the interview requirements & train them about Interview Formats, Great Impression, introduce yourself, communication, presentation, confidence, Body language do’s & don’ts, selling yourself without selling, Active Listening, Answer strategies, overcoming interview nerves, Phone Interviews, Skype Interview, Interview follow up, etc." },
      { id: uuid(), moduleName: "Module 4 : Internship & Job Role", listText: "Under this module, we will offer internship opportunities (unpaid & free) to the enrolled candidates for the duration of three months & six months depending upon their performance, skills & recommendations. The candidates would get jobs roles (intern) to work in one of our services domain like website design, front-end development, web development, API design, automation, business analytics, business intelligence, mobile app development, database administration, cloud architecture, UI/UX design, digital marketing, SEO, Google ads,  social media marketing, API Designer, FrontEnd Developer, Database Administrator, Cloud Architect, etc. In respect of the contribution, a valid internship letter would be provided to the qualified candidates." },
      { id: uuid(), moduleName: "Module 5 : Assignments, Interviews & Presentations", listText: "Under this module, we will conduct various exercises & activities to observe the performance of enrolled candidates. As each candidate will go through with our dynamic & vibrant learning path, so they would be required to complete assignments, & homework on time, and appear in the mock interviews & presentations. These activities will help candidates in improving their knowledge, experience & presentation skills so they can compete with others & get a good career." },
      { id: uuid(), moduleName: "Module 6 : Short Term Projects", listText: "Under this module, we will assign various short-term projects to improve the practical knowledge & experience of the candidates. The projects would be assigned on the basis of the area of interest, performance & recommendations. These projects will help candidates to make an attractive resume or portfolio & showcase their candidature in front of job recruiters, staffing managers & corporate HR’s." },
      { id: uuid(), moduleName: "Module 7 : Resume & Portfolio", listText: "Under this module, we will provide training & guidance to the enrolled candidate in writing cover letters and preparing their resume & portfolio. We will guide candidates to understand the various aspects like effective content strategies, design principles, resume structure and elements, Experience, Skillset, Performance, Achievements, Building the layout, writing an effective Resume, developing great References, Do’s & Don’ts, Proofreading, Resume Templates, Cover letter importance, design cover letter, samples, etc." },
      { id: uuid(), moduleName: "Module 8 : Training Certificate & Experience", listText: "On the basis of the mentorship tenure, performance & practical knowledge, candidates will get the benefits of various training certificates in their respective domains. The candidates can avail of the benefits to get up to 4 training certificates with 6 months mentorship program and get up to 6 training certificates with 12 months mentorship program. Only the candidate will need to appear in the test & interviews and secure a minimum of 50% marks. On the basis of their performance in projects, they will get 3 months project experience letter with 6 months mentorship program & 6 months work experience as an intern with 12 months mentorship program." },
      { id: uuid(), moduleName: "Module 9 : Freelancing Projects & Work Incentives", listText: "Only available for those candidates, who will be enrolled in our 12 months mentorship program. On the basis of project experience, the candidates would be recommended & get the benefits of freelancing projects which they need to complete in the given time. As per the profit sharing concern, Learn2Earn Labs will take 25% of the project cost while the rest 75% of the shares will be given to the candidate. During this, the candidates must follow the Non-Disclosure Agreement (NDA) guidelines." },
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
        text: "A bachelor’s / master’s degree in any specialization.",
      },
      {
        id: uuid(),
        text: "Knowledge of Computer & Internet.",
      },
      { id: uuid(), text: "Having self learning capabilities." },
    ],
  },
};
