import { CreateDavalarDto } from './create-davalar.dto';
import { DavalarEntity } from './davalar.entity';
import { Repository } from 'typeorm';
export declare class DavalarService {
    private usersRepository;
    constructor(usersRepository: Repository<DavalarEntity>);
    create(createDavalarDto: CreateDavalarDto): Promise<DavalarEntity>;
    findAll(): Promise<DavalarEntity[]>;
    findOne(id: number): string;
    update(id: number, updateDavalarDto: CreateDavalarDto): string;
    remove(id: number): string;
}
