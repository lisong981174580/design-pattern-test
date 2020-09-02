/**
 * 单例模式
 */
export default class LoginForm {
  constructor() {
    this.state = 'hide';
  }

  show() {
    if (this.state === 'show') {
      console.log('已经显示');

      return;
    }

    this.state = 'show';
    console.log('登录框显示成功');
  }

  hide() {
    if (this.state === 'hind') {
      console.log('已经隐藏');

      return;
    }

    this.state = 'hind';
    console.log('登录框隐藏成功');
  }
}

// LoginForm 仅仅只会实例一次
LoginForm.getInstance = (function() {
  let instance;

  return function () {
    if (!instance) {
      instance = new LoginForm();
    }

    return instance;
  }
})();
