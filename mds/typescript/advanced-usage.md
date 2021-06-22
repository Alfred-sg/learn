---
title: 高级技巧
order: 2
---

## Keyof Type Operator

有时候我们需要获取 interface 或 type 的属性列表，以作为可选的数据类型，keyof 就派上用场了。官方文档可以戳 [这里](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)。看下面一个示例：

```ts
interface User {
  name: string;
  mobile: string;
  email: string;
  gmtCreate: string; // 创建时间
  gmtModified: string; // 更新时间
}

type UserKeys = keyof User;

type Column = {
  title: string;
  key: UserKeys;
  dataIndex: UserKeys;
};

const columns: Column[] = [
  {
    title: "姓名",
    key: "name",
    dataIndex: "name"
  },
  {
    title: "手机号",
    key: "mobile",
    dataIndex: "mobile"
  },
  {
    title: "邮箱",
    key: "email",
    dataIndex: "email"
  }
];
```

这个示例的典型应用场景比如 ant design 表格，表格中展示数据与某个实体的数据类型一致。那么，我们就可以通过预先定义实体的数据类型，完成列数据中的 key 以及 dataIndex 值的校验。

结合泛型，我们可以指定函数仅对对象的特定属性进行处理，如下：

```ts
import moment from "moment";

interface User {
  name: string;
  mobile: string;
  email: string;
  gmtCreate: string; // 创建时间
  gmtModified: string; // 更新时间
}

// 提示没有索引签名，且无法对 key 键进行约束
const format = (row: User, key: string): string => {
  return row[key] ? moment(row[key]).format("YYYY-MM-DD HH:mm:ss") : "";
};

const formatAdvanced = <T extends object, K extends keyof T>(
  row: T,
  key: K
): string => {
  return row[key] ? moment(row[key]).format("YYYY-MM-DD HH:mm:ss") : "";
};
```

## Partial, Required, Readonly, Pick

Partial、Required、Readonly、Pick 本身基于 keyof 实现。我们可以看到 typescript/lib/lib.es5.d.ts 中包含如下代码：

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

- Partial 将泛型 T 的所有属性设为可选
- Required 将泛型 T 的所有属性设为必选
- Readonly 将泛型 T 的所有属性设为只读
- Pick 裁剪泛型 T 的属性

使用示例如下：

```ts
interface User {
  name: string;
  mobile: string;
  email: string;
  gmtCreate: string; // 创建时间
  gmtModified: string; // 更新时间
}

type PartialUser = Partial<User>;

type RequiredUser = Required<User>;

type ReadonlyUser = Readonly<User>;

type PickUser = Pick<User, "name">;
```

## Conditional Types

ts 类型中的条件运算符 ? : 可用于扩展一些基本类型。其作用在于根据输入动态设置类型，基本格式为 SomeType extends OtherType ? TrueType : FalseType;

```ts
interface IdLabel {
  id: number /* some fields */;
}

interface NameLabel {
  name: string /* other fields */;
}

// 当泛型 T 为 number 类型时，类型为 IdLabel
// 当泛型 T 为 string 类型时，类型为 NameLabel
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
```
