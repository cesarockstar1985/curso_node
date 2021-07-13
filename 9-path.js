const path = require('path')


//console.log(filePath);
const arr = [1,2,3,4]

path.sep = '-'
const filePath = path.join('/content', 'subfolder', 'some.txt')

const basename = path.basename(filePath);
//console.log(basename);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute)