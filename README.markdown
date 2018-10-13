## typescript+react+redux+viviy+antd 集成框架

原始文档请参考目录下 readme.base.md


### 项目启动

> pm2 启动
```

npm install pm2 -g  #安装pm2进程管理工具

pm2 start scripts/start.js --name <your pid name> #启动项目

pm2 list #停止列表

pm2 stop <your pid name> #停止进程

pm2 delete <your pid name> #删除进程

```

> 开发环境

```
    run run start
```
> 生产包

```
    run run build
```

### 注意事项

#### antd 自定义主题配置
package.json
```json
  "theme": {
    "brand-primary": "blue",
    "color-text-base": "#333"
  },
```

#### tslint

建议使用vscode 并自行安装tslint 插件
eg:

import 有a-z的的字母排序规则，json同理
```tsx
    import 'antd-mobile/dist/antd-mobile.less'; 
    import * as React from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom';
    import './App.css';
    import Home from './page/home/index';
    import SearchList from './page/searchList';
    import './theme.less';
```

tslint强类型检测

```tsx
    docEl!.style!.fontSize = fz + 'px';  
```

### 项目目录

```
├─_config
    ├─webpack.config.dev                 # 开发环境配置
    ├─webpack.config.prod                # 生产环境配置
    ├─webpackDevServer.config            # 开发服务器node文件
├─src
    ├─component                      # 组件
        ├─{component-name}           # 单组件
            ├─index.tsx              # 组件jsx(请自行导入对应页面less)
            └─index.less             # less
    ├─page                    # 页面
        ├─{page-name}           # 单页面
            ├─conf                   # 组件jsx(请自行导入对应页面less)
            └─app.js                 # less
    ├─less                    # less公用
        └─common.less                 # less公共变量
    ├─store                    # 服务代码
        ├─module                 # redux模块
            └─{module-name}      # reducer
        ├─index.tsx              # 合成器
    ├─static                    # 服务代码
        ├─font                 # 字体(iconfont存放与此)
        ├─img                  # 图片
        ├─animation            # viviy css库(已经全局导入)
    ├─node_modules             # 依赖包
├─config-overrides             loader 前置依赖执行包