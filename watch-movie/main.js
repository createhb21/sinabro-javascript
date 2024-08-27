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

const goto = (url, { push } = {}) => {
  const pathname = url.split("?")[0]; // "/" | "/search" | ...
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));
  if (routes[pathname]) {
    if (push) {
      history.pushState({}, "", url);
    }
    routes[pathname]({
      searchParams: params,
    });
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
    goto(`/search?query=${event.target.query.value}`, { push: true });
  });
}

function renderSearch({ searchParams }) {
  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
    <p>keyword: ${searchParams.query}</p>
  `;
}

debugger;
goto(location.pathname + location.search);
