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
