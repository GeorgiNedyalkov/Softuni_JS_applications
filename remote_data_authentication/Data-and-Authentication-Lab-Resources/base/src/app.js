import { showCatalog } from "./catalogPage.js";
import { showLogin } from "./loginPage.js";
import { showRegister } from "./registerPage.js";
import { logout } from "./logout.js";

const main = document.querySelector("main");

main.innerHTML = "";

let links = {
  catalogLink: document.getElementById("catalogLink"),
  createRecipeLink: document.getElementById("createRecipeLink"),
  loginLink: document.getElementById("loginLink"),
  registerLink: document.getElementById("registerLink"),
  logoutLink: document.getElementById("logoutBtn"),
};

links.catalogLink.addEventListener("click", () => showCatalog(main));
// links.createRecipeLink.addEventListener("click", showCreateRecipe);
links.loginLink.addEventListener("click", () => showLogin(main));
links.registerLink.addEventListener("click", () => showRegister(main));
links.logoutLink.addEventListener("click", () => logout(main));

showCatalog(main);
