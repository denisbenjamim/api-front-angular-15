import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost:3000/clientes';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }

  alterar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${obj.id}`, obj);
  }

  remover(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
