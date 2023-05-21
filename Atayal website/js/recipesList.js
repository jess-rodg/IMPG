
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

class bamboo {
    constructor(pointValue) {
        this.image = 'Bamboo.png';
        this.pointValue = pointValue;
    }
}

class fabrics {
    constructor(pointValue) {
        this.image = 'Fabrics.png';
        this.pointValue = pointValue;
    }
}

class gears {
    constructor(pointValue) {
        this.image = 'Gears.png';
        this.pointValue = pointValue;
    }
}

class pattern {
    constructor(pointValue) {
        this.image = 'Pattern.jpg';
        this.pointValue = pointValue;
    }
}

class pennant {
    constructor(pointValue) {
        this.image = 'Pennant.png';
        this.pointValue = pointValue;
    }
}

class rope {
    constructor(pointValue) {
        this.image = 'Rope.png';
        this.pointValue = pointValue;
    }
}

class stone {
    constructor(pointValue) {
        this.image = 'Stone.png';
        this.pointValue = pointValue;
    }
}

class wood{
    constructor(pointValue) {
        this.image = 'Wood.png';
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
    new bamboo(0),
    new fabrics(0),
    new gears(0),
    new pattern(0),
    new pennant(0),
    new rope(0),
    new stone(0),
    new wood(0),
];


const bbrice = new Recipe('Zhu Zhu',
    [
        new beans(30),
        new carrot(30),
        new rice(10),
        new corn(20), 
        new bamboo(10),
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

const food = [bbrice, barice, tmmyan];


const basket = new Recipe('Basket',
    [
        new bamboo(50),
        new rope(20)
    ]);
    
const lubuw = new Recipe('Lubuw',
    [
        new wood(60),
        new rope(20)
    ]);

const loom = new Recipe('Loom',
    [
        new gears(10),
        new wood(10),
        new fabrics(30),
        new pattern(30),
        new rope(30)
    ]);

const headdress = new Recipe('Headdress',
    [
        new stone(60),
        new pennant(30)
    ]);
    
const earring = new Recipe('Earring',
    [
        new bamboo(60),
        new rope(30)
    ]);
    
const living = [basket, lubuw, loom, headdress, earring];

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