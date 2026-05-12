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
      detalle: 'Aprendé las bases del idioma nipón con un enfoque en la cultura corporativa de las grandes tecnológicas de Japón. Ideal para profesionales que buscan integrarse en proyectos de robótica, hardware o industrias de videojuegos, comprendiendo la etiqueta profesional del país del sol naciente.', 
      imagen: '/img/JAPANimg.png' 
    },
    { 
      titulo: 'Logic German', 
      detalle: 'Alemania es el motor tecnológico de Europa. Este curso te prepara para entender especificaciones técnicas de alta precisión y colaborar en proyectos de ingeniería de software, ciberseguridad y automatización industrial en el ecosistema alemán.', 
      imagen: '/img/GERMANYimg.png' 
    },
    { 
      titulo: 'Advanced Tech English', 
      detalle: 'Dominá la terminología esencial para leer documentación oficial, escribir código limpio y participar en reuniones de Daily Scrum. Este curso se enfoca en el vocabulario de arquitecturas de software, metodologías ágiles y comunicación efectiva para equipos remotos globales.', 
      imagen: '/img/EEUUimg.png' 
    },
    { 
      titulo: 'Mandarin Logic', 
      detalle: 'Entendé el mercado tecnológico más grande del mundo. Orientado a desarrolladores interesados en el ecosistema de hardware, eCommerce y plataformas masivas, este curso te brinda las herramientas para negociar y colaborar con proveedores y equipos de desarrollo en China.', 
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