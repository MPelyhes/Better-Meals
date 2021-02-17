// Create Recipe Search Class
class Recipe {
  constructor(){
    this.app_id = '33ef320b';
    this.app_key = '16dec4e1cfa93d80d4ed52aa172ddb5e';
    this.recipe_count = 10;
  }

  async getRecipe(searchQ) {
    const recipeRequest = await fetch(`https://api.edamam.com/search?q=${searchQ}&app_id=${this.app_id}&app_key=${this.app_key}&from=0&to=${this.recipe_count}`);


    const recipeResponse = recipeRequest.json();

    return recipeResponse;
  }


}

const mainSection = document.querySelector('#recipe-display');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-button');
const recipes = new Recipe

mainSection.addEventListener('click', (e)=> {

  if(e.target.className === 'fas fa-clipboard-list fa-2x' ){
    const saveIcon = e.target;
  }
})

searchBtn.addEventListener('click', ()=> {
  let searchQ = search.value;
  if(searchQ !== ''){
   recipes.getRecipe(searchQ)
   .then(results => {
     createUI(results.hits);
   })
  }


})

const createUI = (obj)=> {
  // For loop to create recipe cards
  for(let i = 0; i <= obj.length; i++){
    // Recipe card div with all its elements
  const recipeCard = document.createElement('div');
  recipeCard.classList.add('recipe-card');

  const recipeImg = document.createElement('img');
  recipeImg.src = `${obj[i].recipe.image}`;
  recipeImg.classList.add('recipe-img')

  const h2 = document.createElement('h2');
  h2.innerText = `${obj[i].recipe.label}`;

  const paragraph = document.createElement('p');
  paragraph.innerText =`${obj[i].recipe.ingredientLines}`;

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('fas', 'fa-clipboard-list', 'fa-2x');
  
  const saveForm = document.createElement('form');
  saveForm.action = "/search"
  saveForm.method ="POST"

  //Create hidden form for submitting recipes to mongodb!
  const labelForm = document.createElement('input');
  labelForm.type = "hidden";
  labelForm.value = `${obj[i].recipe.label}`;
  labelForm.name = "savedMeal[label]";

  const imageForm = document.createElement('input');
  imageForm.type = "hidden";
  imageForm.value = `${obj[i].recipe.image}`;
  imageForm.name = "savedMeal[image]";

  const sourceForm = document.createElement('input');
  sourceForm.type = "hidden";
  sourceForm.value = `${obj[i].recipe.source}`;
  sourceForm.name = "savedMeal[source]";

  const sourceUrlForm = document.createElement('input');
  sourceUrlForm.type = "hidden";
  sourceUrlForm.value = `${obj[i].recipe.url}`;
  sourceUrlForm.name = "savedMeal[sourceURL]";  

  const servingsForm = document.createElement('input');
  servingsForm.type = "hidden";
  servingsForm.value = `${obj[i].recipe.yield}`;
  servingsForm.name = "savedMeal[servings]";

  const ingredientsForm = document.createElement('input');
  ingredientsForm.type = "hidden";
  ingredientsForm.value = `${obj[i].recipe.ingredientLines}`
  ingredientsForm.name = "savedMeal[ingredients]";

  const caloriesForm = document.createElement('input');
  caloriesForm.type = "hidden";
  caloriesForm.value = `${obj[i].recipe.calories}`;  
  caloriesForm.name = "savedMeal[calories]"

  // const nutritionForm = document.createElement('input');
  // nutritionForm.type = "hidden";
  // nutritionForm.value = `${obj[i].recipe.totalNutrients}`;  
  // nutritionForm.name = "savedMeal[nutrition]"  
  
  const saveButton = document.createElement('button');
  saveButton.innerText = 'Save Meal';

  //Adding recipe card to the main section and all other elements to recipe card
  mainSection.appendChild(recipeCard);
  recipeCard.append(recipeImg, h2, paragraph, saveIcon, saveForm);
  saveForm.append(labelForm, imageForm, sourceForm, sourceUrlForm, servingsForm, ingredientsForm, caloriesForm, saveButton);
  }
}