import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";



export class CreateSkillDto {
    @IsString({
        message: validationMessages.IS_STRING('designation')
    })
    @IsNotEmpty({
        message: validationMessages.required('designation')
    })
    designation: string;
}

