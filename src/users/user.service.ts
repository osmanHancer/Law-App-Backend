import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async create(data: UserDTO) {
    try {
   
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);

      const user = this.usersRepository.create({
        ...data,
        hashedPassword,
      });

      await this.usersRepository.insert(user);
      return user;
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('Duplicate')) {
        throw new Error('Bu e-posta zaten kullanılıyor.');
      }
      throw new Error('Kayıt sırasında bir hata oluştu.');
    }
  }
  async update(data: any) {
    const user = await this.usersRepository.findOne({ where: { mail: data.mail } });
  
    if (!user) {
      throw new Error('Kullanıcı bulunamadı.');
    }
  
    const isMatch = await bcrypt.compare(data.oldPassword, user.hashedPassword);
  
    if (!isMatch) {
      throw new Error('Eski parola hatalı.');
    }
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);
  
    const updatedUser = {
      ...user,
      hashedPassword, 
    };
  
    await this.usersRepository.save(updatedUser);
  
    return updatedUser;
  }
  
  async delete(data: UserDTO) {
    
      await this.usersRepository.delete(data);
    return { deleted: true };
  }



  async readAll() {

    return await this.usersRepository.find();
  }



}