const EventEmitter = require('events').EventEmitter;

// 1.普通使用
const emitter =  new EventEmitter();

// 监听自定义的 some 事件
emitter.on('some', info => {
  console.log('some 1', info);
})

// 监听自定义的 some 事件
emitter.on('some', info => {
  console.log('some 2', info);
})

// 触发 some 事件
emitter.emit('some', 'some info');

// 2.使用继承
class Deg extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const simon = new Deg('simon');

// 监听自定义的 bark 事件
simon.on('bark', function(info) {
  console.log(this.name, 'barked', info);
})

// 监听自定义的 bark 事件
simon.on('bark', function(info) {
  console.log(this.name, 'barked', info);
})

// 触发 bark 事件
simon.emit('bark', 'info')

// stream 用到自定义事件
const fs = require('fs');
const readStream = fs.createReadStream('./data/data.txt');

let length = 0;
readStream.on('data', function(chunk) {
  const len = chunk.toString().length;

  console.log('len', len);

  length += len;
})

readStream.on('end', function() {
  console.log('length', length);
})