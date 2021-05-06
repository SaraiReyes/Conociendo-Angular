import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listadoEstudiantes: any[] = [
    {nombre: "Luis Sanchez", estado: "Irregular"},
    {nombre: "Ana Perez", estado: "Regular"},
    {nombre: "Martin Orozco", estado: "Irregular"},
    {nombre: "juan Sarmiento", estado: "Regular"},
    {nombre: "Benito Ortiz", estado: "Regular"},
  ]
  /***event binding */
  texto= 'Este es un ejemplo de event binding'
  textop= ''

  /**interpolación */
  nombre= 'Sara'
  /***property bindins */
  textoplacehler='Escriba algo aquí'
  deshabilitado=true
  /**interpolación */
  constructor() {
    setInterval(() => this.nombre = 'invitado', 3000);
    setInterval(() => this.nombre = 'Bievenido', 3000);
    setInterval(() => this.deshabilitado = false, 3000);

  }
  getsuma(uno: number ,dos: number){
    return uno+ dos
  }
  cambiarTexto():void {
    this.texto='Este texto ha cambiado'
  }
  mostrar=true;
  toggle():void {
    this.mostrar=!this.mostrar
  }
}
