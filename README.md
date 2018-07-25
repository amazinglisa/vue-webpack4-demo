```
├── README.md                   
├── build                        webpack 配置文件
│   ├── common.js                   公共配置
│   ├── dev.js                      开发配置
│   └── pro.js                      生产配置
├── dist                         打包生成的文件夹
│   ├── css
│   ├── font
│   ├── index.html
│   └── js
├── index.html
├── package-lock.json
├── package.json              
└── src                          开发目录
    ├── app.vue
    ├── font
    ├── img
    ├── index.js
    └── style.scss
```

开发环境：

``` shell
npm run dev
```

生产环境：

``` shell
npm run build
```
