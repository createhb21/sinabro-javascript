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

## commit -m "with Babel StandAlone"

자 이제 Babel을 적용한 다음, createElement의가 아닌 JSX로 React앱을 바꿔보자.
그 전에 트랜스파일러의 개념에 대해 다시 짚고 넘어가자.
이전 커밋 히스토리에서 Babel과 같은 트랜스파일러를 문법 변환 도구로 소개했었는데
엄밀히 말하면, 트랜스파일러는 단순히 문법 변환만 하는 것이 아니라 다른 언어로 변경해주는 역할도 수행한다.

예를 들면, Typescript같은 superset 언어들을, Javascript로 변경해주기도한다.

> superset: 기존 언어에 확장 기능을 추가하여 개발된 언어를 의미한다. Typescript의 경우 Javascript에 정적 타입 검사 기능을 제공한다.

왜냐하면, Javascript 엔진 자체만으로는 Typescript의 실행이 불가능하기 때문이다.

JSX의 경우는 superset 언어라기보단 Javascript의 확장 문법에 가까운데, 이 역시 자바스크립트 엔진으로 실행하려면 순수 자바스크립트 문법으로 변경해줘야 한다.
이때 사용되는 것이 바로 트랜스파일러이다.

이번에 다루게 될 Babel도 트랜스파일러 도구 중 하나이다.
자 그럼 이제 현재까지 작성한 코드에 Babel을 추가하여 JSX 문법으로 고쳐보도록 하자.

마찬가지로, Babel 기능 적용을 위해 CDN을 이용할건데, unpkg.com 사이트에 접속하여
Babel의 standalone 버전을 가져오도록 하자.

> babel stanalone: Babel을 브라우저 환경에서 직접 사용할 수 있도록 만들어진 버전으로, 주로 Babel 동작 테스트용으로 사용한다.

Babel 패키지가 정상적으로 로드되는지 확인되었다면, 이제 script를 JSX 문법으로 바꿔주면 되겠다.
JSX 문법을 사용할 수 있다는 것은 createElement 함수를 쓸 필요없이 태그 작성하듯이 코드를 작성할 수 있다는 뜻이다.

```typescript
const App = () => <h1>Hello, React!</h1>;
ReactDOM.render(<App />, document.getElementById("root"));
```

자 이제 코드를 실행시켜 브라우저에서 확인해보자.

하지만 예상과는 달리, Babel을 적용했는데도 여전히 동일한 `Uncaught SyntaxError: Unexpected token '<'` 에러가 발생하고 있다.

왜 이런 현상이 발생하는 것일까?

바로 브라우저에게 어떤 스크립트를 Babel로 변환하고 싶은지 알려주지 않았기 때문이다.

script 태그에 type 프로퍼티를 추가하여 "text/babel" 옵션을 주면 깔끔하게 해결할 수 있다.
이 옵션을 통해 브라우저에게 "이 스크립트는 Babel로 트랜스파일한 다음 실행시켜줘"라고 알려줄 수 있는 것이다.

다시 실행하면, 정상적으로 h1태그가 잘 렌더링되는 것을 확인할 수 있다.

그런데, 콘솔창에 한가지 에러가 발생하고 있는데,
`You are using the in-browser Babel transformer. Be sure to precompile your scripts for production`
내용을 해석하면, 브라우저에서 스크립트를 실시간으로 트랜스파일하지 말고 미리 트랜스파일된 스크립트를 실행시키라는 의미이다.

그럼 이제 이 에러를 해결해보자.
여기에 적용할 수 있는 도구가 바로 Webpack과 같은 번들러이다.

## commit -m "Babel on build process"

`You are using the in-browser Babel transformer. Be sure to precompile your scripts for production` 에러는
성능적인 이슈로 인해 발생하는 에러였다.

이 에러를 해결하기 위해, 빌드 타임에서 트랜스파일 할 수 있도록 수정해보자.

