
var current = {
  site:0,
  kebab:0,
  ktitle:['Kebab w bułce','Kebab w cieście','Kebab w kubku'],
  hm:false,
  size:1,
}
var items=document.getElementsByClassName('item');
var kebs=document.getElementsByClassName('items');
var sizes=document.getElementsByClassName('sitem');

function change(e){

  if(e!=items[0] && e!=items[1] && e!=items[2]){
    for(let i=0;i<kebs.length;i++){
      kebs[i].style.background = "rgb(0,0,0,0)";
    }
    if(e==kebs[0]){
      current.kebab=0;
      document.getElementsByClassName('title')[0].innerHTML = current.ktitle[0];
    }
    else if(e==kebs[1]){
       current.kebab=1;
      document.getElementsByClassName('title')[0].innerHTML = current.ktitle[1];
     }
    else {
      current.kebab=2;
      document.getElementsByClassName('title')[0].innerHTML = current.ktitle[2];
    }

  e.style.background="rgb(255,255,255,0.3)";
  }
  else{
  for(let i=0;i<items.length;i++){
    items[i].style.background = "#ffb01f";
  }

  if(e==items[0]) current.site=0;
  else if(e==items[1]) current.site=1;
  else current.site=2;


  e.style.background="#e59f1d";
}
}


function cheakIfChecked(e){
  if(e!=items[0] && e!=items[1] && e!=items[2]){

    if(e==kebs[current.kebab]){
      e.style.background="rgb(255,255,255,0.3)";
    }
    else{
      e.style.background="rgb(255,255,255,0.15)";
    }

  }
  else{
  if(e==items[current.site]){
    e.style.background="#e59f1d";
  }
  else{
    e.style.background="#f1a928";
  }
}
}

function off(e){
  if(e!=items[0] && e!=items[1] && e!=items[2]){
    if(e!=kebs[current.kebab])
    e.style.background = "rgb(0,0,0,0)";
  }
  else{
  if(e!=items[current.site])
  e.style.background = "#ffb01f";
}
}

function sizeChange(e){


   for(let i=0;i<sizes.length;i++){
     sizes[i].style.border = "none";
     sizes[i].style.background = "none";
      sizes[i].style.height = "25%";
     if(e==sizes[i]) current.size=i;
   }
 sizes[current.size].style.border = "0.1em white solid";
  sizes[current.size].style.height = "22.5%";
 sizes[current.size].style.background = "rgb(255,255,255,0.3)";


}



window.onscroll = function() {
    var scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;

    if(totalHeight >= scrollHeight/1.3)
    {
        document.getElementsByTagName('header')[0].style.height = '9%';
        document.getElementsByTagName('header')[0].style.fontSize = '90%';
        document.getElementsByClassName('logo')[0].style.transform = 'scale(0.7)';
        hm=true;
    }
    else if(hm=true){
      document.getElementsByTagName('header')[0].style.height = '12%';
      document.getElementsByTagName('header')[0].style.fontSize = '100%';
      document.getElementsByClassName('logo')[0].style.transform = 'scale(1)';
      hm=false;
    }
}


function lightup(){
  items[0].style.background = "#e59f1d";
  kebs[0].style.background = "rgb(255,255,255,0.3)";
  sizes[current.size].style.border = "0.1em white solid";
  sizes[current.size].style.background = "rgb(255,255,255,0.3)";
    sizes[current.size].style.height = "22.5%";
}

lightup();
