import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class Users {
  id: string;
  name: string;
  username: string;
  email: number;
}

@Component({
  selector: 'app-house',
  templateUrl: 'house.page.html',
  styleUrls: ['house.page.scss'],
})

export class HousePage {
  
  Filter: string;
  Users:any = [];

  constructor(private httpClient: HttpClient) { 
    this.getUsers().subscribe(res => {
      console.log(res)
      this.Users = res;
    });
  }

 
  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('https://jsonplaceholder.typicode.com/users/')
      .pipe(
        tap(_User => console.log('Users list received!')),
        catchError(this.handleError<Users[]>('Get User', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 


}