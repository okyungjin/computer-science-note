const createReactiveObject = (target, callback) => {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value === obj[prop]) return true;

      const prev = obj[prop];
      obj[prop] = value;
      callback(`${prop}이/가 [${prev}] >> [${value}]로 변경되었습니다.`);
    }
  })
  return proxy;
}

const kyungJ = { skill: 'JavaScript' }
const reactiveObject = createReactiveObject(kyungJ, console.log);

reactiveObject.skill = 'JavaScript'; // console.log 결과 없음
reactiveObject.skill = 'TypeScript'; // skill이/가 [JavaScript] >> [TypeScript]로 변경되었습니다.

