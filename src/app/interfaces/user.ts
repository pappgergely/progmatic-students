import {Gender} from "../enums/gender.enum";

export interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  gender: Gender;
}
