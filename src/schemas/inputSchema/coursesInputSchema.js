import { uuid } from "helpers/utils/uuid"

export const coursesInputSchemas = {
    textInputType:"text",
    emailInputType:"email",
    selectInputOptions:[
        {id:uuid(),optionText:"Working Professionals"},
        {id:uuid(),optionText:"Graduates"},
        {id:uuid(),optionText:"Post Graduates"},
        {id:uuid(),optionText:"Students"},
        {id:uuid(),optionText:"Business Owner"},
        {id:uuid(),optionText:"Others"},
    ]

}