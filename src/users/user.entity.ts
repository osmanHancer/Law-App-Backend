import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

  @PrimaryColumn({ unique: true })
  mail: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  hashedPassword: string; 


}
