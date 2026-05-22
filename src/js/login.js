import "/src/style.css";

const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    if (email === "admin@velora.com" && password === "123456") {
      localStorage.setItem("veloraAuth", "true");

      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password");
    }
  });
