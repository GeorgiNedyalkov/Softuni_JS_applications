let form = document.getElementById("loginForm");
form.addEventListener("submit", login);

let loadBtn = document.getElementById("loadRecipes");
loadBtn.addEventListener("click", getRecipes);

async function login(e) {
  e.preventDefault();

  let form = e.target;
  let formData = new FormData(form);

  let user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  let url = "http://localhost:3030/users/login";

  let response = await fetch(url, settings);
  let result = await response.json();

  sessionStorage.setItem("email", result.email);
  sessionStorage.setItem("email", result.accessToken);
}

async function getRecipes() {
  let url = "http://localhost:3030/data/recipes";

  let accessToken = sessionStorage.getItem("accessToken");

  let settings = {
    method: "GET",
    headers: {
      "X-Authorization": accessToken,
    },
  };

  let response = await fetch(url, settings);
  let result = await response.json();

  console.log(result);
}
