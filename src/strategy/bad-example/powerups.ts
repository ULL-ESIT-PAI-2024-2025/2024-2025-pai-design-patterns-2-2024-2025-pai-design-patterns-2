/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 16th, 2025
 * @brief PowerUp class for the good example of the strategy pattern
 */

export class PowerUp {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  public performAction(): void {
    if (this.type === 'Mushroom') {
      console.log('Mario grows in size!');
    }
    if (this.type === 'Fire Flower') {
      console.log('Mario throws a fireball!');
    }
  }
}