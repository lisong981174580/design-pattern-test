/**
 * 工厂模式
 */
class Jquery {
  constructor(selector) {
    const dom = Array.prototype.slice.call(document.querySelectorAll(selector));
    const length = dom ? dom.length : 0;

    for (let i = 0; i < length; i++) {
      this[i] = dom[i];
    }

    this.length = length;
    this.selector = selector;
  };

  append(node) {
    // ...
  };

  addClass(name) {
    // ...
  };

  // 此处省略若干 api
};

// 工厂, 用户只需关注 $(selector) 后的实例具有哪些方法即可，无需关注 Jquery 的实现，即把最小量的代码暴漏给用户
// 构造函数和创建者分离
// 符合开放封闭原则
// 将构造函数和用户之间隔离
export default function $ (selector) {
  return new Jquery(selector);
}

// 思考：$('div') 和 new $('div') 有何区别？
// 1. 书写麻烦，Jquery 的链式调用将成为噩梦
// 一旦 Jquery 的名字发生变化将是灾难性的
