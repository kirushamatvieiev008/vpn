import "/src/style.css";

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 20) {
    nav.style.background = "rgba(10,10,10,.9)";
  } else {
    nav.style.background = "rgba(10,10,10,.7)";
  }
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("pricing").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("downloadScrollBtn").addEventListener("click", () => {
  document.getElementById("download").scrollIntoView({
    behavior: "smooth",
  });
});

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document
  .querySelectorAll(".mobile-menu a, .mobile-menu button")
  .forEach((el) => {
    el.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });


