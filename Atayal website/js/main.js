/* globals GameApp */

'use strict';

const gameApp = new GameApp();
const dom = gameApp.render();
const root = document.getElementById('root');
root.appendChild(dom);

document.getElementById("style-roundbutton").addEventListener("click", () => {
    confirm.play();
})
let confirm;
function confirmSound(){
    confirm = new sound("confirm.mp3");
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}