# Working with DOM

## Get element immediately following the specified element
```javascript
var x = document.querySelector('.someclass').nextElementSibling;
```

## Grab Children
```javascript
var x = document.querySelector('.someclass').nextElementSibling;
```

## Class
```javascript
// Add the class
node.classList.add('-hide');

// Remove the class
node.classList.remove('-hide');

// Add or remove multiple classes
node.classList.add('-hide', '-js');
node.classList.remove('-hide', '-js');

// Toggle class
node.classList.toggle('-hide');

// Contain class
node.classList.contains('-hide');
```

# Module

ES6: Doesn't work because must be running on server. Bracket software allows to create local server with livereload.

## Simple export/import
```javascript
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

```javascript
// lib.js
let defaultVar = "Default";

export default defaultVar;

// app.js
import myDefaultVar from "./lib/lib.js";
```

## Export/import all
All elements can be imported with *

```javascript
// lib.js
export {myLog, myVar, defaultVar};

// app.js
import * as external from "./lib/lib.js";
console.log(external.myDefaultVar);
```

# Arrow function
ES5
```javascript
function() {
    console.log('ES5 function');
}
```

ES6
```javascript
() => console.log('ES5 function');
```

___

ES5
```javascript
function(item) {
    console.log(item);
}

function(item, index) {
    console.log(item);
}
```

ES6
```javascript
(item, index) => console.log(item);
```

___

ES5
```javascript
var myFunction = function(item) {
    console.log(item);
}
```

ES6
```javascript
const myFunction = (item, index) => console.log(item);
```
