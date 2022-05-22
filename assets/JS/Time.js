var day= document.getElementById("currentDay")
day.append(Date());

var currentTime=new Date().getHours();
console.log(currentTime);


if(currentTime===17){
    var five =document.getElementById("5pmText");
    five.classList.add("present");

    var four=document.getElementById("4pmText")
    four.classList.remove('present')
    four.classList.add('past')
}

if(currentTime===18){
    var five=document.getElementById("5pmText")
    five.classList.remove('present')
    five.classList.add('past')
}