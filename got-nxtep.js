#!/usr/bin/env node
var program = require('commander');
const utils = require('./utils')
const nextEpisode =   require('./gotUtils.js').nextEpisode
program.parse(process.argv);
try {
utils.getAirDate()
.then((res)=>{
  nextEpisode(res.data)
})
}catch(err){
    console.log('something is preventing from getting data')
}
