---
title: scrollbars
order: 2
---

* getScrollbarWidth: 计算滚动条宽度。创建滚动的 div 元素，滚动条的宽度由 div.offsetWidth - div.clientWidth 计算获得

## react-custom-scrollbars

[react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) 自定义滚动条组件。它默认会使用两个 div 元素包裹 children，第一个 div 元素（即 container）使用相对定位，第二个 div 元素（即 view）使用绝对定位，并设置 overflow = scroll。

滚动条有两个，水平滚动条和垂直滚动条。以水平滚动条为例，其容器为 trackHorizontal，滚动元素为 thumbHorizontal。trackHorizontal 绝对定位，高度为 6px，宽度计为 trackHorizontalWidth；thumbHorizontal 相对定位，其宽度 thumbHorizontalWidth 默认为 clientWidth / scrollWidth * trackHorizontalWidth，也可以设置为 thumbSize、thumbMinSize。thumbHorizontal 还会设置 transform 为：

```js
const thumbHorizontalX = scrollLeft / 
  (scrollWidth - clientWidth) * 
  (trackHorizontalWidth - thumbHorizontalWidth);
`translateX(${thumbHorizontalX}px)`。
```

react-custom-scrollbars 有两个重要的方法：

* getValues: 该方法可以计算 view 的 scrollWidth, scrollHeight, clientWidth, clientHeight, scrollLeft, scrollTop, left, top。scrollLeft 为滚动偏移量，left 为偏移量百分比，即 scrollLeft / (scrollWidth - clientWidth)
* update: 通过 raf 模块计算上文 thumbHorizontal 的 width、transform 属性，以及 trackHorizontal 的 visibility 属性（如 view 的 scrollWidth 大于 clientWidth，则为 'visible'，不然为 'hidden'），然后再使用 dom-css 模块调整 trackHorizontal、thumbHorizontal 节点的样式

update 方法会在 window.resize、view.scroll 事件以及 didMount、didUpdate 生命周期中执行。

除了 resize、scroll 事件外，react-custom-scrollbars 还会监听 trackHorizontal 的 mouseenter、mouseleave、mousedown，以及 thumbHorizontal 的 mousedown 事件。

* trackHorizontal.mouseenter: 当 react-custom-scrollbars 设置了 autoHide 时，鼠标移入时会显式滚动条
* trackHorizontal.mouseleave: 当 react-custom-scrollbars 设置了 autoHide 时，鼠标移出时会隐藏滚动条
* trackHorizontal.mousedown: 鼠标按下时，调整 trackHorizontal 的 scrollLeft 滚动偏移量
* thumbHorizontal.mousedown: 鼠标按下时，记录 thumbHorizontal 的滚动偏移量，并调用 event.stopImmediatePropagation；为 document.body 设置 useSelect = 'none'；绑定 document.mousemove、document.mouseup 事件
* document.mousemove: 实时调整 view 的 scrollLeft 属性
* document.mouseup: 解绑 drag 事件

<code src="./react-custom-scrollbars/index.tsx" />