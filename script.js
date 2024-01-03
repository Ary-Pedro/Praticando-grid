var cont = 0;

function mudar(){
cont++;
  if(cont%2==0){
  document.getElementById("logoCat").style.width = "100%";
  document.getElementById("logoDog").style.width = "0%";
  }
  


  
  else{
    document.getElementById("logoCat").style.width = "0%";
    document.getElementById("logoDog").style.width = "100%";
  }

}
btn.addEventListener('click',mudar)