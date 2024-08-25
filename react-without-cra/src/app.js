import { addNumbers } from "./utils/add.js";
import { subtractNumbers } from "./utils/subtract.js";
import { multiplyNumbers } from "./utils/multiply.js";
import { divideNumbers } from "./utils/divide.js";

console.log(addNumbers(2, 2));
console.log(subtractNumbers(1, 1));
console.log(multiplyNumbers(1, 1));
console.log(divideNumbers(1, 1));

const App = () => <h1>Hello, React With JSX {process.env.TEST_API_URL}</h1>;
ReactDOM.render(<App />, document.getElementById("root"));
