---
title: 类
order: 4
---

类实例化的顺序为：

1. 基类字段初始化
2. 执行基类构造函数
3. 子类字段初始化
4. 执行子类构造函数

## 其他

1. 编译选项 strictPropertyInitialization 开启属性初始化校验；通过 ! 可以避免未初始化属性的报错。
2. 在 constructor 构造函数中，super 关键字必须在 this 使用前执行
3. public 修饰公共属性或公共方法
4. protected 修饰公共属性或公共方法
5. private 修饰私有属性或私有方法
6. static 修饰静态属性或静态方法。name, length, call 作为函数的保留属性，不可以设置为静态属性
7. abstract 修饰抽象类或抽象方法

```ts
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```
