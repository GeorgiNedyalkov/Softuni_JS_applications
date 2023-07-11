const apiURL = "https://reqres.in/api/users";

function createUser() {
  const user = {
    name: "Neo",
    job: "chosen one",
  };

  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
