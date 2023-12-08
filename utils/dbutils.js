/*
 * @Author: OBKoro1
 * @Date: 2022-06-29 16:22:49
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-06-30 17:31:37
 * @FilePath: \Background management system\foodback\utils\dbutils.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
//1.导入mongoose依赖包
var mongoose = require('mongoose');
//2.连接数据库
var dbURI = "mongodb://127.0.0.1:27017/foodback";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => { console.log('mongodb数据库连接成功'); });