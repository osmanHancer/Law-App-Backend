import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('mytable')
export class UserEntity {


  
  @Column()
  mail : string;

  @Column()
  passw: string;

  
  @PrimaryColumn({ unique: true }) 
  id : number;

 

}