document.getElementById("clo1").addEventListener("click", () => {
    document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Face tattoo.jpg' alt='clo1'>";
    document.getElementById("tradition-intro1").innerHTML="Facial tattoos are a mark of adulthood within Atayal society. They also represent beauty and protect the person from evil spirits by scaring them away. Atayal men gain their facial tattoos when they join hunting expeditions and atayal women gain their facial tattoos when they know how to weave. ";
})
document.getElementById("clo2").addEventListener("click", () => {
    document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Historical Atayal Male Costume.jpg' alt='clo2'>";
    document.getElementById("tradition-intro1").innerHTML="For Atayal men, their costumes consist of a headband, headdress, chest cover, vest over a sleeved-shirt.";
})
document.getElementById("clo3").addEventListener("click", () => {
    document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/History Atayal Female Costume .jpg' alt='clo3'>";
    document.getElementById("tradition-intro1").innerHTML="For Atayal women, their costumes consist of a headband, headdress, long-sleeved Mandarin-style short jacket, skirt and leggings. The front of the Atayal shirts are often adorned with diamond shapes and the back embroidered with complex patterns.";
})
document.getElementById("clo4").addEventListener("click", () => {
    document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Atayal Shell Bead Shirt As Wedding Gift.jpg' alt='clo4'>";
    document.getElementById("tradition-intro1").innerHTML="The Atayal shell bead jacket is referred to as lukkus-kaxa' or lukkus-pintoan in the Atayal language, meaning precious or valuable clothing. The word “lukkus” refers to clothing and “kaxa”, “axa” or “aqa”, depending on the variations in language among the groups of the Atayal tribe, means “bead”";
})
document.getElementById("clo5").addEventListener("click", () => {
  document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Atayal clothing.jpg' alt='clo4'>";
  document.getElementById("tradition-intro1").innerHTML="The main material used to make Atayal clothing is hemp, which is a light material similar to linen. Since the 20th century cotton and wool has also been used in clothing production. Red is the most commonly used colour due to its symbolization of blood, representing the vitality of life and keeping evil spirits away. Red is accented by flashes of blue, yellow black and white among other colours.";
})
document.getElementById("clo6").addEventListener("click", () => {
  document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Atayal weaving.jpg' alt='clo4'>";
  document.getElementById("tradition-intro1").innerHTML="Traditionally, weaving was an important aspect of life for atayal women as it determined their social status and competence. Women begin weaving at a very young age, using colourful hemp threads to create clothing items shown above. Atayal people have been able to promote their culture through selling items made from traditional weaving patterns and skills.";
})
document.getElementById("clo7").addEventListener("click", () => {
  document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Backstrap loom.jpg' alt='clo4'>";
  document.getElementById("tradition-intro1").innerHTML="Traditionally, the Atayal people use processed plant fiber and backstrap looms for weaving. Backstrap looms can also be seen in eastern Africa, central and south America, and in central Asia to southeast Asia, where they are most common. A wide range of other indigenous groups in Taiwan also uses this kind of loom. ";
})
document.getElementById("clo8").addEventListener("click", () => {
  document.getElementById("display2").innerHTML="<img src='./Static img/Cloth page/Male Sleeveless Short Garment.jpg' alt='clo4'>";
  document.getElementById("tradition-intro1").innerHTML="The sleeveless, collarless, double-breasted short garment is made by sewing two folded pieces of long cloth together, with a base of white linen thread interwoven with red and black woolen yarn. The back is red with black lines woven across it, and three diamond-shaped patterns move from up to bottom. The front is woven with red and white stripes. Four-holed white plastic buttons are stitched onto the front and at the edging. Three pairs of red woolen laces and straps are attached to the garment. The ends of the straps are decorated with tassels and white buttons. Six round shell pieces are also sewn on the front. ";
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