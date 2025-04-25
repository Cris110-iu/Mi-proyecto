import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuarios: any[] = [];
  nuevoUsuario = { name: '' }; // <-- Para registrar

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('✅ Usuarios recibidos:', this.usuarios);
      },
      error: (err) => {
        console.error('❌ Error al obtener usuarios:', err);
      }
    });
  }

  registrarUsuario(): void {
    if (!this.nuevoUsuario.name.trim()) return;

    this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe({
      next: (usuario) => {
        console.log('🆕 Usuario registrado:', usuario);
        this.usuarios.push(usuario); // Agrega directamente a la lista
        this.nuevoUsuario.name = ''; // Limpia el input
      },
      error: (err) => {
        console.error('❌ Error al registrar usuario:', err);
      }
    });
  }
}