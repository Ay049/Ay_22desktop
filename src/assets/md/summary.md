## 序言

**此为个人学习笔记而非官方文档,具体功能兼容等问题还是得要查官方文档**



[TOC]




## HTML

####		标签

  * 块级元素
    * div
    * h1~h6
    * p
  * 行内块
    * img
      * title="  "  // 鼠标悬停提示字符
    * a 
      * target="_blank" //  新打开一个链接保留原页面
  * 行内元素
    * span



####		表格

  * 基本语法
    * table //  表格
      * cellpadding  //  内容与边框的距离
      * cellspacing  //   边框距离数值
    * tr  // 行
    * th //  表头
    * td //  内容
  * 表格合并
    * 合并代码写在目标格，竖删别人,横删自己, rowspan为行，colspan为列



#### 列表

 * 无序列表
   * ul
     * li
 * 有序列表
   * ol
     * li
* 自定义列表
  * dl  // dt为A，dd为B，B解释A，AB为同级表并列关系 dl内只能包含dt和dd
    * dt
    * dd

#### 表单

 * form
   * action 

 * input  // 做表单时需要用form包裹
   *	type
     *	text // 普通文本
     *	password // 密码
     *	radio 需要配合name使用  // 同name下单选
     *	checkbox 需要配合name使用  // 同name下多选
     *	submit // 提交
     *	button // 按钮
     *	file // 选择上传文件 添加multiple属性可以多选
     *	reset // 重置表单
     *	image  加上src // 定义图像形式的提交按钮
      *	checked // 首次加载时被选中
     *	placeholder // 默认显示的值
     *	maxlength  // 最大字符长度
     *	value
   *	email  // 邮箱
   *	url  // URL
   *	date // 日期
   *	time  // 时间
   *	month // 越
   *	week // 周
   *	number  // 数字
   *	tel // 手机号
   *	search // 搜索
   *	color // 颜色



*	label // 可以用for = ''input的id''来连接input 扩大点击范围,从而提升用户体验



*	select  //  下拉选项
  *	option // 选项
    *	selected // 加载时默认选择
*	textarea // 文本域
*	required="required" // 必填项
*	autofocus="auotofocus" // 自动焦点
*	name //  如果加上了name属性并且成功提交,那么下次就会显示之前输入过的值



#### 标签

```html
<header>header头部标签</header>
<nav>nav导航标签</nav>
<article>article内容标签</article>
<section>section定义文档某个区域</section>
<aside>aside侧边栏标签</aside>
<footer>footer尾部标签</footer>
```

```html
<video src="media/xxx.mp4" autoplay="autoplay" muted="muted" controls="controls" loop="loop" poster="media/xxx.jpg"></video>
       <! -- <视频   地址=""       自动播放= 自动播放   静音播放=静音   向用户显示播放控件    循环播放   预加载图片 -- >
```

```html
<audio src="audio/xxx.mp3" autoplay="autoplay" controls="controls"></audio>
```





##  CSS

####  引入方式

* 内部样式  // head里面

  ```html
  <style></style>
  ```

  

* 外部样式   

  ```html
  <link rel="stylesheet" href="" ></link>
  ```

  

* 行内样式   

  ```html
  <div style="color: red;"></div>
  ```

  



#### 常用

* font :  ;

  * 简写 font: italic 700 30px/20px "microsoft yahei"

    顺序必须是 font: 样式 粗细 字号/行高  字体 

    也可以省略,其余默认  font: 30px heiti

* text-indent:  2em; 首行缩进

* display 

  * none // 隐藏元素 ,没有删除元素,只是不占位置

* visibility: hidden; 隐藏元素 , 没有删除元素,继续(占用)原位置 

* overflow

  * visible // 默认大小,超出部分照样显示
  * auto // 自动添加滚动条,哪个方向超出就加哪个方向
  * hidden // 直接隐藏溢出的部分
  * scroll // 自动添加滚动条,两个方向都会添加

* outline: none // 去除表单轮廓线

* resize: none // 防止拖拽文本域

* cursor:  

  * pointer(小手)
  * move(移动)
  * text(文本)
  * no-allowed(禁止)

* vertical-align: middle; // 解决图片留白问题   把对象和文字的垂直对齐方式设置成除了base(基线)以外的任意属性

* box-sizing: border-box; // 盒子大小为width 可以使padding和border不会撑大盒子(前提是padding和border不会超过width宽度) 

* filter: blur(0px) // blur是一个函数 小括号内数值越大,图片越模糊,注意数值加px单位

* width: calc(100% - 30px);  // 该函数可以进行加减乘除(+ _ * /)计算 注意括号内空格

* -webkit-touch-callout: none;  // 禁用长按页面时的弹出菜单

* -webkit-appearance: none; // 去除移动端默认的外观样式,以便于自定义新的按钮和输入框样式

* -webkit-tap-highlight-color: transparent; // 将鼠标点击高亮设置为透明

  

#### 选择器

* 普通选择器
  * 标签(元素选择器)
    * div
  * 类选择器
    * . div
  * id选择器
    * #div
* 后代选择器
  * ul li a
  * ul > li > a
* 并集选择器
  * 逗号隔开
* 伪类选择器
  * :link // 初始状态
  * :visited // 访问后状态
  * :hover // 鼠标悬停时状态
  * :active // 鼠标按下,不弹起时状态
  * :focus  // 特殊伪类选择器 多用于表单类 
* 属性选择器
  * 使用方式 标签[属性] {} 
    * input[value]   input但同时具有value属性值才会被选中
    * ^开头 $结尾 *包含 
      * div[class^=ico]
      * div[class$=abc]
* 结构伪类选择器
  * ul li:first-child // ul下第一个li
  * ul li:last-child  // ul下最后一个li
  * ul li:nth-child(1) // ul中第一个li    先执行 :nth-child(1) 若第一个元素不为li,比如说是div 那么不会生效
  * ul li:nth-of-child(1) // 先执行li 再找第一个li 所以就算前面有其他元素也不影响
  * ul li:nth-child(even) // 偶数号li
  * ul li:nth-child(odd) // 奇数号li
  * ol li:nth-child(n) // 公式,子母必须是n ,    2n等同even 2n+1等同odd  n从0开始计算 n+5表示从第五个开始一直到最后  -n+5表示前五个



#### 三大特性

  * 继承性
     父级的部分属性会继承给子级 主要用于简化代码量
  * 层叠性
    * 高优先级覆盖低优先级
    * 相同优先级则后面的覆盖前面
  * 优先级(权重)
     [ !important ]>[ 行内 style ]>[ # id ]>[ . 元素 ] >[继承 和 * ]
     		* 相同优先级则后面的覆盖前面
     		* 继承到的权重为 0 , 算父级 加上 !important 也是执行子级的定义

#### 盒子模型

* padding

  * 可以撑大盒子
  * padding:  上右下左; // 定义顺序为上、右、下、左。缺省值取对面

* magin

  * margin:  上右下左; // 定义顺序为上、右、下、左。缺省值取对面
  * margin存在嵌套元素塌陷问题 即两者间重叠部分取大的数值,被称为相邻元素垂直外边距的合并,  解决方法: 
    * 给父级元素定义边框
    * 给父元素定义内边距  
    * 给父元素添加 overflow:hidden

* border

  * 简写   border: solid 1px red;   // solid实线 dashed虚线 dotted点线

  * 边框数值会影响盒子实际大小问题 可以用C3模型解决

  * border-radius: 左上 右上 右下 左下 。缺省值取对面

  * 用border做三角的方法:

    * 通过使其他方向透明,只给一个方向设置颜色来达到效果

    * ```css
      /* 三角盒子的 width: ;和height: ;必须为0 */
      width: 0;
      height: 0;
      /* 为了照顾部分低版本浏览器兼容性的问题所以要加上字体大小和行高 */
      font-size: 0px;
      line-height: 0px;
      /* border: 100px solid transparent; */
      border-top: 100px solid yellow;
      border-bottom: 100px solid red;
      border-left: 100px solid black;
      border-right: 100px solid green;
      ```

    * ```css
      /* 单尖三角 */
      border-color: transparent transparent transparent red;
      border-style: solid;
      border-width: 0px 0px 30px 10px;
      ```

      

* 盒子阴影

  * 简写     box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);

    盒子阴影: 水平 垂直 羽化 大小 颜色(.3为透明度百分之三十)

  * 阴影不会影响模型大小

#### 浮动

* float

  * 一浮具浮 ,脱标

  * 清除浮动的四种方式

    * .clear {  clear: both; }   // 通过加一个空盒子产生隔断效果,实现清除浮动影响 

    * 父盒子使用after伪元素清除浮动

      * ```css
        .clearfix::after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
            content: "";
            display: block;
            height: 0;
            clear:both;
            visibility: hidden;
        }
        .clearfix{
            *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
        }
        ```

    * 父盒子使用before和after双伪元素清除浮动

      * ```css
        .clearfix::after,.clearfix::before{
             content: "";
             display: table;
         }
         .clearfix:after{
             clear: both;
         }
         .clearfix{
             *zoom: 1;
         }
        ```

    * 父盒子套个 overflow:hidden

  



#### 定位

* 静态定位 position: static; // 不脱标,不能使用边偏移
* 相对定位 position: relative; // 不脱标,参照原自身位置移动
* 绝对定位 position: absolute; // 脱标,参照带有定位属性的最近一级父级来移动  一般子绝父相
* 固定定位 position: fixed; // 脱标,浏览器可视区来确定位置
* 粘性定位 position: sticky; // 不脱标,浏览器可视区来确定位置
* z-index: ; // 数值越大则优先级越高 数值可以为负值, 但必须是整数且不带单位 z-indexz 只能作用于定位



#### 弹性盒子 flex

* 父级
  * justify-content: // 主轴
    *  space-around;  // 平均分配剩余空间
    *  space-between; // 先让两边贴边,再分配剩余空间
    *  center; // 子元素居中
  * align-items: // 侧轴
    * stretch;  // 侧轴拉伸,但是子元素不能给高度
    * center; // 子元素居中
  * align-content: // 只有在子元素产生换行的情况下才会产生效果
  * flex-flow: wrap column; //  简写:flex-flow: ; = flex-wrap: ; + flex-direction:
    * 是否拆行
    * 元素是跟着主轴排列的

* 子级
  * flex 可以设置占比
  * 父级有flex属性子盒子可以直接设置高度
  * align-self: flex-end; // 设置子项自身在侧轴上的对齐方式
  * order: -1; // order数值越小的越靠前 默认为0
