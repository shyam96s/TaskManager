import { Injectable } from '@angular/core';
import { User } from '../modeles/user';
import { UserReg } from '../modeles/user-reg.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {
  selectedUser: UserReg ={
    fullname : '',
    email : '',
    password : ''

  }
  constructor() { }
}
