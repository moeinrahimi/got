#!/usr/bin/env node
var program = require('commander');
const getCharacter = require('./utils').getCharacter
program.parse(process.argv)
if(!program.args.length){
   console.log('provide character\'s name')
   process.exit(1)
}
try {
let name = program.args.join(' ')
getCharacter(name)
.then((res)=>{
let data = res.data[0]
console.log(`
${name} Specification :
Name : ${data.name ? data.name  : 'no data'}
Gender : ${data.gender ? data.gender  : 'no data'}
Culture : ${data.culture ? data.culture  : 'no data'}
Born : ${data.born ? data.born  : 'no data'}
died : ${data.died ? data.died  : 'no data'}
titles : ${data.titles ? data.titles  : 'no data'}
aliases : ${data.aliases ? data.aliases  : 'no data'}
father : ${data.father ? data.father : 'no data'}
mother : ${data.mother ? data.mother  : 'no data'}
playedBy : ${data.playedBy  ? data.playedBy : 'no data'}`)
})
.catch((err)=>{
  console.log('character not found, try full name like jon snow :)')
})
}catch(err){
  console.log(err)
}
