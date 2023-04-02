import { uuid } from "../helpers/utils/uuid"

export const cloudDevopsSchema = {
    landingPageSection:[
        {id:() => uuid(),heading:"8",subHeading:"Training Modules",borderShow:true},
        {id:() => uuid(),heading:"10",subHeading:"Platforms",borderShow:true},
        {id:() => uuid(),heading:"4/6",subHeading:"Months Duration",borderShow:true},
        {id:() => uuid(),heading:"6 LPA",subHeading:"Avg. Salary Package",borderShow:false}
    ],
    CloudDevopsCareerSection:{
        cardTextData:[
            {id:() => uuid(),cardText1:"Increase Demand"},
            {id:() => uuid(),cardText2:"Lot of Opportunities"},
            {id:() => uuid(),cardText3:"Competitive Salaries & Benefits"},
            {id:() => uuid(),cardText4:"Latest Technology Trends"},
        ],
        listItemData:[
            {id:() => uuid(),listText1:"The demand of cloud computing and DevOps professionals is increasing rapidly because nowadays almost all the companies and startups are moving their infrastructure to the cloud platforms and adopting DevOps practices for the development of their products & services."},
            {id:() => uuid(),listText2:"It offers a lot of opportunities with career growth & stability. You can work as cloud architect, AWS solutions architect, build & release engineer, DevOps engineer, automation engineer and many more."},
            {id:() => uuid(),listText3:"The cloud computing and DevOps specialization offers competitive salaries and benefits. The cloud & DevOps professionals are getting above-average salaries and enjoying work benefits like remote job, flexible schedules, etc."},
            {id:() => uuid(),listText4:"The cloud & DevOps professionals always need to stay up-to-date with the latest tools & technology trends and also need to continuously improve their skills."},
        ]
    },
    trainingRoadmapSection:{
        headingPrimaryText:"Training Roadmap",
        headingSecondaryText:"Cloud & Devops",
        paragraphText:"Cloud computing enables companies to reduce the investment in purchasing expensive hardware and maintaining the infrastructure. Companies are paying for cloud services on the basis of pay & use and accessing the resources from anywhere to achieve remote working and collaboration. With DevOps, companies are maintaining development operations, deployment and release software updates & new features quickly and efficiently.",
        cardTextData:[
            {id:() => uuid(),cardText1:"Linux & Shell Scripting"},
            {id:() => uuid(),cardText2:"Cloud Computing & AWS"},
            {id:() => uuid(),cardText3:"Version Control, Git & Github"},
            {id:() => uuid(),cardText4:"Agile Devlopment & Devops"},
            {id:() => uuid(),cardText5:"Jenekins & Docker"},
            {id:() => uuid(),cardText6:"Ansible & Kubernetes"},
        ]
    },
    careerOptionSection:{
        cardHeadingText1:"Middle Level Career Options",
        cardHeadingText2:"Top Level Career Options",
        paragraphText:"As a Cloud Computing and DevOps professional, you will have a variety to job roles to work and get success in your career.",
        cardParagraphText1:"After successfully completion of training, you can apply for various job roles, like",
        cardParagraphText2:"After two to five years of experience, you can apply for job roles, like",
        cardListTextData1:[
            {id:() => uuid(),listText1:"Cloud Architect"},
            {id:() => uuid(),listText2:"Cloud Operation Engineer"},
            {id:() => uuid(),listText3:"AWS Solution Architect"},
            {id:() => uuid(),listText4:"Automation Engineer"},
            {id:() => uuid(),listText5:"DevOps Engineer"},
            {id:() => uuid(),listText6:"Build and Release Engineer etc."},
        ],
        cardListTextData2:[
            {id:() => uuid(),listText1:"Cloud Architect"},
            {id:() => uuid(),listText2:"Cloud Operation Engineer"},
            {id:() => uuid(),listText3:"AWS Solution Architect"},
            {id:() => uuid(),listText4:"Automation Engineer"},
            {id:() => uuid(),listText5:"DevOps Engineer"},
            {id:() => uuid(),listText6:"Build and Release Engineer etc."},
        ]
    },
    cloudDevopsTrainingSection:{
        headingText:"Cloud Computing & DevOps Training Program",
        paragraphText:"This program is designed to train students with the skills and experience to work with virtual machines, cloud services, containers, version control system & DevOps tools.",
        buttonText:"Download Syllabus"
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