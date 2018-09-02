const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jamkoding.yt@gmail.com',
    pass: 'j4mk0d!ngUser'
  }
});

let mailOptions = {
  from: 'ivan.COM',
  to: 'ivansu.webmail@gmail.com',
  subject: 'Sending email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if(error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// http.createServer((req, res) => {

//   if(req.url === '/fileupload') {
//     console.log('In route: /fileupload');
//     let form = new formidable.IncomingForm();

//     form.parse(req, (err, fields, files) => {
//       let oldPath = files.filetoupload.path;
//       let newPath = '/home/ivan/Documents/hacktiv8/phase1/notInRepo/nodejs-from-scratch/uploads/' + files.filetoupload.name;

//       fs.rename(oldPath, newPath, (err) => {
//         if(err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
    
//     return res.end();
//   }
// }).listen(3000);

// fs.unlink('myNewFile3.txt', (err) => {
//   if(err) throw err;
//   console.log('File deleted!');
// });
// fs.rename('myNewFile.txt', 'myRenamedFile.txt', (err) => {
//   if(err) throw err;
//   console.log('File renamed');
// });

// http.createServer(function(req, res) {
//   fs.readFile('sample.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
//   fs.open('myNewFile.txt', 'w', function(err, file) {
//     if(err) throw err;
//     console.log('Saved!');
//   });
//   fs.writeFile('myNewFile3.txt', 'Hello content!', function(err) {
//     if(err) throw err;
//     console.log('Saved');
//   });
// }).listen(3000);