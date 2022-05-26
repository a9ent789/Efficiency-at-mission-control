//Tecumse McMullin

//This is my global variables section.
var timeWord = 0;

//this function tells the counter what to do at certain times.
function theTimer(i){

    //the setTimeout tag tells this section of the code it can only run on certain times that the website is open.
    setTimeout(function(){

        //this takes i and flips it so that the countdown can be displayed going the opposite direction
        timeWord = (-1*(i-10));

        //this if statement will show "Blast Off!!!!" once the timer hits zero
        if(timeWord < 1){
            document.getElementById("displayCounter").innerHTML = "Blast Off!!!!";
        }

        //this else if statement tells the user that the countdown is les than half way done.
        else if(timeWord < 5){
            document.getElementById("displayCounter").innerHTML = "Warning Less than ½ way to launch, time left = " + timeWord;
        }

        //this else is used to tell the function what to do at all other times,
        else{
            document.getElementById("displayCounter").innerHTML = "Time Left = " + timeWord;
        }
    },(1000*i))
}


//this is a for loop that works to tell the setTimeout function what second it is running on, and runs tht "theTimer()" function.
for (var i = 0; i<11; i++){
    theTimer(i);
}