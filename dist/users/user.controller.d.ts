import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./user.entity").UserEntity[];
    }>;
}
