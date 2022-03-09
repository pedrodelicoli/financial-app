import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Iconta } from '../Models/Conta'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }
  
  post(Conta: Iconta): Observable<any>{
    return this.http.post("http://localhost:5278/Cadastro", Conta)
  };
};
