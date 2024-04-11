const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

var mydate = new Date();
let myday = weekday[mydate.getDay()];
let my =document.getElementById("day");
my.textContent = myday;

//var datetime = new Date();
let mine =document.getElementById("time");
mine.textContent = mydate;