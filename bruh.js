const fs = require('fs')
var i;
for (i = 8; i < 10000; i++) {
    fs.writeFileSync(`${i}.css`, `@import url('https://adoesgit.github.io/100-level-theme/${i + 1}.css');`) 
} 