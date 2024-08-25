import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <pre id="result"></pre>
  </div>
`;

async function fetchDataAndDisplay() {
  // const API_HOST =
  //   process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
  // const response = await fetch(`${API_HOST}/api/test`);
  const response = await fetch("/api/test");
  const json = await response.json();

  document.querySelector("#result").innerHTML = JSON.stringify(json, null, 2);
}

fetchDataAndDisplay();

// CORS
// Cross Origin Resource Sharing
// 다른 origin으로 fetch 요청을 하지 못함

// Serverless Function
// 우리가 Express 서버를 따로 띄우고, 이를 프론트엔드랑 결합을 해주는,, 이러한 수고를 우리가 하지 않아도 되게끔
// 해주는 것이 Serverless Function이고,
// (사실 프론트엔드 코드를 Express 서버를 통해서 제공하는 것보단, CDN을 통하는 게 성능이나 비용 면에서도 탁월하다.)
// 이러한 Serverless Function 는 여러 플랫폼들에서 제공하는 것이다 보니, 그 플랫폼의 룰을 따르는 식으로 갈 수밖에 없긴 하다.

// 예를 들어 Netlify function, vercel의 serverless function 등...
