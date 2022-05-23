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

//Conditions for getting text from local storage
{
{if(localStorage.getItem('9amText')!==null){

    var NineLocal=localStorage.getItem('9amText');
    var NineText= document.getElementById("9amText");
    NineText.append(NineLocal);
    }

    document.getElementById("9am-btn").addEventListener("click", function ()
        {
            var NineEvent = document.getElementById("9amText").value ;
            localStorage.setItem("9amText", NineEvent) ;
        } , false);
}

{if(localStorage.getItem('10amText')!==null){

    var TenLocal=localStorage.getItem('10amText');
    var TenText= document.getElementById("10amText");
    TenText.append(TenLocal);
    }

    document.getElementById("10am-btn").addEventListener("click", function ()
        {
            var TenEvent = document.getElementById("10amText").value ;
            localStorage.setItem("10amText", TenEvent) ;
        } , false);
}

{if(localStorage.getItem('11amText')!==null){

    var ElevenLocal=localStorage.getItem('11amText');
    var ElevenText= document.getElementById("11amText");
    ElevenText.append(ElevenLocal);
    }

    document.getElementById("11am-btn").addEventListener("click", function ()
        {
            var ElevenEvent = document.getElementById("11amText").value ;
            localStorage.setItem("11amText", ElevenEvent) ;
        } , false);
}


{if(localStorage.getItem('12pmText')!==null){

    var TwelveLocal=localStorage.getItem('12pmText');
    var TwelveText= document.getElementById("12pmText");
    TwelveText.append(TwelveLocal);
    }

    document.getElementById("12pm-btn").addEventListener("click", function ()
        {
            var TwelveEvent = document.getElementById("12pmText").value ;
            localStorage.setItem("12pmText", TwelveEvent) ;
        } , false);
}

{if(localStorage.getItem('1pmText')!==null){
    var OneLocal=localStorage.getItem('1pmText');
    var OneText= document.getElementById("1pmText");
    OneText.append(OneLocal);
    }

    document.getElementById("1pm-btn").addEventListener("click", function ()
        {
            var OneEvent = document.getElementById("1pmText").value ;
            localStorage.setItem("1pmText", OneEvent) ;
        } , false);
}

{if(localStorage.getItem('2pmText')!==null){
    var TwoLocal=localStorage.getItem('2pmText');
    var TwoText= document.getElementById("2pmText");
    TwoText.append(TwoLocal);
    }

    document.getElementById("2pm-btn").addEventListener("click", function ()
        {
            var TwoEvent = document.getElementById("2pmText").value ;
            localStorage.setItem("2pmText", TwoEvent) ;
        } , false);
}

{if(localStorage.getItem('3pmText')!==null){
    var ThreeLocal=localStorage.getItem('3pmText');
    var ThreeText= document.getElementById("3pmText");
    ThreeText.append(ThreeLocal);
    }

    document.getElementById("3pm-btn").addEventListener("click", function ()
        {
            var ThreeEvent = document.getElementById("3pmText").value ;
            localStorage.setItem("3pmText", ThreeEvent) ;
        } , false);
}

{if(localStorage.getItem('4pmText')!==null){

    var FourLocal=localStorage.getItem('4pmText');
    var FourText= document.getElementById("4pmText");
    FourText.append(FourLocal);
    }

document.getElementById("4pm-btn").addEventListener("click", function ()
    {
        var FourEvent = document.getElementById("4pmText").value ;
        localStorage.setItem("4pmText", FourEvent) ;
    } , false);
}

{if(localStorage.getItem('5pmText')!==null){
    var FiveLocal=localStorage.getItem('5pmText');
    var FiveText= document.getElementById("5pmText");
    FiveText.append(FiveLocal);
    }
    document.getElementById("5pm-btn").addEventListener("click", function ()
        {
            var FiveEvent = document.getElementById("5pmText").value ;
            localStorage.setItem("5pmText", FiveEvent) ;
        } , false);
}
document.getElementById("clear-btn").addEventListener("click", function ()
    {
        localStorage.clear();
        location.reload();
    });   
}
