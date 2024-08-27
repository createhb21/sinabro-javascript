export async function renderSearch({ searchParams }) {
  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
    <p>Searching for ${searchParams.query}...</p>
  `;
}
