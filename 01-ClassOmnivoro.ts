import { Mamifero } from "./00-ClassMamifero";

export class Omnivoro extends Mamifero{
  private comidaFavorita:string

  public constructor(pNombre: string, pPatas: number, pEnergia:number, pComidaFavorita:string){
    super(pNombre, pPatas, pEnergia)
    this.comidaFavorita=pComidaFavorita
  }

  public Comer(): void {
    this.energia += 80;
    console.log(`Soy ${this.nombre} y soy Omnivoro, y me gusta la carne como los vegetales!.Le entro a lo que venga. Todo bicho que camina va a parar al asador, mientras me clavo una ensalada!. Mi alimento preferido es: ${this.comidaFavorita} y mi energia subio a ${this.energia}` )
  }
}