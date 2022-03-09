import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  post(Valor: any, Parcela: any): Observable<any>{
    return this.http.post("http://localhost:5195/cadastro", {
      Valor,
      Parcela,
    })
  };
};
