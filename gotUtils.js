const log = console.log
function nextEpisode(episode){

log(
`
next episode details :

‍‍‍Episode name : ${episode.name}
Season :  ${episode.season}
episode :  ${episode.number}
air Time : ${prettyDate(episode.airstamp)}
Summary : ${episode.summary}
`)
}
function showTheQuote(quote){
		log(quote.quote)
	  log(`--  ${quote.character}`)
}
module.exports = {
  nextEpisode:nextEpisode,
  showTheQuote:showTheQuote
}

function prettyDate(date) {
  var now = new Date(date);
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date.join("/") + " " + time.join(":") + " " + suffix;
}
