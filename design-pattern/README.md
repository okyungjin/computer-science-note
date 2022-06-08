# Table of Contents
- [Table of Contents](#table-of-contents)
- [Design Pattern](#design-pattern)
  - [싱글톤 패턴 (Singleton Pattern)](#싱글톤-패턴-singleton-pattern)
  - [팩토리 패턴 (Factory Pattern)](#팩토리-패턴-factory-pattern)
  - [전략 패턴 (Strategy Pattern)](#전략-패턴-strategy-pattern)
  
# Design Pattern
## [싱글톤 패턴 (Singleton Pattern)](/design-pattern/singleton/index.js)

## [팩토리 패턴 (Factory Pattern)](/design-pattern/factory/index.js)

## [전략 패턴 (Strategy Pattern)](/design-pattern/strategy/index.js)
`전략 패턴(strategy pattern)` 은 정책 패턴(policy pattern)이라고도 하며, 객체의 행위를 바꾸고 싶은 경우 **'직접' 수정하지 않고 전략이라고 부르는 '캡슐화한 알고리즘'을 컨텍스트 안에서 바꿔주면서** 상호 교체가 가능하게 만드는 패턴이다.


전략 패턴을 활용한 라이브러리로 passport가 있다.
> passport는 Node.js에서 인증 모듈을 규횬할 때 사용하는 미들웨어 라이브러리이다.

passport는 여러 가지 '전략'을 기반으로 인증할 수 있게 하며, 다음과 같은 전략을 지원한다.

- 서비스 내의 회원가입된 ID, PW 기반으로 인증하는 `LocalStrategy` 전략
- 페이스북, 네이버 등 다른 서비스를 기반으로 인증하는 OAuth 전략


