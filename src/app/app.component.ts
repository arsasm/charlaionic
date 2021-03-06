import { GLOBAL } from './../providers/global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddwordPage } from '../pages/addword/addword';
import { ChartPage } from '../pages/chart/chart';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Configuración', component: LoginPage },
      { title: 'Añadir Palabra', component: AddwordPage },
      { title: 'Gráfica', component: ChartPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    const globalConfig = JSON.parse(localStorage.getItem('config'));

    if (globalConfig) {
      GLOBAL.idDiccionario = globalConfig.idDiccionario;
      GLOBAL.passDiccionario = globalConfig.passDiccionario;
    }

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
