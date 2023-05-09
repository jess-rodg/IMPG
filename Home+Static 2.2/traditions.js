document.getElementById("tra1").addEventListener("click", () => {
    document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Foxtail Millet.jpg' alt='food1'>";
    document.getElementById("tradition-intro1").innerHTML="Farming and hunting are the main economic activities for the Atayal people. They grow foxtail millet (shown in the image), upland rice, common millet, and hunt animals for protein. Once they began to sell these products to outside markets, the variety of crops that they grow increased. In the mid-20th century, they began to grow more profitable crops including rice, peaches, apple, pears, high-mountain cold-area vegetables, alfalfa mushrooms, and ginger.";
})
document.getElementById("tra2").addEventListener("click", () => {
    document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Atayal hunting knife.jpg' alt='food2'>";
    document.getElementById("tradition-intro1").innerHTML="A knife was one of the essential accessories of an indigenous male. The males of the Atayal, Paiwan, Puyuma, Amis, Saisiyat and Tsou tribes all carried knives. For the indigenous peoples living in the mountains, knives were necessary for survival. They were used to clear a path when walking through mountain forests, for hunting and for making pipes, bows and arrows and rattan items for daily use. Thus, knives served a number of purposes.";
})
document.getElementById("tra3").addEventListener("click", () => {
    document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Sowing Festival.jpg' alt='f3'>";
    document.getElementById("tradition-intro1").innerHTML="Smyatu is an Atayal sowing festival. The two families with the largest crop yield from the previous year send a representative to be ritual masters. During the ritual, the ritual masters bring millet cakes and wine to the farmland, and do not talk to anyone on the way. ";
})
document.getElementById("tra4").addEventListener("click", () => {
    document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Divination Bird.jpg' alt='f4'>";
    document.getElementById("tradition-intro1").innerHTML="Active little brown bird with grey head and white eye ring. The thin black arc from behind the eyes to the neck may have varying visibility. Highly social, often moving in flocks, sometimes mixing with other species. Inhabits forested areas from the lowlands to the mountains. Makes coarse, harsh, short calls and whistles when moving in groups. The song is short but sweet: a pleasant trill followed by a hoarse whistle.";
})
document.getElementById("tra5").addEventListener("click", () => {
  document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Ancestral Spirit Ritual.jpg' alt='f4'>";
  document.getElementById("tradition-intro1").innerHTML="Maho is held each year after the millet festival, between August and October, and family members hunt for meat for the ritual and prepare millet cakes and millet wine. On the day of the ritual the men gather before dawn and the descendants of each ancestor send representatives to give offerings of the prepared foods.";
})
document.getElementById("tra6").addEventListener("click", () => {
  document.getElementById("display4").innerHTML="<img src='./Static img/Traditional/Tribe.jpg' alt='f4'>";
  document.getElementById("tradition-intro1").innerHTML="The tribe, or galang in atayal language is the basic unit in Atayal society. Traditionally the tribe is a group of people who are blood related and live in the same area, completing rituals, hunting and labour together. Each tribe has a chief, a council of elders and land ownership. A tribal alliance within an area is known as a mulaxen galang and is formed in order to resist enemies.";

})


let Index = 1;
showDivs(Index);

function plusDivs(n) {
  showDivs(Index += n);
}

function showDivs(n) {
  let i;
  let y = document.getElementsByClassName("changeImg");
  if (n > y.length-3) {
    Index = 1
}
  if (n < 1) {
    Index = y.length-3
}
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  y[Index-1].style.display = "block";   
  y[Index].style.display = "block";   
  y[Index+1].style.display = "block";   
  y[Index+2].style.display = "block";  
  if(Index>8) {
    i=0;
  }
}