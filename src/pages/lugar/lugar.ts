import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TerceraPage } from '../tercera/tercera';
import { LugaresService } from '../../services/lugares.service';
import { Functions } from './functions';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar:any={};
  file:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public lugaresService:LugaresService) {
    this.lugar = navParams.get('lugar'); //recoge los parametros enviados desde el home
  }
  uploadPhoto($event):void{
    this.file = $event.target.files[0];

    Functions.getBase64(this.file).then((result)=>{
      console.log(result);
      this.lugar.imagen= result;
      return result;
    });

  }
  guardarLugar(){
    if(!this.lugar.id){//si no trae el id, le asignamos
      this.lugar.id = Date.now();
    }
    this.lugaresService.createLugar(this.lugar);
    alert('Lugar guardado con éxito!');
    this.navCtrl.pop();
    console.log(this.lugar);
  }
}
