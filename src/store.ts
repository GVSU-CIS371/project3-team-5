import { defineStore } from 'pinia';
export interface Recipe {
  name: string;
  temperature: string;
  creamer: string;
  syrup: string;
  baseBeverage: string;
}

export const useBeverageStore = defineStore({
  id: 'beverage',
  state: () => ({
    recipes: [] as Recipe[],
  }),
  actions: {
    addRecipe(this: any, recipe: Recipe) {
      this.recipes.push(recipe);
    },
    getAllRecipes(this: any): Recipe[] {
      return this.recipes;
    },
  },
});
