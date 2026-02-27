import type { User } from "@/interfaces/user.interface";




//login, register

export interface AuthResponde {
  userData: User;
  token:string;
}