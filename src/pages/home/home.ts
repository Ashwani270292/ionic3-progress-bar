import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  charcterstic1: number;
  charcterstic2: number;
  charcterstic3: number;
  charcterstic4: number;
  charcterstic5: number;

  charName1: string;
  charName2: string;
  charName3: string;
  charName4: string;
  charName5: string;


  dataList: any;
  constructor(public navCtrl: NavController) {
      this.charcterstic1 = 50;
      this.charcterstic2 = 30;
      this.charcterstic3 = 70;
      this.charcterstic4 = 80;
      this.charcterstic5 = 90;

      this.charName1 = 'Enthusiast';
      this.charName2 = 'Enthusiast';
      this.charName3 = 'Enthusiast';
      this.charName4 = 'Enthusiast';
      this.charName5 = 'Enthusiast';

      this.dataList = [];

      this.dataList.push('Hi this is a dummy feedback which is to test how it will look in app');
      this.dataList.push('Hi this is a dummy feedback which is to test how it will look in app');
      this.dataList.push('Hi this is a dummy feedback which is to test & how it will look in app');
      this.dataList.push('Hi this is a dummy feedback which is to test how it will look in app');
      this.dataList.push('Hi this is a dummy feedback which is to test how it will look in app');
      this.dataList.push('Hi this is a dummy feedback which is to test how it will look in app');

  }

}
