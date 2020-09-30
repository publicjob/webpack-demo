使用webpack管理js项目之后，项目的差异在于，我们将lodash的引入，从html文件中转移到了js文件中。这样子，webpack可以根据依赖关系进行js文件的打包，让js代码能够以正确的顺序进行运行，从而解决了在html中引入script脚本，有可能因为引入顺序的不同导致代码运行不正确的情况。同时，由于lodash的引入我们放在了需要使用到lodash库的文件当中，这样子就可以很迅速地从使用lodash的业务代码里头正确发现代码引入了什么外部依赖库。

```powershell
 ~/Documents/webpack-demo  npm run webpack:02

> webpack-demo@1.0.0 webpack:02 /Users/chen/Documents/webpack-demo
> webpack --config src/02.Creating_a_Bundle/webpack.config.js

Hash: 085305d45f39e3d0c192
Version: webpack 4.44.2
Time: 238ms
Built at: 09/23/2020 10:22:55 AM
     Asset     Size  Chunks             Chunk Names
js/main.js  562 KiB    main  [emitted]  main
Entrypoint main = js/main.js
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[./src/02.Creating_a_Bundle/index.js] 256 bytes {main} [built]
    + 2 hidden modules
```

