/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 18th 2025
 * @desc Definition file for the Enemy class
 */

import { Observer } from './observer';

export class Enemy {
  private observers: Observer[] = [];

  /**
   * Adds an observer to the list of observers
   * @param observer The observer to add
   * @returns void
   */
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  /**
   * Removes an observer from the list of observers
   * @param observer The observer to remove
   * @returns void
   */
  removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  /**
   * Notifies all observers
   * @param message The message to notify
   * @returns void
   */
  notify(message: string): void {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }

  /**
   * @desc Defeats the enemy
   * @returns void
   */
  defeat(): void {
    this.notify('Enemy defeated!');
  }
}