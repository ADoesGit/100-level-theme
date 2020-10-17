const fs = require('fs')
var i;
for (i = 2; i < 1000; i++) {
    fs.writeFile(`${i}.css`, `@import url('https://adoesgit.github.io/100-level-theme/${i + 1}.css');`, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
} 