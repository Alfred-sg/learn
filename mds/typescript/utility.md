---
title: 工具类
order: 4
---

- Partial<Type>：所有属性可选
- Required<Type>：所有属性必选
- Readonly<Type>：所有属性只读
- Record<Keys,Type>：设定属性的类型为 Keys，值的类型为 Type
- Pick<Type, Keys>：提取 Type 的属性，仅包含 Keys
- Omit<Type, Keys>：剔除 Type 的属性，剔除的键为 Keys 列表
- Exclude<Type, ExcludedUnion>：剔除联合类型 Type 中的 ExcludedUnion 类型
- Extract<Type, Union>：取 Type, Union 的交集
- NonNullable<Type>：剔除 Type 中的 nullish
- Parameters<Type>：以元祖形式获取函数的参数类型
- ConstructorParameters<Type>：以元祖形式获取构造函数的参数类型
- ReturnType<Type>：以元祖形式获取返回值的类型
- InstanceType<Type>：获取实例类型
- ThisParameterType<Type>：提取函数的 this
- OmitThisParameter<Type>：剔除 Type 中的 this
- ThisType<Type>：在方法中注入 this 类型
- Uppercase<StringType>：转大写
- Lowercase<StringType>：转小写
- Capitalize<StringType>：首字母转大写
- Uncapitalize<StringType>：首字母转小写

```ts
declare function f1(arg: { a: number; b: string }): void;

// type T0 = []
type T0 = Parameters<() => string>;

// type T1 = [s: string]
type T1 = Parameters<(s: string) => void>;

// type T2 = [arg: unknown]
type T2 = Parameters<<T>(arg: T) => T>;

// type T3 = [arg: {
//   a: number;
//   b: string;
// }]
type T3 = Parameters<typeof f1>;
```

```ts
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

```ts
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    }
  }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```
