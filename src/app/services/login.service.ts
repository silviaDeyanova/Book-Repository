import { IUser } from './../interfaces/IUser';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUser: IUser | undefined;
  constructor() {}

  login(user: IUser) {
    if (
      this.USERS[user.username] &&
      this.USERS[user.username].password === user.password
    ) {
      this.currentUser = user;
    } else {
      this.currentUser = undefined;
      console.error('Invalid username or password');
    }
  }

  logout() {
    this.currentUser = undefined;
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  USERS: { [username: string]: IUser } = {
    admin: {
      id: 1,
      username: 'admin',
      password: 'admin12345',
      email: 'admin@gmail.com',
      firstName: '',
      lastName: '',
    },
  };
}
