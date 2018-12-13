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
    return this.http.get('http://artimsrv4rdi003.glenar.local/Renova.RDI.UI.Web.Api/api/CapturaDatosBalanza/ObtenerPesosPorCabezalBalanza/?cabezalBalanzaID=55');
  }

  getPesoBalanza2() {
    return this.http.get('http://artimsrv4rdi003.glenar.local/Renova.RDI.UI.Web.Api/api/CapturaDatosBalanza/ObtenerPesosPorCabezalBalanza/?cabezalBalanzaID=56');
  }

  getPesoBalanza3() {
    return this.http.get('http://artimsrv4rdi003.glenar.local/Renova.RDI.UI.Web.Api/api/CapturaDatosBalanza/ObtenerPesosPorCabezalBalanza/?cabezalBalanzaID=57');
  }

  getPesoBalanza4() {
    return this.http.get('http://artimsrv4rdi003.glenar.local/Renova.RDI.UI.Web.Api/api/CapturaDatosBalanza/ObtenerPesosPorCabezalBalanza/?cabezalBalanzaID=204');
  }

  getPesoBalanza5() {
    return this.http.get('http://artimsrv4rdi003.glenar.local/Renova.RDI.UI.Web.Api/api/CapturaDatosBalanza/ObtenerPesosPorCabezalBalanza/?cabezalBalanzaID=142');
  }
}
