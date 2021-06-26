---
title: 函数
order: 2
---

本文档基于 [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html) 整理。

## 函数类型表达式

如果你想给函数设置类型，最简单的方式是使用函数类型表达式，如 const fn: (a: string) => void。与函数声明相同，如果参数的类型没有被指定，那它就会被设置为 any。

## 调用签名

如果函数有额外的属性，我们可以使用调用签名的形式指定它的类型。如下：

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // 使用 : 代替 =>
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

## 构造函数签名

使用构造函数签名，可以指定该函数是一个构造函数。如下：

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

如果某函数既可以作为构造函数，又可以作为普通函数，与 Date 相仿，那么，我们可以组合调用签名和构造函数签名。如下：

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

## 泛型函数

如果函数的返回值与参数的类型有相关性，或者参数之间的类型有相关性，我们可以借助泛型指定类型。如下：

```ts
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

// 类型推断，s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
```

### 类型推断

如下示例表明 typescript 具有强大的类型推断能力：

```ts
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], n => parseInt(n));
```

### 限制

泛型使参数的类型可以是任意，若想加以约束，指定为某种类型的子集，可以结合 extends，如下：

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
```

### 泛型注意事项

1. 尽量避免使用限制

```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)，类型取自限制
const b = firstElement2([1, 2, 3]);
```

2. 当参数与返回值没有类型上的关联性，避免使用泛型

```ts
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

// Func 无相关性
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

3. 在非必要的场合，尽量避免使用泛型

```ts
// 可借助类型推断
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

function greet(s: string) {
  console.log("Hello, " + s);
}
```

## 函数重载注意事项

1. 能使用联合类型，就不要使用重载

## this 关键字

ts 通过分析代码可以获知函数体中是否使用了 this。我们也可以通过首参指定函数体内 this 的类型，如下：

```ts
const user = {
  id: 123,

  admin: false,
  becomeAdmin: function() {
    this.admin = true;
  }
};

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
// 回调函数不能是箭头函数，且 this 必须作为首参
const admins = db.filterUsers(function(this: User) {
  return this.admin;
});
```

## 其他

1. 可选参数使用 ? 标注可选参数
2. void 表示没有返回值，与 undefined 有所差异
3. object 表示 string, number, boolean, symbol, null, undefined 除外的类型，函数也是一个 object，且与 { } 有所差异。不要使用 Object
4. unknown 表示任意类型。不同于 any，对 unknown 属性或方法的操作会报错
5. never 表示会报错
6. Function 包含 bind, call, apply 等属性，且可调用，不过它会返回 any。当你打算接受函数作为参数，且不打算调用它，可以将类型设为 () => void
7. rest 参数可以使用 ...
8. 参数解构
