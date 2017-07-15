  var axios = require('axios')
  const qs = require('querystring')
  const log = console.log
    const ora = require('ora');
  function getAirDate(){
    const spin = spinner({
      text:'getting next episode date',
      spinner : 'dots'
    })
  	  return new Promise((resolve,reject)=>{
  	   axios('http://api.tvmaze.com/singlesearch/shows?q=game%20of%20thrones')
    	.then((res)=>{
    		let nextEpisdoeHref = res.data._links.nextepisode.href
    		axios(nextEpisdoeHref)
    		.then((res)=>{
          spin.stop()
    				resolve(res)
    		}).catch((err)=>{
    			reject(err)
    		})
    	}).catch((err)=>{
    			reject(err)
    		})

    	   })
  }
  function getQuote(){
    const spin = spinner({
      text:'getting greatest quote',
      spinner : 'dots'
    })
    return new Promise((resolve,reject)=>{
       axios('https://got-quotes.herokuapp.com/quotes')
       .then((res)=>{
         spin.stop()
         resolve(res)
       }).catch((err)=>{
         reject(err)
       })
    })
  }
  function getCharacter(name){
    const spin = spinner({
      text:'getting info',
      spinner : 'dots'
    })
    let urlParams = qs.stringify({ name:name})
    return new Promise((resolve,reject)=>{
       axios(`https://www.anapioficeandfire.com/api/characters?${urlParams}`)
       .then((res)=>{
         spin.stop()
         resolve(res)
       }).catch((err)=>{
         reject(err)
       })
    })
  }
  function spinner(options){
    return ora(options).start();
  }
  module.exports = {
    getAirDate:getAirDate,
    getQuote:getQuote,
    getCharacter:getCharacter
  }
