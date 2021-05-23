---
title: video & audio
order: 1
---

## video

h5 中的 video 元素可以将视频嵌入网页，这样就可以替代非标准化的 Flash, QuickTime, RealPlayer 插件。它支持以下几种视频或音频格式：

* MP4：带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件，扩展名为 .mp4、.m4v
* WebM：带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件，扩展名为 .webm
* Ogg：带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件，扩展名为 .ogv

MP4、WebM、Ogg 格式像 zip 格式一样，它是容器的格式，容器内部约定了视频和音频的编码格式。播放视频的操作包含：

1. 检测容器的格式，以知晓它包含怎样的视频、音频编码格式
2. 解码视频，逐帧绘制视频画面
3. 解码音频，播放声音

因为视频的多数播放帧相似，存储不同帧的差异可以提升压缩比。

有两种编解码器：有损编解码器（lossy codec）、无损编解码器（lossless codec）。有损编解码器会丢失信息，但视频不至于过大，适合网络播放场景。常见的视频编解码器有 H.264、Theora、VP8。同样的，常见的有损音频编解码器有 MP3、AAC、Vorbis。

video 元素内可以链接多个视频文件，浏览器会选择它实际能播放的第一个视频文件。出于考虑[不同浏览器对 video 元素的兼容性](https://caniuse.com/?search=video)，可能需要分别制作 MP4、WebM、Ogg 格式的视频内容。

### smaple

```html
<video 
  width="320" 
  height="240" 
  controls
>
  <source src="movie.mp4" type="video/mp4"><!-- 定义了media元素的多媒体资源(<video> 和 <audio>) -->
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.webm" type="video/webm">
  <p>
    Your browser doesn't support HTML5 video. Here is 
    a <a href="myVideo.mp4">link to the video</a> instead.
  </p>
</video>
```

### attribute

video 包含以下可选属性：

* width/height: 设置宽高
* src: 视频资源地址，也可以使用 source 元素嵌入视频资源
* controls: 使用浏览器内置的播放控件。如果不使用内置控件，可以获取 video 节点后调用 play, pause 加以控制
* preload: 预加载资源，设置为 none 将不会预加载资源；metadata 预加载元数据；auto 预加载资源
* autoplay: 自动播放
* poster: 预览图片。如未指定，加载完成的第一帧画面将作为预览图
* playsinline: 约定视频以 inline 模式播放
* muted: 静音模式，也可以设置 video 节点的 muted 属性
* loop: 循环播放模式
* crossorigin: 跨域属性，可设置为 anonymous 跨域但不发送凭证, use-credentials 跨域发送凭证

### property

通过修改 vedio 节点的 muted 等属性，可以调整视频的播放效果。此外，以下属性或方法可以访问或调整视频信息：

* duration: 视频的总时长
* currentTime: 当前时间
* paused: 是否暂停
* volume: 音量，值从 0 到 1
* muted: 静音模式
* load: 加载
* play: 播放
* pause: 暂停
* canplaytype: 是否可播放某格式的视频
* videoWidth/videoHeight: 视频宽高
* playbackRate: 播放速率
* currentTime: 以时间戳表示当前播放帧，或跳转到指定播放帧（即 seek 的意义）

### event

vedio 支持的事件包含（也适用于 audio、embed、img、object 等元素，更多戳 [这里](https://www.w3school.com.cn/tags/html_ref_eventattributes.asp)）：

* onloadstart: 在文件开始加载且未实际加载任何数据前运行的脚本
* onloadedmetadata: 当元数据（比如分辨率和时长）被加载时运行的脚本
* onloadeddata: 当媒介数据已加载时运行的脚本
* onerror: 当在文件加载期间发生错误时运行的脚本
* onsuspend: 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本
* onstalled: 在浏览器不论何种原因未能取回媒介数据时运行的脚本
* onwaiting: 当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本
* onabort: 在退出时运行的脚本
* onemptied: 当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）
* oncanplay: 当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）
* oncanplaythrough: 当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本
* onended: 当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）
* ondurationchange: 当媒介长度改变时运行的脚本
* onreadystatechange: 每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）
* onprogress: 当浏览器正在获取媒介数据时运行的脚本
* onplay: 当媒介已就绪可以开始播放时运行的脚本
* onpause: 当媒介被用户或程序暂停时运行的脚本
* onplaying: 当媒介已开始播放时运行的脚本
* onpause: 当媒介被用户或程序暂停时运行的脚本
* onratechange: 每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）
* ontimeupdate: 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本
* onvolumechange: 每当音量改变时（包括将音量设置为静音）时运行的脚本
* onseeked: 跳转到指定帧后运行的脚本
* onseeking: 跳转到指定帧时运行的脚本

### source

更多可参考：

* [视频和音频内容](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
* [VIDEO ON THE WEB](http://diveintohtml5.info/video.html)
* [关于 video 播放的新探索](https://www.mk2048.com/blog/blog_hbiaj20icjb.html)

前两篇介绍视频格式，后一篇探讨了视频的播放性能，它着力推荐了分包加载的[西瓜视频播放器](https://v2.h5player.bytedance.com/)。

### library

集成播放控件的库有：

* [VideoJS](https://videojs.com/)
* [MediaElement.js](http://www.mediaelementjs.com/)
* [video-react](https://video-react.js.org)

## audio

音频与视频大致相类。

```html
<audio src="someaudio.wav">
您的浏览器不支持 audio 标签。
</audio>
```

## video-react

[video-react](https://video-react.js.org) 视频组件使用 redux 管理全局状态。它使用 Manager 类抽象状态管理操作，状态管理分为两类：player 播放器状态、operation 操作状态。

Manager 类包含如下属性或方法：

* vedio: vedio 元素实例
* store: 使用 redux 的 createStore 创建的全局状态管理管理实例，该值可以通过实例参数改写
* getActions: 获取 actions 变更状态的方法，实现上会调用 redux 的 dispatch 方法
* getState: 获取 store 中的状态
* subscribeToStateChange、subscribeToOperationStateChange、subscribeToPlayerStateChange: 订阅状态变更

Manager 操作分为两类：

1. 通过 actions 改变视图状态 state，state 既会引起重绘，又会驱动 subscribe* 订阅回调的执行（如全屏展示）
2. 直接调用 video 实例的方法或改变其属性

它有以下组件构成：

* Player: 根组件，它会将 Manager 实例的 state、actions 以 props 形式注入到子组件中
* Shortcut: 绑定键盘操作、点击播放事件、双击全屏显示事件，通过 actions 改变状态再变更视图层。键盘事件会绑定在 document 节点上，再行判断 document.activeElement 焦点是否包含 video-react 指定的样式
* BigPlayButton: 初始播放按钮，通过 css 和 player 状态变更显隐状态
* PosterImage: 预览图片
* LoadingSpinner: 加载图标
* PlayToggle: 播放暂停按键
* ForwardControl: 以指定秒数向前跳转，调用 video.seek
* ReplayControl: 以指定秒数向后跳转，调用 video.seek
* VolumeMenuButton: 音量调节器，即调节 video.volume 或 muted
* PlaybackRateMenuButton: 播放速率调节器，即调节 video.playbackRate
* ClosedCaptionButton: 字幕调节器，首先使用 track 元素追加字幕，然后会有 off 关闭字幕按钮
* ControlBar: 播放控件，默认包含 PlayToggle、VolumeMenuButton、CurrentTimeDisplay 当前播放时间、TimeDivider 时间分割线、DurationDisplay 播放总时长、ProgressControl 播放进度控制条、FullscreenToggle 全屏播放。

ProgressControl 的滑动位置计算式为：

```js
const rect = el.getBoundingClientRect();
const clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
const scrollLeft = window.pageXOffset || document.body.scrollLeft;
const left = !rect ? 0 : rect.left + scrollLeft - clientLeft;
const pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageY;
const x = left - pageX + el.offsetWidth;
```

<code src="./video-react/index.tsx" />
