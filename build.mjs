import fs from 'node:fs';
fs.mkdirSync('dist',{recursive:true});fs.cpSync('src','dist',{recursive:true});

