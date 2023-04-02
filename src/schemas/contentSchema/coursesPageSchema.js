import { uuid } from "helpers/utils/uuid"

export const cloudDevopsSchema = {
    landingPageSection:[
        {id:uuid(),heading:"8",subHeading:"Training Modules",borderShow:true},
        {id:uuid(),heading:"10",subHeading:"Platforms",borderShow:true},
        {id:uuid(),heading:"4/6",subHeading:"Months Duration",borderShow:true},
        {id:uuid(),heading:"6 LPA",subHeading:"Avg. Salary Package",borderShow:false}
    ],
    cloudDevopsCareerSection:{
        headingText:"Why, choose Cloud & Devops as a career ?",
        cardTextData:[
            {id:uuid(),cardText:"Increase Demand"},
            {id:uuid(),cardText:"Lot of Opportunities"},
            {id:uuid(),cardText:"Competitive Salaries & Benefits"},
            {id:uuid(),cardText:"Latest Technology Trends"},
        ],
        listItemData:[
            {id:uuid(),listText:"The demand of cloud computing and DevOps professionals is increasing rapidly because nowadays almost all the companies and startups are moving their infrastructure to the cloud platforms and adopting DevOps practices for the development of their products & services."},
            {id:uuid(),listText:"It offers a lot of opportunities with career growth & stability. You can work as cloud architect, AWS solutions architect, build & release engineer, DevOps engineer, automation engineer and many more."},
            {id:uuid(),listText:"The cloud computing and DevOps specialization offers competitive salaries and benefits. The cloud & DevOps professionals are getting above-average salaries and enjoying work benefits like remote job, flexible schedules, etc."},
            {id:uuid(),listText:"The cloud & DevOps professionals always need to stay up-to-date with the latest tools & technology trends and also need to continuously improve their skills."},
        ]
    },
    trainingRoadmapSection:{
        headingPrimaryText:"Training Roadmap",
        headingSecondaryText:"Cloud & Devops",
        paragraphText:"Cloud computing enables companies to reduce the investment in purchasing expensive hardware and maintaining the infrastructure. Companies are paying for cloud services on the basis of pay & use and accessing the resources from anywhere to achieve remote working and collaboration. With DevOps, companies are maintaining development operations, deployment and release software updates & new features quickly and efficiently.",
        cardTextData:[
            {id:uuid(),cardText:"Linux & Shell Scripting"},
            {id:uuid(),cardText:"Cloud Computing & AWS"},
            {id:uuid(),cardText:"Version Control, Git & Github"},
            {id:uuid(),cardText:"Agile Devlopment & Devops"},
            {id:uuid(),cardText:"Jenekins & Docker"},
            {id:uuid(),cardText:"Ansible & Kubernetes"},
        ]
    },
    careerOptionSection:{
        headingText:"Career Options",
        cardHeadingText1:"Middle Level Career Options",
        cardHeadingText2:"Top Level Career Options",
        paragraphText:"As a Cloud Computing and DevOps professional, you will have a variety to job roles to work and get success in your career.",
        cardParagraphText1:"After successfully completion of training, you can apply for various job roles, like",
        cardParagraphText2:"After two to five years of experience, you can apply for job roles, like",
        cardListTextData1:[
            {id:uuid(),listText:"Cloud Architect"},
            {id:uuid(),listText:"Cloud Operation Engineer"},
            {id:uuid(),listText:"AWS Solution Architect"},
            {id:uuid(),listText:"Automation Engineer"},
            {id:uuid(),listText:"DevOps Engineer"},
            {id:uuid(),listText:"Build and Release Engineer etc."},
        ],
        cardListTextData2:[
            {id:uuid(),listText:"Cloud Architect"},
            {id:uuid(),listText:"Cloud Operation Engineer"},
            {id:uuid(),listText:"AWS Solution Architect"},
            {id:uuid(),listText:"Automation Engineer"},
            {id:uuid(),listText:"DevOps Engineer"},
            {id:uuid(),listText:"Build and Release Engineer etc."},
        ]
    },
    cloudDevopsTrainingSection:{
        headingText:"Cloud Computing & DevOps Training Program",
        paragraphText:"This program is designed to train students with the skills and experience to work with virtual machines, cloud services, containers, version control system & DevOps tools.",
        buttonText:"Download Syllabus",
        cardData:[
            {id:uuid(),imagePath:"",subheadingText:"Practical Based Sessions",paragraphText:"Training program available in four months & six months duration"},
            {id:uuid(),imagePath:"",subheadingText:"Dummy Projects",paragraphText:"To build your hands-on expertise & portfolio"},
            {id:uuid(),imagePath:"",subheadingText:"Resume Building Assistance",paragraphText:"To create an attractive resume for you"},
            {id:uuid(),imagePath:"",subheadingText:"Interview Preparation",paragraphText:"So you can present yourself in a better way"},
            {id:uuid(),imagePath:"",subheadingText:"Mentoring & Job Assistance",paragraphText:"To help you in getting good career or placements"},
        ]
    },
    whoCanJoinSection:{
        headingText:"Who can join",
        paragraphText1:"Any graduate or post graduate student from B.tech or M.tech (any specialization), BCA or MCA, B.Sc. or M.Sc. (CS / IT) can join the Cloud Computing & DevOps training program . The student must have hands-on experience with operating system with basic knowledge of shells or windows commands.",
        paragraphText1:"Any working professional, belongs to computer science or IT specialization, having some experience in IT or related industry and now looking for salary hike or promotions can also join the Cloud Computing & DevOps  training program."
    },
    trainingModeSection:{
        cardData1:{
            headingText:"Online Live Classes are available",
            listTextData:[
                {id:uuid(),listText:"4x more effective way of learning"},
                {id:uuid(),listText:"Hands-on experience with projects & assignments"},
                {id:uuid(),listText:"Virtual class with real interaction with trainer"},
                {id:uuid(),listText:"Monitoring support & troubleshooting issues"},
                {id:uuid(),listText:"Masterclass from industry experts & leaders"},
                {id:uuid(),listText:"Live class recordings for revision purpose"},
            ],
            buttonText:"Apply Now"
        },
        cardData2:{
            headingText:"Clod Computing & DevOps Training in Agra",
            addressHeading:"Learn2Earn Labs",
            addressText:"F-4, First Floor, Anna Ikon Complex, In Front of Deviram Food Circle, Sikandra-Bodla Road, Sikandra, Agra, Uttar Pradesh – 282007",
            phoneText:"+91-9548868337",
            buttonText:"Download Syllabus"
        }
    },
    programDetailsSection:{
        paragraphText:"During training you will go through with with cloud infrastructure components such as virtual machines, storage, and networking, and will deploy & manage applications on cloud platforms. The candidates will learn how to work with different cloud computing and DevOps tools, such as AWS, version control or git, Jenkins, Docker, Ansible & Kubernetes, and understand how to integrate these tools into their workflow.",
        moduleTextData:[
            {id:uuid(),moduleName:"Module 1",listText:"Introduction & Python Programming"},
            {id:uuid(),moduleName:"Module 2",listText:"Numpy"},
        ],
        contactCardData1:{
            iconName:"",
            phoneNumber:"+91-9548868337"
        },
        contactCardData2:{
            buttonText:"Submit"
        },
    },
    discountAndOffersSection:{
        headingText:"Discount & Offers",
        cardText1:"25% Cashback Available",
        cardText2:"Work Incentives"
    },
    applyNowSection:{
        paragraphText:"Please enter the following details to initiate your application for Cloud Computing & DevOps training program offered by Learn2Earn Labs, Agra.",
        buttonText:"Submit",
        headingText:"Eligibility Criteria",
        paragraphText1:"A bachelor’s / master’s degree in Engg / Computers.",
        paragraphText2:"Knowledge of operating system & shell script (preferred).",
        paragraphText3:"Having basic programming & development knowledge.",
    }
}

