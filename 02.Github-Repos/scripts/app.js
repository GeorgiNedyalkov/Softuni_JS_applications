function loadRepos() {
  const username = document.getElementById("username").value;
  const reposUl = document.getElementById("repos");
  const firstLiEl = document.querySelector("ul li");
  reposUl.removeChild(firstLiEl);

  fetch(`https://api.github.com/usera/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      for (let repo of data) {
        const { full_name, html_url } = repo;
        let liEl = document.createElement("li");
        let anchorEl = document.createElement("a");
        anchorEl.setAttribute("href", html_url);
        anchorEl.textContent = full_name;
        liEl.appendChild(anchorEl);
        reposUl.appendChild(liEl);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
