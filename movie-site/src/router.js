let routes;

export const goto = (url, { push, initialData } = {}) => {
  const pathname = url.split("?")[0]; // "/" | "/search" | ...
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));
  if (routes[pathname]) {
    if (push) {
      history.pushState({}, "", url);
    }
    routes[pathname]({
      searchParams: params,
      initialData,
    });
    return;
  }
  location.href = url;
};

export const start = (params) => {
  routes = params.routes;

  window.addEventListener("popstate", (event) => {
    goto(location.pathname + location.search);
  });

  goto(location.pathname + location.search, {
    initialData: window.__INITIAL_DATA__,
  });
};
