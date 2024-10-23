// src/app/models/user.model.ts

export class User {
    id?: number;
    username: string;
    password: string;
    phone?: string;
    email?: string;
    activeStatus: boolean;
  
    constructor(
      username: string,
      password: string,
      activeStatus: boolean,
      phone?: string,
      email?: string,
      id?: number
    ) {
      this.username = username;
      this.password = password;
      this.activeStatus = activeStatus;
      this.phone = phone;
      this.email = email;
      this.id = id;
    }
  }
  