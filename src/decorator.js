// 装饰器模式

/**
 * 装饰类-混合
 */
export function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list);
  }
}

/**
 * 装饰方法-只读
 */
export function readonly(target, name, descriptor) {
  // descriptor 属性描述对象(Object.defineProperty 中会用到），原来的值如下
  // {
  //   // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）,默认为 undefined。
  //   value: specifiedFunction,

  //   // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中, 默认为 false
  //   enumerable: false,

  //   // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除,默认为 false。
  //   configurable: true,

  //   // 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变，默认为 false。
  //   writable: true,
  // }

  descriptor.writable = false;
  return descriptor;
}

/**
 * 装饰方法-打印日志
 */
export function log(target, name, descriptor) {
  const oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);

    return oldValue.apply(this, arguments)
  }

  return descriptor;
}
