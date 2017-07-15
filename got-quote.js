#!/usr/bin/env node

var program = require('commander');
const getQuote = require('./utils').getQuote
const showTheQuote =   require('./gotUtils.js').showTheQuote

getQuote()
.then((res)=>{
showTheQuote(res.data)
})
