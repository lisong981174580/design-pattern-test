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