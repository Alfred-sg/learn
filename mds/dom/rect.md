---
title: rect
order: 1
---

## getBoundingClientRect

[Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 用于获取元素尺寸及其相对视口的位置，返回对象包含 width、height、top、left、right、bottom 属性。以下是百度搜索按钮的返回值：

如果元素的盒模式设置为 border-box，width、height 属性会包含 content、padding、border；设置为 content-box，那就仅包含 content。

top、left 等属性是相对窗口（viewport）的距离。[getBoundingClientRect 详解](https://www.cnblogs.com/leejersey/p/4127714.html)总结到，ie 浏览器窗口本身有 2 像素的边框，需要减去。

介于 top、left 值相对窗口，因此，如果想要获取元素距离文档（document）的距离，再计算时需要加上滚动偏移量。 如下：

```js
const { top, left } = elem.getBoundingClientRect();
const scrollY = typeof window.pageYOffset != 'number' ? 
      window.pageYOffset : 
            document.documentElement.scrollTop;
const scrollX = typeof window.pageXOffset != 'number' ? 
      window.pageXOffset : 
            document.documentElement.scrollLeft;
return {
  top: top + scrollY,
  left: left + scrollX,
};
```

[dom-align](https://github.com/yiminghe/dom-align) 库会使用 

* [getRegion](https://github.com/yiminghe/dom-align/blob/master/src/getRegion.js): 函数实现以上代码等效功能，即获取节点的 width、height、left、right 值。该函数也兼容 window、document 传值。left、right 均相对于页面
* [getVisibleRectForElement](https://github.com/yiminghe/dom-align/blob/master/src/getVisibleRectForElement.js): 函数用以获取节点的可见区域 { top, bottom, left, right } 对象。首先滚动节点会通过父级节点获取可见区域的大小；其次可见区域的大小若超出 window、document 大小，就会加以裁剪。top、bottom、left、right 均相对于页面

## clientWidth、offsetWidth、scrollWidth

* clientWidth、clientHeight：包含 content、padding
* offsetWidth、offsetHeight：包含 content、padding、border、scrollbar（滚动条）
* scrollWidth、scrollHeight：包含 content、padding、border、scrollbar（滚动条）以及滚动进入不可见的内容，不包含 margin

对于 document.body 元素也是相同的。document.body.scrollWidth 是滚动文档的宽度。

计算滚动条宽度需要使用 offsetWidth - clientWidth - borderWidth。

## getComputedStyle

[window.getComputedStyle(elem)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle) 用于获取计算样式（布局后的，如对元素设置百分比宽度，返回的宽度值为 px 宽度）。不同于 elem.style，它不能用于设置样式。通过 getComputedStyle，可以获取 padding、border、margin 宽高等。过 getComputedStyle 获取的 width、height 值等同 getBoundingClientRect，其会根据 box-sizing 的值而动态包含或不包含 padding、border。

## 屏幕宽高、滚动偏移量等

* 屏幕高度：window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
* 屏幕宽度：window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
* 滚动偏移量：window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop

## dom-align

[dom-align](https://github.com/yiminghe/dom-align) 库用于对齐元素，实现上会计算元素在文档上的位置，然后以绝对定位的方式进行调整。以下是官方示例（sourceNode 为待对齐的节点，需要设置 position: absolute；targetNode 作为对齐的参考节点）：

```js
import { alignElement, alignPoint } from 'dom-align';
// use domAlign
// sourceNode's initial style should be position:absolute;left:-9999px;top:-9999px;
const alignConfig = {
  points: ['tl', 'tr'],        // align top left point of sourceNode with top right point of targetNode
  offset: [10, 20],            // the offset sourceNode by 10px in x and 20px in y,
  targetOffset: ['30%','40%'], // the offset targetNode by 30% of targetNode width in x and 40% of targetNode height in y,
  overflow: { adjustX: true, adjustY: true }, // auto adjust position when sourceNode is overflowed
};
alignElement(sourceNode, targetNode, alignConfig);
const tgtPoint = {
    width,
  height,
  left,
  top,
};
alignPoint(sourceNode, tgtPoint, alignConfig);
```