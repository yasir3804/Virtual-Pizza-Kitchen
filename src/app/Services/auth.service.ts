import { Injectable } from '@angular/core';
import { register } from 'module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl='';
  
  constructor( private httpClint:HttpClient) {}
  register(userData: any): Observable<any> {
    const url = `${this.apiUrl}/register`; // Define the registration endpoint
    return this.httpClint.post(url, userData);
  }
  
}
