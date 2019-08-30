import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navegarALugar(name){
    //name es el nombre de la vista, depende del nombre de la vista donde se presione
    this.navCtrl.push(LugarPage, {nombre:name});//el parametro se llama nombre, el cual va ser obtenido en lugar.ts
  }
}
