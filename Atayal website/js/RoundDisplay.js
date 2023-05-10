/* exported RoundDisplay */
/* globals IngredientSelectorDisplay, allRecipes */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor(roundNumber, score, playerName, onSubmit) {
        this.recipeList = allRecipes;
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
        this.onSubmit = onSubmit;
    }

    hideIngredients() {
        const itemSelector = this.itemSelectorSection;
        while(itemSelector.lastElementChild) {
            itemSelector.lastElementChild.remove();
        }
    }

    update(roundNumber){
        this.roundNumber = roundNumber;
        const recipe = pickRandomRecipe(this.recipeList[this.roundNumber - 1]);
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
  
        this.itemSelectorSection.appendChild(itemSelectorComponent.render());
        
        if(this.roundNumber === 2) {
            document.getElementById('root').style.backgroundImage = 'url(images/back1.png)';
        } else if(this.roundNumber === 3) {
            document.getElementById('root').style.backgroundImage = 'url(images/back1.png)';
        }
    }


    render() {
        const dom = roundDisplayTemplate.content.cloneNode(true);
        const recipe = pickRandomRecipe(this.recipeList[this.roundNumber - 1]);
        const tableImage = dom.querySelector('img');
        tableImage.src = 'images/back1.png';

        this.itemSelectorSection = dom.getElementById('ingredient-selector');
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
        this.itemSelectorSection.appendChild(itemSelectorComponent.render());

        return dom;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRandomRecipe(recipeArray) {
    const index = getRandomInt(recipeArray.length);
    const singleRecipe = recipeArray[index];
    return singleRecipe;
}

