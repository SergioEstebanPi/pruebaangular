import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	saludo:boolean;
	noticias:Array<any>;
	clase:string;

	constructor(){
		this.clase="rojo";
		this.saludo=true;
		this.noticias=[{
			titulo: "Hay más de 935.000 venezolanos en Colombia, según Migración",
			contenido: "Un informe de Migración Colombia advierte que en el país hay 935.593 venezolanos. De estos, según datos hasta el 30 de agosto, hay 468.428 venezolanos regulares, 361.399 en proceso y 105.766 irregulares, ya sea porque superaron el tiempo de permanencia o porque ingresaron sin autorización."
		},{
			titulo: "Selección amaneció sin técnico por fin del contrato de Pékerman",
			contenido: "La selección Colombia de James Rodríguez y Falcao García amaneció este sábado sin director técnico. El contrato del argentino José Pékerman venció la víspera sin que haya luz verde para una renovación."
		},{
			titulo: "El misterio detrás del barco fantasma que apareció en Myanmar",
			contenido: "Según la Marina de este país, el buque estaba siendo remolcado para ser llevado a un desguace en Bangladesh. Sin embargo, el mal tiempo hizo que la tripulación abandonara el barco."
		}];
	}

	saludar(){
		this.saludo=!this.saludo;
	}

	cambiarColor(){
		if(this.clase=="rojo"){
			this.clase="azul";
		}else{
			this.clase="rojo";
		}
	}
}
