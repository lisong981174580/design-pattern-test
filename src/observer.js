/**
 * 主题
 */
export class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;

    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }

  attach(observer) {
    this.observers.push(observer);
  }
}

/**
 * 观察者
 */
export class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}