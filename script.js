function displayTime(){
var a=new Date()
var hrs=a.getHours()
var min=a.getMinutes()
var sec=a.getSeconds()
var session=document.getElementById('session');
if(hrs>=12){
    session.innerHTML='PM';
}
else{
    session.innerHTML='AM';
}
if(hrs>12){
    hrs=hrs-12
}
document.getElementById('hours').innerHTML=hrs;
document.getElementById('minutes').innerHTML=min;
document.getElementById('seconds').innerHTML=sec;
}
setInterval(displayTime,10);