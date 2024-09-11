import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async create(data: UserDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);
    return user;
  }

  // async readAllseyyah(seyahname_kodu: string) {
  //   return await this.usersRepository.find({ where: { seyahname_kodu: seyahname_kodu } });
  // }

  async readAll() {

    return await this.usersRepository.find();
  }


  // async delete(id: number) {
  //   await this.usersRepository.delete({ id });
  //   return { deleted: true };
  // }
}