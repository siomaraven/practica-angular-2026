import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para que funcione el [src] y [ngClass]

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css'
})
export class Punto1Component {
  indice: number = 0;

  // lista de cursos de idiomas con enfoque técnico
  cursos = [
    { 
      titulo: 'Japanese Zen', 
      detalle: 'Introducción a la escritura Hiragana y la estética del lenguaje visual.', 
      imagen: '/img/JAPANimg.png' 
    },
    { 
      titulo: 'Logic German', 
      detalle: 'Estructuras gramaticales complejas para el pensamiento técnico.', 
      imagen: '/img/GERMANYimg.png' 
    },
    { 
      titulo: 'Advanced Tech English', 
      detalle: 'Comunicación profesional para desarrolladores y analistas de sistemas.', 
      imagen: '/img/EEUUimg.png' 
    },
    { 
    titulo: 'Mandarin Logic', 
    detalle: 'Exploración de ideogramas y estructuras de pensamiento logográfico.', 
    imagen: '/img/CHINAimg.png' 
    }
  ];

  siguiente() {
    this.indice = (this.indice + 1) % this.cursos.length;
  }

  anterior() {
    this.indice = (this.indice - 1 + this.cursos.length) % this.cursos.length;
  }
}