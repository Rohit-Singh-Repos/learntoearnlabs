import { uuid } from "helpers/utils/uuid"

export const coursesInputSchemas = {
    textInput:[
        {id:uuid(),textInputName:"studentName",textInputType:"text",textInputPlaceholder:"Name..."},
        {id:uuid(),textInputName:"studentEmail",textInputType:"email",textInputPlaceholder:"Email..."},
        {id:uuid(),textInputName:"studentMobile",textInputType:"text",textInputPlaceholder:"Mobile Number..."},
        {id:uuid(),textInputName:"courseName",textInputType:"text",textInputPlaceholder:""},
    ],
    selectInputOptions:[
        {id:uuid(),optionText:"Graduates",optionValue:"Graduates"},
        {id:uuid(),optionText:"Post Graduates",optionValue:"Post Graduates"},
        {id:uuid(),optionText:"Students",optionValue:"Students"},
        {id:uuid(),optionText:"Working Professionals",optionValue:"Working Professionals"},
        {id:uuid(),optionText:"Business Owner",optionValue:"Business Owner"},
        {id:uuid(),optionText:"Others",optionValue:"Others"},
    ]

}