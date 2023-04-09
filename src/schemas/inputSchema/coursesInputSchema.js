import { uuid } from "helpers/utils/uuid"

export const coursesInputSchemas = {
    textInput:[
        {id:uuid(),textInputName:"name",textInputType:"text",textInputPlaceholder:"Name..."},
        {id:uuid(),textInputName:"email",textInputType:"email",textInputPlaceholder:"Email..."},
        {id:uuid(),textInputName:"mobile",textInputType:"text",textInputPlaceholder:"Mobile Number..."},
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