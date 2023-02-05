import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  title:string = "Welcom";
  listEmlpois!:Emploi[];
  constructor() { }


  ngOnInit(): void {
    this.listEmlpois=[
      {reference: "SE5", titre: "Full Stuck", entreprise: "Nasa", etat: true},
      {reference: "G313", titre: "Front End", entreprise: "Google", etat: false},
      {reference: "3B7", titre: "Back End", entreprise: "Amazon", etat: false}, ]
    
  }

  postuler(i:number){
    this.listEmlpois[i].etat==false;
}

}
