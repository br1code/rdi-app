import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BalanzaServiceProvider } from '../../providers/balanza-service/balanza-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pesoBalanza1: Number;
  pesoBalanza2: Number;
  pesoBalanza3: Number;
  pesoBalanza4: Number;
  pesoBalanza5: Number;

  constructor(public navCtrl: NavController, public balanzaService: BalanzaServiceProvider ) {}

  ionViewWillEnter() {
    setInterval(() => {
      this.balanzaService.getPesoBalanza1()
      .subscribe(
        (data: any[]) => {
          this.pesoBalanza1 = data.reduce((a, b) => (a.Peso > b.Peso) ? a.Peso : b.Peso);
        },
        (error) => console.log(error)
      );

      this.balanzaService.getPesoBalanza2()
      .subscribe(
        (data: any[]) => {
          this.pesoBalanza2 = data.reduce((a, b) => (a.Peso > b.Peso) ? a.Peso : b.Peso);
        },
        (error) => console.log(error)
      );

      this.balanzaService.getPesoBalanza3()
      .subscribe(
        (data: any[]) => {
          this.pesoBalanza3 = data.reduce((a, b) => (a.Peso > b.Peso) ? a.Peso : b.Peso);
        },
        (error) => console.log(error)
      );

      this.balanzaService.getPesoBalanza4()
      .subscribe(
        (data: any[]) => {
          this.pesoBalanza4 = data.reduce((a, b) => (a.Peso > b.Peso) ? a.Peso : b.Peso);
        },
        (error) => console.log(error)
      );

      this.balanzaService.getPesoBalanza5()
      .subscribe(
        (data: any[]) => {
          this.pesoBalanza5 = data.reduce((a, b) => (a.Peso > b.Peso) ? a.Peso : b.Peso);
        },
        (error) => console.log(error)
      );
    }, 500);
  }
}
