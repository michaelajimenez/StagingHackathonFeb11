import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:7654';
  constructor(private http:HttpClient) { }



createError(error:Object):Observable<any>{
  console.log(error);
  return this.http.post(`${this.baseUrl}/saveErrors`, error);
}
getErrorByName(name:string):Observable<any>{
  return this.http.get(`${this.baseUrl}/getErrorsByName?un=${name}`);
}
getErrorList():Observable<any>{
  return this.http.get(`${this.baseUrl}/getErrors`);
}
}