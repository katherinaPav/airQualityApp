import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected  title = ('Air Quality App');
  protected members = signal<any>([]) //when the value of members changes, anthting using it will change as well

  async ngOnInit() { // it is an async "function"
    this.members.set(await this.getMembers());
  }


  async getMembers() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5155/api/members'));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
}
