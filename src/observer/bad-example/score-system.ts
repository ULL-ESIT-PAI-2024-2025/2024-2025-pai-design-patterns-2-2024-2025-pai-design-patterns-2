/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Definition file for the ScoreSystem class
 */

export class ScoreSystem {
  private score: number = 0;

  public increase(): void {
    this.score += 100;
    console.log(`Score: ${this.score}`);
  }
}
