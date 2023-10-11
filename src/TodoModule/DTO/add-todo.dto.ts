import { IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { validationMessages } from "src/common-module/error";
import { StatsEnum } from "../Enums/StatsEnum";


export class AddTodoDto {
    @IsNotEmpty({ message: validationMessages.required('Nom') })
    @MinLength(3, { message: validationMessages.minLength('Nom', 3) })
    @MaxLength(10, { message: validationMessages.maxLength('Nom', 10) })
    public name;
    @IsNotEmpty({ message: validationMessages.required('Description') })
    @MinLength(10, { message: validationMessages.minLength('Description', 10) })
    public description;

  }