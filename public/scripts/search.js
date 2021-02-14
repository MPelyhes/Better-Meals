// Create Recipe Search Class
class Recipe {
  constructor(){
    this.app_id = '33ef320b';
    this.app_key = '16dec4e1cfa93d80d4ed52aa172ddb5e';
    this.recipe_count = 20;
  }

  async getRecipe(searchQ) {
    const recipeRequest = await fetch(`https://api.edamam.com/search?q=${searchQ}&app_id=${this.app_id}&app_key=${this.app_key}&from=0&to=${this.recipe_count}`);


    const recipeResponse = recipeRequest.json();

    return recipeResponse;
  }

}

const mainSection = document.querySelector('#recipe-display');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const recipes = new Recipe

mainSection.addEventListener('click', (e)=> {

  if(e.target.className === 'fas fa-clipboard-list fa-2x' ){
    alert('You got me!')
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
  paragraph.innerText =`${obj[i].recipe.ingredientLines[0]}`;

  const saveForm = document.createElement('form');
  saveForm.action = "/"  

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('fas', 'fa-clipboard-list', 'fa-2x');

  //Adding recipe card to the main section and all other elements to recipe card
  mainSection.appendChild(recipeCard);
  recipeCard.append(recipeImg, h2, paragraph, saveIcon);
  }
}