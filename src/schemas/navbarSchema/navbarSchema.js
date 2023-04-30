import { uuid } from "helpers/utils/uuid"

export const navbarSchema = [
    {id:uuid(),navItemName:"Home",navItemPath:"/"},
    {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
    {id:uuid(),navItemName:"Training",navsubItems:[
        {id:uuid(),navItemName:"Job Gurantee",navsubItems:[
            {id:uuid(),navItemName:"Digital Marketing",navItemPath:"/digital-marketing-course"},
            {id:uuid(),navItemName:"Full Stack Engineer",navItemPath:"/full-stack-engineer-course"},
        ]},
        {id:uuid(),navItemName:"Job Oriented",navsubItems:[
            {id:uuid(),navItemName:"Java Full Stack",navItemPath:"/java-full-stack-course"},
            {id:uuid(),navItemName:"Data Science & Machine Learning",navItemPath:"/data-science-and-machine-learning-course"},
            {id:uuid(),navItemName:"Full Stack Web Development",navItemPath:"/full-stack-web-development-course"},
            {id:uuid(),navItemName:"Cloud Computing & Devops",navItemPath:"/cloud-computing-and-devops-course"},
            {id:uuid(),navItemName:"Design Thinking & UI/UX",navItemPath:"/design-thinking-and-ui-ux-course"},
        ]},
        {id:uuid(),navItemName:"Programming",navsubItems:[
            {id:uuid(),navItemName:"Programming Fundamentals",navItemPath:"/programming-fundamentals-course"},
            {id:uuid(),navItemName:"Java Programming",navItemPath:"/java-programming-course"},
            {id:uuid(),navItemName:"Python Programming",navItemPath:"/python-programming-course"},
            {id:uuid(),navItemName:"MySQL Database",navItemPath:"/mysql-database-course"},
            {id:uuid(),navItemName:"Linux & AWS",navItemPath:"/linux-and-aws-course"},
            {id:uuid(),navItemName:"HTML/CSS/JavaScript",navItemPath:"/html-css-javascript-course"},
        ]},
        {id:uuid(),navItemName:"Marketing Management",navsubItems:[
            {id:uuid(),navItemName:"Wordpress & Blogging",navItemPath:"/wordpress-and-blogging-course"},
            {id:uuid(),navItemName:"Google Ads",navItemPath:"/google-ads-course"},
            {id:uuid(),navItemName:"Social Media Marketing",navItemPath:"/social-media-marketing-course"},
            {id:uuid(),navItemName:"Search Engine Optimization",navItemPath:"/search-engine-optimization-course"},
            {id:uuid(),navItemName:"Content Marketing",navItemPath:"/content-marketing-course"},
            {id:uuid(),navItemName:"Affiliate Marketing",navItemPath:"/affiliate-marketing-course"},
        ]},
        {id:uuid(),navItemName:"Miscellaneous",navsubItems:[
            {id:uuid(),navItemName:"Train The Trainer",navItemPath:"/train-the-trainer-program"},
            {id:uuid(),navItemName:"Power BI",navItemPath:"/power-bi-course"},
            {id:uuid(),navItemName:"Mentorship Program",navItemPath:"/mentorship-program"},
        ]},
    ]},
    {id:uuid(),navItemName:"Contact",navsubItems:[
        {id:uuid(),navItemName:"Contact Us",navItemPath:"/contact-us"},
        {id:uuid(),navItemName:"Claim Cashback",navItemPath:"/claim-cashback"},
        {id:uuid(),navItemName:"Verify Certificate",navItemPath:"/verify-certificate"}
    ]},
]