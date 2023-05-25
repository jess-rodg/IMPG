document.getElementById("hunt").addEventListener("click", () => {
    location.replace("intro.html");
})
document.getElementById("hunt3").addEventListener("click", () => {
    location.replace("intro.html");
})
document.getElementById("hunt5").addEventListener("click", () => {
  location.replace("intro.html");
})
let x = document.getElementById("hunt");
let y = document.getElementById("hunt2");
x.style.display = "none";
y.style.display = "none";
document.getElementById("gun").addEventListener("click", () => {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="block";
    } else {
      x.style.display = "none";
      y.style.display="none";
    }
})

let a = document.getElementById("hunt3");
let b = document.getElementById("hunt4");
a.style.display = "none";
b.style.display = "none";
document.getElementById("bow").addEventListener("click", () => {
    if (a.style.display === "none") {
      a.style.display = "block";
      b.style.display="block";
    } else {
      a.style.display = "none";
      b.style.display="none";
    }
})
let c = document.getElementById("hunt5");
let d = document.getElementById("hunt6");
c.style.display = "none";
d.style.display = "none";
document.getElementById("trap2").addEventListener("click", () => {
    if (c.style.display === "none") {
      c.style.display = "block";
      d.style.display="block";
    } else {
      c.style.display = "none";
      d.style.display="none";
    }
})
let e = document.getElementById("hunt7");
e.style.display = "none";
document.getElementById("deer").addEventListener("click", () => {
    if (e.style.display === "none") {
      e.style.display = "block";
  
    } else {
      e.style.display = "none";
  
    }
})
let f = document.getElementById("hunt8");
f.style.display = "none";
document.getElementById("arrow").addEventListener("click", () => {
    if (f.style.display === "none") {
      f.style.display = "block";
  
    } else {
      f.style.display = "none";
  
    }
})
let g = document.getElementById("hunt9");
g.style.display = "none";
document.getElementById("rabbit").addEventListener("click", () => {
    if (g.style.display === "none") {
      g.style.display = "block";
  
    } else {
      g.style.display = "none";
  
    }
})