import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { User } from '../models/user'

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get(`${port}/users`)
  }
  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${port}/users`, data )
  }
  getDetailUser(id): Observable<any> {
    return this.http.get(`${port}/users/${id}`)
  }
  deleteUser(id): Observable<any>{
    return this.http.delete(`${port}/users/${id}`)
  }
}
