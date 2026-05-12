import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css'
})
export class Punto2Component {
  // Array predefinido de productos
  productos = [
    { id: 1, nombre: 'Diccionario Digital IT', precio: 15000, imagen: 'img/uno.png' },
    { id: 2, nombre: 'Flashcards de Sintaxis', precio: 8000, imagen: 'img/dos.png' },
    { id: 3, nombre: 'Guía Gramática Técnica', precio: 20500, imagen: 'img/tres.png' },
    { id: 4, nombre: 'Video-Lab de Fonética', precio: 12000, imagen: 'img/cuatro.png' }
  ];

  // El carrito solicitado por la consigna
  Arraycarrito: any[] = [];
  total: number = 0;

  agregarAlCarrito(producto: any) {
    this.Arraycarrito.push(producto);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.Arraycarrito.reduce((sum, item) => sum + item.precio, 0);
  }

  limpiarCarrito() {
    this.Arraycarrito = [];
    this.total = 0;
  }

  // Agregá esta función dentro de la clase de tu Punto2Component
  confirmarCompra() {
    if (this.Arraycarrito.length > 0) {
      alert('¡Compra confirmada con éxito! Su pedido de suministros ha sido registrado.');
      this.limpiarCarrito(); // Vaciamos el carrito después de comprar
     }
  }
}