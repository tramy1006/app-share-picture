import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { RegistrationPage } from '../pages/registration/registration';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = RegistrationPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
     
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
