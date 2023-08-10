import { Component, OnInit } from '@angular/core';
//importamos nuestra interfaz 

import { Peliculas } from 'src/app/models/peliculas';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  //propiedad publica (tipo array)
  
  public inf: Peliculas[];

  //inicializa la propiedad info
  constructor(){
  
    this.inf=[
      {
        nombre: "Tarjeta2",
        imagen: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
        ano: "2010",
        alt: "Peliculas",
        descripcion: "Es una pelicula, del año "
      }
      ,
      {
        nombre: "Tarjeta 1",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjELNb4cpPy1nZXidL-7LPa-KCJa4rEjTYQ&usqp=CAU",
        ano: "2015",
        alt: "Peliculas 2",
        descripcion:"Es otra pelicula, del año "
      }
    ]
  
  }

  //evento de construccion/inicializacion 
  ngOnInit(): void{}
}
