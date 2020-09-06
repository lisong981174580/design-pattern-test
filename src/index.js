// 工厂模式测试
import $ from './factory-Jquery';

const body = $('body');
console.log(body);

// 单例模式测试
import LoginForm from './single-case';

const login = LoginForm.getInstance();
login.show();
const loginAgain = LoginForm.getInstance();
loginAgain.hide();
console.log('login === loginAgain', login === loginAgain);

// 转换器模式测试
import Target from './converter';

const target = new Target();
const info = target.request();
console.log(info);

// 装饰器测试，核心包 @babel/plugin-proposal-decorators
// 原理
// @dedecorators
// class A {};

// // 等同于
// class A {};
// A = dedecorators(A) || A;

function testDec(target) {
  target.isDec = true;
}

// 添加静态属性
// @testDec 相当于 testDec(Demo)
@testDec
class Demo {

}

console.log('Demo', Demo.isDec);

// 可以加参数
function testDec2(isDec) {
  return function(target) {
    target.isDec = isDec;
  }
}

@testDec2(false)
class Demo2 {

}

console.log('Demo2', Demo2.isDec);


import { mixins, readonly, log } from './decorator';
import { deprecate } from 'core-decorators';

const Foo = {
  foo() {
    console.log('I am foo');
  }
}

@mixins(Foo) 
class MyClass {

}

let obj = new MyClass();
obj.foo();

class Person {
  constructor() {
    this.first = 'A';
    this.last = 'B';
  }

  // 装饰方法
  @readonly
  name() {
    return `${this.first}-${this.last}`;
  }

  @log
  sum(a, b) {
    return a + b;
  }

  // @deprecate('要废弃了', { url: 'ww.baidu.com' })
  // @deprecate('要废弃了')
  @deprecate
  say() {
    console.log('say');
  }
}

const p = new Person();
console.log(p.name);

// 以下会报错
// p.name = function(){}

const result = p.sum(1,2);
console.log('result', result);
p.say();

// 发布订阅模式测试
import { Observer, Subject } from './observer';

const subject = new Subject();
const observer1 =  new Observer('observer1', subject);
const observer2 =  new Observer('observer2', subject);
const observer3 =  new Observer('observer3', subject);

subject.setState(1);
subject.setState(2);
subject.setState(3);

// 代理模式
import { ProxyImg } from './proxy';

let proxyImg = new ProxyImg('1.png');
proxyImg.display();

// 网页事件代理见 test.html
// Jquery $.proxy 见 test.html

let star = {
  name: '张 xx',
  age: 25,
  phone: 'star: 13881222222',
}
// Es6 proxy
let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      // 返回经纪人自己电话
      return 'agent phone: 13881222221';
    }

    if (key === 'price') {
      // 明星不报价
      return 120000;
    }

    return target[key];
  },

  set: function(target, key, value) {
    if (key === 'customPrice') {
      if (value < 1000000) {
        throw new Error('价格太低');
      } else {
        target[key] = value;

        return true;
      }
    }
  }
})

// test 
console.log(agent.name);
console.log(agent.phone);
console.log(agent.price);
console.log(agent.age);

// agent.customPrice = 200;
// console.log(agent.customPrice);

agent.customPrice = 20000000;
console.log(agent.customPrice);

// 迭代器测试
import { eachIteratorOrObject, mapIteratorOrObject } from 'any-each-or-map'

eachIteratorOrObject({a: 1, b: 2, c: {a: 1, b: 2}}, (key, value) => {
  console.log(key, value);
})

eachIteratorOrObject({a: 1, b: 2, c: {a: 1, b: 2}}, function(key, value){
  console.log(key, value);
})

eachIteratorOrObject({a: 1, b: 2, c: {a: 1, b: 2}})

eachIteratorOrObject([1,2,3,4], (key, value) => {
  console.log(key, value);
})

eachIteratorOrObject(['a','b','c','b'], function(key, value){
  console.log(key, value);
})

eachIteratorOrObject(['a','b','c','b'])


eachIteratorOrObject('hello', (key, value) => {
  console.log(key, value);
})

eachIteratorOrObject('hello', function(key, value){
  console.log(key, value);
})

eachIteratorOrObject('hello');

const source = 'hello';
const mapSource = mapIteratorOrObject(source, (key, value) => {
  if (key === 0) {
    return 'a';
  }

  return value;
})

console.log('source', source);
console.log('mapSource', mapSource);

const source2 = {a: 1, b: {a:1}};
const mapSource2 = mapIteratorOrObject(source2, (key, value) => {
  if (key === 'b') {
    return 'b';
  }

  return value;
})

console.log('source', source2);
console.log('mapSource', mapSource2);

const source3 = [1,2,3];
const mapSource3 = mapIteratorOrObject(source3, (key, value) => {
  return value + 1;
})

console.log('source', source3);
console.log('mapSource', mapSource3);
