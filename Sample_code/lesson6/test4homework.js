/*
*扫描某个文件夹的所有内容,并将文件中文档名字打印输出 
*下面用同步和异步两种方式输出
*/

// 同步方案
// 引入fs模块
//.var fs = require('fs');
// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
//.var dirPathString = '../../homework/lesson1';
//.console.log(dirPathString );

//.var files = fs.readdirSync(dirPathString);
//.console.log(files);

// 定义要写入的文件路径
//.var outputPathString = './lingxiaoSync.txt';

// 定义文件内容变量fileContent
//.var fileContent = files;

//调用fs的writeFileSync函数来写文件
//.fs.writeFileSync(outputPathString, fileContent);


// 异步方案
// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
//var dirPathString = '../../homework/lesson1';
var dirPathString='C:/Users/Lydia/Desktop/heju';

// 定义一个callback函数，用于接收读取文件夹内容后的结果
fs.readdir(dirPathString,function(errr,filess) {
  if (errr) {
    console.log('读取文件失败');
  }

  if (filess.length > 0) {
    console.log(filess);
    var filePathString = './lxAsync.txt';
    var fileContent = filess;
    fs.writeFile(filePathString, fileContent, function(err) {
      if (err) {
        console.log('写文件失败');
      } else {
        console.log('写文件成功');
      }
    });
    console.log(filess.length);
    //console.log(Buffer);
  } else {
    console.log('没有找到任何文件');
  }
})


// 定义一个callback函数，用于接收写文件的返回结果


