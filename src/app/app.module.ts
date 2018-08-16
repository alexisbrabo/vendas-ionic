import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientesPage } from '../pages/clientes/clientes';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendasPage } from '../pages/vendas/vendas';
import { VendasProvider } from '../providers/vendas/vendas';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientesPage,
    ProdutosPage,
    VendasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientesPage,
    ProdutosPage,
    VendasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VendasProvider,
    ClientesProvider,
    ProdutosProvider
  ]
})
export class AppModule {}
