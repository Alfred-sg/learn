---
title: 对象、数组
order: 3
---

## 对象

在 typescript 里，对象类型可以通过匿名对象、interface、type 指定。如下：

```ts
// 1. 匿名对象
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// 2. interface
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

// 3. type
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```

### 其他

1. 可选属性可通过 ? 指定
2. 只读属性可通过 readonly 指定
3. 索引签名 [index: string]: number 表示对象的所有属性都需要是 number，这通常用于设置不确定属性的类型
4. interface 可通过 extends 扩展；type 可通过 & 扩展，官方称其为交叉（intersections）
5. 使用泛型可以动态设置对象属性的类型

## 数组

```ts
// Array 本身基于泛型
function doSomething(value: Array<string>) {
  // ...
}

// 只读数组
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

let x: readonly string[] = [];
let y: string[] = [];

// 元祖可以异构元素类型
type StringNumberPair = [string, number];

function doSomething(pair: readonly [string, number]) {
  // ...
}
```
