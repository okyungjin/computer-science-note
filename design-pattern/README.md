# Table of Contents
- [Table of Contents](#table-of-contents)
- [Design Pattern](#design-pattern)
  - [싱글톤 패턴 (Singleton Pattern)](#싱글톤-패턴-singleton-pattern)
  - [팩토리 패턴 (Factory Pattern)](#팩토리-패턴-factory-pattern)
  - [전략 패턴 (Strategy Pattern)](#전략-패턴-strategy-pattern)
  - [옵저버 패턴(Observer Pattern)](#옵저버-패턴observer-pattern)
  
# Design Pattern
## [싱글톤 패턴 (Singleton Pattern)](/design-pattern/singleton/index.js)

## [팩토리 패턴 (Factory Pattern)](/design-pattern/factory/index.js)

## [전략 패턴 (Strategy Pattern)](/design-pattern/strategy/index.js)
`전략 패턴(Strategy Pattern)` 은 정책 패턴(policy pattern)이라고도 하며, 객체의 행위를 바꾸고 싶은 경우 **'직접' 수정하지 않고 전략이라고 부르는 '캡슐화한 알고리즘'을 컨텍스트 안에서 바꿔주면서** 상호 교체가 가능하게 만드는 패턴이다.


전략 패턴을 활용한 라이브러리로 passport가 있다.
> passport는 Node.js에서 인증 모듈을 규횬할 때 사용하는 미들웨어 라이브러리이다.

passport는 여러 가지 '전략'을 기반으로 인증할 수 있게 하며, 다음과 같은 전략을 지원한다.

- 서비스 내의 회원가입된 ID, PW 기반으로 인증하는 `LocalStrategy` 전략
- 페이스북, 네이버 등 다른 서비스를 기반으로 인증하는 OAuth 전략

## [옵저버 패턴(Observer Pattern)](/design-pattern/observer/index.js)
`옵저버 패턴(Observer Pattern)` 은 **`주체` 가 어떤 `객체(subject)` 의 상태 변화를 관찰**하다가 **상태 변화가 있을 때마다 메서드 등을 통해 옵저버 목록에 있는 옵저버들에게 변화를 알려주는** 디자인 패턴이다.

여기서 `주체` 란 객체의 상태 변화를 보고 있는 관찰자이며, `옵저버들` 이란 이 객체의 상태 변화에 따라 전달되는 메서드 등을 기반으로 '추가 변화 사항'이 생기는 객체들을 의미한다.

<br>

자바스크립트에서 옵저버 패턴은 프록시 객체를 통해 구현할 수도 있다.

`프록시(Proxy) 객체` 는 어떠한 대상의 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 가로챌 수 있는 객체를 뜻하며, 자바스크립트에서 프록시 객체는 두 개의 매개변수를 가진다.

- `target` 프록시 할 대상
- `handler` 프록시 객체의 target 동작을 가로채서 정의할 동작들이 정해져 있는 함수

다음은 프록시 객체를 구현한 코드이다.

```js
const handler = {
  get(target, name) {
    return name === 'name' ? `${target.a} ${target.b}` : `${target[name]}`
  }
}

const proxy = new Proxy({
  a: '[Developer]',
  b: 'KyungJin Jung',
}, handler);

console.log(proxy.name); // [Developer] KyungJin Jung
```

`proxy` 라는 변수에 `name` 속성을 선언하지 않았는데도 `proxy.name` 으로 속서에 접근하려고 할 때, 그 부분을 가로채서 문자열을 만들어 반환하고 있다.

