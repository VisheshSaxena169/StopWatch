
let display=document.getElementById('display');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset')
let timer=null;

let [seconds,minutes,hours]=[0,0,0];

function watch(){
seconds++;
if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
        minutes=0;
        hours++;
    }
}
let s= seconds<10?"0"+seconds:seconds;
let m= minutes<10?"0"+minutes:minutes;
let h= hours<10?"0"+hours:hours;
display.innerHTML=h+":"+m+":"+s

}
function watchstart(){
    if(timer!==null){
        clearInterval(timer);
    }
timer=setInterval(watch,1000)
}
function watchStop(){
clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
 [seconds,minutes,hours]=[0,0,0];
 display.innerHTML="00:00:00";
}



start.addEventListener('click',watchstart);
stop.addEventListener('click',watchStop);
reset.addEventListener('click',watchReset);
