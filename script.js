
let clicks=0;
document.getElementById('footer').addEventListener('click',()=>{
  clicks++;
  if(clicks>=5){
    prompt('Administratoriaus kodas');
    clicks=0;
  }
});
