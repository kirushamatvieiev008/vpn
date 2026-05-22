import "/src/style.css";

if (localStorage.getItem("veloraAuth") !== "true") {
  window.location.href = "login.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("veloraAuth");

  window.location.href = "./login.html";
});
