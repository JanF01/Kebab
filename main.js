
var current = {
  site:0,
  kebab:0,
  ktitle:['Kebab w bułce','Kebab w cieście','Kebab w kubku'],
  kinfo:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat tristique euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nec euismod metus. Suspendisse potenti. Sed venenatis nulla in leo sollicitudin maximus. In a diam sit amet turpis hendrerit dictum nec non enim. Donec pellentesque egestas dapibus.Praesent at magna eget ex.',
  'jakiś tam tekst dla kebaba w cieście, jest bardzo dobry i ogólnie to polecam! Najlepsze ciasto jakie kiedykolwiek jedliście. Świerze warzywa.','Phasellus tortor lectus, condimentum et condimentum eget, consectetur quis dui. Aliquam et nisi id elit condimentum fermentum. Maecenas sit amet libero eu velit placerat vestibulum vel eu libero. Phasellus non mollis dui. Aenean in tristique orci. Phasellus porta sem eget erat semper, in maximus nisi rutrum.'],
  hm:false,
  size:1,
  level:0,
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
      setTimeout(function(){
  document.getElementsByClassName('title')[0].innerHTML = current.ktitle[0];
    document.getElementsByClassName('info')[0].innerHTML = current.kinfo[0];
    images[1].src = "keb2.jpg";
    document.getElementsByClassName('picture')[0].getElementsByTagName('img')[0].style.width = "108%";
},300)
    }
    else if(e==kebs[1]){
       current.kebab=1;
       setTimeout(function(){
   document.getElementsByClassName('title')[0].innerHTML = current.ktitle[1];
       document.getElementsByClassName('info')[0].innerHTML = current.kinfo[1];
       images[1].src = "keb3.jpg";
       document.getElementsByClassName('picture')[0].getElementsByTagName('img')[0].style.width = "100%";
 },300)
     }
    else {
      current.kebab=2;
      setTimeout(function(){
  document.getElementsByClassName('title')[0].innerHTML = current.ktitle[2];
      document.getElementsByClassName('info')[0].innerHTML = current.kinfo[2];
      images[1].src = "keb4.jpg";
      document.getElementsByClassName('picture')[0].getElementsByTagName('img')[0].style.width = "105%";
},300)
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

var scrollY=0;
var speed = 5;
var distance = 10;

function slideToBottom(){
 let currentY = window.pageYOffset;
 let targetY = document.body.offsetHeight*1.06;
 let bodyHeight = document.body.offsetHeight*1.06;
 let posY = currentY + window.innerHeight;
 let animator = setTimeout('slideToBottom()',speed);
 if(posY>bodyHeight){
   clearTimeout(animator);
 }
 else{
    if(currentY < targetY - distance){
      scrollY = currentY + distance;
      window.scroll(0,scrollY);
    }
    else{
      clearTimeout(animator);
    }
 }
}

 function slideToTop(i){
  let currentY = window.pageYOffset;
  let targetY = 0;
  let top = 0;
  let posY = currentY + window.innerHeight;
  let animator = setTimeout('slideToTop()',speed);

  if(posY<top){
    clearTimeout(animator);
  }
  else{
     if(currentY > targetY + distance){
       scrollY = currentY - distance;
       window.scroll(0,scrollY);
     }
     else{
       clearTimeout(animator);
     }
  }




}


function slide(e){

  var sliders = document.getElementsByTagName("img");

  if(e==sliders[3]){
    setTimeout('slideToBottom()',100);
  }
  else if(e==sliders[2]){
    setTimeout('slideToTop()',100);
  }


}

var images = document.getElementsByTagName('img');

function bampSlider(e){


  if(e == images[3] && current.level==0){
    e.style.transform="scale(1.3) rotate(90deg)";
  }
  else if(e == images[2] && current.level==1){
    e.style.transform="scale(1.3) rotate(90deg)";
    console.log('lol');
  }

}
function shrinkSlider(e){
if(e.style.transform=="scale(1.3) rotate(90deg)"){
  e.style.transform="rotate(90deg)"
}
}



var down = false;


window.onscroll = function() {
  let scrollHeight = document.body.scrollHeight;
  let totalHeight = window.pageYOffset + window.innerHeight;


    if(totalHeight >= scrollHeight)
    {
        document.getElementsByTagName('header')[0].style.height = '9%';
        document.getElementsByTagName('header')[0].style.fontSize = '90%';
        document.getElementsByClassName('logo')[0].style.transform = 'scale(0.7)';
        down=true;
    }
    else if(down){
      document.getElementsByTagName('header')[0].style.height = '12%';
      document.getElementsByTagName('header')[0].style.fontSize = '100%';
      document.getElementsByClassName('logo')[0].style.transform = 'scale(1)';
    }

    if(totalHeight >= scrollHeight/1.2){
      images[3].src="arrow-bottom2.png";
      images[2].src="arrow-bottom.png";
      current.level = 1;
    }
    else if(totalHeight < scrollHeight/1.2){
      images[2].src="arrow-bottom2.png";
      images[3].src="arrow-bottom.png";
      current.level = 0;
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
