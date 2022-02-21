import { Component, OnInit } from '@angular/core';
import { Croissants } from 'src/app/interface/Croissants.interface';
import { croissantsDB } from 'src/assets/DataBase/Croissant';

@Component({
  selector: 'app-croissants',
  templateUrl: './croissants.component.html',
  styleUrls: ['./croissants.component.css']
})
export class CroissantsComponent implements OnInit {

  croissants : Croissants [] = [];

  constructor() { }

  ngOnInit(): void {

    this.croissants = croissantsDB;

  }

}
