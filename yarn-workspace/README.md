```js
import { $ } from "@createhb21/jquery-subsets";

$(".btn").click((event) => {
  console.log("this is clicked", event.target);
});

console.log("number of buttons", $(".btn").length());
```
