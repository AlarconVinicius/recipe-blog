import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/models/blog/ingredient/ingredients';

@Component({
  selector: 'app-add-upd-recipe',
  templateUrl: './add-upd-recipe.component.html',
  styleUrls: ['./add-upd-recipe.component.css']
})
export class AddUpdRecipeComponent implements OnInit {

  recipeIngredients: Ingredients = { ingredients: {} };
  newGroup: string = '';
  newIngredient: string = '';
  groups: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  addIngredientGroup() {
    if (this.newGroup.trim() !== '') {
      this.groups.push(this.newGroup);
      this.newGroup = '';
    }
  }
  addIngredient(group: string, newIngredient: string) {
    if (newIngredient.trim() !== '') {
      if (!this.recipeIngredients.ingredients[group]) {
        this.recipeIngredients.ingredients[group] = [];
      }
      this.recipeIngredients.ingredients[group].push(newIngredient);
      this.newIngredient = '';
    }
  }
  
  addGroup() {
    const group = this.newGroup.trim();
    if (group.length > 0) {
      this.recipeIngredients.ingredients[group] = [];
    }
  }
  formatIngredients(): string {
    const formattedIngredients: Ingredients = { ingredients: {} };
    for (const group of this.groups) {
      const groupIngredients = this.recipeIngredients.ingredients[group].map(ingredient => ingredient.trim());
      formattedIngredients.ingredients[group] = groupIngredients;
    }
    return JSON.stringify(formattedIngredients);
  }

  saveRecipe() {
    const formattedIngredients = this.formatIngredients();
    console.log(formattedIngredients);
    // Agora você pode enviar `formattedIngredients` para a sua API em uma solicitação POST
  }
}
