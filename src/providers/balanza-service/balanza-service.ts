import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BalanzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BalanzaServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BalanzaServiceProvider Provider');
  }

  getPesoBalanza1() {
    return this.http.get('');
  }

  getPesoBalanza2() {
    return this.http.get('');
  }

  getPesoBalanza3() {
    return this.http.get('');
  }

  getPesoBalanza4() {
    return this.http.get('');
  }

  getPesoBalanza5() {
    return this.http.get('');
  }
}
