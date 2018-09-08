import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../services/equipo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

	miembro:any;
  constructor(
  	private _equipoService:EquipoService,
  	private _rutaService:ActivatedRoute) {
  	this.miembro={
  			nombre:"",
  			especialidad:"",
  			bio:""
  		};
  }

  ngOnInit() {
  	this._rutaService.params
  		.subscribe(
  				parametros => {
  					this.miembro=this._equipoService.traerMiembroEquipo(parametros['id']);
  				}, 
  				error => {
  					console.log(error);
  				}
  		);
  	//this.miembro=this._equipoService.traerMiembroEquipo(1);
  }

}
