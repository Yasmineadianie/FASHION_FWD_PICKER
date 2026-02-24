import type { User } from "@/interfaces/user.interface";




//login, register

export interface AuthResponde {
  user: User;
  token:string;
}