import { NovaReferencia } from './../referencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Referencias } from '../referencia';
const url = "https://mentoriaangularlsv1990.azurewebsites.net/mentoria/";

@Injectable({
  providedIn: 'root'
})
export class MentoriaService {

  constructor(private http: HttpClient) { }

  obter(): Observable<Referencias[]>{
    return this.http.get<Referencias[]>(url);
  }

  criar(novaReferencia: NovaReferencia): Observable<any>{
    return this.http.post(url, novaReferencia);
  }

  deletar(id: string): Observable<any>{
    return  this.http.delete(`${url}${id}`);
  }
}
