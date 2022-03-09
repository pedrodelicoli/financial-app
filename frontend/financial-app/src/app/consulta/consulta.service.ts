import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any>{
    return this.http.get(`http://localhost:5278/Consulta/${id}`)
  };
};
