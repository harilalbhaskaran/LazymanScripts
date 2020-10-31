function linkedInplaybackSet(){
	document.querySelector('video').playbackRate = 16
    console.log('playbackRate Script Triggered :)')
}

setInterval(function(){
    linkedInplaybackSet()}, 30000)
