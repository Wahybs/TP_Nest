import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreateUserDto {
    @IsString({
        message: validationMessages.IS_STRING('username')
    })
    @IsNotEmpty({
        message: validationMessages.required('username')
    })
    username: string;

@IsNotEmpty({
        message: validationMessages.required('email')
    })
@IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString({
        message: validationMessages.IS_STRING('password')
    })
    @IsNotEmpty({
        message: validationMessages.required('password')
    })
    password: string;
}
