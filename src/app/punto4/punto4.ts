import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionService, Inscripcion } from '../services/inscripcion.service'; // Ajustá la ruta según tu proyecto

@Component({
  selector: 'app-punto4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css'
})
export class Punto4Component {
  // Inyectamos el servicio en el constructor
  constructor(private inscripcionService: InscripcionService) {}

  cursosDisponibles = [
    { nombre: 'Inglés', precio: 25000 },
    { nombre: 'Japonés', precio: 30000 },
    { nombre: 'Alemán', precio: 22000 },
    { nombre: 'Chino Mandarín', precio: 35000 }
  ];

  inscripcion: Inscripcion = {
    dni: '',
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: new Date(),
    email: '',
    curso: '',
    precioFinal: 0
  };

  precioFinal: number | null = null;

  onCursoChange() {
    const cursoSeleccionado = this.cursosDisponibles.find(c => c.nombre === this.inscripcion.curso);
    if (cursoSeleccionado) {
      this.inscripcion.precio = cursoSeleccionado.precio;
      this.calcularDescuento();
    }
  }

  calcularDescuento() {
    if (this.inscripcion.precio > 0 && this.inscripcion.categoriaAlumno > 0) {
      let descuento = 0;
      if (this.inscripcion.categoriaAlumno == 1) descuento = 0.35;
      else if (this.inscripcion.categoriaAlumno == 2) descuento = 0.50;
      this.precioFinal = this.inscripcion.precio * (1 - descuento);
    } else {
      this.precioFinal = null;
    }
  }

  registrar() {
    if (this.precioFinal !== null) {
      this.inscripcion.precioFinal = this.precioFinal;
      this.inscripcion.fechaInscripcion = new Date();
      
      // Usamos el servicio para registrar 
      this.inscripcionService.addInscripcion({ ...this.inscripcion });
      
      // Limpiar formulario
      this.resetForm();
    }
  }

  resetForm() {
    this.inscripcion = { dni: '', precio: 0, categoriaAlumno: 0, fechaInscripcion: new Date(), email: '', curso: '', precioFinal: 0 };
    this.precioFinal = null;
  }

  // Getter para mostrar la lista en el HTML
  get listaDeInscritos() {
    return this.inscripcionService.getInscripciones();
  }
  // Agregá este getter dentro de tu export class Punto4Component
  get resumen() {
    return this.inscripcionService.getResumenPorCategoria();
  }
}