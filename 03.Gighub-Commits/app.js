function loadCommits() {
  const usernameValue = document.getElementById("username").value;
  const repoValue = document.getElementById("repo").value;
  const commitsUl = document.getElementById("commits");

  fetch(`https://api.github.com/repos/${usernameValue}/${repoValue}/commits`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} (Not Found)`);
      }
      return response.json();
    })
    .then((data) => {
      commitsUl.textContent = "";
      for (let entry of data) {
        const { author, message } = entry.commit;
        const liEl = document.createElement("li");
        liEl.textContent = `${author.name}: ${message}`;
        commitsUl.appendChild(liEl);
      }
    })
    .catch((err) => {
      commitsUl.textContent = "";
      const liEl = document.createElement("li");
      liEl.textContent = err.message;
      commitsUl.appendChild(liEl);
    });
}
