import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class AddSkillCvDto {
    @IsString({
        message: validationMessages.IS_STRING('skillId')
    })
    @IsNotEmpty({
        message: validationMessages.required('skillId')
    })
    @IsUUID()
    skillId: string;
}
