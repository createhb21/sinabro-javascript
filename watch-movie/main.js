const routes = {
  "/": renderIndex,
  "/search": renderSearch,
};

window.addEventListener("popstate", () => {
  if (routes[location.pathname]) {
    routes[location.pathname]();
    return;
  } else {
    // ...
  }
});

const goto = (url) => {
  const pathname = url.split("?")[0]; // "/" | "/search" | ...
  if (routes[pathname]) {
    history.pushState({}, "", url);
    routes[pathname]();
    return;
  }

  location.href = url;
};

function renderIndex() {
  document.querySelector("#app").innerHTML = `
    <h1>Movie Info</h1>
    <form>
      <input type="search" name="query" />
      <button type="submit">Search</button>
    </form>
  `;

  document.body.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    goto(`/search?query=${event.target.query.value}`);
  });
}

function renderSearch() {
  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
  `;
}

renderIndex();
