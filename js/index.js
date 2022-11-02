document.querySelector(".humberger").addEventListener("click", (e) => {
  document.querySelector("nav").classList.toggle("show");
  tarClas = e.target.classList;
  if (tarClas[1] === "humberger__animate") {
    e.target.classList.remove("humberger__animate");
  } else {
    e.target.classList.add("humberger__animate");
  }
});
