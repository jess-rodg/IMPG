document.getElementById("hide2").addEventListener("click", () => {
    location.replace("intro.html");
})
document.getElementById("hide3").addEventListener("click", () => {
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
