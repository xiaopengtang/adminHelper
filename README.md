# 安装

> 1、将该文件拷贝至web根目录下即可

> 2、直接访问main.html即可。最好是在web下访问，否则iframe会报错

# 说明

> 1、涉及到的js：require.js、underscore.js、backbone.js、jquery以及其家族、bootstrap以及其控件

## 功能

> 1、base.error -- 全局报错处理(中间件权限认证未通过、语法报错两种)，中间件未通过会添加一个status值，用于区分二者的不同。主要，两者的值只会有两种Error或者TypeError，请在init之前声明

> 2、base.init -- 初始化，只能初始化一次，返回的是promise对象。因为初始化会加载文件，该进程会很耗时，请在promise对象的then或者always属性上添加回调函数

> 3、base.middleware -- 全栈中间件，会监听到所有页面的进入权限

> 4、base.extend -- 作用域扩展，一般只用于扩展静态属性，区别于use：整个进程该扩展的函数只会执行一次，use是页面进入有携带页面信息是的扩展。具体的例子就是，你可以在scope上绑定一个cookie的CURD的方法，但是如果你要是扩展一个获取页面url参数的扩展，最好用use扩展

> 5、base.use -- 作用在middleware前，每次页面进入，都会调用use的回调函数，用于处理response和request

> 6、base.config -- 手动配置，位于所有base函数之前，具体可参考本例的实例。可以读取，亦可以设值

> 7、base.register -- 注册一个页面处理应用

## $app -- application

> 1、变量始终存在

> 2、可以跨页面存储数据，但是也只是对象存储，不能替代cookie

> 3、$app.loader === requirejs