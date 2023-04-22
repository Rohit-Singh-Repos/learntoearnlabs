import { uuid } from "helpers/utils/uuid"

export const navbarSchema = [
    {id:uuid(),navItemName:"Home",navItemPath:"/"},
    {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
    {id:uuid(),navItemName:"Training",navsubItems:[
        {id:uuid(),navItemName:"Job Gurantee",navsubItems:[
            {id:uuid(),navItemName:"Digital Marketing",navItemPath:"/"},
            {id:uuid(),navItemName:"Full Stack Engineer",navItemPath:"/"},
        ]},
        {id:uuid(),navItemName:"Job Oriented",navsubItems:[
            {id:uuid(),navItemName:"Java Full Stack",navItemPath:"/"},
            {id:uuid(),navItemName:"Data Science & Machine Learning",navItemPath:"/"},
            {id:uuid(),navItemName:"Full Stack Web Development",navItemPath:"/"},
            {id:uuid(),navItemName:"Cloud Computing & Devops",navItemPath:"/"},
            {id:uuid(),navItemName:"Design Thinking & UI/UX",navItemPath:"/"},
        ]},
        {id:uuid(),navItemName:"Programming",navsubItems:[
            {id:uuid(),navItemName:"Programming Fundamentals",navItemPath:"/"},
            {id:uuid(),navItemName:"Java Programming",navItemPath:"/"},
            {id:uuid(),navItemName:"Python Programming",navItemPath:"/"},
            {id:uuid(),navItemName:"MySQL Database",navItemPath:"/"},
            {id:uuid(),navItemName:"Linux & AWS",navItemPath:"/"},
            {id:uuid(),navItemName:"HTML/CSS/JavaScript",navItemPath:"/"},
        ]},
        {id:uuid(),navItemName:"Marketing Management",navsubItems:[
            {id:uuid(),navItemName:"Wordpress & Blogging",navItemPath:"/"},
            {id:uuid(),navItemName:"Google Ads",navItemPath:"/"},
            {id:uuid(),navItemName:"Social Media Marketing",navItemPath:"/"},
            {id:uuid(),navItemName:"Search Engine Optimization",navItemPath:"/"},
            {id:uuid(),navItemName:"Content Marketing",navItemPath:"/"},
            {id:uuid(),navItemName:"Affiliate Marketing",navItemPath:"/"},
        ]},
        {id:uuid(),navItemName:"Miscellaneous",navsubItems:[
            {id:uuid(),navItemName:"Train The Trainer",navItemPath:"/"},
            {id:uuid(),navItemName:"Power BI",navItemPath:"/"},
            {id:uuid(),navItemName:"Mentorship Program",navItemPath:"/"},
        ]},
    ]},
    {id:uuid(),navItemName:"Contact Us",navsubItems:[
        {id:uuid(),navItemName:"Claim Cashback",navItemPath:"/claim-cashback"},
        {id:uuid(),navItemName:"Verify Certificate",navItemPath:"/verify-certificate"}
    ]},
]