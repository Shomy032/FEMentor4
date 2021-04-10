

function myF(){
  var slider = document.getElementById("mySlider");
  var output = document.getElementById("value");
  var check = document.getElementById("checkBox");

  var inviz = document.getElementById("inviz");
  

   check.addEventListener('change' , () => {
    var cena = (slider.value/312.5).toFixed(2);
    var discount = (cena - (cena /4)).toFixed(2);
 
     if(check.checked){
      inviz.style.display = "inline-block";
      output.innerHTML ="$" + discount;
     } else{
       inviz.style.display = "none";
       output.innerHTML ="$" + cena;
     };
    
    console.log((slider.value/312.5).toFixed(2));
    console.log(discount);
  })

   let update = () => {
     var cena = (slider.value/312.5).toFixed(2);
     var discount = (cena - cena /4).toFixed(2)
     if (check.checked){
       // inviz.style.display = "inline-block" ;
       output.innerHTML ="$" + discount;
     } else{
       // inviz.style.display = "none";
      output.innerHTML ="$" + cena;
     }
   
   } 
  
 slider.addEventListener('input', update);
   update();

  slider.addEventListener('mousemove' , () =>{
    var slider1 = document.querySelector(".slider");
    var x = (slider1.value/100);
    var color = 'linear-gradient(90deg , rgb(0, 255, 200)' + x + '% ,  rgb(219, 219, 219)' + x + '%)' ;
  
    slider1.style.background = color ;
  } )

  // Function for congratulation page
  // I TRIED BUT , FUCK IT
  // function myCons(){
  //   var end = document.getElementById('bill');
  //   var button = document.getElementById('buut');
    
  //   button.addEventListener("onclick" , () =>{
  //     end.innerHTML = '$' ;
  //   } )
  // }


} ;










