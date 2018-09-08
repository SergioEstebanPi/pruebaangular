import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../services/equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

	miEquipo:Array<any>;

  constructor(private _equipoServicio:EquipoService) { 
  	this.miEquipo=[
  		{
  			nombre:"",
  			especialidad:"",
  			bio:""
  		}
  	];
  }

  ngOnInit() {
  	this.miEquipo=this._equipoServicio.traerEquipo();
  }

}
