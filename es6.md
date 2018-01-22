# Module

ES6: Doesn't work because must be running on server. Bracket software allows to create local server with livereload.

## Simple export/import
```
// lib.js
let myLog = message => console.log(message);

let myVar = "Coucou !";

export {myLog, myVar};

// app.js
import {myLog, myVar} from "./lib/lib.js";

myLog(myVar);
```

## export default
Just one by file.
It's is possible to call default by other name

```
// lib.js
let defaultVar = "Default";

export default defaultVar;

// app.js
import myDefaultVar from "./lib/lib.js";
```

## Export/import all
All elements can be imported with *

```
// lib.js
export {myLog, myVar, defaultVar};

// app.js
import * as external from "./lib/lib.js";
console.log(external.myDefaultVar);
```

# Arrow function
ES5
```
function() {
    console.log('ES5 function');
}
```

ES6
```
() => console.log('ES5 function');
```

___

ES5
```
function(item) {
    console.log(item);
}

function(item, index) {
    console.log(item);
}
```

ES6
```
(item, index) => console.log(item);
```

___

ES5
```
var myFunction = function(item) {
    console.log(item);
}
```

ES6
```
myFunction = (item, index) => console.log(item);
```