const path = require('path');

// get filename
console.log(path.basename(__filename));

//get extension
console.log(path.extname(__filename));

//get path
console.log(path.dirname(__filename));

//get directory name
console.log(path.basename(__dirname));

//get path object
console.log(path.parse(__filename));

// See documentation for more...