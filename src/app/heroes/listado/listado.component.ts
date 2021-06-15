import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[]=['Spidermar','Ironman','hulk','thor'];
  heroeBorrado:string="";
  borrarHeroe(){
    const heroeborrado=this.heroes.shift() || "";
    this.heroeBorrado=heroeborrado;
    console.log(this.heroeBorrado);
  }
 
}
