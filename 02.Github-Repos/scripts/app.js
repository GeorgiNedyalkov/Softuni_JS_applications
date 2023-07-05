function loadRepos() {
  const username = document.getElementById("username").value;
  const reposUl = document.getElementById("repos");
  const firstLiEl = document.querySelector("ul li");
  reposUl.removeChild(firstLiEl);

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((repo) => {
        const { full_name, html_url } = repo;
        const liEl = createLi(html_url, full_name);
        reposUl.appendChild(liEl);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function createLi(url, fullname) {
  const liEl = document.createElement("li");
  const anchorEl = document.createElement("a");
  anchorEl.href = url;
  anchorEl.textContent = fullname;
  liEl.appendChild(anchorEl);
  return liEl;
}
