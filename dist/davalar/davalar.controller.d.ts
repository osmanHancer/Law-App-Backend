import { DavalarService } from './davalar.service';
import { CreateDavalarDto } from './create-davalar.dto';
export declare class DavalarController {
    private readonly davalarService;
    constructor(davalarService: DavalarService);
    create(createDavalarDto: CreateDavalarDto): Promise<import("./davalar.entity").DavalarEntity>;
    findAll(): Promise<import("./davalar.entity").DavalarEntity[]>;
    findOne(id: string): string;
    update(id: string, updateDavalarDto: CreateDavalarDto): string;
    remove(id: string): string;
}
