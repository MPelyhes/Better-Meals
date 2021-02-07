// Section holding the recipe card divs
const mainSection = document.querySelector('#recipe-display');
const breakfastBtn = document.querySelector('#breakfast');

breakfastBtn.addEventListener('click', ()=> {
  // For loop to create recipe cards
  for(let i = 1; i <= 8; i++){
    // Recipe card div with all its elements
  const recipeCard = document.createElement('div');
  recipeCard.classList.add('recipe-card');
  const recipeImg = document.createElement('img');
  recipeImg.src = "https://images.unsplash.com/photo-1573742116698-f5b4aa226c5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  recipeImg.classList.add('recipe-img')
  const h2 = document.createElement('h2');
  h2.innerText = "This Meal is Bananas";
  const paragraph = document.createElement('p');
  paragraph.innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates ut unde ratione quia natus.";
  const saveIcon = document.createElement('i');
  saveIcon.classList.add('fas', 'fa-clipboard-list', 'fa-2x');
  
  //Adding recipe card to the main section and all other elements to recipe card
  mainSection.appendChild(recipeCard);
  recipeCard.append(recipeImg, h2, paragraph, saveIcon);
  }
})
