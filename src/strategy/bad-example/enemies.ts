/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 16th, 2025
 * @brief Enemies class for the bad example of the strategy pattern
 */

export class Enemy {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  public move(): void {
    if (this.type === 'Goomba') {
      console.log('Goomba is walking');
    } else if (this.type === 'Koopa') {
      console.log('Koopa is dancing');
    } else if (this.type === 'Boo') {
      console.log('Boo is floating when it is not being watched');
    }
  }

  public attack(): void {
    if (this.type === 'Goomba') {
      console.log('Goomba attacked you!');
    } else if (this.type === 'Koopa') {
      console.log('Koopa attacked you!');
    } else if (this.type === 'Boo') {
      console.log('Boo attacked you!');
    }
  }
}