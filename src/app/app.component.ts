import { Component } from '@angular/core';
import { RestService } from './rest.service';
import {} from './models/redes.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public getJsonValue:any;
  public urlFacebook!: string;
  title = 'apipruebas';
  redes:any;

  constructor(private RestService:RestService){
  }

  ngOnInit(): void {
    this.cargardata();
  }

  public cargardata(){
    this.RestService.get('https://apimocha.com/apppb/rs')
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.getJsonValue = respuesta;
      // let urlFacebook = this.getJsonValue[0].facebook
      // console.log(urlFacebook)
      // urlFacebook = this.getJsonValue[0].facebook
    })
  }
}