* 关于 position的fixed和flex 冲突问题
  * flex盒子外面套个盒子 给外面盒子做定位

#### REM

* em是相对父元素字体的大小
* rem是相对根目录字体的大小
  * 需要给html加上字体大小
  * 将设计稿分为N份,在不同屏幕下设置不同的html字体大小
    * 不同屏幕大小份数需要一致
    * 公式 页面元素的rem值=页面元素值(px)/(屏幕宽度/划分的份数)
  * rem优点是只要更改html的字体大小就可对页面内所有的文字大小同时更改

#### 媒体查询

* 媒体查询可以根据不同的屏幕尺寸在改变不同的样式

  |         | all(用于所有设备)                        |      | and(将多个媒体特性连接在一起,相当于"且") |      |                 |
  | ------- | ---------------------------------------- | :--- | ---------------------------------------- | ---- | --------------- |
  | @media: | print(用于打印机和打印预览)              | +    | not(排除某个媒体类型,相当于"非")         | +    | (max-width: px) |
  |         | screen(用于电脑屏幕,平板电脑,只能手机等) |      | only(制定某个特定的媒体类型,可以省略)    |      |                 |

* @media screen and (max-width: 1200px) 

  *  声明 电脑  且 最大宽度小于等于1200px时 启用我们想要的样式

* 媒体查询引入样式 

  * 分开编写移动端和PC端样式,再通过媒体查询来引入不同的css样式

  * ```html
    <link rel="stylesheet" href="320.css" media="screen and (min-width:320px)">
    ```

    



#### 媒体查询+REM

* 思路就是通过媒体查询网页宽度来改变rem对html字体大小的响应

```html
@media screen and (min-width: 320px) {
  html {
    font-size: 50px;
  }
}
```



#### LESS

* ```html
  <link rel="stylesheet" href="xxxxLESS.css">
  ```

  

* @变量名:值 

  * ```less
    @colorpink: red;
    div {
        background-color: @colorpink;
    }
    section {
        background-color: @colorpink;
    }
    ```



#### 字体图标

* 以icomoon图标为例 在style中 声明引用

  * ```css
    @font-face {
      font-family: 'icomoon';
      src: url('fonts/icomoon.eot?lxhhsv');
      src: url('fonts/icomoon.eot?lxhhsv#iefix')
      format('embedded-opentype'),
      url('fonts/icomoon.ttf?lxhhsv') format('truetype'),
      url('fonts/icomoon.woff?lxhhsv') format('woff'),
      url('fonts/icomoon.svg?lxhhsv#icomoon') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }
    ```

  * ```css
    span {
      content: '\ea43';
      font-family: 'icomoon';
    }
    ```

    

  * ```html
    <span>
    <! -- 去demo.html中复制想要的字 -- >
    
    </span>
    ```



#### 多行文字省略号

* 单行

  * ```css
    /* 1.强制一行显示 */
    
    white-space: nowrap;
    
    /* 2.超出隐藏 */
    
    overflow: hidden;
    
    /* 3.文字溢出时用省略号显示 */
    
    text-overflow: ellipsis;
    ```

    

* 多行

  * ```css
    overflow: hidden;
    text-overflow: ellipsis;
    /* 弹性伸缩盒子模型显示 */
    display: -webkit-box;
    /* 限制在一个块元素显示的文本行数 */
    -webkit-line-clamp: 2;
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-box-orient: vertical;
    ```

    

#### 伪元素

* 伪元素的父级就是冒号前面的元素 实际使用: 字体图标等 

* ::after {} // 在元素内部的后面插入内容
* ::before {} // 在元素内部的前面插入内容



####	背景background

* background-attachment: fixed; // 背景附着

* 简写  background: transparent url(1.jpg) no-repeat fixed top;

  顺序:           背景 :       颜色    图片地址  平铺   固定 位置 ;

* background-size: cover; // 拉伸

* 精灵图  // 通过background-position:  ;  属性来调整背景图展示想要的位置

* 在伪元素中设置background: rgba(0, 0, 0, .3) url(images/0.png) no-repeat center;父元素加hover效果可以做遮罩层效果

  * div:hover::before { display: block; z-index: 9;}

