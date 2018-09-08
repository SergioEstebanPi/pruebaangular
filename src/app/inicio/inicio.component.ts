import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../services/equipo.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

	miEquipo:Array<any>;

  constructor(private _servicio:EquipoService) { 
  	this.miEquipo=[
  		{
  			nombre:"",
  			especialidad:""
  		}
  	];
  }

  ngOnInit() {
  	this.miEquipo=this._servicio.traerEquipo();
  }

}
