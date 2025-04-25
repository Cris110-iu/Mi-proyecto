import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';  // URL de tu API backend

  constructor(private http: HttpClient) { }

  // Método para realizar el login
  login(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario).pipe(
      tap((response: any) => {
        // Guardar el token de autenticación en localStorage
        localStorage.setItem('token', response.token); 
      })
    );
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');  // Devuelve true si el token existe
  }
}