import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';
  
  import { UserService } from './user.service';
  import {UserDTO } from './user.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private usersService: UserService) {}
  

    
  
    @Get()
    async readAllUsers() {
      const users =  await this.usersService.readAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users
      };
    }
  
 
  
    // @Delete(':id')
    // async deleteUser(@Param('id') id: number) {
    //   await this.usersService.delete(id);
    //   return {
    //     statusCode: HttpStatus.OK,
    //     message: 'User deleted successfully',
    //   };
    // }
  }