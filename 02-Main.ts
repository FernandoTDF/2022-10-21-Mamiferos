import { Mamifero } from "./00-ClassMamifero";
import { Carnivoro } from "./01-ClassCarnivoro";
import { Herviboro } from "./01-ClassHerviboro";
import { Omnivoro } from "./01-ClassOmnivoro";

let Leon = new Carnivoro("Simba",4,100,"gacela");
let Gorila = new Herviboro("Maguila",2,60,"banana");
let Humano = new Omnivoro("Fernando",2,80,"milanga con fritas")

console.log("METODOS DEL LEON")
console.log("metodo Nombre (muestra el nombre del mamifero)")
console.log(Leon.getNombre())
console.log("metodo cantidad de patas (muestra la cantidad de patas) ")
console.log(Leon.getPatas());
console.log("metodo energia (muestra energia)")
console.log(Leon.getEnergia())
console.log("metodo comer (sube la energia)")
Leon.Comer()
console.log("metodo energia (muestra energia)")
console.log(Leon.getEnergia())

console.log("METODOS DEL GORILA")
console.log("metodo Nombre (muestra el nombre del mamifero)")
console.log(  Gorila.getNombre())
console.log("metodo cantidad de patas (muestra la cantidad de patas) ")
console.log(Gorila.getPatas());
console.log("metodo energia (muestra energia)")
console.log(Gorila.getEnergia())
console.log("metodo comer (sube la energia)")
Gorila.Comer()
console.log("metodo energia (muestra energia)")
console.log(Gorila.getEnergia())

console.log("METODOS DEL HUMANO")
console.log("metodo Nombre (muestra el nombre del mamifero)")
console.log(Humano.getNombre())
console.log("metodo cantidad de patas (muestra la cantidad de patas) ")
console.log(Humano.getPatas());
console.log("metodo energia (muestra energia)")
console.log(Humano.getEnergia())
console.log("metodo comer (sube la energia)")
Humano.Comer()
console.log("metodo energia (muestra energia)")
console.log(Humano.getEnergia())
