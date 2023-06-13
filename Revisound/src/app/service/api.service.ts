import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRESTLogs, IResLogin, Ilogin, Usuario } from '../Interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = 'http://localhost:8080/api';


  constructor(private httpClient: HttpClient) {

  }

  login(data: Ilogin) {
    return this.httpClient.post<IResLogin>(this.url + "/auth", data);
  }

  getUser(): Usuario | null {
    return JSON.parse(localStorage.getItem("usuario") || "") as Usuario;
  }

  getToken(){
    return localStorage.getItem("token") || "";
  }

  getHeader(){
    return new HttpHeaders({Authorization:`${this.getToken()}`})
  }

  getLogs() {
    return this.httpClient.get<IRESTLogs[]>(this.url+ "/log/", {headers : this.getHeader()});
  }

  logout(){
    return localStorage.clear();
  }

}
