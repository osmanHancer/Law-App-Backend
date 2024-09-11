import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: UserDTO): Promise<UserEntity>;
    readAll(): Promise<UserEntity[]>;
}
