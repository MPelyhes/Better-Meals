# Better Meals README: [Live Site](https://warm-fjord-60736.herokuapp.com/home)
## Better Meals
- I created Better Meals to give people a place to search for recipes, save meals to their profiles, and create weekly meal plans all in one place.
- I used the Edamam API so that users could search millions of recipes
- After saving a recipe, users are able to quickly reference ingredients and total calories for the meal. In their mealplan they are able to reference their total daily calories and calories per meal

## Stack 
- Built using Javascript, EJS, CSS, MongoDB, Node, Express

## Screenshots
Homepage
![BetterMealsImg2](https://user-images.githubusercontent.com/73857687/115086913-d04d9c00-9ed2-11eb-9d79-b9f12ac7e4e6.png)
Search Page
![BetterMealsSearch](https://user-images.githubusercontent.com/73857687/115086918-d479b980-9ed2-11eb-813e-e1615f037822.png)
Saved Meals Page
![BetterMealsMyMeals](https://user-images.githubusercontent.com/73857687/115087488-dabc6580-9ed3-11eb-900c-edb76af0cfff.png)
Meal Plan Page
![BetterMealsMealPlan](https://user-images.githubusercontent.com/73857687/115087631-1a834d00-9ed4-11eb-9baa-1deb4b18a2e8.png)

## Challenges
Saving meals to a users profile
- Initially, I struggled to figure out an effective way to save a meal to a users profile, since it was coming from an external API. Eventually, I figured out how to use hidden forms
to save data without the user realizing they are submitting a form. Now, whenever a user clicks the "Save Meal" button it submits a form containing all the relevant meal information
(name, calories, image, ingredients, source URLs, etc).

Creating meal plans
- My orignial plan was to have users create a meal plan that would be stored separate from their user profile with the meal plan id saved to their profile. Given the scale of the
app, it seemed overly burdensome to require the user to create a meal plan document. Instead, I decided to have the meal plan built into the user profile. Now, all they have to do
is go to a meals show page and select the day and time that they want to eat it. 

## Contributing
- Contributor Guidelines: Feel free to contribute or fork this project.

## Contact 
mattpelyhes@gmail.com

## Credits and References 
- Edamam Recipe Search API
