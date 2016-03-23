#!/usr/bin/env node
 
'use strict';
var program = require('commander');
program
    .version('0.0.1');//声明版本号
program
    .command('list')//声明有一个命令叫list
    .description('list files in current working directory')//给出list这个命令的描述
    .option('-a, --all', 'Whether to display hidden files')//设置list这个命令的参数
    .action(function(options) {//list命令的实现体
        var fs = require('fs');
        //获取当前运行目录下的文件信息
        fs.readdir(process.cwd(), function(err, files) {
            var list = files;
            if (!options.all) {//检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
                list = files.filter(function(file) {
                    return file.indexOf('.') !== 0;
                });
            }
            console.log(list.join(' '));//控制台将所有文件名打印出来
        });
    });

// function range(val) {
//   return val.split('..').map(Number);
// }

// function list(val) {
//   return val.split(',');
// }

// function collect(val, memo) {
//   memo.push(val);
//   return memo;
// }

// function increaseVerbosity(v, total) {
//   return total + 1;
// }

// program
//   .version('0.0.1')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)

program.parse(process.argv);//开始解析用户输入的命令﻿

// console.log(' int: %j', program.integer);
// console.log(' float: %j', program.float);
// console.log(' optional: %j', program.optional);
// program.range = program.range || [];
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);
// console.log(' collect: %j', program.collect);
// console.log(' verbosity: %j', program.verbose);
// console.log(' args: %j', program.args);