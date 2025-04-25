import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Importa esto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // ✅ Usa RouterOutlet aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Proyecto';
}