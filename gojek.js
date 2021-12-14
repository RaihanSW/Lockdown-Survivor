//variabel
Creator = "Raihan S";
//Variabel
var MH = 10;
var Energy = 10;
var Money = 10;
var Cure = 0;
var days = 0,action,y;

//repository
var MH1;
var Energy1;
var Money1;
var Cure1;
var days1;

document.getElementById("days").innerHTML = ""+ days +"";
document.getElementById("MH").innerHTML = "Mental Health : "+ MH +"";
document.getElementById("Energy").innerHTML = "Energy : "+ Energy +".";
document.getElementById("Money").innerHTML = "Money : "+ Money +"$" ;
document.getElementById("Cure").innerHTML = "Cure Progress: "+ Cure +"%";

//function for MH
function Rest() {
  MH1 = MH - 1 ;
  MH = MH1;
  Energy1 = Energy + 2;
  Energy = Energy1;
  Money1 = Money -1;
  Money = Money1;
  Cure1 = Cure + 1;
  Cure = Cure1;
  days1 = days + 1;
  days = days1;
 document.getElementById("days").innerHTML = ""+ days +"";
document.getElementById("MH").innerHTML = "Mental Health : "+ MH +"";
document.getElementById("Energy").innerHTML = "Energy : "+ Energy +".";
document.getElementById("Money").innerHTML = "Money : "+ Money +"$" ;
document.getElementById("Cure").innerHTML = "Cure Progress: "+ Cure +"%";
}

function Play() {
  MH1 = MH + 2 ;
  MH = MH1;
  Energy1 = Energy - 2;
  Energy = Energy1;
  Money1 = Money - 2;
  Money = Money1;
  Cure1 = Cure + 1;
  Cure = Cure1;
  days1 = days + 1;
  days = days1;
 document.getElementById("days").innerHTML = ""+ days +"";
document.getElementById("MH").innerHTML = "Mental Health : "+ MH +"";
document.getElementById("Energy").innerHTML = "Energy : "+ Energy +".";
document.getElementById("Money").innerHTML = "Money : "+ Money +"$" ;
document.getElementById("Cure").innerHTML = "Cure Progress: "+ Cure +"%";
}

function Work() {
  MH1 = MH - 1 ;
  MH = MH1;
  Energy1 = Energy - 1;
  Energy = Energy1;
  Money1 = Money + 3;
  Money = Money1;
  Cure1 = Cure + 2;
  Cure = Cure1;
  days1 = days + 1;
  days = days1;
 document.getElementById("days").innerHTML = ""+ days +"";
document.getElementById("MH").innerHTML = "Mental Health : "+ MH +"";
document.getElementById("Energy").innerHTML = "Energy : "+ Energy +".";
document.getElementById("Money").innerHTML = "Money : "+ Money +"$" ;
document.getElementById("Cure").innerHTML = "Cure Progress: "+ Cure +"%";
}

function show() {
  document.getElementById('main_menu_img').style.display='block';
}
function hide() {
  document.getElementById('main_menu_img').style.display='none';
}
function timbul() {
 document.getElementById('main_menu_img').src ='rewrite.jpg';
 document.getElementById("angka").innerHTML =
"coba CTF hehe... cari nilai x ya! diketahui z = "+ z +".";
}
window.alert('You are a Doctor in a lockdown because of the spread of disease,');
window.alert('You have to find its cure while maintaining your Mental Health and Energy, and stay at home :)');


var Creator