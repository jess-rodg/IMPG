document.getElementById("hide2").addEventListener("click", () => {
    location.replace("intro.html");
})
document.getElementById("hide3").addEventListener("click", () => {
    location.replace("intro.html");
})
document.getElementById("hide6").addEventListener("click", () => {
  location.replace("intro.html");
})
let x = document.getElementById("hide");
let y = document.getElementById("hide2");
x.style.display = "none";
y.style.display = "none";
document.getElementById("bbrice").addEventListener("click", () => {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="block";
    } else {
      x.style.display = "none";
      y.style.display="none";
    }
})
let a = document.getElementById("hide3");
let b = document.getElementById("hide4");
a.style.display = "none";
b.style.display = "none";
document.getElementById("tmmyan").addEventListener("click", () => {
    if (a.style.display === "none") {
      a.style.display = "block";
      b.style.display="block";
    } else {
      a.style.display = "none";
      b.style.display="none";
    }
})
let c = document.getElementById("hide5");
c.style.display = "none";
document.getElementById("zishu").addEventListener("click", () => {
    if (c.style.display === "none") {
      c.style.display = "block";
  
    } else {
      c.style.display = "none";
  
    }
})
let q = document.getElementById("hide6");
let w = document.getElementById("hide7");
q.style.display = "none";
w.style.display = "none";
document.getElementById("barice").addEventListener("click", () => {
    if (q.style.display === "none") {
      q.style.display = "block";
      w.style.display="block";
    } else {
      q.style.display = "none";
      w.style.display="none";
    }
})