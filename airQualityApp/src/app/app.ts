import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from '../features/home/home';
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected  title = ('Air Quality App');
  protected members = signal<User[]>([]) //when the value of members changes, anything using it will change as well

  async ngOnInit() { // it is an async "function"
    this.members.set(await this.getMembers());
    this.setCurrentUser();
  }


  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get<User[]>('http://localhost:5155/api/members'));
    } catch (error) {
      console.log(error);
      return [];
    } 
  }
  
}

