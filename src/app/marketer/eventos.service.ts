import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url_server } from './../shared/globals';


const httpOptions = {
  headers : new HttpHeaders({
    'content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { 
    }
    public getEventos(){
      return this.http.get(url_server +'eventos/buscarEventos/',httpOptions)
  }
}
