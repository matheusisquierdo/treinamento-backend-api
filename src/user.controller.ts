import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ok } from "assert";
import { User } from "./user.schema";

import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }
    @Get()
    async listUsers() : Promise<User[]> {
        return this.userService.list();
    }

    @Post()
    async createUser(@Body() user: User) : Promise<User> {
        return this.userService.create(user);
    }

    @Put()
    changeUser(@Body() user: User) {
        this.userService.change(user);
    }


    @Delete()
    deleteUser(@Body() user: User) {
        this.userService.delete(user.email);

    }
}