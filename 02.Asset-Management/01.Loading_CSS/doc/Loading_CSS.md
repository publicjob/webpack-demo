```powershell
~/Documents/webpack-demo  npm run webpack:02-01

> webpack-demo@1.0.0 webpack:02-01 /Users/chen/Documents/webpack-demo
> webpack --config 02.Asset-Management/01.Loading_CSS/webpack.config.js

Hash: da7f89dc02c48e325c72
Version: webpack 4.44.2
Time: 369ms
Built at: 09/23/2020 11:00:18 AM
     Asset     Size  Chunks             Chunk Names
js/main.js  567 KiB    main  [emitted]  main
Entrypoint main = js/main.js
[./02.Asset-Management/01.Loading_CSS/index.css] 525 bytes {main} [built]
[./02.Asset-Management/01.Loading_CSS/index.js] 253 bytes {main} [built]
[./node_modules/css-loader/dist/cjs.js!./02.Asset-Management/01.Loading_CSS/index.css] 305 bytes {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
    + 3 hidden modules
```

