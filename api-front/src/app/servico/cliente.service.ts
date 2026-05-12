import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost8080';

  constructor(private http:HttpClient) { }
}
