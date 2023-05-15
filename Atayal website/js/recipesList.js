/* exported allRecipes, allIngredients */
'use strict';

class beans {
    constructor(pointValue) {
        this.image = 'beans.png';
        this.pointValue = pointValue;
    }
}

class carrot {
    constructor(pointValue) {
        this.image = 'carrot.png';
        this.pointValue = pointValue;
    }
}

class corn {
    constructor(pointValue) {
        this.image = 'corn.png';
        this.pointValue = pointValue;
    }
}

class Mushroom {
    constructor(pointValue) {
        this.image = 'Mushroom.png';
        this.pointValue = pointValue;
    }
}

class fish {
    constructor(pointValue) {
        this.image = 'fish.png';
        this.pointValue = pointValue;
    }
}

class pork {
    constructor(pointValue) {
        this.image = 'pork.png';
        this.pointValue = pointValue;
    }
}

class rice {
    constructor(pointValue) {
        this.image = 'rice.png';
        this.pointValue = pointValue;
    }
}

class salt {
    constructor(pointValue) {
        this.image = 'salt.png';
        this.pointValue = pointValue;
    }
}

class banana {
    constructor(pointValue) {
        this.image = 'banana.png';
        this.pointValue = pointValue;
    }
}

class jar {
    constructor(pointValue) {
        this.image = 'jar.png';
        this.pointValue = pointValue;
    }
}

class zishu {
    constructor(pointValue) {
        this.image = 'zishu.png';
        this.pointValue = pointValue;
    }
}

class leave {
    constructor(pointValue) {
        this.image = 'leave.png';
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
    new beans(0),
    new carrot(0),
    new corn(0),
    new Mushroom(0),
    new fish(0),
    new pork(0),
    new rice(0),
    new salt(0),
    new banana(0),
    new jar(0),
    new zishu(0),
    new leave(0),
];


const bbrice = new Recipe('Bamboo Rice',
    [
        new beans(30),
        new carrot(30),
        new rice(10),
        new corn(30), 
        new salt(10)  
    ]);
        
const barice = new Recipe('Banana Rice',
    [
        new rice(10),
        new banana(10),
        new zishu(60),
        new leave(40)
    ]);

const tmmyan = new Recipe('Tmmyan',
    [
        new pork(40),
        new fish(30),
        new salt(30),
        new jar(20)
    ]);

const Ffive = new Recipe('Ffive',
    [     
        
        new corn(20)
    ]);

const food = [bbrice, barice, tmmyan, Ffive];


const Lone = new Recipe('Lone',
    [
        new jar(20)
    ]);
    
const Ltwo = new Recipe('Ltwo',
    [
        new jar(30),
        new beans(30)
    ]);

const Lthree = new Recipe('Lthree',
    [
        new jar(20)
    ]);

const Lfour = new Recipe('Lfour',
    [
        new jar(40),
        new jar(20)
    ]);
    
const Lfive = new Recipe('Lfive',
    [
        new jar(40),
        new corn(10)
    ]);
    
const living = [Lone, Ltwo, Lthree, Lfour, Lfive];

const Hone = new Recipe('Hone',
    [      
        new jar(40),
        new fish(10)
    ]);

const Htwo = new Recipe('Htwo',
    [ 
        new fish(20)
    ]);
const Hthree = new Recipe('Hthree',
    [   
        new fish(20)
    ]);
    
const Hfour = new Recipe('Hfour',
    [
        new fish(20)
       
    ]);

const Hfive = new Recipe('Hfive',
    [  
        new fish(20)
    ]);


const hunter = [Hone, Htwo, Hthree, Hfour, Hfive];

const allRecipes = [food, living, hunter];