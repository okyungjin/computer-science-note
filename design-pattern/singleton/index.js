class Signleton {
  constructor() {
    if (!Signleton.instance) {
      Signleton.instance = this;
    }
    return Signleton.instance;
  }
  
  getInstance() {
    return this.instance;
  }
}

const a = new Signleton();
const b = new Signleton();
console.log(a === b); // true