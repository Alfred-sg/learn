---
title: fullscreen api
order: 2
---

## 方法或属性

* Element.requestFullscreen: 将特定元素及其后代置为全屏模式，返回 Promise，全屏模式被激活时 resolved
* Document.exitFullscreen: 从全屏模式切换到窗口模式，返回 Promise，全屏模式完全关闭时 resolved
* DocumentOrShadowRoot.fullscreenElement: 当前在 DOM（或 shadow DOM）里被展示为全屏模式的 Element。若为 null，文档不处于全屏模式
* Document.fullscreenEnabled: 是否可启用全屏模式。false 即不可用

## 事件

* Document.onfullscreenchange: 当进入全屏或退出全屏时触发，此处理程序仅在整个文档全屏模式更改时有效
* Document.onfullscreenerror: 当 Document 改变全屏模式出错时触发
* Element.onfullscreenchange: 当进入全屏或退出全屏时触发
* Element.onfullscreenerror: 当指定的 Element 改变全屏模式出现错误时触发

## 示例

<code src="./full-screen/index.tsx" />