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
  Entreprise = '';
  constructor() { }


  ngOnInit(): void {
    this.listEmlpois=[
      {reference: "SE5", titre: "Full Stuck", entreprise: "Nasa", etat: true},
      {reference: "G313", titre: "Front End", entreprise: "Nasa", etat: false},
      {reference: "3B7", titre: "Back End", entreprise: "Amazon", etat: false}, ]
    
  }

  postuler(i:number){
    this.listEmlpois[i].etat==false;
}
calculerBilan() {
  let bilan = 0;
  for (const emploi of this.listEmlpois) {
    if (!emploi.etat) {
      bilan++;
    }
  }
  alert(`Il y a ${bilan} offres d'emploi non clôturées.`);
}

calculerB(){
    let bilan = this.listEmlpois.filter(e => !e.etat).length;
    alert(`Il y a ${bilan} offres d'emploi non clôturées.`);
  }

  /* rechercher(value: string) {
    this.Entreprise = value;
  } */

  recherche(value:string){
    let resultats = [];
    for (const emploi of this.listEmlpois){
      if(value==emploi.entreprise){
        resultats.push(emploi);
      }
    }
    this.listEmlpois = resultats;
    return resultats;
  }

  
}


