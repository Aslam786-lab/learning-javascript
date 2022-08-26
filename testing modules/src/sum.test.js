import sum from './sum.js'
// const sum = require('./sum.js') (another way to import )

test('testing sum',()=>{
    expect(sum(2,3)).toBe(5);
})
