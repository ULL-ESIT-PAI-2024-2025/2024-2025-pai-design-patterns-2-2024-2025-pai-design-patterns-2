/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Definition file for the Enemy class
 */

import { Observer } from './observer';

export class Enemy {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(message: string): void {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }

  defeat(): void {
    this.notify('Enemy defeated!');
  }
}