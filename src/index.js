class Car {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

class Kuaiche extends Car {
  constructor(name, number){
    super(name, number);
    this.price = '1.00';
  }
}

class Zhuanche extends Car {
  constructor(name, number){
    super(name, number);
    this.price = '2.00';
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }

  start() {
    console.log(`行程开始，名称：${this.car.name},车牌号: ${this.car.number}`);
  }

  end() {
    console.log(`行程结束，价格：${this.car.price * 5}`);
  }
}

const car = new Kuaiche(100, '桑塔纳');
let trip = new Trip(car);

trip.start();
trip.end();