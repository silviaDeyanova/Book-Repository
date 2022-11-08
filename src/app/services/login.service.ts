import { IUser, IUserLoginData, IUserPublicData } from './../interfaces/IUser';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public userPublicData: IUserPublicData | undefined; //Allow other components to use this without changing it (Immutable/Copy/Method...... other  shit)
  private userPrivateData: IUserLoginData | undefined; //Allow other components to use this without changing it (Immutable/Copy/Method...... other  shit)
  constructor() {}

  login(user: IUserLoginData) {
    if (
      this.USERS[user.username] &&
      this.USERS[user.username].password === user.password
    ) {
      this.userPublicData = this.USERS[user.username];
      Object.freeze(this.userPublicData);

      this.userPrivateData = user;
    } else {
      this.userPublicData = undefined;
      this.userPrivateData = undefined;
      console.error('Invalid username or password');
    }
  }

  logout() {
    this.userPublicData = undefined;
    this.userPrivateData = undefined;
  }

  getUser(): IUserPublicData {
    return {
      firstName: this.userPublicData?.firstName,
      email: this.userPublicData?.email,
      lastName: this.userPublicData?.lastName,
    };
  }

  isLoggedIn() {
    //What happens to a function when it is bound to an attribute of an html tag
    return !!this.userPublicData; //What happens to a simple class property when it is bound to an attribute of an html tag
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
