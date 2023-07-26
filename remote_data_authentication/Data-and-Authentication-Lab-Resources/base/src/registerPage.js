import { showCatalog } from "./catalogPage.js";

export async function showRegister(domElement) {
  domElement.innerHTML = "";
  domElement.innerHTML = `
   <article id="register">
            <h2>Register</h2>
            <form>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="rePass"></label>
                <input type="submit" value="Register">
            </form>
    </article>`;

  let form = domElement.querySelector("form");
  form.addEventListener("submit", register);
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
      showCatalog(main);
    } else {
      let jsonResponse = await response.json();
      throw new Error(jsonResponse.message);
    }
  } catch (e) {
    alert(e.message);
  }
}
