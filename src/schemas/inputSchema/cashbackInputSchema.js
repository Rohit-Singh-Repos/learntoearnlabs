import { uuid } from "helpers/utils/uuid"

export const cashbackInputSchema = {
    textInput:[
        {id:uuid(),textInputName:"receiptNumber",textInputType:"text",textInputPlaceholder:"Enter Receipt Number ..."},
        {id:uuid(),textInputName:"enrollmentNumber",textInputType:"text",textInputPlaceholder:"Enter Enrollment Number ..."},
        {id:uuid(),textInputName:"accountNumber",textInputType:"text",textInputPlaceholder:"Enter Account Number..."},
        {id:uuid(),textInputName:"ifscCode",textInputType:"text",textInputPlaceholder:"Enter IFSC Code ..."},
    ]
}