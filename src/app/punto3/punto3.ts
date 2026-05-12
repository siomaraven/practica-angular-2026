import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css'
})
export class Punto3Component {
  imagenes = [
    'img/one.jpg', 
    'img/two.jpg', 
    'img/three.jpg',
    'img/four.jpg', 
    'img/five.jpg', 
    'img/six.jpg'
  ];

  tablero: any[] = [];
  seleccionadas: any[] = [];
  intentos: number = 0;
  maxIntentos: number = 8; 
  habilitadoParaVoltear: boolean = false; 
  juegoIniciado: boolean = false;
  mensaje: string = 'Presione INICIAR para comenzar la prueba.';

  iniciarJuego() {
    this.juegoIniciado = true;
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.intentos = this.maxIntentos;
    this.mensaje = `Intentos restantes: ${this.intentos}`;
    this.seleccionadas = [];
    this.habilitadoParaVoltear = false;
    
    let duplicados = [...this.imagenes, ...this.imagenes];
    this.tablero = duplicados
      .sort(() => Math.random() - 0.5)
      .map((img, i) => ({ id: i, img, tapada: true, encontrada: false }));
  }

  activarIntento() {
    if (!this.juegoIniciado || this.intentos <= 0 || this.seleccionadas.length > 0) return;
    this.habilitadoParaVoltear = true;
    this.mensaje = "Seleccione dos cartas...";
  }

  voltear(carta: any) {
    if (!this.habilitadoParaVoltear || this.seleccionadas.length >= 2 || !carta.tapada || carta.encontrada) return;

    carta.tapada = false;
    this.seleccionadas.push(carta);

    if (this.seleccionadas.length === 2) {
      this.habilitadoParaVoltear = false; 
      this.verificarPareja();
    }
  }

  verificarPareja() {
    const [c1, c2] = this.seleccionadas;

    if (c1.img === c2.img) {
      c1.encontrada = true;
      c2.encontrada = true;
      this.seleccionadas = [];
      this.verificarFinal();
    } else {
      setTimeout(() => {
        c1.tapada = true;
        c2.tapada = true;
        this.seleccionadas = [];
        this.intentos--;
        this.verificarFinal();
      }, 1000);
    }
  }

  verificarFinal() {
    if (this.tablero.every(c => c.encontrada)) {
      this.mensaje = '¡VICTORIA! Tablero completado.';
      this.juegoIniciado = false;
    } else if (this.intentos <= 0) {
      this.mensaje = 'DERROTA. Ya no quedan intentos.';
      this.juegoIniciado = false;
      this.tablero.forEach(c => c.tapada = false);
    } else {
      this.mensaje = `Intentos restantes: ${this.intentos}. Presione INTENTAR.`;
    }
  }
}