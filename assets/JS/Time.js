var day= document.getElementById("currentDay")
day.append(Date());

var currentTime=new Date().getHours();
console.log(currentTime);

//defining global variables to be used by all of the if statements
{
var nine=document.getElementById("9amText");
var ten=document.getElementById("10amText");
var eleven=document.getElementById("11amText");
var twelve=document.getElementById("12pmText");
var one=document.getElementById("1pmText");
var two=document.getElementById("2pmText");
var three=document.getElementById("3pmText");
var four=document.getElementById("4pmText");
var five=document.getElementById("5pmText");
}

//Conditions for changing the background colors of the textboxes as the time changes
{
if(currentTime===9){
    nine.classList.remove('future');
    nine.classList.add("present");

    ten.classList.add('future');
    eleven.classList.add('future');
    twelve.classList.add('future');
    one.classList.add('future');
    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===10){
    nine.classList.add('past');

    ten.classList.remove('future');
    ten.classList.add("present");

    eleven.classList.add('future');
    twelve.classList.add('future');
    one.classList.add('future');
    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
   
}

if(currentTime===11){
    nine.classList.add('past');
    ten.classList.add('past');

    eleven.classList.remove('future');
    eleven.classList.add("present");
   
    twelve.classList.add('future');
    one.classList.add('future');
    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===12){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');

    twelve.classList.remove('future');
    twelve.classList.add("present");

    one.classList.add('future');
    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===13){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');

    one.classList.remove('future');
    one.classList.add("present");

    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===14){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');
    one.classList.add('past');

    two.classList.remove('future');
    two.classList.add("present");

    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===15){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');
    one.classList.add('past');
    two.classList.add('past');

    three.classList.remove('future');
    three.classList.add("present");

    four.classList.add('future');
    five.classList.add('future');
}

if(currentTime===16){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');
    one.classList.add('past');
    two.classList.add('past');
    three.classList.add('past');

    four.classList.remove('future');
    four.classList.add("present");

    five.classList.add('future');
}

if(currentTime===17){
    nine.classList.add('past');
    ten.classList.add('past');
    eleven.classList.add('past');
    twelve.classList.add('past');
    one.classList.add('past');
    two.classList.add('past');
    three.classList.add('past');
    four.classList.add('past');
   
    five.classList.add("present");

}

if(currentTime===18||currentTime===19||currentTime===20||currentTime===21||currentTime===22||currentTime===23||currentTime===0){
  removeFuture();
  addPast();
}

if(currentTime===0||currentTime===1||currentTime===2||currentTime===3||currentTime===4||currentTime===5||currentTime===6||currentTime===7||currentTime===8){
  removePast();
  addFuture(); 
  
}

function addPast(){
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

function removeFuture(){
    nine.classList.remove('future');
    ten.classList.remove('future');
    eleven.classList.remove('future');
    twelve.classList.remove('future');
    one.classList.remove('future');
    two.classList.remove('future');
    three.classList.remove('future');
    four.classList.remove('future');
    five.classList.remove('future');
}

function removePast(){
    nine.classList.remove('past');
    ten.classList.remove('past');
    eleven.classList.remove('past');
    twelve.classList.remove('past');
    one.classList.remove('past');
    two.classList.remove('past');
    three.classList.remove('past');
    four.classList.remove('past');
    five.classList.remove('past');
}

function addFuture(){
    nine.classList.add('future');
    ten.classList.add('future');
    eleven.classList.add('future');
    twelve.classList.add('future');
    one.classList.add('future');
    two.classList.add('future');
    three.classList.add('future');
    four.classList.add('future');
    five.classList.add('future');
}
}