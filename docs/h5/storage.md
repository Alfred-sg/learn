---
title: storage & IndexedDB
order: 2
---

## localStorage & sessionStorage

storage 突破了 cookie 的 4kb 存储限制，localStorage 的存储限制是 4M。无论 localStorage，还是 sessionStorage，两者都遵循同源策略，且拥有相同的 api。不同的是，sessionStorage 在单次会话中有效；localStorage 会一直有效。

除了存储限制外，cookie 的缺陷还包含：

* cookie 会包含在每个请求中，同样也会影响传输速率
* 未通过 ssl 提供服务，随请求附带的 cookie 都是未加密传输的

storage 的 api 操作有（setItem、removeItem、clear 可以通过绑定 storage 事件监听）：

* length: 存储的数据项数量
* getItem(key: string): 取值
* setItem(key: string, value: string): 存值
* removeItem(key: string): 删除
* clear: 清空所有

更多内容可参考 [THE PAST, PRESENT & FUTURE OF LOCAL STORAGE FOR WEB APPLICATIONS](http://diveintohtml5.info/storage.html)。

[localStorageDB](https://github.com/knadh/localStorageDB) 是基于 localStorage、sessionStorage 实现的仿 sql 操作。 

## IndexedDB

IndexedDB 可以存储结构化数据，它的存储空间一般在 250M 以上，它也受同源策略限制。不同于 localStorage 会同步阻塞 js 线程执行，IndexedDB 是异步操作的。更多内容可参考 [使用IndexedDB做前端日志持久化](https://www.jqhtml.com/34862.html)、[IndexedDB 实践](http://www.alloyteam.com/2019/09/13969/)。

[Dexie.js](https://github.com/dfahlander/Dexie.js) 封装了 IndexedDB 操作。

```js
/*
|----------------------------|
| Declare your database      |
|----------------------------|
*/

const db = new Dexie('MyDatabase');

// Declare tables, IDs and indexes
db.version(1).stores({
  friends: '++id, name, age'
});

/*
|-----------------------|
| Then run some queries |
|-----------------------|
*/

// Find some old friends
const oldFriends = await db.friends
  .where('age').above(75)
  .toArray();

// or make a new one
await db.friends.add({
  name: 'Camilla',
  age: 25,
  street: 'East 13:th Street',
  picture: await getBlob('camilla.png')
});
```

[IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 还提到了其他包装库：

* [localForage](https://localforage.github.io/): 仿 localStorage 接口存储数据，以 IndexedDB、WebSQL、localStorage 优先级调用原生接口
* [ZangoDB](https://github.com/erikolson186/zangodb): 仿 MongoDB 接口，支持 MongoDB 的大多数熟悉的过滤、投影、排序、更新和聚合功能
* [JsStore](https://jsstore.net/): 一个带有 SQL 语法的 IndexedDB 包装器
* [MiniMongo](https://github.com/mWater/minimongo): 由 localstorage 支持的客户端内存中的 mongodb，通过 http 进行服务器同步。MeteorJS 使用 MiniMongo
* [PouchDB](https://pouchdb.com/): 使用 IndexedDB 在浏览器中实现 CouchDB 的客户端
* [idb](https://www.npmjs.com/package/idb): 一个微小的（〜1.15k）库，大多 API 与 IndexedDB 类似，但做了一些小的改进，让数据库的可用性得到了大大的提升
* [idb-keyval](https://www.npmjs.com/package/idb-keyval): 使用 IndexedDB 实现的超级简单且小巧的（~600B）基于 Promise 的键值对存储
* [sifrr-storage](https://www.npmjs.com/package/@sifrr/storage): 一个非常小的（~2kB）基于 Promise 的客户端键值数据库。按 IndexedDB、WebSQL、localStorage、Cookies 优先级调用原生接口
* [lovefield](https://github.com/google/lovefield): Lovefield 是一个用于 Web App 的关系型数据库，使用 JavaScript 编写，可以在不同的浏览器环境中运行，提供了类似 SQL 的 API，速度快、安全且易用