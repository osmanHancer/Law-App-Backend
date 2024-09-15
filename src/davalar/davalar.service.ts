import { Injectable } from '@nestjs/common';
import { CreateDavalarDto } from './create-davalar.dto';
import { DavalarEntity } from './davalar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DavalarService {

  constructor(

    @InjectRepository(DavalarEntity)
    private usersRepository: Repository<DavalarEntity>
  ) { }

  async create(createDavalarDto: CreateDavalarDto) {

    const user = this.usersRepository.create(createDavalarDto);

    await this.usersRepository.insert(user);
    return user;
  }

  async findAll() {
    const user =  await this.usersRepository.find();
    return user;
  }

  findOne(mail: string) {
    const user = this.usersRepository.find({where:{mail:mail}});

    return user;
  }

  update(id: number, updateDavalarDto: CreateDavalarDto) {
    return `This action updates a #${id} davalar`;
  }

  remove(id: number) {
    return `This action removes a #${id} davalar`;
  }
}
