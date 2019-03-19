import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url_server } from '../shared/globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  constructor(private http: HttpClient) { }

  public getProspectos(){
    return this.http.get(url_server + 'prospectos/buscarProspectos', httpOptions);
  }
}