이를 위해, 먼저 npm을 이용하여 라이브러리 3개를 설치하자.
`@babel/cli`와 `@babel/core`는 빌드 타임에서 Babel을 실행시키기 위한 도구이고,
`@babel/preset-react`는 react 문법을 javascript로 변환시키기 위한 도구이다.
쉽게 말해, 이 preset을 통해 Babel에게 "이런 문법은 이렇게 변환하면 돼"라고 알려주는 것이다.

이전에 사용했던 standalone 버전도 이 preset이 포함되어있다.

라이브러리 설치가 끝나면 루트 디렉토리에 node_modules라는 폴더가 하나 생기는 것을 볼 수 있다.
방금 설치한 패키지들이 들어있는 폴더이며, 일반적으로 파일 용량이 크기 때문에 repository에 올리지 않는 것이 원칙이다.

따라서, 루트 디렉토리에 .gitignore 파일을 하나 만들어준 다음 node_modules를 버전관리에서 제외시키도록 하자.

다음은 Babel 설정 작업이다.
Babel은 실행될 때 내부적으로 .babelrc라는 파일명을 찾아 설정 정보를 읽기 때문에 이 이름으로 파일을 하나 생성해줘야 한다.

> rc란 일반적으로 UNIX 운영체제에서 설정 파일을 의미하는 접미사

.babelrc 파일에 이번에 설치한 preset을 전달한 다음,
이제 빌드를 위한 폴더 구조를 잡아보도록 하자.

src 폴더를 하나 만든 후, 그 안에 app.js 파일을 만들어 그동안 작성했던 JSX 스크립트를 옮겨주도록 하자.

자, 여기까지 했으면 이제 빌드 스크립트를 작성해줄건데,
package.json 파일을 열어 "scripts"라는 객체를 만들어준 다음,
"src 폴더 내부에 있는 스크립트 파일들을 모두 트랜스파일하여 dist라는 폴더로 옮겨줘"
라는 의미로 다음과 같이 작성하자.
`"build": "babel src --out-dir dist"`

> babel: babel 실행 명령어, src: 원본 소스 폴더, --out-dir: 트랜스파일 결과물 저장하는 폴더 정의 옵션

자 그럼 npm run build 명령어를 한번 입력해보자.

실행이 완료되면 dist라는 폴더에 같은 이름으로 스크립트 파일이 하나 생성된 것을 확인할 수 있다.

```javascript
// dist/app.js
const App = () =>
  /*#__PURE__*/ React.createElement("h1", null, "Hello, React!");
ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("root")
);
```

파일을 열어보니, JSX 스크립트가 javascript로 변경되어있다.
이는 우리가 맨처음 작성했던 스크립트와 거의 동일한 것을 볼 수 있다.

자 그럼, 마지막으로 index.html 파일을 연 다음, dist 폴더에 스크립트를 실행하도록 수정해보자.
먼저 Babel CDN는 이제 필요없으니 주석처리를 해주자.
`<script src="dist/app.js">`
이런 식으로 스크립트를 변경한 다음, 파일을 실행해보면 에러가 말끔하게 사라진 것을 확인할 수 있다.

우리는 이번에 빌드 타임에서 스크립트를 트랜스파일하기 위한 많은 작업들을 진행해보았다.

1. local에서 Babel을 실행할 수 있도록 총 3개의 패키지를 설치했고,
2. 용량이 큰 파일들은 버전 관리에서 제외시켜주었다.
3. 그리고 Babel 실행을 위한 build 스크립트를 작성해보았다.

Babel의 Standalone 공식 문서를 확인해보면,
이런 트랜스파일 작업은 일반적으로 Webpack과 같은 번들러와 통합하여 운영한다고 적혀있다.

그럼 다음에는 번들러란 무엇인지, 그리고 왜 Babel을 번들러와 통합하여 운영해야하는지에 대해 알아보자.
