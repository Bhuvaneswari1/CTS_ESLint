const routes = {
  home: "pages/home.html",
  jobs: "pages/jobs.html",
  profile: "pages/profile.html",
};

function loadPage() {
  const hash = location.hash.replace("#", "") || "home";
  const page = routes[hash];

  fetch(page)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h2>Page not found</h2>";
    });
}

// Listen to hash change
window.addEventListener("hashchange", loadPage);
// Initial load
window.addEventListener("load", loadPage);
