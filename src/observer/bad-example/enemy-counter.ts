/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Definition file for the EnemyCounter class
 */

export class EnemyCounter {
  private enemyCount: number = 0;

  public increase(): void {
    this.enemyCount++;
    console.log(`Enemy count: ${this.enemyCount}`);
  }
}
