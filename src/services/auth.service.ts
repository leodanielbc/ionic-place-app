import { Injectable } from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService{
    constructor(public afDB: AngularFireDatabase,
        public afAuth: AngularFireAuth){

    }

    loginWithFacebook(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
    logout(){
        return this.afAuth.auth.signOut();
    }
}