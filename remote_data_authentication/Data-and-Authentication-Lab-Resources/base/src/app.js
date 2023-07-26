import { showCatalog } from "./catalogPage.js";

const main = document.querySelector("main");

let pages = {
  createPage: document.getElementById("createRecipe"),
  loginPage: document.getElementById("login"),
  registerPage: document.getElementById("register"),
};

main.innerHTML = "";

let links = {
  catalogLink: document.getElementById("catalogLink"),
  createRecipeLink: document.getElementById("createRecipeLink"),
  loginLink: document.getElementById("loginLink"),
  registerLink: document.getElementById("registerLink"),
  logoutLink: document.getElementById("logoutBtn"),
};

links.catalogLink.addEventListener("click", showCatalog);
// links.createRecipeLink.addEventListener("click", showCreateRecipe);
links.loginLink.addEventListener("click", showLogin);
links.registerLink.addEventListener("click", showRegister);
links.logoutLink.addEventListener("click", logout);

showCatalog(main);

async function logout() {
  let url = "http://localhost:3030/users/logout";
  let settings = {
    method: "GET",
    headers: {
      "X-Authorization": sessionStorage.getItem("accessToken"),
    },
  };

  let response = await fetch(url, settings);

  if (response.status === 204) {
    sessionStorage.removeItem("accessToken");
    showCatalog();
  }
}

async function register(e) {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);

  let rePass = formData.get("rePass");
  let password = formData.get("password");

  // validate values are not empty
  if (password !== rePass) {
    return alert("The passwords need to match");
  }

  let url = "http://localhost:3030/users/register";
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  };

  let response = await fetch(url, settings);

  try {
    if (response.status === 200) {
      let result = await response.json();
      sessionStorage.setItem("accessToken", result.accessToken);
      showCatalog();
    } else {
      let jsonResponse = await response.json();
      throw new Error(jsonResponse.message);
    }
  } catch (e) {
    alert(e.message);
  }
}

async function showRegister() {
  main.innerHTML = "";
  main.appendChild(pages.registerPage);

  let form = pages.registerPage.querySelector("form");
  form.removeEventListener("submit", register);
  form.addEventListener("submit", register);
}

async function login(e) {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);

  let url = "http://localhost:3030/users/login";
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  };

  let response = await fetch(url, settings);
  let result = await response.json();

  sessionStorage.setItem("accessToken", result.accessToken);
  showCatalog();
}

async function showLogin() {
  main.innerHTML = "";
  main.appendChild(pages.loginPage);

  let form = pages.loginPage.querySelector("form");
  form.removeEventListener("submit", login);
  form.addEventListener("submit", login);
}
