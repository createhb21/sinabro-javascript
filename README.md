# react-app-without-cra

## commit -m "before babel setup"

예상했던 것과는 달리 `Hello, React!`는 보이지않으며
콘솔창에서는 `Uncaught SyntaxError: Unexpected token '<'`라는 에러가 보여진다.

왜 Syntax Error가 발생했을까?
Syntax Error란, 스크립트에 문법적인 오류가 있다는 것을 의미한다.

React를 사용해봤다면 스크립트 중간에 태그를 <>를 이용한 형태로 사용하는 것이 전혀 이상하지 않겠지만, 사실 이것은 정통적인 자바스크립트 문법이 아니다.
즉, 이것들은 JSX라고 하는 코드 가독성 향상을 위해 기존 Javascript을 확장한 새로운 문법이다.

### JSX 문법 없이 React 앱을 개발할 수 있을까?

그렇다면 현재로써는 JSX 문법을 사용할 수 있는 방법이 없어보인다.
따라서 JSX 없이 컴포넌트를 생성해야 하는데,
다행히 React에서 createElement라는 함수를 통해 이를 지원하고 있다.
