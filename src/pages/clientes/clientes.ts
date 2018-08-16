import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes: Array<any>;

  constructor(private clientesProvider: ClientesProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.clientesProvider.listarClientes().subscribe(response => this.clientes = response);
    console.log('ionViewDidLoad ClientesPage');
  }

}
