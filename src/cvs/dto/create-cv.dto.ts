import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreateCvDto {
    @IsString({
        message: validationMessages.IS_STRING('name')
    })
    @IsNotEmpty({
        message: validationMessages.required('name')
    })
    name: string;

    @IsString({
        message: validationMessages.IS_STRING('firstname')
    })
    @IsNotEmpty({
        message: validationMessages.required('firstname')
    })
    firstname: string;

    @IsNumber()
    @IsNotEmpty({
        message: validationMessages.required('age')
    })
    age: number;

    @IsString({
        message: validationMessages.IS_STRING('cin')
    })
    @IsNotEmpty({
        message: validationMessages.required('cin')
    })
    cin: string;

    @IsString({
        message: validationMessages.IS_STRING('job')
    })
    @IsNotEmpty({
        message: validationMessages.required('job')
    })
    job: string;

    @IsString({
        message: validationMessages.IS_STRING('path')
    })
    @IsNotEmpty({
        message: validationMessages.required('path')
    })
    path: string;
}
