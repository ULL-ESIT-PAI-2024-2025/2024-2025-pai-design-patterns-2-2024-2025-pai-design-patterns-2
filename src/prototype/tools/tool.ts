/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Interface Tool to the displayInfo method 
 */

import { Cloneable } from '../cloneable';


export interface Tool extends Cloneable {
  displayInfo(): void;
}
