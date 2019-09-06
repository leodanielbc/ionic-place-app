import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any=[];
  constructor(public navCtrl: NavController, public lugaresService: LugaresService) {
    this.lugaresService.getLugares().valueChanges()//con el evento valueChange obtiene de la bd de FB el contenido o la lista de lugares y se actualiza automaticamente si un elemento ha sido cambiado
    .subscribe((lugaresFB)=>{
        this.lugares=lugaresFB;
    },
    (err)=>{
      console.log("probleme : ", err)
    });

  }
  navegarALugar(name){
    //name es el nombre de la vista, depende del nombre de la vista donde se presione
    this.navCtrl.push(LugarPage, {nombre:name});//el parametro se llama nombre, el cual va ser obtenido en lugar.ts
  }
  irVistaDetalle(){
    this.navCtrl.push(LugarPage, {lugar:{}});
  }
  viewDetalleLugar(lugar){
    this.navCtrl.push(LugarPage, {lugar:lugar});
  }
  deleteLugar(lugar){
    if(confirm('Seguro que desea borrar este lugar?')){
      return this.lugaresService.deleteLugar(lugar).then(()=>{
        alert('Lugar eliminado correctamente');
      });
    }
  }
}
