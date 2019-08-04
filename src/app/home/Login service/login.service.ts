import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getAccount(user : string , password : string){
    return loginAccounts.find((account => account.username == user) && (account => account.password == password))
  }
  constructor() { }
}

const loginAccounts = [
  {"username" : "admin" , "password" : "admin" },
  {"username" : "admin1" , "password" : "admin1" }
];