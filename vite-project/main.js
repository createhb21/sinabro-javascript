import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <pre id="result"></pre>
  </div>
`;

async function fetchDataAndDisplay() {
  const API_HOST =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
  const response = await fetch(`${API_HOST}/api/test`);
  const json = await response.json();

  document.querySelector("#result").innerHTML = JSON.stringify(json, null, 2);
}

fetchDataAndDisplay();

// CORS
// Cross Origin Resource Sharing
// 다른 origin으로 fetch 요청을 하지 못함
