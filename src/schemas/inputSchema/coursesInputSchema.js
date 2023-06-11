import { uuid } from "helpers/utils/uuid"

export const coursesInputSchemas = {
    textInput:[
        {id:uuid(),textInputName:"studentName",textInputType:"text",textInputPlaceholder:"Name..."},
        {id:uuid(),textInputName:"studentEmail",textInputType:"email",textInputPlaceholder:"Email..."},
        {id:uuid(),textInputName:"studentMobile",textInputType:"text",textInputPlaceholder:"Mobile Number..."},
        {id:uuid(),textInputName:"courseName",textInputType:"text",textInputPlaceholder:""},
    ],
    selectInputOptions:[
        {id:uuid(),optionText:"Student",optionValue:"Student"},
        {id:uuid(),optionText:"Job Seeker",optionValue:"Job Seeker"},
        {id:uuid(),optionText:"Working Professional",optionValue:"Working Professional"},
        {id:uuid(),optionText:"Business Owner",optionValue:"Business Owner"},
        {id:uuid(),optionText:"Freelancer",optionValue:"Freelancer"},
        {id:uuid(),optionText:"House Wife",optionValue:"House Wife"},
        {id:uuid(),optionText:"Others",optionValue:"Others"},
    ]

}