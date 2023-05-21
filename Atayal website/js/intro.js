
window.onbeforeunload = () => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
};

let charSelect = document.getElementById('char-select');


let userData = [];
userData[0] = 'image location';
userData[1] = 'user name';
userData[2] = 1;
userData[3] = 0;

charSelect.addEventListener('click', collectCharChoice);
function collectCharChoice(event) {
    event.preventDefault();
    let playerChar = event.target.src;
    userData.splice(0, 1, playerChar);
}


let playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit(event) {
    // Cannot advance if a charater isn't selected 
    if(userData[0] === 'image location'){
        event.preventDefault();
        alert('Please click on a character.');
        
    }
    // Move on if character selected
    else {
        event.preventDefault();
        let userName = event.target.username.value;
        userData.splice(1, 1, userName);
        window.location.replace('gameapp.html');
    }
}
document.getElementById("female").addEventListener("click", () => {
    document.getElementById("male").style.scale=0.8;
    document.getElementById("female").style.scale=1.1;
})
document.getElementById("male").addEventListener("click", () => {
    document.getElementById("female").style.scale=0.8;
    document.getElementById("male").style.scale=1.1;
})


