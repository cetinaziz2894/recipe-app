import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe.', 'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-promo/11lightveg-roundup-8-superJumbo-v2.jpg?quality=75&auto=webp')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
