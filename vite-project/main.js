import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <pre id="result"></pre>
  </div>
`;

async function fetchDataAndDisplay() {
  const response = await fetch("http://localhost:3000/api/test");
  const json = await response.json();

  document.querySelector("#result").innerHTML = JSON.stringify(json, null, 2);
}

fetchDataAndDisplay();

// CORS
// Cross Origin Resource Sharing
// 다른 origin으로 fetch 요청을 하지 못함
