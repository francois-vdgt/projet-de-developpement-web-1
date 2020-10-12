const c = document.getElementById('car')
let i = 0; 

setInterval(function(){
    c.style.top = i % 2 === 0 ? '175px' : '174px'; 
}, 100);

