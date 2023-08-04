import { Component, OnInit } from '@angular/core';
//importamos nuestra interfaz 
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  //propiedad publica (tipo array)
  public info: TarjetasInicio[];

  //inicializa la propiedad info
  constructor(){
    this.info=[
      {
        titulo:"Tarjeta 1",
        descripcion: "El futbolista argentino Lionel Messi, quien termina su contrato con Paris Saint-Germain en junio, podría llegar al Fútbol Club Barcelona para la próxima temporada, pero no como todos lo esperaban sino a préstamo desde la MLS.",
        imagen: "https://www.eltiempo.com/files/image_1200_680/uploads/2023/04/20/644195c947b5b.jpeg",
        alt:"Messi"
      }
    ]
  
  }

  //evento de construccion/inicializacion 
  ngOnInit(): void{}
}
