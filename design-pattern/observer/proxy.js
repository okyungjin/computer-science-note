const handler = {
  // get: function(target, name) { ... } 와 동일
  get(target, name) {
    return name === 'name' ? `${target.a} ${target.b}` : `${target[name]}`
  }
}

const proxy = new Proxy({
  a: '[Developer]',
  b: 'KyungJin Jung',
}, handler);

console.log(proxy.name); // [Developer] KyungJin Jung