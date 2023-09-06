const http = require('http');

const port = 8000;

var modal = require('./firstModule');
var fs = require('fs');

// http.createServer((req,res) => {
    // to run a html file
    
    // fs.readFile('demo.html',function(err,data){
    //     res.writeHead(200,{'Content-type':'text/html'})
    //     res.write(data);
    //     return res.end();
    // })
    
    // to run a file using module

    // res.writeHead(200,{'Content-type': 'text/plain'});
    // res.write("the date and time is currently:"+ modal.myDateTime());
    // res.end();
// }).listen(port)


// create a file. 

// fs.appendFile('myNewFile.txt','Hello content!', function (err){
//     if(err) throw err
//     console.log(('Savved'));
// })

// create a file using (open) and (writeFile) methods

// fs.open('mySecondFile.txt' ,'w', function (err,file) {
//     if(err) throw (err)
//     console.log('saved!!!!');
// })

// Updated a file content using (appendFile) 

// fs.appendFile('myNewFile.txt','The  name is sidharth abimanyu', function(err){
//     if(err) throw err;
//     console.log("upated!!!!!");
// })
// replaced a file content using (writeFile)

// fs.writeFile('myNewFile.txt', 'the name is Santhanam',function(err){
//     if(err) throw err
//     console.log("replaced!!!!");
// })
 
// detele a file using (unlink) use (rename) to rename a file

// fs.unlink('mySecondFile.txt',function(err){
//     if(err) throw err
//     console.log('deleted!!!!!');
// })

