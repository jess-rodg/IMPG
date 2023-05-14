/* exported allRecipes, allIngredients */
'use strict';


// Ingredient Construction

class one {
    constructor(pointValue) {
        this.image = 'one.png';
        this.pointValue = pointValue;
    }
}

class two {
    constructor(pointValue) {
        this.image = 'two.png';
        this.pointValue = pointValue;
    }
}

class three {
    constructor(pointValue) {
        this.image = 'three.png';
        this.pointValue = pointValue;
    }
}

class four {
    constructor(pointValue) {
        this.image = 'four.png';
        this.pointValue = pointValue;
    }
}

class five {
    constructor(pointValue) {
        this.image = 'five.png';
        this.pointValue = pointValue;
    }
}

class six {
    constructor(pointValue) {
        this.image = 'six.png';
        this.pointValue = pointValue;
    }
}

class seven {
    constructor(pointValue) {
        this.image = 'seven.png';
        this.pointValue = pointValue;
    }
}

class eight {
    constructor(pointValue) {
        this.image = 'eight.png';
        this.pointValue = pointValue;
    }
}

class nine {
    constructor(pointValue) {
        this.image = 'nine.png';
        this.pointValue = pointValue;
    }
}

class ten {
    constructor(pointValue) {
        this.image = 'ten.png';
        this.pointValue = pointValue;
    }
}

class eleven {
    constructor(pointValue) {
        this.image = 'eleven.png';
        this.pointValue = pointValue;
    }
}

class twelve {
    constructor(pointValue) {
        this.image = 'twelve.png';
        this.pointValue = pointValue;
    }
}

//Recipe Construction 
class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}


const allIngredients = [
    new one(0),
    new two(0),
    new three(0),
    new four(0),
    new five(0),
    new six(0),
    new seven(0),
    new eight(0),
    new nine(0),
    new ten(0),
    new eleven(0),
    new twelve(0),
];




// BREAKFAST RECIPES

const Fone = new Recipe('Fone',
    [
        new one(50),
        new two(30),
        new six(30),
        new three(20),
       
    ]);
        
const Ftwo = new Recipe('Ftwo',
    [
        new one(30),
        new ten(30),
        new four(30),
        new five(30),
        new three(30)
    ]);

const Fthree = new Recipe('Fthree',
    [
        new one(50),
        new two(40),
        new five(30),
        new twelve(20),
        new eight(10)
    ]);

const Ffour = new Recipe('Ffour',
    [
        new one(40),
        new eight(40),
        new four(20)
    ]);

const Ffive = new Recipe('Ffive',
    [
        new nine(50),
        new eight(30),
        new eleven(30),
        new three(20)
    ]);

const food = [Fone, Ftwo, Fthree, Ffour, Ffive];


const Lone = new Recipe('Lone',
    [
        new six(20)
    ]);
    
const Ltwo = new Recipe('Ltwo',
    [
        new seven(30),
        new three(30),
        new one(30)
    ]);

const Lthree = new Recipe('Lthree',
    [
        new seven(20)
    ]);

const Lfour = new Recipe('Lfour',
    [
        new five(40),
        new seven(20)
    ]);
    
const Lfive = new Recipe('Lfive',
    [
        new six(40),
        new ten(30),
        new seven(20),
        new three(10)
    ]);
    
const living = [Lone, Ltwo, Lthree, Lfour, Lfive];

const Hone = new Recipe('Hone',
    [      
        new five(40),
        new seven(20),
        new six(10)
    ]);

const Htwo = new Recipe('Htwo',
    [ 
        new five(20),
        new three(10)
    ]);
const Hthree = new Recipe('Hthree',
    [   
        new five(30),
        new six(30),
        new seven(20)
    ]);
    
const Hfour = new Recipe('Hfour',
    [
        new eight(30),
        new nine(20),
        new eleven(20)
    ]);

const Hfive = new Recipe('Hfive',
    [  
        new ten(40),
        new seven(30),
        new six(20)
    ]);


const hunter = [Hone, Htwo, Hthree, Hfour, Hfive];

const allRecipes = [food, living, hunter];