import { createServer } from 'http';
import { formidable } from 'formidable';
import fs from 'fs';
import path from 'path';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: false });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Formidable error:', err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end(`<h2 style="color: red;">File upload failed</h2>`);
      }

      const uploadedFileArray = files.filetoupload;
      const uploadedFile = Array.isArray(uploadedFileArray)
        ? uploadedFileArray[0]
        : uploadedFileArray;

      if (
        !uploadedFile ||
        !uploadedFile.filepath ||
        !uploadedFile.originalFilename
      ) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        return res.end(`<h2 style="color: red;">Invalid file uploaded</h2>`);
      }

      const oldPath = uploadedFile.filepath;
      const uploadDir =
        'C:/Users/Muhammad Zeeshan/Desktop/Berlin-tec/server-uploadfilesave/';
      const newPath = path.join(uploadDir, uploadedFile.originalFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Rename error:', err);
          res.writeHead(500, { 'Content-Type': 'text/html' });
          return res.end(`<h2 style="color: red;">File move failed</h2>`);
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Upload Successful</title>
            <meta http-equiv="refresh" content="2; URL=/" />
            <style>
              body {
                font-family: 'Segoe UI', sans-serif;
                background: #f4f7f8;
                text-align: center;
                padding: 50px;
              }
              h2 {
                color: green;
              }
              p {
                font-size: 18px;
              }
            </style>
          </head>
          <body>
            <h2> File uploaded and moved successfully!</h2>
            <p>Redirecting back to upload page in 2 seconds...</p>
          </body>
          </html>
        `);
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Upload File</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f4f7f8;
            padding: 40px;
            text-align: center;
          }
          h1 {
            color: #333;
          }
          form {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          input[type="file"] {
            margin-bottom: 15px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          input[type="submit"] {
            padding: 10px 20px;
            background: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }
          input[type="submit"]:hover {
            background: #0056b3;
          }
        </style>
        <script>
          // Clear file input after page load
          window.onload = function () {
            const input = document.querySelector('input[type="file"]');
            if (input) input.value = '';
          };
        </script>
      </head>
      <body>
        <h1>Upload a File</h1>
        <form action="fileupload" method="post" enctype="multipart/form-data">
          <input type="file" name="filetoupload" required><br>
          <input type="submit" value="Upload">
        </form>
      </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
