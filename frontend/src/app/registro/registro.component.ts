import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // El método onSubmit para manejar la lógica cuando el formulario se envíe
  onSubmit() {
    if (this.registroForm.valid) {
      this.usuarioService.registrarUsuario(this.registroForm.value).subscribe(
        response => {
          alert('Usuario registrado con éxito');
        },
        error => {
          alert('Error al registrar el usuario');
        }
      );
    }
  }
}