console.log("widy is loading your charecter");
function widy_character_go({direction='right',speed='30',position='fixed',size='100px',width='100vw',media_url='https://webstockreview.net/images/clipart-dinosaur-dinosaur-extinction-18.gif'}={}){
               document.getElementById("widy_character").innerHTML = `<div style="position: ${position};width:${width};z-index: 1000;"><marquee direction=${direction} scrollamount=${speed}><img src=${media_url} width=${size}></marquee></div>`
             }
console.log("loaded successfully");
