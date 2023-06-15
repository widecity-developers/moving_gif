
console.log("widy is loading your media");
function widy_go(direction,speed,position,size,width,media_url){
               document.getElementById("mgif").innerHTML = `<div style="position: ${position};width:${width};z-index: 1000;"><marquee direction=${direction} scrollamount=${speed}><img src=${media_url} width=${size}></marquee></div>`
             }
console.log("loaded successfully");
