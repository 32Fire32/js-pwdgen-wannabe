"use strict"

const name = prompt("Come ti chiami?");
console.log(name);

const surname = prompt("e il tuo cognome invece?")
console.log(surname);

const color = prompt("Quale è il tuo colore preferito?");
console.log(color);

const password = name + surname + color + 76;

console.log(password);

document.querySelector("h1").innerHTML = `la tua password è ${password}`;