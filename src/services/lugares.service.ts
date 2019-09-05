import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";


@Injectable() // le pponemos como injectable para poder utilizarlo en cualquier otro componente que lo querramos usar
export class LugaresService {
    constructor(public afDB: AngularFireDatabase){

    }

    public getLugares(){
        return this.afDB.list('/lugares/');
    }
    public getLugar(id){
        return this.afDB.object('/lugares/'+id);
    }
    public createLugar(lugar){
        return this.afDB.database.ref('/lugares/'+lugar.id).set(lugar);//este codigo verifica si no esta creado lo va a crear (es lo mismo que edit)
    }
    public editLugar(lugar){
        return this.afDB.database.ref('/lugares/'+lugar.id).set(lugar);
    }
    public deleteLugar(lugar){
        return this.afDB.database.ref('/lugares/'+lugar.id).remove();
    }
}