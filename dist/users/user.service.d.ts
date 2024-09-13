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
    }>;
    delete(data: UserDTO): Promise<{
        deleted: boolean;
    }>;
    readAll(): Promise<UserEntity[]>;
}
