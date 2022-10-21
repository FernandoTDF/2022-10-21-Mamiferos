export class Mamifero {
  protected nombre: string;
  protected patas: number;
  protected energia: number;

  public constructor(pNombre: string, pPatas: number, pEnergia: number) {
    this.nombre = pNombre;
    this.patas = pPatas;
    this.energia = pEnergia;
  }

  public setNombre(paramNombre: string) {
    this.nombre = paramNombre
  }

  public getNombre():string {
    return this.nombre;
  }

  public setPatas(paranPatas: number) {
    this.patas = paranPatas
  }

  public getPatas():number {
    return this.patas;
  }

  public getEnergia():number{
    return this.energia
  }

  public Comer() {
   

  }
}