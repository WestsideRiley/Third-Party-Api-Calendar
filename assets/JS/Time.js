var day= document.getElementById("currentDay")
day.append(Date());

var currentTime=new Date().getHours();
console.log(currentTime);

if(currentTime===9){
    var five =document.getElementById("9amText");
    five.classList.add("present");

    var four=document.getElementById("9amText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===10){
    var five =document.getElementById("10amText");
    five.classList.add("present");

    var four=document.getElementById("9amText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===11){
    var five =document.getElementById("11amText");
    five.classList.add("present");

    var four=document.getElementById("10amText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===12){
    var five =document.getElementById("12pmText");
    five.classList.add("present");

    var four=document.getElementById("11amText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===13){
    var five =document.getElementById("1pmText");
    five.classList.add("present");

    var four=document.getElementById("12pmText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===14){
    var five =document.getElementById("2pmText");
    five.classList.add("present");

    var four=document.getElementById("1pmText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===15){
    var five =document.getElementById("3pmText");
    five.classList.add("present");

    var four=document.getElementById("2pmText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===16){
    var five =document.getElementById("4pmText");
    five.classList.add("present");

    var four=document.getElementById("3pmText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===17){
    var five =document.getElementById("5pmText");
    five.classList.add("present");

    var four=document.getElementById("4pmText");
    four.classList.remove('present');
    four.classList.add('past');
}

if(currentTime===18||currentTime===19||currentTime===20||currentTime===21||currentTime===22||currentTime===23||currentTime===0){
    var nine=document.getElementById("9amText");
    var ten=document.getElementById("10amText");
    var eleven=document.getElementById("11amText");
    var twelve=document.getElementById("12pmText");
    var one=document.getElementById("1pmText");
    var two=document.getElementById("2pmText");
    var three=document.getElementById("3pmText");
    var four=document.getElementById("4pmText");
    var five=document.getElementById("5pmText");

    nine.classList.remove('present');
    ten.classList.remove('present');
    eleven.classList.remove('present');
    twelve.classList.remove('present');
    one.classList.remove('present');
    two.classList.remove('present');
    three.classList.remove('present');
    four.classList.remove('present');
    five.classList.remove('present');

    nine.classList.remove('future');
    ten.classList.remove('future');
    eleven.classList.remove('future');
    twelve.classList.remove('future');
    one.classList.remove('future');
    two.classList.remove('future');
    three.classList.remove('future');
    four.classList.remove('future');
    five.classList.remove('future');

    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');
    one.classList.add('past');
    two.classList.add('past');
    three.classList.add('past');
    four.classList.add('past');
    five.classList.add('past');
}