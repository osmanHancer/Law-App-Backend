import { Type } from "class-transformer";

export class UserDTO {

 
  name: string;

 
  passw : string;

  
  @Type(() => Number)
  id : number;

  color : string;
  }