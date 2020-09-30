There are problems with managing JavaScript projects this way:

- It is not immediately apparent that the script depends on an external library.
- If a dependency is missing, or included in the wrong order, the application will not function properly.
- If a dependency is included but not used, the browser will be forced to download unnecessary code.

使用这种方式去管理js项目会有以下的问题：

1.没法十分迅速地表明script脚本依赖哪个外部依赖库（从业务源代码角度出发）

2.如果一个依赖丢失了，或者说引入出现了错误，那么这个应用就没法正常运行（从引入script脚本的html角度出发）

3.如果一个依赖引入了，却没有去使用它，那么浏览器会强制下载一些不必要的代码（从引入script脚本的html角度出发）