export function getInitialHTML() {
  return `
    <h1>Search Results</h1>
    <p>Searching for ...</p>
    `;
}

export async function renderSearch({ searchParams }) {
  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
    <p>Searching for ${searchParams.query}...</p>
  `;

  const response = await fetch(
    `http://localhost:3000/api/search?query=${searchParams.query}`
  );
  const movies = await response.json();

  document.querySelector("#app").innerHTML = `
  <h1>Search Results</h1>
  ${
    movies.length > 0
      ? movies.map((movie) => `<p>${movie.title}</p>`).join("")
      : "<p>No movies found.</p>"
  }
  `;
}
