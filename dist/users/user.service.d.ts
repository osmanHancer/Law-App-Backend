import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: UserDTO): Promise<UserEntity>;
    update(data: any): Promise<{
        hashedPassword: any;
        mail: string;
        name: string;
        surname: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(data: UserDTO): Promise<{
        deleted: boolean;
    }>;
    readAll(): Promise<UserEntity[]>;
    findOne(mail: string, passw: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        user: UserEntity;
    }>;
}
