import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_URL = 'http://localhost:3000/api/usuarios'; // Cambia según tus rutas

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  registrarUsuario(datos: any): Observable<any> {
    return this.http.post(this.API_URL, datos);
  }
}