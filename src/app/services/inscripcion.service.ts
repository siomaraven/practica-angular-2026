import { Injectable } from '@angular/core';

// Definimos la estructura para tener Paz Visual y evitar errores
export interface Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: number;
  fechaInscripcion: Date;
  email: string;
  curso: string;
  precioFinal: number;
}

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  // El Array que será gestionado por el servicio 
  private inscripciones: Inscripcion[] = [];

  constructor() { }

  // CREATE: Registrar la inscripción 
  addInscripcion(nueva: Inscripcion) {
    this.inscripciones.push(nueva);
  }

  // READ: Obtener todas las inscripciones 
  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  // Lógica para el Resumen: Total por categoría 
  getResumenPorCategoria() {
    const resumen = { estudiante: 0, egresado: 0, particular: 0, totalGeneral: 0 };
    this.inscripciones.forEach(ins => {
      if (ins.categoriaAlumno == 1) resumen.estudiante++;
      else if (ins.categoriaAlumno == 2) resumen.egresado++;
      else resumen.particular++;
      resumen.totalGeneral += ins.precioFinal;
    });
    return resumen;
  }
}