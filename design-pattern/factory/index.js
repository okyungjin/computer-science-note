class Latte {
  constructor() {
    this.name = 'latte';
  }
}

class Espresso {
  constructor() {
    this.name = 'espresso';
  }
}

// Factory
class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

class EspressoFactory {
  static createCoffee() {
    return new Espresso();
  }
}

const FACTORY_LIST = Object.freeze({ LatteFactory, EspressoFactory });


class CoffeeFactory {
  static createCoffee(type) {
    const factory = FACTORY_LIST[type];
    return factory.createCoffee();
  }
}

const main = () => {
  // order latter
  const coffee = CoffeeFactory.createCoffee('LatteFactory');
  console.log(coffee.name); // latte
}
main();