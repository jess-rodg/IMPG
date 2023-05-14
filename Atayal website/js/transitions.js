
/* exported highScoreList Transition  */
/* globals userArrayParse */


'use strict';


const highScoreData = window.localStorage.getItem('highScore');
let highScore = JSON.parse(highScoreData);

if(!highScore) {
    highScore = [];
}

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, score, playerName, roundScore) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
        this.message = '';
        this.roundScore = roundScore;
    }
    
    render() {
        

        //if statement selects proper transition message based on score and round
        const dom = transitionTemplate.content.cloneNode(true);
        this.messageContainer = dom.getElementById('transition-message-container');
        this.messageSection = dom.querySelector('section');

        if(this.roundNumber === 1 && this.roundScore < 60){
            this.message = 'You can do better! Got to step it up in the next round!';

        } else if(this.roundNumber === 1 && this.roundScore < 120) {
            this.message = 'Nice work! You are about to be the dad hand of Tayal! ';

        } else if(this.roundNumber === 1 && this.roundScore <= 150) {
            this.message = 'Amazing! You are just like a Tayal people!';
        }
        
        if(this.roundNumber === 2 && this.roundScore < 60){
            this.message = 'Be careful when making!';

        } else if(this.roundNumber === 2 && this.roundScore < 120) {
            this.message = 'Not bad!';
            
        } else if(this.roundNumber === 2 && this.roundScore <= 150) {
            this.message = 'You are going to success!';
        }
        
        if(this.roundNumber === 3 && this.roundScore < 60) {
            this.message = 'OMG! Are you... sure???';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;

        } else if(this.roundNumber === 3 && this.roundScore < 100) {
            this.message = 'Great skills!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        } else if(this.roundNumber === 3 && this.roundScore <= 150) {
            this.message = 'You did excelent job! You should be a guide in the tribe!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        }
        this.transitionMessage = dom.querySelector('h2');
        this.transitionMessage.textContent = this.message;
        return dom;
    }
    clearTransitionMessage() {
        while(this.messageSection.lastElementChild) {
            this.messageSection.lastElementChild.remove();
        }
        this.transitionMessage.textContent = '';
    }
}