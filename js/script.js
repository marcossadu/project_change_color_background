//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']



const body = document.querySelector("body")
const btn= document.querySelector(".btn")

btn.addEventListener("click", function(e) {
const randocomor = colors[Math.floor(colors.length * Math.random())]

console.log("me has hecho click")

body.style.backgroundColor=randocomor

})