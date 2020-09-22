console.log('mon message');  
console.error('mon message erreur');  
  




let k = true; 
let a =  document.getElementById('images'); 
a.addEventListener("click", function(){
    k = !k; 
    if(k){
        document.getElementById('images').style="margin-left: 10px"; 
    }else{
        document.getElementById('images').style="margin-right: 10px"; 
    }
    
   
}); 


console.log(k);


































































































