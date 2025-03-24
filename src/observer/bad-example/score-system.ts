/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 18th 2025
 * @desc Definition file for the ScoreSystem class
 */

export class ScoreSystem {
  private score: number = 0;

  /**
   * Increases the score by 100
   * @returns void
   */
  public increase(): void {
    this.score += 100;
    console.log(`Score: ${this.score}`);
  }
}