export const dataScienceSchema = [
    {id:1,heading:"12",subHeading:"Training Modules",borderShow:true},
    {id:2,heading:"40+",subHeading:"Case Studies",borderShow:true},
    {id:3,heading:"4/6",subHeading:"Months Duration",borderShow:true},
    {id:4,heading:"6 LPA",subHeading:"Avg. Salary Package",borderShow:false},
]

export const designThinkingSchema = [
    {id:1,heading:"50+",subHeading:"Exercises",borderShow:true},
    {id:2,heading:"10+",subHeading:"Professional Tools",borderShow:true},
    {id:3,heading:"4/6",subHeading:"Months Duration",borderShow:true},
    {id:4,heading:"5-6 LPA",subHeading:"Avg. Salary Package",borderShow:false},
]

export const javaFullStackSchema = [
    {id:1,heading:"8",subHeading:"Training Modules",borderShow:true},
    {id:2,heading:"5+",subHeading:"Projects",borderShow:true},
    {id:3,heading:"4/6",subHeading:"Months Duration",borderShow:true},
    {id:4,heading:"6 LPA",subHeading:"Avg. Salary Package",borderShow:false},
]

export const mernStackSchema = [
    {id:1,heading:"8",subHeading:"Training Modules",borderShow:true},
    {id:2,heading:"5+",subHeading:"Projects",borderShow:true},
    {id:3,heading:"4/6",subHeading:"Months Duration",borderShow:true},
    {id:4,heading:"5 LPA",subHeading:"Avg. Salary Package",borderShow:false},
]

export const trainTheTrainerSchema = [
    {id:1,heading:"8",subHeading:"Training Modules",borderShow:true},
    {id:2,heading:"10+",subHeading:"Tools",borderShow:true},
    {id:3,heading:"2/3",subHeading:"Months Duration",borderShow:true},
    {id:4,heading:"3-5 LPA",subHeading:"Avg. Salary Package",borderShow:false},
]