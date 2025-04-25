import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  nombre: string = '';
  mensaje: string = '';

  constructor(private usuarioService: UsuarioService) {}

  registrar(): void {
    const datos = { name: this.nombre };

    this.usuarioService.registrarUsuario(datos).subscribe({
      next: (respuesta) => {
        this.mensaje = 'Usuario registrado con éxito 🎉';
        this.nombre = '';
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        this.mensaje = 'Hubo un error al registrar.';
      }
    });
  }
}