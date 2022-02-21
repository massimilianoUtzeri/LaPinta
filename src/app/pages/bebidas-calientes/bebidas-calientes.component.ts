import { Component, OnInit } from '@angular/core';
import { BebidasCalientes } from 'src/app/interface/BebidasCalientes.interface';
import { bebidasCalientesDB } from 'src/assets/DataBase/BebidasCalientes';

@Component({
  selector: 'app-bebidas-calientes',
  templateUrl: './bebidas-calientes.component.html',
  styleUrls: ['./bebidas-calientes.component.css']
})
export class BebidasCalientesComponent implements OnInit {

  bebidasCalientes : BebidasCalientes [] = [];


  constructor() { }

  ngOnInit(): void {

    this.bebidasCalientes = bebidasCalientesDB;


  }


}
