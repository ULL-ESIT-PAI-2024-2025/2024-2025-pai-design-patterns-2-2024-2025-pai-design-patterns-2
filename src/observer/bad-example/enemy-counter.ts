/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 18th 2025
 * @desc Definition file for the EnemyCounter class
 */

export class DefeatedEnemyCounter {
  private defeatedEnemyCount: number = 0;

  /**
   * Increases the enemy count by one
   * @returns void
   */
  public increase(): void {
    this.defeatedEnemyCount++;
    console.log(`Enemy count: ${this.defeatedEnemyCount}`);
  }
}
