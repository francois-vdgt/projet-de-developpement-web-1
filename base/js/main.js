//console.log('mon message');  
//console.error('mon message erreur'); 

//const a = document.querySelector("#pp"); 

//a.addEventListener("click", function(){
  //  alert('message'); 
//}); 
 

//const btns = document.getElementsByClassName('btn'); 
//btns[0].addEventListener("click", function(){
  //  alert('message'); 
//});

 //$("#pp").on('click', function(){
   //      $(".table tr:last").remove(); 
 //}); 
  let k = true; 
  
 const table = document.getElementById('tt');
 const btn1 = document.getElementById('pp'); 
 const btn2 = document.getElementById('pp2'); 

btn1.addEventListener("click", function(){
    k = !k; 
      if(table.style.display =='none'){
        table.style.display ="table";
      }else{
        table.style.display ="none";
      }
  
      
}); 

/*btn2.addEventListener("click", function(){
 
/*const taille = document.getElementsByTagName('tr'.lenght); 
for(i = 1; i<taille; i++){
  document.querySelectorAll('t')[i].lastElementChild.innerHTML =''; 
}*//*
const date = document.querySelectorAll('tt td:nth-child(3)').forEach(function(date{
  date.innerHTML=''; 
}) 
}); 
*/

   
 































































































