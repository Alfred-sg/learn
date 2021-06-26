---
title: 基础
order: 0
---

typescript 提供了一种工具，它可以在编译前静态执行代码类型检查，这样就能使 javascript 运行时语义（runtime semantics）错误提前暴露出来，显著提升大型复杂应用的可维护性。

typescript 不只能执行静态类型检查，它还能在编辑器提示可选的方法或属性。vscode 内置了 typescript 类型检查，其他编辑器可参考 [TypeScript-Editor-Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)。

## basic

1. string, number, boolean：Javascript 有三个常用的原语：string, number, boolean。每一个在 Typescript 都有相应的类型。类型 String, Number, Boolean 用于修饰内置类型。在你的应用程序，所要使用的是 string, number, boolean
2. bigint, symbol：原语 bigint 可以指定大数值的类型；symbol 通过 Symbol 函数创建，即唯一标识
3. nullish：nullish 指 null, undefined。编译选项 strictNullChecks 可开启 null, undefined 类型强校验。如果确认值不是 null 或 undefined，可以在值后添加 !，如 x!.toFixed()
4. array：数组类型可使用 string[] 等
5. any：any 表示任意类型，可访问该值的属性或调用该值的方法。通常不推荐使用，因为它会骗过类型检查。注意，当没有为值指定类型时，Typescript 会自动将该值推断为 any 类型。编译选项 noImplicitAny 可以将 any 识别为 error
6. Typescript 在值后使用 : 声明类型，而不使用类似 Java 中的 types on the left，比如 const a: string = 'hello world'。当不指定类型注解（type annotations）时，Typescript 会自动根据初始化语句推断类型
7. 联合类型使用 | 分割
8. typeof：string, number, bigint, boolean, symbol, undefined, object, function 等类型可以使用 typeof 检测
9. in：in 操作符表示左值是否以属性或方法的形式存在于右值中
10. instanceof：instanceof 操作符表示左值是否是右值的实例
11. is：is 操作符可用于类型预测，即限定类型，左值必为右值类型。在类中可使用 this is Type 形式
12. never：never 表示不存在

## type & interface

type 意为类型别名，通过 & 进行扩展；interface 意为接口，通过继承扩展。interface 允许设置新的属性，type 不允许新增。

```ts
// 接口通过继承扩展
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// 类型别名使用 & 扩展
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: Boolean;
};

// 接口允许新增属性
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
```

结合 type, interface 使用联合类型，typescript 可以在条件分支中推断出具体的类型。如下：

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    // typescript 会推断出 Circle 类型
    return Math.PI * shape.radius ** 2;
  }
}
```

## type assertions

类型断言可以将值的类型转换为更具体或不太具体的类型，比如将 HTMLElement 转换为 HTMLCanvasElement 即更具体，将 HTMLElement 转换为 any 即不太具体。类型断言可以使用 as，也可以使用 <>。如下：

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## literal types

字面量类型，如指定字符串变量的类型为 'hello world'。字符串变量如使用 var, let 声明，就会指定 string 类型；如使用 const 声明，就会指定字面量类型。不过，当用 const 声明对象时，typescript 会使用 string, number 指定属性的类型。因此，如下示例会报错：

```ts
const req = { url: "https://example.com", method: "GET" };
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
handleRequest(req.url, req.method);
```

这时可以先使用类型断言进行转换。

```ts
// 方式 1
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method as "GET");

// 方式 2，as const 可以将类型转为字面量类型
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```
