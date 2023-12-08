#food-back
```
姚肴食谱(微信小程序)的后端应用
一款基于nodejs、express、mongodb开发的微信小程序后端应用
```
### 项目结构
```
├── app.js
├── bin
│   └── www
├── controller
│   └── ...各种controller控制器
├── model
│   └── ...各种model数据模型
├── public
│   └── ...各种静态资源
├── routes
│   └── ...各种路由
├── utils
│   ├── dbutils 数据库工具
│   ├── handleFiles 文件上传工具
│   ├── jwt  基于jwt的登录验证工具
│   └── myUpload
├── views
│   ├── 菜谱数据库脚本
│   │   └── 数据库数据js文件
├── db2
├── .gitignore
├── app.js  入口文件
├── package-lock.json
└── package.json
```
### 项目启动
```
npm install
node app.js
```
