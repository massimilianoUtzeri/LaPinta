import { Component, OnInit } from '@angular/core';
import { Refrescos } from 'src/app/interface/Refrescos.interface';
import { refrescosDB } from 'src/assets/DataBase/Refrescos';

@Component({
  selector: 'app-refrescos',
  templateUrl: './refrescos.component.html',
  styleUrls: ['./refrescos.component.css']
})
export class RefrescosComponent implements OnInit {

  refrescos  : Refrescos [] = [];

  constructor() { }

  ngOnInit(): void {

    this.refrescos = refrescosDB;

  }

}
