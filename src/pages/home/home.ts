import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any=[
    {nombre:'Leonardo', direccion:'Catamayo', categoria:'Categoria 1'},
    {nombre:'Daniel', direccion:'Catamayo', categoria:'Categoria 1'},
    {nombre:'Maria', direccion:'Catamayo', categoria:'Categoria 1'}
  ];
  constructor(public navCtrl: NavController) {

  }
  navegarALugar(name){
    //name es el nombre de la vista, depende del nombre de la vista donde se presione
    this.navCtrl.push(LugarPage, {nombre:name});//el parametro se llama nombre, el cual va ser obtenido en lugar.ts
  }
  irVistaDetalle(){
    alert('Hola');
  }
}
