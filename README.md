# design-pattern-test

设计模式

## 基础

1. 面向对象思想：封装、继承、多态。
2. UML 类图 https://www.processon.com/

## 概念

以某种思路和准则去实现称为设计，同一种产品有多种实现方案。

## 准则

参考：《LINUX设计哲学》

### 大准则

1. 小即是美。
2. 让每个程序都只做好一件事。
3. 快速建立原型。
4. 舍弃高效率而取可移植性。
5. 采用纯文本来存储数据。
6. 充分利用软件的杠杆效应(软件复用)。
7. 使用 shell 脚本来提高杠杆效应和可移植性。
8. 避免强制的用户界面，尽量使用命令行。
9. 让每个程序都称为过滤器。

### 小准则

1. 允许用户定制环境。
2. 尽量使操作系内核小而轻量化。
3. 使用小写字母并尽量简短。
4. 沉默是金。
5. 各部分之合大于整体。
6. 寻求 90% 的解决方案，二八定律。

## 设计原则（S O L I D)

1. S-单一职责原则
    * 一个程序只做好一件事
    * 如果功能过于复杂就拆分开，每个部分保持独立
    
2. O-开放封闭原则
   * 对扩展开放，对修改封闭
   * 增加需求时候，扩展新代码，而非修改已有代码
   * 这是软件的终极目标
  
3. L-李氏置换原则
   * 子类能覆盖父类
   * 父类能出现的地方子类就能出现
   * js 中使用较少（弱类型 & 继承使用较少）
  
4. I-接口独立原则
   * 保持接口的单一独立，避免出现“胖接口”
   * js 中没有接口（ts 除外），使用较少
   * 类似单一职责原则，这里更关注接口

5. D-依赖导致原则
   * 编程依赖抽象、依赖接口但不是依赖于具体的实现
   * 使用方只关注接口而不是关注具体类的实现
   * js 中使用较少（没有接口 & 弱类型）
   
## 分类

1. 创建型
   * 工厂模式（工厂方法模式、抽象工厂模式、建造者模式）
      * 将 new 操作单独封装
      * 遇到 new 时，就要考虑是否该使用工厂模式
   * 单例模式
      * 系统中被唯一使用
      * 一个类只有一个实例
      * 符合单一职责原则，只实例化唯一对象
      * 没法体现开放封闭原则，但是绝不违反开放封闭原则
   * 原型模式  
   
2. 结构型
   * 适配器模式
      * 旧接口格式和使用者不兼容
      * 中间加一个适配器转换接口
      * 旧接口和使用者进行分离
      * 符合开放封闭原则
   * 装饰器模式
      * 为对象添加新功能
      * 不改变原有的结构和功能
      * 将现有对象和装饰器进行分离，两者独立存在
      * 符合开放封闭原则
   * 代理模式
     * 使用者无权访问目标对象
     * 中间加代理，通过代理加授权和控制
     * 代理类和目标类分离，隔离开目标类和使用者
   * 外观模式
     * 为子系统的一组接口提供了一个高层接口
     * 调用者使用这个高层接口
     * 不符合单一职责原则
   * 桥接模式
   * 组合模式
   * 享元模式

3. 行为型
   * 策略模式
   * 模版方法模式
   * 观察者模式
      * 发布 & 订阅
      * 一对多
      * 主题和观察者分离，不是主动触发而是被动监听，两者解耦
      * 符合开放封闭原则
   * 迭代器模式
      * 顺序访问一个集合
      * 使用者无需知道集合内部结构（封装）
      * 迭代器对象和目标对象分离
      * 将使用者和目标对象隔离开，符合开放封闭原则
   * 职责连模式
   * 命令模式
   * 备忘录模式
   * 状态模式
   * 访问者模式
   * 中介者模式
   * 解释器模式
  
