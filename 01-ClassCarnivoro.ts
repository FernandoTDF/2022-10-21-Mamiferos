import { Mamifero } from "./00-ClassMamifero";

export class Carnivoro extends Mamifero{
  private comidaFavorita:string

  public constructor(pNombre: string, pPatas: number, pEnergia:number, pComidaFavorita:string){
    super(pNombre, pPatas, pEnergia)
    this.comidaFavorita=pComidaFavorita
  }

  public Comer(): void {
    this.energia += 50;
    console.log(`Soy ${this.nombre} y soy carnivoro, y me gusta la carne!. Mi alimento preferido es: ${this.comidaFavorita} y mi energia subio a ${this.energia}` )
  }
}