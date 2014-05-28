var equal = require('../index')
var test = require('tape')

test('equal', function(t) {
  t.plan(1)
  var eq = equal(
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
  )
  t.deepEqual(eq,true)
  t.end()
})

test('not equal', function(t) {
  t.plan(1)
  var eq = equal(
    {a:'a'},
    {b:[1,2,3]}
  )
  t.deepEqual(eq,false)
  t.end()
})
