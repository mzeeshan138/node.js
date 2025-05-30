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
        res.writeHead(500);
        return res.end('File upload failed');
      }

      console.log('Parsed files:', files);

      const uploadedFileArray = files.filetoupload;
      const uploadedFile = Array.isArray(uploadedFileArray)
        ? uploadedFileArray[0]
        : uploadedFileArray;

      if (
        !uploadedFile ||
        !uploadedFile.filepath ||
        !uploadedFile.originalFilename
      ) {
        res.writeHead(400);
        return res.end('Invalid file uploaded');
      }

      const oldPath = uploadedFile.filepath;
      const uploadDir =
        'C:/Users/Muhammad Zeeshan/Desktop/Berlin-tec/server-uploadfilesave/';
      const newPath = path.join(uploadDir, uploadedFile.originalFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Rename error:', err);
          res.writeHead(500);
          return res.end('File move failed');
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded and moved successfully!');
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
