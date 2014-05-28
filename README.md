## json-equal
return whether two jsons are equal

## installation
    npm install json-equal

## usage
```javascript
var jsonEqual = require('json-equal')

console.log(jsonEqual(
  {
    a:'a',
    b:[1.100003,1,3,4,5],
    c:{
      m:'m',
      n:[1,2,3]
    }
  },
  {
    a:'a',
    b:[1.100003,1,3,4,5],
    c:{
      m:'m',
      n:[1,2,3]
    }
  }
))

console.log(jsonEqual(
  {a:'a'},
  {b:[1,2,3]}
))
```
output
```javascript
true
false
```

## jsonEqual(a,b)
`return` whether two jsons `a` and `b` are equal
