import { uuid } from "helpers/utils/uuid"

export const navbarSchema = [
    {id:uuid(),navItemName:"Home",navItemPath:"/"},
    {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
    {id:uuid(),navItemName:"Training",navsubItems:[
        {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
        {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
        {id:uuid(),navItemName:"About Us",navItemPath:"/about-us"},
    ]},
    {id:uuid(),navItemName:"Contact Us",navsubItems:[
        {id:uuid(),navItemName:"Claim Cashback",navItemPath:"/claim-cashback"},
        {id:uuid(),navItemName:"Verify Certificate",navItemPath:"/verify-certificate"}
    ]},
]