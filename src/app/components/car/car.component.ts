import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

   name: string;
   speed: number;
   model: string;
   colors: Colors;
   options: string[];


  constructor() { }

  ngOnInit() {
  	this.name = 'Audi';
  	this.speed = 235;
  	this.model = 'RS7';
  	this.colors = {
  		car: 'белый',
  		salon: 'черный',
  		wheels: 'серебристый'
  	}
  	this.options = ["ABS", "Автопилот", "Авто Паркинг"];
 	}

  	carSelect(carName) {
  		if(carName == 'bmw') {
		  	this.name = 'BMW';
		  	this.speed = 280;
		  	this.model = 'M5';
		  	this.colors = {
		  		car: 'белый',
		  		salon: 'черный',
		  		wheels: 'серебристый'
		  	}
		  	this.options = ["ABS", "Автопилот", "Авто Паркинг"];
		} else if (carName == 'audi') {
		 	this.name = 'AUDI';
		  	this.speed = 320;
		  	this.model = 'RS8';
		  	this.colors = {
		  		car: 'черный',
		  		salon: 'белый',
		  		wheels: 'белые'
		  	}
		  	this.options = ["ABS", "Автопилот"];
		 } else if (carName == 'merc') {
			this.name = 'Mersedec-Benz';
		  	this.speed = 320;
		  	this.model = 'E-class';
		  	this.colors = {
		  		car: 'синий',
		  		salon: 'белый',
		  		wheels: 'черные'
		  	}
		  	this.options = ["ABS", "Автопилот", "Люк"];
		 }
	}
}

interface Colors {
	car: string,
   	salon: string,
   	wheels: string
}