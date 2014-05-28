## json-equal
return whether two jsons are equal

## usage
```javascript
var equal = require('json-equal')
console.log(equal(
  {
    "a":"a",
    "b":[1.100003,1,3,4,5],
    "c":{
      "m":"m",
      "n":[1,2,3]
    }
  },
  {
    "a":"a",
    "b":[1.100003,1,3,4,5],
    "c":{
      "m":"m",
      "n":[1,2,3]
    }
  }
))
console.log(equal(
  {a:"a"},
  {b:[1,2,3]}
))
```
output
```javascript
true
false
```
