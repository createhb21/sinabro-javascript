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

## commit -m "before babel setup - with createElement"

createElement의 첫번째 파라미터에 태그를 정의해주고,
두번째 파라미터에 원래는 props를 넘길 수 있게 되어 있는데 현재는 넘길 게 없으니 null로 전달해주자.
마지막으로 children을 정의해주면 되는데, 현재는 `Hello, React!` 라는 textContent만 필요하기 때문에, 이를 전달해주면 된다.

그런 다음, ReactDOM의 render 함수를 통해 App 컴포넌트를 root라는 id를 가진 태그 안에 rendering해주면, 원하는대로 h1태그가 잘 렌더링 되는 것을 확인할 수 있다.

여기까지 babel과 webpack없이 아주 기초적인 React 앱을 구성해보았다.

JSX 없이도 앱을 만들 수는 있지만, 어플리케이션의 복잡도가 올라갈수록
이러한 방식으로 컴포넌트를 정의하기는 굉장히 불편해보인다.

그럼 어떻게 해야 JSX 문법을 사용할 수 있을까?
여기서 등장하는 것이 바로 트랜스파일러(Babel 등)이다.

앞으로 다루게 될 Babel이 트랜스파일러에 해당하는데,
쉽게 말하면 최신 문법의 자바스크립트를 구버전의 문법으로 바꿔주는 역할을 한다.
여기서 말하는 최신 문법에는 JSX같은 확장 문법도 포함된다.
