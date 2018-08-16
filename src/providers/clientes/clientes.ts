import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider {
  private api = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello ClientesProvider Provider');
  }

  listarClientes(): Observable<any> {
    return this.http.get<any>(`${this.api}/clientes`);
  }

}
