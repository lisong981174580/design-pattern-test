class ReadImg {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk(); // 初始化即从硬盘加载，模拟
  }

  display() {
    console.log('display...', this.filename);
  }

  loadFromDisk() {
    console.log('loading...', this.filename);
  }
}

export class ProxyImg {
  constructor(filename) {
    this.readImg = new ReadImg(filename);
  }

  display() {
    this.readImg.display();
  }
}