import { Component, OnInit } from '@angular/core';
import { article } from '../core/model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  title =  'Les articles du jour';
  listeArticles!:article[];
  limit!: number;
  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[
      {titre: "Le championnat du monde", contenu: "Le championnat du monde de cette année est  ", auteur:"Med Taher", date:"12/12/2005", categorie:"Sport" },
      {titre: "Les nouveaux parents", contenu: "Les nouveaux parents. ", auteur:"Ahmed Said", date:"11/11/2018", categorie:"Education" },
      {titre: "Comment écrire votre CV", contenu: "Pour réusir à décraucher un emploi...", auteur:"Marie Elsa", date:"02/04/2017", categorie:"Travail" }]
    
      this.limit = this.listeArticles.length;

      let liste = this.listeArticles.filter(a => a.categorie !=='Travail').length;
      this.limit = liste;
  }
  

}
