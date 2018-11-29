import { Component } from '@angular/core';

import { SigninPage } from '../signin/signin';

import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

signin=SigninPage;
usuario='';
contrasena='';
email='';
usuarios=[{ usuario:"", email:"", contrasena:"" }]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController, public storage: Storage) {

  }
  clicksignin()
  {
    this.navCtrl.push(this.signin);
  }
 
clicklogin()
  {
  let index= this.usuarios.findIndex(usuario=> usuario.email==this.email && usuario.contrasena== this.contrasena)
   if ( index > 0) {
 console.log('la nota tiene 0 letras');
     const alert = this.alertCtrl.create({
       title: 'muy bien!',
       subTitle: 'inicio exioso',
       buttons: ['OK']});
   }
   else 
   {
     console.log('la nota tiene 0 letras');
     const alert = this.alertCtrl.create({
       title: 'Oops!',
       subTitle: 'los campos no coinciden',
       buttons: ['OK']
     });
     alert.present();
   }
  }
  
 }