* 渐变

  * background: linear-gradient(to bottom right, #ff5d72, #ff7dcf)
  
    

#### 过渡transition

* transition: all 10s ease 2s; // 过渡:对象 完成时间 效果 延时
* 谁过渡给谁加

#### 变换transform

* transform:
  *  translate( x, y) // 移动
  *  rotate(?deg)  // 旋转
  *  scale(x,y) // 放大缩小
* transform-origin: x  y;  // 旋转基点
* 3D变换
  * perspective: 500px; // 透视要写到被观察元素的父级上 必须要添加透视
  * transform-style: preserve-3d // 让子元素在3D中呈现



#### 动画 animation

* animation: xxx             2s             ease            1s         infinite    alternate     forwards

  动画指令:动画名称 持续时间 运动速度曲线 何时开始 播放次数 是否反向 动画起始或者结束的状态

  注意持续时间和何时开始的顺序不能写反 name和duration属性一定要写

* animation:xxx 3s steps(5) infinite // setps按步执行

* animation-play-state: paused; // 设置动画播放状态

* @keyframes  xxx {   0% {}        100% {}   }  // 详细设置动画状态

* 多个动画用逗号隔开

* 旋转木马思路 ul li:nth-child(n) {  transform: rotateY(0deg) translateZ(300px);   } 先旋转再横移



## H5C3

#### H5C3部分方法

* Document.createElement()
  * 用于创建一个由标签名称 tagName 指定的 HTML 元素。
* readAsDataURL 
  * 读取指定的Blob 或  File 对象 result 属性将包含一个  data: URL格式的字符串（base64编码）以表示所读取文件的内容 
* new FileReader()
  * FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据

* DataTransfer.setData() 
  * 用来设置拖放操作的drag data到指定的数据和类型
  * 如果给定类型的数据不存在，则将其添加到拖动数据存储的末尾，使得 types 列表中的最后一个项目将是新类型。
  * 如果给定类型的数据已经存在，现有数据将被替换为相同的位置。也就是说，替换相同类型的数据时 types列表的顺序不会更改。

#### 拖动事件

* ondragstart

  * 开始拖动元素时触发

* ondrag

  * 元素整个拖拽过程都会触发

* ondragend 

  *  完成元素拖动后触发

* ondragenter 

  * 当被鼠标拖动的对象进入其容器范围内时触发此事件

* ondragover 

  * 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  * 想要触发ondrop事件,就必须在这个位置阻止浏览器的默认行为
  * e.preventDefault()

* ondragleave  

  * 当被鼠标拖动的对象离开其容器范围内时触发此事件

* ondrop  

  * 在一个拖动过程中，释放鼠标键时触发此事件

* navigator.geolocation.getCurrentPosition(success, error, options)

  * success
    成功得到位置信息时的回调函数，使用Position 对象作为唯一的参数
  * error 可选
    获取位置信息失败时的回调函数，使用 PositionError 对象作为唯一的参数，这是一个可选项。
    * POSITION_UNAVAILABLE  位置不可用
    * TIMEOUT  请求超时
    * PERMISSION_DENIED   用户拒绝获取地理位置的请求
    * UNKNOWN_ERROR       未知错误
  * options 可选
    一个可选的PositionOptions 对象。

* window.localStorage

  * setItem()       存储
  * getItem()       获取
  * removeItem()  删除

#### video /audio

* canPlayType()  检测浏览器是否能播放指定的音频/视频类型
* load()  重新加载音频/视频元素
* play()  开始播放音频/视频
* pause()  暂停当前播放的音频/视频
* autoplay  设置或返回是否在加载完成后随即播放音频/视频
* volume    设置或返回音频/视频的音量
* videoTracks     返回表示可用视频轨道的 VideoTrackList 对象 
* textTracks      返回表示可用文本轨道的 TextTrackList 对象 
* startDate      返回表示当前时间偏移的 Date 对象
* src         设置或返回音频/视频元素的当前来源
* seeking       返回用户是否正在音频/视频中进行查找
* seekable       返回表示音频/视频可寻址部分的 TimeRanges 对象
* played        返回表示音频/视频已播放部分的 TimeRanges 对象
* buffered       返回表示音频/视频已缓冲部分的 TimeRanges 对象
* readyState      返回音频/视频当前的就绪状态
* preload       设置或返回音频/视频是否应该在页面加载后进行加载
* playbackRate     设置或返回音频/视频播放的速度
* paused        设置或返回音频/视频是否暂停
* networkState     返回音频/视频的当前网络状态
* muted        设置或返回音频/视频是否静音
* mediaGroup      设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）
* loop         设置或返回音频/视频是否应在结束时重新播放
* error        返回表示音频/视频错误状态的 MediaError 对象
* ended        返回音频/视频的播放是否已结束
* duration       返回当前音频/视频的长度（以秒计）
* defaultPlaybackRate 设置或返回音频/视频的默认播放速度
* defaultMuted     设置或返回音频/视频默认是否静音
* currentTime     设置或返回音频/视频中的当前播放位置（以秒计）
* currentSrc      返回当前音频/视频的 URL
* crossOrigin     设置或返回音频/视频的 CORS 设置
* controls       设置或返回音频/视频是否显示控件（比如播放/暂停等）
* controller      返回表示音频/视频当前媒体控制器的 MediaController 对象
* audioTracks     返回表示可用音频轨道的 AudioTrackList 对象



#### cache

* cache 文件  

  * CACHE MANIFEST    

    * ```cache
      这条代码必须是当前文档的第一句
      #后面写注释
      #需要缓存的文件清单列表
      CACHE:
      #配置每一次都需要重新从服务器获取的文件清单列表
      ../images/1.jpg
      ../images/2.jpg
      #配置如果文件无法获取则使用指定的文件进行代替
      ```

#### Canvas

* 使用 *JavaScript* 在网页上绘制图像

* 它没有自己的行为，但是定义了一个API 支持脚本化客户端绘图操作

* 你可以直接在该对象上指定宽度和高度，但是，其大多数功能都可以通过 CanvasRenderingContext2D 对象获得。 这是通过 Canvas 对象的 getContext() 方法并且把直接量字符串 "2d" 作为唯一的参数传递给它而获得的

* ```html
  <canvas  id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
  </canvas>
  ```

* **canvas** 元素本身是没有绘图能力的。所有的绘制工作必须在 *JavaScript* 内部完成：

  ```js
  // 画一个红色的矩形画布
  <script type="text/javascript">
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    cxt.fillStyle="#FF0000";
    cxt.fillRect(0,0,150,75); // 该方法规定了形状、位置和尺寸
  </script>
  ```

  

* 画线

  * moveTo(x,y) 定义线条开始坐标
  * lineTo(x,y) 定义线条结束坐标
  * 绘制线条我们必须使用到 "*ink*" 的方法，就像 stroke() 

* 画圆

  * arc(x,y,r,start,stop)    
    * 原点坐标x,y   , 半径,  起点, 终点
    * ctx.arc(95,50,40,0,2*Math.PI);

* 曲线

  * *quadraticCurveTo()*    通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
    * **开始点**：moveTo(x,y)
    * **控制点**：quadraticCurveTo(cpx, cpy, x, y)
      * cpx 贝塞尔控制点的x坐标
    * **结束点**：quadraticCurveTo(cpx, cpy, x, y)

* 渐变

  * createLinearGradient(x0,  y0,  x1,  y1)
  * createRadialGradient(x0,  y0,  x1,  y1) 

* 图片

  * context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    * img 规定要使用的图像、画布或视频
    * sx sy  可选。开始剪切的 x,y坐标位置
    * swidth  sheight  可选。被剪切图像的宽度、高度
    * width  height  可选。要使用的图像的宽度、高度。（伸展或缩小图像）
  * drawImage(img , x ,y)

#### Web Worker

* 为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。

  可以分配一些计算密集或者高延迟的任务

* 注意点: 

  * 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源
  * Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象
  * Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成
  * Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求
  * Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络

* 使用方法

  * 主线程

    * 主线程新建一个线程  

      var worker = new Worker('work.js');

    * 主线程向Worker发送消息

      worker.postMessage({method: 'echo', args: ['Work']});

    * 主线程监听函数,接受子线程发回的处理结果

      ```js
      worker.onmessage = function (event) {
        console.log('Received message ' + event.data);
        doSomething();
      }
      
      function doSomething() {
        // 执行任务
        worker.postMessage('Work done!');
      }
      ```

    * Worker完成任务以后,就可以关闭了,不然耗费内存

      worker.terminate();

  * Worker线程

    * 监听message事件

      ```js
      self.addEventListener('message', function (e) {
        self.postMessage('You said: ' + e.data);
          // 接收处理,返回运算结果给主线程
      }, false);
      ```

      

      



## JS

#### 引入方式

* 内嵌式
* 外链式
* 行内式

#### 组成

* ECMAScript JS语法
  * js属于解释性语言,是解释一行执行一行
* DOM 页面文档对象模型
* BOM 浏览器对象模型



#### 变量

* 命名规则  
  * 数字 子母 _ $
  * 区分大小写,不能以数字开头
  * 不使用关键字和保留字
  * 遵循驼峰命名法
* 使用方式
  * 声明
  * 赋值
  * 使用
* 声明 
  * 多个声明时用逗号隔开,例: var age = 1, addess = '太阳', _name = '月亮';
  * 声明变量的特殊情况
    * 只声明不赋值:输出undefined(未定义)
    * 不声明不赋值:报错
    * 不声明只赋值:能输出,但考虑到全局变量的因素,所以不推荐使用
  * js 编程语言是有很强的逻辑性
    * 变量AB值互换需要借助一个空的C
    * 把A给空的C ,这时AC都有a数据
    * 再用B数据覆盖A数据,这时A(b),B(b),C(a)
    * C再给B,这时A(b),B(a),C(c)
    * C=null , 释放C,剩下AB



#### 数据类型

* js 的变量数据类型属于弱类型, 是在程序运行过程中,根据等号右边的值来确定

  js拥有动态类型,同时也意味着相同的变量可以做不同的类型

* 数字型 Number

  * Number.MAX_VALUE   数字型的最大值
  * Number.MIN_VALUE    数字型的最小值
  * Infinity 无穷大
  * NaN   非数字
  * 十六进制  0 ~ 9 a ~ f #ffffff 数字的前面加 0x 表示十六进制
  * 八进制 0 ~ 7 我们程序里面数字前面加0 表示八进制

* 字符串 String

  * new String (params)  
    * 把简单数据类型包装为复杂数据类型
    * 占用内存空间
  * **JSON.parse()**  将字符串数据转换为 JavaScript 对象
  * 变量.charAt(index) 根据位置返回字符
  * 变量.charCodeAt(index) 返回相应索引号的字符ASCII值 目的： 判断用户按下了那个键 
  * 变量[index]  //  H5 新增  根据位置返回字符
  * replace('被替换的字符', '替换为的字符')  // 只会替换第一个字符
  * split('分隔符')  // 字符转换为数组
  * 字符串转义符
    * \n 换行
    * \\\ 单斜杠
    * \\' 单引号
    * \\" 双引号
    * \t tab缩进
    * \b 空格

* 布尔型 Boolean

  * true 参与运算时等于1
  * false 参与运算时等于0

* undefined // 未定义 与数字相加输出NaN

* null // 空值

* Symbol  // 独一无二的值

* 转字符:

  * 变量.toString() // 调用方法方式
  * String(变量) // 转字符串
  * 利用+拼接字符串的方法实现转换效果 隐式转换

* 转数字:

  * parseInt(变量)     // 可以把 字符型的转换为数字型 得到是整数
  * parseFloat(变量) 可以把 字符型的转换为数字型 得到是小数 浮点数
  * 利用 Number(变量)
  * 利用了算数运算 减乘除 隐式转换

* 转换成布尔型boolean: 

  *  Boolean()
  *  除了代表空('')和否定(0)(NaN)(null)(undefined)的值会被转换成false,其余全为true

* isNaN本身不判断，它的内部用Number()方进行判断，如果Number能成功转化成数字，就返回false，否则就返回true



#### 精度问题

* ```js
  // Number.EPSILON 是JavaScript的最小精度   值接近2-52次方
  function num(x, y) {
    if (Math.abs(x - y < Number.EPSILON)) {
      return true
    } else {
      return false
    }
  }
  console.log(0.1 + 0.2 === 0.3)   //false
  console.log(num(0.1 + 0.2, 0.3)) // true
  ```

  



#### 运算

* +-*/
* 浮点数运算会有误差问题
* % 取余   前面的数字为正则正,为负则负
* 由数字、运算符、变量等组成的式子 叫表达式  //如:   1+1=2
* 递增++   递减--
  * 前置  ++变量 (先己后人) 先递增变量自身, 然后讲返回的值加入运算
  * 后置  变量++ (先人后己) 先原值运算 然后在递增自身,不会影响运算的值
* 比较运算符 返回布尔值
  * === 全等  要求 两侧的值、数据类型完全一致才可以
  * == 等于 值一致就行
* 逻辑运算
  *  && 与    
     * 都是真才返回最后一位真
     * 略过真找假, 中断 ,返第一位假 
  *  ||  或  
     * 只有两个都是假才输出假
     * 略过假找真, 中断 ,返第一位真
  *  ! 非      
     *  ！对于 false 语句返回 true，对于 true 语句返回 false
  *  赋值运算符 +=      -=      *=     /=      %=
  *  运算优先级 按1至8顺序运算
     * 1.括号
     * 2.一元运算 ++ -- !
     * 3.算数运算 先* / % 后+ -
     * 4.关系运算 > < >= <= 
     * 5.相等运算 == != === !==
     * 逻辑运算 先 与&& 后 非||
     * 赋值 =
     * 逗号运算 ,

#### 判断

* if... else ...

* if... else if ... else

* ... ? ... : ... ;  三元表达式

* switch ... { case 值 : 执行语句1;break;  ······ default: 最后的执行语句 }

* typeof()     // 判断数据类型

  * 数值/字符串/布尔值/undefined/function
  * 不能区别:null与object,object和array

* A instanceof B 运算符 

  *  A里面有没有B 没有就返回-1 有就返回对应索引号
  *  检查数组时从最后一个元素开始往前找

* A.indexOf(B, n)  从索引号是n的位置开始往后查找 A里面是否有B字符

* includes()   用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false

* Array.isArray(参数) 

  

#### 循环

* for(let i = 0; 条件表达式; i++ ) { 执行语句 }
* for( let key in obj ) // 遍历
* while (条件表达式)   {  执行循环体  }   // 不满足条件就一直执行
* do {   循环体  } while (条件表达式)
* continue;跳过当前循环
* break; 立即跳出整个循环



#### 函数

* 创建函数

  * 声明函数 函数名( ) {函数体}             function name(params) { }
  * 匿名函数   变量 = function ( params ) {  }
    * 函数表达式声明方式跟声明变量差不多,  只不过变量里面存的是值 而 函数表达式里面存的是函数
    * 函数表达式也可以进行传递参数

* return 

  * 用逗号隔开也只能返回一个值,返回为最后一个值
  * 可以用数组的方式来返回多个值
  * return后面的代码不会被执行

* 函数名( )   函数不调用则不会执行

* ITFE    立即执行函数

* 其它调用方式       重定义this

  * a.call( b )   

    * 使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

    * 接受的是**一个参数列表** 

    * function.call(thisArg, arg1, arg2, ...)

    * ```js
      var obj = {};
      function test2() {
        this.xxx = 'mmmmm'
      };
      // obj.test2() //不能直接调用 会报错
      test2.call(obj); //相当于    obj.test2()  
      //可以让一个函数成为指定任意对象的方法进行调用
      console.log(obj.xxx);
      ```

      

  * .apply()   

    * 同call方法
    * 区别是接受的是**一个包含多个参数的数组** 

  * .bind() 

    * 创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
    * function.bind(thisArg[, arg1[, arg2[, ...]]])



#### 数组

* 创建

  * new Array
  * [ ]

* 修改

  * 修改length长度
    * 不够, 赠加未定义元素
    * 超出, 删除超出元素
  * 索引号
    * 数组[索引号]   赋值修改
    * 数组[索引号]   超过数组长度,中间差多少会补多少个empty
  * 原数组发生变化
    * push()  // 追加 元素   返回 新数组的长度 
    * unshift()  // 在数组的开头 添加一个或者多个数组元素  返回 新数组的长度 
    * pop()  // pop没有参数  一次只能删除一个元素  返回被删除的那个元素
    * shift() // 删除数组的第一个元素   一次只删除一个元素  返回被删除的那个元素

* 筛选

  * 遍历循环   条件判断  然后赋值,   arr1[arr1.length] = arr[i];

* 翻转

  * 定义个空数组   for循环遍历 let = arr.length - 1
  * arr.reverse();  直接使用方法

* 冒泡排序

  * arr1.sort(function(a, b) { // return a - b; 升序的顺序排列  return b - a; // 降序的顺序排列  })  直接使用现成方法

  * ```js
    const arr = [3, 1, 5, 12, 4, 2, 11];
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = 0; j <= arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    ```

* join()  自定义数组分隔符

* concat( params )  合并两个或多个数组 不会更改现有数组，而是返回一个新数组

* slice(begin, end)    数组两个索引 返回的值包括 begin， 不包括end  不会更改现有数组 返回一个新数组

* splice(begin, 替换数量, 替换元素 )   替换数量为零有插入元素效果  会改变原数组

* substr('截取的起始位置', '截取几个字符')

#### 对象

* 创建对象

  * ⭐new关键字执行过程

    1. new 构造函数可以在内存中创建了一个空的对象 

    2. this 就会指向刚才创建的空对象

    3. 执行构造函数里面的代码 给这个空对象添加属性和方法

    4. 返回这个对象

  * 利用对象字面量       

    *  适用于对象内部数据 确定 的情况 但是如果创建多个会有重复代码
    *  let 对象名 = { key:value }

  * 工厂模式    

    * 通过工厂函数动态创建对象并返回 适用需要创建多个对象 但是对象没有一个具体的类型,都是object类型

    * ```js
      function p(a, b) {
        var obj = {
          a: a,
          b: b,
          setC: function(a) {
            this.a = a
          },
        }
        return obj
      };
      ```

      

  * 构造 

    * 适用于对象内部数据 不确定 的情况  但是语句太多
    * let 对象名 =  new Object()

    * 对象名.key = value

  * 构造函数

    * 自定义构造函数,通过new创建对象 适用于需要创建多个类型确定的对象  但是每个对象都要相同的数据 浪费内存

    * function 构造函数名( 传参 ) { this.key = value; this.方法 =function() {}}

    * function 构造函数名( params ) { this.key = key; }   // 批量

      const 对象名 = new 构造函数名( params );

  * 构造加原型的组合模式 

    * 自定义构造函数,属性在函数中初始化,方法添加到原型上 适应需要创建多个类型确定的对象

    * ```js
      function P(name, age) {
        this.name = name
        this.age = age
      }
      P.prototype.setName = function(name) {
        this.name = name
      }
      var p1 = new P('a', 22)
      var p2 = new P('b', 33)
      ```

      

  * 给对象添加属性时用 [**属性名**] 的情况

    * 属性名中带有- 空格特殊zi符的
      * 对象名['content-tyoe']='text/json'
    * 属性名是变量的情况
      * 对象名[propName]=value

    

* 调用方式

  * 对象名.key
  * 对象名['属性名']
  * 对象名.方法名()

* Date() 日期对象

  * 是一个构造函数 必须使用new 来调用创建日期对象
  * 传参  数字型 2000, 10, 01 返回的是11月 月份是从0月开始到11月结束
  * 传参  字符串型 '2000-10-1 8:8:8' 正常返回
  * 如果没有参数 返回当前系统的当前时间
  * const  date = new Date();
    * date.getFullYear()   //返回当前年份
    * date.getMonth() + 1  //返回月份比实际月份小1 所以得加1
    * date.getDate()    //返回几号
    * date.getDay()   //周日返回0,一周是从星期日开始的 
    * date.getHours()  //时
    * date.getMinutes()  //分
    * date.getSeconds() //秒
  * 时间戳 // 不是当前时间的毫秒数 而是距离1970年1月1号过了多少毫秒数
    * date.valueOf()  // 就是现在时间 距离1970.1.1 总的毫秒数
    * date.getTime() // 返回的就是总的毫秒数
    * const date = +new Date();  // +new Date() 返回的就是总的毫秒数
    * Date.now()  // 新方法直接获得总的毫秒数
  * 倒计时 
    * 核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时 ，但是不能拿着时分秒相减，比如 05 分减去25分，结果会是负数的
    * 用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数
    * 最后把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）
    * 转换公式
      * d = parseInt(总秒数/ 60/60 /24);  // 计算天数
      * h = parseInt(总秒数/ 60/60 %24)  //  计算小时
      * m = parseInt(总秒数 /60 %60 );   //  计算分数
      * s = parseInt(总秒数%60);      //  计算当前秒数

  

  

#### Math

* .abs()     绝对值方法 
* .floor()    向下取整   1.99返回 1
* .ceil()     向上取整  1.01返回 2
* .round()   四舍五入  .5特殊 往大取 
  * -1.5  返回 -1
  * -1.1   返回 -1
* .random()  0到1随机数
  * Math.floor(Math.random() * (max - min + 1)) + min



#### 事件

* 事件源 事件类型 事件处理程序

* innerText 不识别html标签 非标准 去除空格和换行

* innerHTML 识别html标签 W3C标准 保留空格和换行的

* console.dir()   打印返回的是元素对象 更好的查看里面的属性和方法

* addEventListener 事件监听

  * document.addEventListener('事件类型', function() {    事件处理程序   }
  * scroll 滚定事件

* 键盘事件

  * keyup  按键弹起的时候触发
  * keydown 按键按下的时候触发
  * keypress   按键按下的时候触发   不能识别功能键 比如 ctrl shift 左右箭头
  * 三个事件的执行顺序   keydown -- keypress -- keyup
  * e.keyCode属性可以得到相应键的ASCII码值

* 鼠标事件

  * click   鼠标左键点击
  * dblclick  双击
  * mousedown  单击鼠标任一按钮
  * mouseover   鼠标指针移出某个元素到另一个元素上时发生
  * mouseup    松开任意一个鼠标按钮时发生
  * mouseenter     不产生冒泡  其余同 mousemove
  * mousemove     鼠标在某个元素上时持续发生  产生冒泡
  * mouseleave       指针移出某个元素时 不产生冒泡
  * mouseout   指针移出某个元素时 会产生冒泡

* 触摸事件

  * touchstart  手指触摸到一个 DOM 元素时触发
  * touchmove   手指在一个 DOM 元素上滑动时触发
  * touchend   手指从一个 DOM 元素上移开时触发
  * touches   正在触摸屏幕的所有手指的一个列表
  * targetTouches   正在触摸当前 DOM 元素上的手指的一个列表。
  * changedTouches 涉及当前事件的手指的一个列表

* 注册事件的三种方法

  * on事件
  * addEventListener()
  * attachEvent        //  ie9 以前的版本支持

* 删除事件

  * on事件 = null
  * removeEventListener 删除事件
  * detachEvent         //  ie9 以前的版本支持
  * contextmenu    禁用右键菜单
  * selectstart         禁止选中文字

* 事件流

  * JS 代码中只能执行捕获或者冒泡其中的一个阶段。
  * 捕获阶段
    * 如果addEventListener 第三个参数是 true 那么则处于捕获阶段 document -> html -> body -> father -> son
  * 冒泡阶段
    *  如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡阶段 son -> father ->body -> html -> document
  * 阻止冒泡
    * e.stopPropagation();
    * e.cancelBubble = true; // 非标准

* 事件委托 

  * 核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点

* event 事件对象

  * e.type   返回事件类型
  * e.target 返回的是触发事件的对象（元素）
    * ie678兼容性的写法 e = e || window.event;
  * e.preventDefault();   
    * 用于 addEventListener()
    * 阻止默认行为（事件） 链接不跳转等
    * ie678兼容性的写法  e.returnValue;
  * return false 
    * 阻止默认行为 没有兼容性问题  用于on事件
  * client    在可视区的x和y坐标
    * clientTop 返回元素上边框的大小
    * clientWidth   返回元素自身包括padding、内容区的高度,不含边框
  * page     在页面文档的x和y坐标
  * screen  在电脑屏幕的x和y坐标
  * .offset
    * .offsetTop         .offsetLeft
      * 可以得到元素的偏移 位置 返回的不带单位的数值 
      * 它以带有定位的父亲为准 如果么有父级或者父级没有定位 则以 body 为准
    * .offsetWidth      .offsetHeight
      * 只读,不能赋值
      * 可以得到元素的大小 宽度和高度 是包含padding + border + width 
    * .offsetParent
      * 逐级查找,返回带有定位的父级 否则返回的是body  区别于.parentNode
  * window.pageYOffset 页面被卷去的头部

* js动画思路

  * ```js
    function animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        //(目标位置 - 对象距左侧距离 ) 除以 10
        var step = (target - obj.offsetLeft) / 10;
        // 正数向上取整,负数向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
          clearInterval(obj.timer);
          if (callback) {
            callback();
          }
        } else {
          obj.style.left = obj.offsetLeft + step + 'px';
        }
      }, 50)
    }
    animate(obj, target, callback)
    ```

  

#### 增删改查

* 创建元素

  * document.write() 
    * 创建元素 如果页面文档流加载完毕，再调用这句话会导致页面重绘
  * innerHTML 创建元素
    * 拼接字符串形式最慢
    * 数组形式最快 但是结构相对复杂
  * **`insertAdjacentHTML()`** 
    * 将指定的文本解析为 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 元素，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用innerHTML操作更快。
  * document.createElement() 
    * 效率稍低,但是结构清晰

* 获取元素

  * 自定义属性值
    * element.getAttribute('属性')  获取属性
    * .dataset 是一个集合里面存放了所有以data开头的自定义属性
    * element.setAttribute('属性', '值');  增加属性
    * removeAttribute(属性)   移除属性 
  * getElementById()   
    * 获取的是动态集合  动态就是选出的元素会随文档改变
  * querySelector()  
    * 获取的是静态集合  静态的取出来之后就和文档的改变无关了
  * document.documentElement
    * 获取html
  * document.body
    * 获取body 
  * Window.getSelection
    * 返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。
  * 父节点
    * .parentNode   离元素最近一级的父节点  没有父节点就返回null
  * 子节点
    * .childNodes     所有子节点 包含 元素节点 文本节点等等
    * .firstChild   包含 元素节点 文本节点等等
    * .lastChild    包含 元素节点 文本节点等等
    * .children 获取所有的子节点
      * .children[ ]
    * .firstElementChild  返回节点
    * .lastElementChild   返回节点
  * 兄弟节点
    * .nextSibling        包含元素节点或者 文本节点等等
    * .previousSibling    包含元素节点或者 文本节点等等
    * .nextElementSibling  下一个
    * .previousElementSibling 上一个
  * 增加节点
    * 1.创建 2.添加
    * document.createElement('标签')
    * node.appendChild(child)
      * node 父级 child 是子级 后面追加元素 类似于数组中的push
    * node.insertBefore (child, 指定元素索引位置)

* 改

  * 排他
    * 先循环把所有的元素设置清除
    * 再给当前的元素添加设置
  * 全选和取消全选
    * 让所有子复选框的checked属性（选中状态） 跟随 全选按钮即可
    * 每次点击查看子复选框状态,有一个未选中,全选就不处于选中
  * Selection.removeAllRanges()   // 这是一个实验中的功能
    * 会从当前selection对象中移除所有的range对象,取消所有的选择只 留下anchorNode 和focusNode属性并将其设置为null。

* 删

  * node.removeChild(child)

  

  

#### URL

* location

  * .getItem()   返回指定的Storage Object项的值
  * .setItem(' ', data)    设置指定的存储对象项的值
  * .search      url中问号后面的一串字符源
  * .pathname   设置或返回当前 URL 的路径部分
  * .host          设置或返回主机名和当前 URL 的端口号
  * .href           设置或返回完整的 URL
  * .port            设置或返回当前 URL 的端口号
  * .hash           设置或返回从井号 (#) 开始的 URL（锚）
  * .assign()      加载新的文档 记录浏览历史，所以可以实现后退功能
  * .reload()      重新加载当前文档
  * replace()   用新的文档替换当前文档     不记录浏览历史，所以不可以实现后退功能

* history

  * history.go(1)        加载 history 列表中的某个具体页面
  * history.forward()   类似history.go(1)
  * history.back()       类似history.go(-1)

* navigator

  * appVersion   返回浏览器的平台和版本信息。

  * .userAgent  返回由客户机发送服务器的 user-agent 头部的值

    * 可以做类似媒体查询的效果

    * ```js
      if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
         window.location.href = "../H5/index.html"; //手机
      }
      ```



#### 定时器

* setTimeout  延时器  执行一次
* setInterva    定时器   重复调用
* clearTimeout(定时器变量名)    清除计时



#### BOM

* load  等页面内容全部加载完毕，包含页面dom元素 图片 flash css 等等
* DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些





## js高级

#### 堆栈

* 堆  对象
* 栈  变量   后进先出

#### 指针

* 一般情况下this的最终指向的是调用它的对象
* 全局作用域或者普通函数中this指向全局对象window
  * 注意定时器里面的this指向window
* 方法调用中,谁调用this指向谁
* 构造函数中this指向构造函数的实例



#### 变量提升

* 函数提升优于变量提升
  * 解析器在向执行环境中加载数据时会率先读取函数声明，并使其在执行任何代码之前可用(可访问)，即函数声明提升

#### 原型

* instanceof 运算符可以用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
*   隐式原型   对象的__ proto __属性:创建对象时自动添加,默认值为构造函数的 prototype 属性值  隐式原型
*   显式原型   函数的 prototype 属性:在定义函数时自动添加,默认是一个空的 Object 对象
* 所有函数的隐式原型都相等
* 所有函数的隐式原型和 Function 的显式原型都相等

####  原型链
 * <img src="@/assets/images/md/原型链.png" alt="">



#### 继承

* 原型链继承

  * 当子类型的原型为父类原型的一个实例对象时  

    * b.prototype = new a(); 

    constructor本来存在于原型中,指向构造函数,成为子对象后,该原型链中的constructor在父原型中找到,因此会指向父构造函数

    - 所以 让子类型的原型的 constructor 重新指向 子类型 

      b.prototype.constructor = b

  

- 用构造函数继承
  - 1.定义父类型构造函数
  - 2.定义子类型构造函数
  - 3.在子类型构造函数中调用父类型构造
  - 关键点: 在子类型构造函数中通用  call  调用父类型构造函数
- 组合继承 



#### 拷贝

* 浅拷贝    assign(newObj, oldObj)

  * 拷贝数据

* 深拷贝    deepCopy(newObj, oldObj)

  * 拷贝数据和数据类型

  * ```js
    function deepCopy(newObj, oldObj) {
      for (var k in oldObj) {
        var item = oldObj[k];
        if (item instanceof Array) {
          newObj[k] = [];
          deepCopy(newObj[k], item)
        } else if (item instanceof Object) {
          newObj[k] = {};
          deepCopy(newObj[k], item)
        } else {
          newObj[k] = item;
        }
      }
    }
    // 根据对象数据类型拷贝
    ```

    

#### 作用域

* 全局

  * 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
  * var   // 尽量别用
  * 在全局作用域下的变量 在全局下都可以使用
  * 如果在函数内部 没有声明直接赋值的变量也属于全局变量

* 局部

  * 局部变量 当我们程序执行完毕就会销毁， 比较节约内存资源
  * 函数内部  
    * 函数的形参也可以看做是局部变量
  * var a = b = c = 9;  // 相当于 var a=9;  b=9;  c=9,bc直接赋值了,相当于全局变量,a还是局部变量

* 闭包

  * 比较消耗内存

  



#### 正则

* [^ ] 中括号内加 ^ 表示取反
* \d 相当于 [0-9]
* 一些特殊的字符 比如:  / 需要在前面再加一个 \
* new RegExp
* g    全局,找到所有的匹配
* i    不区分大小写



#### 线程

* 线程(thread)
  * 是进程内的一个独立执行单元
  * 是CPU的最小的调度单元
  * 是程序执行的一个完整流程
* 进程(process)
  * 程序的一次执行,他占有一片独有的内存空间
  * 可以通过Windows任务管理器查看进程
* 应用程序必须运行在某个进程的某个线程上
* 一个进程中至少有一个线程:主线程,进程启动后自动创建
* 一个进程中也可以同时运行多个线程,我们会说程序是多线程运行的
* 多个进程之间的数据是不能直接共享的
* 线程池(thread pool) : 保存多个线程对象的容器,实现线程对象的反复利用

#### 浏览器内核组成

 * 主线程
    * js引擎模块:负责js程序的编译与运行
    * html,css文档解析模块 : 负责页面文本的解析
    * dom/css 模块:负责dom/css在内存中的相关处理
    * 布局和渲染模块: 负责页面的布局和效果的绘制(内存中的对象)
 * 分线程
    * 定时器模块:负责定时器的管理
    * 事件响应模块: 负责事件的管理
    * 网络请求模块 : 负责 ajax请求

#### 浏览器事件机制

* 执行栈  

* =>浏览器内核 

* => 任务队列 

* => 消息队列 

* => 事件队列 

* => 事件轮询

* =>事件驱动模型 

* => 请求响应模型

  



## ES6

#### 模块化

* 通用导入方式

  * import * as ay from "./js/xxx.js"

* 结构赋值方式

  *  import { XXX } from "./js/xxx.js"  
  *  重名的情况下 同过as来更改别名

* 简便形式 

  * 只能作用于默认暴露
  * import XXX from "./js/xxx.js"

* SRC引入

  * ```js
    // <script src="./js/ay.js" type="module"></script>
    ```

* 用 babel 方式  

  * npm 压缩  

    ```js
     // <script src="dist/bundle.js"></script>
    ```

    


​    

* 暴露方式

  * 分别暴露
    * 多个export对应各自暴露目标
  * 统一暴露
    * 单个export暴露一个对象
  * 默认暴露
    * export default

* 接口文件

  * 各个模块暴露汇总引入到一个js入口文件,方便使用



#### class

 * ```js
   class XXX {
       static  key =  value  // 静态属性  static fn( ){ XXXXXXXXX }
   }
   ```




 * 实例对象不能调用构造函数,需要通过原型的方式才能获取

   * .__proto__.constructor

 * 继承

   * super() 

     * super([arguments]);  // 调用 父对象/父类 的构造函数
     * super.functionOnParent([arguments]);  // 调用 父对象/父类 上的方法

   * ```js
     class 父类 {
         constructor()
         this.x = x
         a () {
             aaaaaa
         }
     }
     class 子类 extends 父类 {
         constructor()
         super()
         // super 需要写在this前面
         this.x = x
         b () {
             bbbbbbb
         }
     }
     ```



#### 数组方法

* forEach( fun(  )  {    }   )   //  遍历
* filter( fun(  ) {    }  )       // 查找是否存在符合条件的值,返回所有满足条件的值
* some( fun(  ) {    }  )    // 查找是否存在符合条件的值,如果查找到第一个满足条件的元素就终止循环
* map( 运算 )     // 逐个运算数组内内容  返回运算结果为一个新的数组
* [...]   // 解构
* .delete() // 删除
* .clear()    // 清空
* .has()   // 查找  ,  返回布尔值





#### Promise

* Promise能够返回一个异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来,使异步方法像同步那样返回值: 异步方法不会立即返回最终的值,而是会返回一个Promise,以便在未来的某个时候把值交给使用者

* 执行传入的回调函数时,会传入两个参数, resolve 和 reject 本身就是函数

* 一个 `Promise` 必然处于以下几种状态之一：

  - *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
  - *已兑现（fulfilled）*: 意味着操作成功完成。
  - *已拒绝（rejected）*: 意味着操作失败。

* .then

  * then方法的返回结果是 Promise 对象, 对象状态由回调函数的执行结果决定

  * 如果回调函数中返回的结果是 非 promise 类型的属性, 状态为成功, 返回值为对象的成功的值

  * ```js
    .then(
     // then也可以传入两个参数,第一个表正确情况下,第二表错误情况下,这样可以减去写catch
      (data) => {
        console.log(data)
      }, (err) => {
        console.log(err)
      }
    )
    ```

  * ```js
    // then链式调用  解决回调地狱
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 假设第一次请求,并将请求结果传给then处理
         resolve('aaa')
      }, 1000);
    }).then((res) => {
      console.log(res, '假设对第一次请求做了n行的代码第一次处理');
      // 假设第二次请求,并将请求第一次结果传给then处理
      return res + "111"
    }).then((res) => {
      console.log(res, '假设对第二次请求做了n行的代码第二次处理');
      // 假设第三次请求,并将请求第二次结果传给then处理
      return res + '222'
    }).then((res) => {
      // 得到第二次处理结果
      console.log(res);
    })
    
    // --------------------------------
    return new Promise((resolve) => {
      resolve(res + "111")
    })
        //    ||
        //    ||
        //   _||_
        //   \||/
        //    ∨
        //   简写
    
    return Promise.resolve(res + "111")
    
        //    ||
        //    ||
        //   _||_
        //   \||/
        //    ∨
        //   简写
    
    return res + "111"
    ```

    

* .catch

  * 区别与 then ,        返回错误的值

* 基本语法

  * ```js
    //实例化 Promise 对象
    const p = new Promise(function(resolve, reject) {
      // 模拟axios请求
      setTimeout(function() {
        // const data = '数据库中的用户数据';
        // resolve(data);
        const err = '数据读取失败'
        reject(err)
      }, 1000)
    })
    //调用 promise 对象的 then 方法
    p.then(function(value) {
      console.log(value)
    }, function(reason) {
      console.error(reason)
    })
    ```

* 封装ajax

  * ```js
    // 接口地址: https://api.apiopen.top/getJoke
    const p = new Promise((resolve, reject) => {
      //1. 创建对象
      const xhr = new XMLHttpRequest()
      //2. 初始化
      xhr.open("GET", "https://api.apiopen.top/getJoke")
      //3. 发送
      xhr.send()
      //4. 绑定事件, 处理响应结果
      xhr.onreadystatechange = function() {
        //判断
        if (xhr.readyState === 4) {
          //判断响应状态码 200-299
          if (xhr.status >= 200 && xhr.status < 300) {
            //表示成功
            resolve(xhr.response)
          } else {
            //如果失败
            reject(xhr.status)
          }
        }
      }
    })
    //指定回调
    p.then(function(value) {
      console.log(value)
    }, function(reason) {
      console.error(reason)
    })
    ```

* Promise.all()

  * 多个请求

  * ```js
    Promise.all([
        new Promise() // 第一个
        new Promise() // 第二个
    ]).then
    ```

    

####  async

* await 要放在 async 函数中

* ```js
  const p = new Promise((resolve, reject) => {
      // resolve("成功的Promise");
      reject("失败的Promise");
  })
  async function fn() {
      try {
          let result = await p;
      }
      catch (e) {  }
  }
  fn()
  ```

  



#### Set

* 自带去重   [...new Set(arr)]
* 交集           [...new Set(arr)].filter(item => new Set(arr2).has(item))
* 并集           [...new Set([...arr, ...arr2])]
* 差集           
  * [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
  * [...new Set(arr2)].filter(item => !(new Set(arr).has(item)))





#### Map

* set()     添加
* get()     获取
* delete()  删除
* clear()   清空
* Math.pow(x,y)    可返回 x 的 y 次幂的值

#### Symbol

* 表示独一无二的值，最大的用法是用来定义对象的唯一属性名
* let s1 = Symbol('a');      let s2 = Symbol('a');                     //s1不等于s2  
* let s3 = Symbol.for('asd');        let s4 = Symbol.for('asd');      // s3 等于 s4
* [Symbol.isConcatSpreadable]        
  * 是否展开数组 
  * 一个布尔值，表明一个对象是否应该flattened为它的数组元素。被 Array.prototype.concat() 使用。
* Symbol.hasInstance        
  * 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 instanceof 操作符在某个类上的行为
* Object.getOwnPropertySymbols()
  * 返回一个给定对象自身的所有 Symbol 属性的数组。每个初始化的对象都是没有自己的symbol属性的，因此这个数组可能为空，除非你已经在对象上设置了symbol属性
* Symbol.iterator
  * 返回一个对象默认迭代器的方法  被 for...of 使用。让对象可以被迭代
* Symbol.asyncIterator 
  * 返回对象默认的异步迭代器的方法。被 for await of 使用
* Symbol.match
  * 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 String.prototype.match() 使用。
* Symbol.replace
  * 一个替换匹配字符串的子串的方法. 被 String.prototype.replace() 使用。
* Symbol.search
  * 一个返回一个字符串中与正则表达式相匹配的索引的方法。被String.prototype.search() 使用。
* Symbol.split
  * 一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 String.prototype.split() 使用。
* Symbol.unscopables
  * 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
* Symbol.species
  * 一个用于创建派生对象的构造器函数。
* Symbol.toPrimitive
  * 一个将对象转化为基本数据类型的方法。
* Symbol.toStringTag
  * 用于对象的默认描述的字符串值。被 Object.prototype.toString() 使用。

- Symbol.for(key)
  * 使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。
- Symbol.keyFor(sym)
  * 从全局symbol注册表中，为给定的symbol检索一个共享的?symbol key。
- Symbol 原型
  * 所有 Symbols 继承自 Symbol.prototype.
- Symbol.prototype.constructor
  - 返回创建实例原型的函数. 默认为 Symbol 函数。
- Symbol.prototype.description
  - 一个包含symbol描述的只读字符串。
- Symbol.prototype.toSource()
  - 返回包含Symbol 对象源码的字符串。覆盖Object.prototype.toSource() 方法。
- Symbol.prototype.toString()
  - 返回包含Symbol描述符的字符串。 覆盖Object.prototype.toString() 方法。
- Symbol.prototype.valueOf()
  - 返回 Symbol 对象的初始值.。覆盖 Object.prototype.valueOf() 方法。
- Symbol.prototype[@@toPrimitive]
  -  返回Symbol对象的初始值。



####  function*表达式

* function*   关键字可以在表达式内部定义一个生成器函数。

  * ```js
    function* gen() {
      yield a();
      yield b();
      yield c();
      yield d();
    }
    ```

* 配合.next()方法实现逐个运行的效果



#### 箭头函数

* 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数









## jQuery

#### 增删改查

* $('XXXX')    

  * 类似querySelector('XXXX')和getgetElementByXXXX

* eq(i)

  * 索引查询

* addClass('xxxx') 

  * 追加类名

* $("元素").on("事件名", function(event) {执行语句}

* ```js
  $("p").prepend("<b>Hello world!</b>")
  // prepend() 方法在被选元素的开头（仍位于内部）插入指定内容
  ```

* .empty() 删除被选元素的子元素

* .remove()  删除被选元素及其子元素

* .each

  * .each( ' ', function( i ) {} )  循环遍历jQuery对象
  * .each( ' ', function( i , n) {} )  循环遍历任何对象

* .text()   设置或返回被选元素的文本内容

* .prop()  设置或返回被选元素的属性和值

* .siblings()  返回被选元素的所有同级元素

* .val()   返回或设置被选元素的 value 属性

* .parent()  返回被选元素的直接父元素



## nodejs

#### npm安装与使用

* npm install安装方式

  * -g               
    * 全局
  * --save         
    * 将模块安装到项目目录下，并在package文件的dependencies节点写入依赖
  * --save-dev 
    * 将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
    * 只下载开发依赖
  *  --production    只下载项目依赖
  * npm install  插件名
  * npm uninstall  插件名

* nodemon   xxx.js

  * 动态监听并运行

* require()   

  * 导入模块
    * 有自己的模块
    * 也有官方的方法,比如fs

* exports

  * 暴露模块

* fs模块

  * 新建个demo文件,并写入内容

  ```js
  const fs =require('fs');
  fs.writeFile('./demo.txt','自己编写即将要写入的内容',err =>{
      if (err != null) {
          return;
      }
      console.log('写入成功');
  })
  ```

####  path模块

* 路径操作
* path.join('my', 'up', 'tool')  拼接路径
* .normalize  格式化路径
* .resolve   
  * 将路径或路径片段的序列解析为绝对路径    给定的路径序列从右到左处理，每个后续的 `path` 会被追加到前面，直到构建绝对路径。
* .split(path.posix.sep)   路径分隔符
  * 例   'ad/addd/d
  * dd'.split(path.posix.sep)
* .basename  获取文件名
* .extname('index.html')   获取文件后缀名
* __dirname   指向当前文件的绝对路径
* __filename   指向当前文件的路径及文件



####  art-template

* 类似vue的父子组件使用方法

* index文件

  * ```js
    {{extend './common/nav.html'}}
    {{block 'content'}}
      留一个坑，将要留给继承该模板的模板去填坑
    {{/block}}
    {{block 'content1'}}
        {{include '内容模块的地址' data}}
    {{/block}}
    <! -- 引入的局部内容需要有    {{block 'content'}}被引入的局部内容{{/block}}    才行 -- >
    ```



#### gulp

* 利用任何文本编辑器在项目大的根目录下创建一个名为 gulpfile.js 的文件

* // 引用gulp模块  const gulp = require('gulp');    css压缩模块  const cssmin = require('gulp-csso');

* //使用gulp.task 建立任务

* //1.任务的名称 2.任务的回调函数

  ```js
  // css压缩为例
  gulp.task('cssmin', (done) => {
    gulp.src('./src/css/*.css')
      .pipe(csso())
      .pipe(gulp.dest('dist/css'));
    done()
  });
  ```

#### server

* 构建一个服务器,模拟提交表单

* ```js
  // 创建网站服务器模块
  const http = require('http');
  // a 对象就是网站服务器对象
  const app = http.createServer();
  // 处理参数模块
  const querystring = require('querystring');
  // 当客户端有请求来的时候
  app.on('request', (req, res) => {
    let postParams = '';
    req.on('data', params => {
      postParams += params;
    });
    req.on('end', () => {
      console.log(querystring.parse(postParams));
    });
    res.end('ok');
  });
  app.listen(3000);
  console.log('启动');
  ```

* ```html
  <! --   提交地址                         提交方式 -- >
  <form action="http://localhost:3000" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" name="" id="">
  </form>
  ```

#### route

* ```js
  // 1.引入系统模块http
  // 2.创建网站服务器
  // 3.为网站服务器对象添加请求事件
  const http = require('http');
  const port = 3000;
  const hostname = '127.0.0.1';
  var server = http.createServer((request, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8'
    });
    response.end('end结束');
  });
  server.listen(port, hostname, () => {
    console.log('Server running at http://127.0.0.1:8081/');
    console.log('启动');
  });
  
  // 网页数据转字符
  const options = {
    hostname: 'www.baidu.com',
    port: 80
  };
  var req = http.get(options, function(res) {
    res.on('data', function(chunk) {
      console.log(chunk.toString());
    })
  })
  ```

  

#### buffer 

* 用于创建包含指定字符串，数组或缓冲区的新缓冲区

* buffer.from(object, encoding )

  * object:此参数可以包含字符串，缓冲区，数组或arrayBuffer。

  * encoding:如果对象是字符串，则用于指定其编码。它是可选参数。其默认值为utf8。

  * ```js
    var buf1 = Buffer.from('你好');
    var buf2 = Buffer.from(buf1);
    console.log(buf1==buf2); // false
    ```

    

* .fill(被填充的字符,开始填充的索引号位置,结束填充的索引号位置'左开右闭')

  * buf3.fill(1,2,6);

* .fill(填充的字符)

  * buf4.fill('abcd')            //  <Buffer 61 62 63 64 >
  * buf4.fill('你')                  //  汉字顶三个    <Buffer e4 bd a0>

* alloc()    相当于连续字符内有括号内数值数量的空位

  * var buf3 = Buffer.alloc(3)    //  00   00   00

* .slice(1,3)       //字符截取  (1,3从索引号包含1到不包含3)



## Git

#### 在命令行上创建一个新的存储库

* ```js
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Ay049/xxx.git
  git push -u origin main
  ```

#### 从命令行推送现有存储库

* ```js
  git remote add origin https://github.com/Ay049/super.git
  git branch -M main
  git push -u origin main
  ```

#### 常用指令

* git init          初始化仓库
* git status         查看文件状态
* git diff          查看哪些修改还没被暂存了 
* git diff --staged      查看哪些修改以及被暂存了 还没提交
* git log --oneline      查看提交的历史记录
* git add ./         将修改添加到暂存区
* git commit -m "注释内容"   将暂存区提交到版本库



## webpack

#### webpack 性能优化

* 开发环境性能优化  
* 生产环境性能优化


#### 开发环境性能优化  development

* 优化打包构建速度
* 优化代码调试

#### 生产环境性能优化  production

* 优化打包构建速度
* 优化代码运行的性能

####  proxy 解决开发环境跨域问题

*  浏览器和服务器之间是存在跨域问题的 ,跨域指的是同名策略 比如说域名、端口号、协议名不一样那么就会产出跨域 
*  浏览器和服务器之间有跨域 ,但是服务器和服务器之间没有 
*  因为我们的代码设置Proxy属性后通过代理服务器运行,所以浏览器和代理服务器之间是没有跨域问题的,浏览器把请求发送到代理服务器上,代理服务器又把请求发给服务器上.

####  版本指令变更

* npx webpack-dev-server  ==> npx webpack server
* webpack.config.js 需添加 traget:'web'才能开启热模块替换功能
* publicPath: '../文件夹/'



#### 配置

* 所有构建工具都是基于nodejs平台运行

* use数组中的loader执行顺序:从右到左,从下到上 一次执行

* 大致就是 

  * npm install  扩展包
  * require 导入扩展包
  * plugins 中启用扩展包
  * rules   中配置

* ```js
  // webpack.config.js 文件
  // resolve用来拼接绝对路径的方法
  const { resolve } = require('path');
  // 扩展包
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin")
  
  module.exports = {
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
      // 输出文件名
      filename: 'built.js',
      //输出路径
      // __dirname nodejs 的变量,代表当前文件的目录绝对路径
      path: resolve(__dirname, 'build')
    },
    module: {
      rules: [
        // 详细loader配置  这里主要是配置构建工具
        // 不同文件必须配置不同的loader处理
        {
          //匹配哪些文件
          test: /\.css$/,
          use: [
            //use数组中的loader执行顺序:从右到左,从下到上 一次执行
            // 'style-loader',
            MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                       "postcss-preset-env",
                       {
                         // 选项
                       },
                     ],
                   ],
                },
              },
            }
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            esModule: false,
            name: '[hash:10].[ext]'
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            esModule: false  // 关闭es6模块化
          }
        },
        {
          exclude: /\.(css|js|html|jpg|png|gif|josn)$/,
          loader: 'file-loader'
        }
      ]
    },
    // plugins的配置
    plugins: [
      // 详细plugins的配置
      // 加载扩展
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
      new MiniCssExtractPlugin({
        filename: 'css/built.css'
      }),
    ],
    // 模式
    mode: 'development', //  开发模式
    //mode:'production' //根据环境所需注释development或production代码
    devServer: {
      contentBase: resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      open: true
    }
  }
  ```

* babel的按需加载

  * ```js
    // webpack.config.js 文件
    /*
      js兼容性处理：babel-loader @babel/core
      1. 基本js兼容性处理 ==> @babel/preset-env
         问题：只能转换基本语法，如promise高级语法不能转换
      2. 全部js兼容性处理 ==> @babel/polyfill
         问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
      3. 需要做兼容性处理的就做：按需加载  ==> core-js
    */
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        // 预设：指示babel做怎么样的兼容性处理
        presets: [
          [
            '@babel/preset-env',
            {
              // 按需加载
              useBuiltIns: 'usage', // usage==>entry
              // 指定core-js版本
              corejs: {
                version: 3
              },
              // 指定兼容性做到哪个版本浏览器
              targets: {
                chrome: '60',
                firefox: '60',
                ie: '9',
                safari: '10',
                edge: '17'
              }
            }
          ]
        ]
        // 开启babel缓存
        // 第二次构建时，会读取之前的缓存
        cacheDirectory: true
      }
    }
    ```

* 热热模块替换/ 模块热替换  

  * HMR: hot module replacement

  * 作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 极大提升构建速度

  * css文件：可以使用HMR功能：因为style-loader内部实现了

    js文件： 默认不能使用HMR功能 ==> 需要修改js代码，添加支持HMR功能的代码

    ​               注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。

    html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）

    ​               解决：修改entry入口，将html文件引入

  * ```js
    // webpack.config.js 文件
    devServer: {
      contentBase: resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      open: true,
      // 开启HMR功能
      // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
      hot: true
    }
    ```

* source-map

  * ```js
    // webpack.config.js 文件
    devtool:'source-map'
    ```

     

  * 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

  * source-map：外部

    错误代码准确信息 和 源代码的错误位置

  * inline-source-map：内联

    只生成一个内联source-map   错误代码准确信息 和 源代码的错误位置

  * hidden-source-map：外部

    错误代码错误原因，但是没有错误位置    不能追踪源代码错误，只能提示到构建后代码的错误位置

  * eval-source-map：内联

    每一个文件都生成对应的source-map，都在eval   错误代码准确信息 和 源代码的错误位置

  * nosources-source-map：外部

    错误代码准确信息, 但是没有任何源代码信息

  * cheap-source-map：外部

    错误代码准确信息 和 源代码的错误位置  只能精确到行

  * cheap-module-source-map：外部

    错误代码准确信息 和 源代码的错误位置    module会将loader的source map加入

  * 内联 和 外部的区别：

    * 外部生成了文件，内联没有
    * 内联构建速度更快

* express搭建服务

  * ```js
    // server.js 文件
    // express搭建服务
    const express = require('express');
    const app = express();
    const port = 3000;
    
    app.use(express.static('build', {
      maxAge: 1000 * 3600
    }));
    app.listen(port, () => console.log(`Example app listening on port port!`))
    ```

* 预加载

  * ```js
    // server.js 文件
    // 懒加载~：当文件需要使用时才加载~
    // 预加载 prefetch：会在使用之前，提前加载js文件 等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
    import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
      console.log(mul(4, 5));
    });
    ```

* serviceworker快速启动

  * ```js
    // webpack.config.js 文件
    new WorkboxWebpackPlugin.GenerateSW({
      /*
        1. 帮助serviceworker快速启动
        2. 删除旧的 serviceworker
        生成一个 serviceworker 配置文件~
      */
      clientsClaim: true,
      skipWaiting: true
    })
    ```

    ```js
    // server.js 文件
    /*
      1. eslint不认识 window、navigator全局变量
        解决：需要修改package.json中eslintConfig配置
          "env": {
            "browser": true // 支持浏览器端全局变量
          }
       2. sw代码必须运行在服务器上
          ==> nodejs
          ==>
            npm i serve -g
            serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
    */
    // 注册serviceWorker
    // 处理兼容性问题
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(() => {
            console.log('sw注册成功了~');
          })
          .catch(() => {
            console.log('sw注册失败了~');
          });
      });
    }
    ```

* 多进程

  * ```js
    // webpack.config.js 文件
    // 开启多进程打包
    // 进程启动大概为600ms，进程通信也有开销
    // 只有工作消耗时间比较长，才需要多进程打包
    use:[
      {
        loader: 'thread-loader',
        options: {
            workers: 2 // 进程2个
        }
      }
    ]
    ```

* jQuery

  * ```js
    // 在webpack中加载jQuery扩展
    // index.js中载入 import $ from 'jquery';
    // html中cdn引入jQuery
    externals: {  jquery: 'jQuery'}
    ```

* dll打包第三方库

  * ```js
    // webpack.dll.js文件
    const {  resolve} = require("path");
    const webpack = require("webpack");
    module.exports = {
        entry: {
            jquery: ['jquery']
        },
        output: {
            filename: '[name].js',
            path: resolve(__dirname, 'dll'),
            library: '[name]_[hash]',
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]_[hash]',
                path: resolve(__dirname, 'dll/manifest.json'),
            })
        ],
        mode: 'production'}
    /*  使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包    当你运行 webpack 时，默认查找 webpack.config.js 配置文件    需求：需要运行 webpack.dll.js 文件     ==> webpack --config webpack.dll.js*/
    ```

    ```js
    // webpack.config.js 文件
    const {resolve} = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack');
    const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'built.js',
            path: resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
            new webpack.DllReferencePlugin({
                manifest: resolve(__dirname, 'dll/manifest.json')
            }),
            // 将某个文件打包输出去，并在html中自动引入该资源
            new AddAssetHtmlWebpackPlugin({
                filepath: resolve(__dirname,'dll/jquery.js'),
                publicPath: '../dll/'
            })
        ],
        mode: 'production',
        // externals:{
        //     jquery:'jQuery'
        // }}
    ```

    







##  axios

#### 请求方式

* get

  * 获取数据

  * ```js
    axios.get("https://autumnfish.cn/api/joke/list?num=3")
    .then(function(response) {
      console.log(response);
    }),
    function(err) {
      console.log(err);
    }
    ```

* post

  * 主要用于提交表单数据和上传文件

* put

  * 对数据全部进行更新

* patch

  * 只对更改过的数据进行更新

* delete

  * 删除请求

#### 常用配置

* url: '/user'
  * 请求地址
* method: 'get'
  * 请求类型
* baseURL: 'https: // www. xxxx. com'
  * 请求根路径
* transformRequest: [function(data) {} ]
  * 请求前的数据处理
* transformResponse: [function(data) {} ]
  * 请求后的数据处理
* headers: {'x-Requested-With' : 'XMLHttpRequest' }
  * 自定义请求头
* params:{}
  * URL查询对象
* paramsSerializer: function(params){}
  * 查询对象序列化函数
* timeout: 1000
  * 超时设置
* withCredentials: false
  * 跨域是否带Token
* adapter: function(res,rej,config){}
  * 自定义请求处理
* auth: {uname:'',pwd:''}
  * 身份信息验证
* responseType:'json'
  * 响应的数据格式



## Vue

#### 引入方式

* cdn
* npm
* vue文件

#### 基本框架结构

* ```js
  // vue2
  const app = new Vue({
    el: '#app',
    data: {
      // 数据
    },
    computed: {
      // 计算属性
    },
    methods: {
      //方法
    }
  })
  ```

#### data

* 数据

* ```js
  // Vue3
  data () {
    return {
      message: 'hi'
    }
  }
  ```

  

#### computed

* now: function () {
      return Date.now()   // 不用响应式依赖的方法
  }
* 计算量比较大的情况下可以用该属性

#### methods

* 自定义方法
* // this 在方法里指向当前 Vue 实例

#### 生命周期

* created () {} 
  * 组件被创建出来后会回调这个生命周期函数
  * 多个created的情况下我们可以用router.beforeEach((to, from, next) => {}) 方法实现
* mounted () {} 
  * template挂载到dom上时会回调这个生命周期函数
* updated () {}
  * 页面刷新就会触发
* destroyed () {} 
  * 组件被销毁时会触发
* activated () {}
  * 仅在keep-alive情况下才生效 效果是当页面进入活跃状态时生效,一般配合deactivated使用
* deactivated () {}
  * 页面不在活跃状态下生效,条件和activated一样都是需要在keep-alive情况下才有用
* beforeRouteLeave (to, from, next) {}
  * 该导航守卫是在 导航离开该组件的对应路由时调用 并且可以访问组件实例 this
  * this.path = this.$route.path
    * 在首页中使用path属性记录离开时的路径,在beforeRouteLeave中记录
  * to：进入到哪个路由去
    from：从哪个路由离开
    next：路由的控制参数，常用的有next(true)和next(false)





#### 基本使用

* {{  }}
  * Mustache语法   文本插值
* v-model
  * 双向数据绑定
  * 可以做文字放大镜效果
* v-bink
  * 简写 :
  * 如:     :class="{active:isActive}"
* v-on
  * 简写 @
  * 如:     @click='btnClick'            @keyup.enter= '   '
* v-text
  * v-text会覆盖标签内的内容
  * 如: a链接会被解析成a链接字符
* v-html
  * v-html会解析内容 
  * 如: a链接会被解析成a链接
* v-for
  * for  in     遍历
  * v-for="(item,index) in arr"     {{ item }}
* v-show
  * 通过一个布尔值控制是否显示,改变元素状态,不会增删元素
* v-if
  * 通过一个布尔值控制是否存在,会删除元素和添加元素
  * 可以搭配v-else使用
  * 区别与v-show, 只有条件为真时才会渲染
  * 非常频繁地切换，则使用 v-show 较好
  * 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
* v-slot
  * 插槽
  
  * ```html
    /* Vue3 */
    需要嵌套一个template
    <template v-slot: 具名>
        <div></div>
    </template>
    ```
  
    

####  组件

* keep-alive的作用是不让组件被频繁销毁

* ```js
  // 用法1:
  template: '<cpn></cpn>',
  components: {
    cpn
  },
  // 用法2:
  render: function(h) {
    return h('h2', {
      class: 'h2ClassName'
    }, ['内容1', h('h4', {
      class: 'h4ClassName'
    }, ['内容2', h('button', {
      class: 'btn'
    }, ['anniu'])])])
  },
  // 用法3:
  render: function(h) {
    return h(cpn)
  },
  // 用法4:
  render: function(aaa) {
    return aaa(App)
  }
  ```

  

####  Vue-router

* <router-view></router-view>

* ```js
  // vue2 router设置
  import Vue from 'vue'
  import Router from 'vue-router'
  const home = () => import('../vivews/home/home.vue') // 懒加载
  
  Vue.use(Router)
  const originalPush = Router.prototype.push
  Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
  }  // 解决重复点击报错方式一
  const routes = [
    {
      path: '',
      redirect: '/home'   // 默认重定向
    },
    {
      path: '/home',
      component: home
    },
  ]
  const router = new Router({
    routes,
    mode: 'history'
  })
  export default router
  ```

  ```js
  // vue
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
      // 解决重复点击报错方式二
    }
  },
  methods: {
    itemclick () {
      // this.$router.replace(this.path).catch(err => err)
      if (!this.isActive) {
        this.$router.replace(this.path)
      }
    }
  }
  // 配合组件 
  <tabbaritem path="/home"></tabbaritem>
  ```





####  Vuex

* Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

* 单一状态树  用一个对象就包含了全部的应用层级状态

* 每一个 Vuex 应用的核心就是 store（仓库）可以看成一个容器  包含应用中大部分的状态

* 除了state以外其余的建议抽离,再用import导入

* ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  
  Vue.use(Vuex)
  
  const store = new Vuex.Store({
    state: {  // 保存状态的
      count: 0
    },
    mutations: { // 修改state状态的   在 Vue2情况下 可以用浏览器自带的Devtools扩展跟踪
      increment (state) {
        state.count++
      }
    }
    actions: {}  // 异步操作时写在此项内
    getters: {}  // 类似计算属性
    modules: {}
  })
  
  // 可以通过 store.state 来获取状态对象 以及通过 store.commit 方法触发状态变更
  store.commit('increment')
  
  console.log(store.state.count) // => 1
  ```

* state

  * 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性

  * state是响应式的,但是需要在开始时就初始化所需的属性

  * 添加新属性时,可以使用Vue.set或者新对象给就对象重新赋值

    * ```js
      Vue.set(state.对象名,key,value)
      ```

      

  * mapState 辅助函数

    * 在一个组件需要获取多个状态的时候,优化状态多次声明为计算属性

    * ```js
      // 在单独构建的版本中辅助函数为 Vuex.mapState
      import { mapState } from 'vuex'
      
      export default {
        // ...
        computed: mapState({
          // 箭头函数可使代码更简练
          count: state => state.count,
      
          // 传字符串参数 'count' 等同于 `state => state.count`
          countAlias: 'count',
      
          // 为了能够使用 `this` 获取局部状态，必须使用常规函数
          countPlusLocalState (state) {
            return state.count + this.localCount
          }
        })
      }
      ```

    * mapState 函数返回的是一个对象

    * ```js
      computed: {
        localComputed () { /* ... */ },
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
          // ...
        })
      }
      ```

* mutations

  * 要想改变状态只有通过   提交mutations

  * 同步方法

  * 提交方式  

    * ```js
      // 普通提交方式
      this.$store.commit('方法名' ,params)
      // 特殊提交方式
      this.$store.commit({
          type: '方法名',
          params
      })
      ```

      

      

* actions

  * 可以理解成异步时用actions,同步用mutations

  * 修改状态时不能跳过mutations

  * ```js
    a(context) {
        setTimeout(() => {
            context.commit('mutations内的方法')
        })
    }
    //调用
    this.$store.dispatch('a')
    ```

  * 在使用actions的时候也可以在actions中用Promise,  在调用时用then

  * ```js
    a(context) {
        return new Promise((res,rej) => {
            setTimeout(() => {
                context.commit('mutations内的方法')
                res('选择是否传出的参数')
            },1000)
        })
    }
    // 调用
    this.$store.dispatch('a','传参').then(res => {
        console.log('a方法完成了提交')
    })
    ```

    

* getters

  * ```js
    getters: {
        a(state) {
            return state.xxx.filter(xxx)
        },
        b(state, getters) {
         // 这里的getters传的就是 上面的getters
            return getters.a.length
        },
        c(state) {
            return function (params) {
                return state.xxx.filter(xxx)
            }
        }
    }
    // 调用
    $store.getters.a
    $store.getters.b
    $store.getters.c(params)
    ```

    

* modules

  * 可以进一步细分,模块化,   再套一层

  * 使用方式

    * ```js
      modules: {
        a: moduleA
      }
      // 
      const moduleA = {
        state: {
            key: value
        },
        getters: {},
        mutations: {},
        actions: {},
      }
      // 调用
      $store.state.a.key
      ```

  

#### Vue-axios

* ```js
  import axios from 'axios'
  
  export function request (config) {
    const instance = axios.create({
      baseURL: 'api请求地址',
      timeout: 5000
    })
    // 拦截器
    // 一、 请求拦截的作用
    instance.interceptors.request.use(config => {
      //  1.比如config中的一些信息不符合服务器的要求
      //  2.比如每次发送网络请求时,都希望在界面中显示一个请求图标
      //  3.某些网络请求(比如登陆(token)),必须带一些特殊的信息
      return config // 拦截要返回处理后的参数
    }, err => {
      console.log(err)
    })
    // 一、 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err)
    })
    return instance(config)
  }
  ```

* ```js
  axios({
    url: 'https://api.xxx.com/api/rand.music?sort=热歌榜&format=json'
  }).then(res => {
    console.log(res)
  })
  // params
  axios({
    url: 'https://api.xxx.com/api/rand.music?',
    params: {
      sort: '热歌榜',
      format: 'json'
    }
  }).then(res => {
    console.log(res)
  })
  ```

* ```js
  //      axios.defaults.baseURL 
  // axios.defaults.baseURL 方法配置全局URL后 只需要写abc即可
  // 但可能出现不同服务器地址的情况,所以要通过实例的方式
  // 第一个网址请求
  const instance1 = axios.create({  baseURL: 'http://xxx' })
  instance1({  url: '/a'}).then()
  // 第二个网址请求
  const instance2 = axios.create({  baseURL: 'https://xxx2' })
  instance2({  url: '/b',}).then()
  ```



#### md

* 安装 vue-markdown-loader 

  * ```js
    npm install vue-markdown-loader  -D
    ```

  * 将markdown文件解析并编译成html文件

* 安装 vue-loader 、vue-template-compiler   

  * ```js
    npm install vue-loader  -D
    npm install vue-template-compiler  -D
    ```

  * 将文件渲染成vue组件

* 安装 github-markdown-css、highlight.js

  * ```js
    npm install github-markdown-css  -D
    npm install highlight.js  -D
    ```

  * 美化样式、高亮代码

* 在vue.config.js中配置webpack

  * ```js
    module.exports = {
      chainWebpack: config => {
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
          })
      }
    }
    ```

  * 在main.js中引入样式文件

    ```js
    // markdown样式
    import 'github-markdown-css'
    // 代码高亮
    import 'highlight.js/styles/github.css'
    ```

  * 在vue组件中使用
    将md文件作为组件导入，注意：class的值必须包含 markdown-body ，否则样式无法生效！

    ```js
    <template>
      <demo-md class="markdown-body"></demo-md>
    </template>
    <script>
    import DemoMd from './demo.md';
    export default {
      components: {
        DemoMd
      }
    }
    </script>
    ```

    

