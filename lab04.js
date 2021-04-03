/*IT19220116
* N.I.T.Hewage
* */

/*
//Question 01========================================================
console.log('Hello World');


*/


//Question 02========================================================
const os = require('os');
console.log('Architecture' + os.arch());
console.log('CPUs'+ os.cpus().length);
console.log('OS'+ os.platform());

//Question 03========================================================
const fs = require('fs');
const fileName = __dirname + '/test.txt';

//async
fs.readFile(fileName,(err,data)=>{
  if(err){
      console.log(err);
  }
  console.log(data.toString());
});

//sync
const data = fs.readFileSync(fileName);
console.log(data.toString());


//Question 04========================================================
const http = require('http');

const  fileName= __dirname + '/test.txt';
const outFileName = __dirname + '/test+Copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data =>{
    console.log(data.toString());
})

//Question 05========================================================
//01
const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<h1>HEllo world</h1>');
    res.end();
}).listen(3000);

//02
const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    switch (req.method) {
        case 'GET':
            res.write('<h1>HEllo world</h1>');
            res.end();
            break;

        case 'POST':
            req.on('data',data=>{
                res.write('<h1>' + Hello + data + '</h1>');
               res.end();
        });
        break;
    }

}).listen(3000,(err)=>{
    console.log('server is listening on por 3000');
});