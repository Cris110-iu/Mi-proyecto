import { AppComponent } from './app/app.component';  // Importa AppComponent
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent)  // Usamos bootstrapApplication para arrancar la aplicación
  .catch(err => console.error(err));