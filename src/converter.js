/**
 *  转换器模式
 */
class Converter {
  specificRequest() {
    return '德国标准插头';
  }
 }

// 主要将现有信息 Converter.specificRequest 转化为用户所需要的方法
export default class Target {
  constructor() {
    this.converter = new Converter();
  }

  request() {
    let info = this.converter.specificRequest();

    return `${info} - 转换器 -  中国标砖插头`;
  }
}

// // 案例
// function ajax() {
//   // 此处仿照 Jquery 实现的 ajax
// }

// // 为了兼容老代码做一层 $.ajax 的适配器
// const $ = {
//   ajax: function(options) {
//     return ajax(options);
//   }
// }

// vue 的 computed 也是适配器