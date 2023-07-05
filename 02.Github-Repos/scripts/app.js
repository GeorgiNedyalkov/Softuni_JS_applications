function loadRepos() {
  const username = document.getElementById("username").value;
  const reposUl = document.getElementById("repos");
  const firstLiEl = document.querySelector("ul li");
  reposUl.removeChild(firstLiEl);

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((repo) => {
        const liEl = createLi(repo.full_name, repo.html_url);
        reposUl.appendChild(liEl);
      });
    })
    .catch((err) => {
      console.error(err);
      let li = createLi(err.message);
      reposUl.appendChild(li);
    });
}

function createLi(fullname, url = "") {
  const liEl = document.createElement("li");
  const anchorEl = document.createElement("a");
  anchorEl.href = url;
  anchorEl.textContent = fullname;
  liEl.appendChild(anchorEl);
  return liEl;
}
