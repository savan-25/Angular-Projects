import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url = "http://localhost:3000/send-email"
  constructor(private http:HttpClient) { }

  sendMessage(data:{name:string; email:string; message:string}): Observable <any>
  {
    return this.http.post(this.url,data);
  }
}
