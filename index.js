const images = document.querySelectorAll(".image");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nxtBtn");
const greyBtn = document.querySelectorAll("button");
let i = 0;

next.addEventListener("click", () => {
  images.forEach((img, index) => {
    img.classList.add("hidden");
    greyBtn[index].classList.remove("bg-slate-500");
    greyBtn[index].classList.add("bg-slate-300");
  });

  i = (i + 1) % images.length;

  greyBtn[i].classList.add("bg-slate-500");
  images[i].classList.remove("hidden");
});

prev.addEventListener("click", () => {
  images.forEach((img, index) => {
    img.classList.add("hidden");
    greyBtn[index].classList.remove("bg-slate-500");
    greyBtn[index].classList.add("bg-slate-300");
  });

  i = (i - 1 + images.length) % images.length;

  greyBtn[i].classList.add("bg-slate-500");
  images[i].classList.remove("hidden");
});


