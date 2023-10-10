/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional } from "class-validator";
import { StatsEnum } from "../Enums/StatsEnum";
import { PartialType } from "@nestjs/mapped-types";
import { AddTodoDto } from "./add-todo.dto";
export class UpdateTodoTdo extends PartialType(AddTodoDto) {
    id: string;

    @IsOptional()
    @IsEnum(StatsEnum)
    status?: StatsEnum;
}


