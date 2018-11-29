import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
usuario= '';
email='';
contrasena='';
usuarios=[];
home=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController, public storage: Storage) {
this.usuarios = this.navParams.get('usuarios');
this.storage.keys()
    .then(keys => {
      if(keys.some(key => key == 'usuarios'))
      {
        this.storage.get('usuarios')
        .then(usuarios => {
          this.usuarios = JSON.parse(usuarios);
        })
      }
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirPage');
  }
clickcrear()
{
  if(this.usuario.length >0 && this.email.length > 0 && this.contrasena.length > 0)
  {
    this.usuarios.push({usuario:this.usuario, email:this.email, contrasena: this.contrasena  });
    this.navCtrl.pop();
  }
  this.usuario = "";
  this.email ="";
  this. contrasena = "";

      this.storage.set('usuarios', JSON.stringify(this.usuarios));
      this.navCtrl.push(this.home);
}

}