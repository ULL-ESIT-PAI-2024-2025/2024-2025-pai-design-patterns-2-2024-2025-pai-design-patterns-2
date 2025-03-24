/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc Function to show how works the prototype in JS 
 */

/**
 * User function constructor 
 * 
 * @param {string} name name of the user
 * @param {number} age age of the user
 */
function User(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * Get the name of the user
 * 
 * @returns {string} name of the user
 */
User.prototype.getName = function() {
  return this.name;
}

/**
 * Get the age of the user
 * 
 * @returns {number} age of the user
 */
User.prototype.getAge = function() {
  return this.age;
}

function main() {
  const user = new User('John', 30);
  console.log(user.getName()); // John
  console.log(user.getAge()); // 30
}

if (require.main === module) {
  main();
}