/* exported GameApp */
/* globals PlayerDisplay, highScore, JudgeDisplay, RoundDisplay, Transition, ScoreDisplay */
'use strict';

window.onbeforeunload = () => {
    window.localStorage.setItem('highScore', JSON.stringify(highScore));
    window.localStorage.setItem('userData', JSON.stringify(userArrayParse));
    
};



const userArray = window.localStorage.getItem('userData');
const userArrayParse = JSON.parse(userArray);
const charSelect = userArrayParse[0];
const playerName = userArrayParse[1];
const roundNumber = userArrayParse[2];
const score = userArrayParse[3];
console.log('user array info:', userArrayParse);

const appTemplate = document.getElementById('app-template');


class GameApp {
    constructor() {
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
        this.charSelect = charSelect;
        
    }
    
    render() {
        userArrayParse[2] = this.roundNumber;
        userArrayParse[3] = this.score;
        const dom = appTemplate.content;
        if(this.roundNumber === 1) {
            document.getElementById('root').style.backgroundImage = 'url(images/back1.png)';
        }
        else if(this.roundNumber === 2) {
            document.getElementById('root').style.backgroundImage = 'url(images/back1.png)';
        } else {
            document.getElementById('root').style.backgroundImage = 'url(images/back1.png)';
        }
        

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay(this.playerName, this.charSelect);
        playerDisplaySection.appendChild(playerDisplayComponent.render());
        const transitionSection = dom.getElementById('transition');
        
        const roundDisplaySection = dom.getElementById('round-display');
        this.roundDisplayComponent = new RoundDisplay(this.roundNumber, this.score, this.playerName, (roundScore) => {
            
            this.score += roundScore;
            this.scoreDisplayComponent.update(this.score);
            this.roundDisplayComponent.hideIngredients();
            this.transitionComponent = new Transition(this.roundNumber, this.score, this.playerName, roundScore);
            transitionSection.appendChild(this.transitionComponent.render());
            
            window.setTimeout(() => {
                this.transitionComponent.clearTransitionMessage();
                if(this.roundNumber === 3){
                    window.location.replace('ranking.html');
                }
                else {
                    this.roundNumber++;
                    userArrayParse[2] = this.roundNumber;
                    userArrayParse[3] = this.score;
                    this.roundDisplayComponent.update(this.roundNumber);
                }
            }, 4500);
        });
        roundDisplaySection.appendChild(this.roundDisplayComponent.render());
        
        const scoreDisplaySection = dom.getElementById('score-display');
        this.scoreDisplayComponent = new ScoreDisplay(this.score);
        scoreDisplaySection.appendChild(this.scoreDisplayComponent.render());
        
        const exitButton = dom.getElementById('exit-button');
        exitButton.addEventListener('click', () => {
            window.location.replace('ranking.html');
        });
        
        return dom;
    }
}