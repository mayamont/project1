// Creating de variables:
var firstName;
var lastName;
var namevariable1;
var namevariable2;
var namevariable3;
var retirees;
var notretirees;
let age;
let nextAge;
let fullName;
const thisyear = 2023;
const future = 2060;
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const actualage = document.getElementById("age");
// Creates variables with the texts Ids to later change the texts according to the button clicked
//about it
const myElement = document.getElementById("texth1");
const myElement2 = document.getElementById("textpplan");
let myElement3 = document.getElementById("requirements");
let hidden = myElement3.getAttribute("hidden");
const myElement4 = document.getElementById("textp2plan");
const myElement5 = document.getElementById("textp3plan");
//your information
const myElement6 = document.getElementById("texth1");
const myElement7 = document.getElementById("textpplan");
const myElement8 = document.getElementById("textp2plan");
const myElement9 = document.getElementById("textp3plan");
let myElement10 = document.getElementById("infotable");
let hidden2 = myElement10.getAttribute("hidden");
//result
const myElement11 = document.getElementById("texth1");
const myElement12 = document.getElementById("textpplan");
const myElement13 = document.getElementById("textp2plan");
const myElement14 = document.getElementById("textp3plan");
const myElement15 = document.getElementById("textpresult");
let hidden3 = myElement15.getAttribute("hidden");


// Assigning values to the variables:
//age = 25;
retirees = 0;
notretirees = 0;
//firstName = "Mayara";
//lastName = "Monteiro da Silva";
namevariable1 = "First name:";
namevariable2 = "Last name:";
namevariable3 = "Full name:";
namevariable4 = "This year:";
numberretirees = "People retiring: ";
numbernotretirees = "People not retiring: ";


// Function to write messages using the variables
function displayvariable(a, b){
    console.log(a + " " + b)
}

// Changes the texts when the About it button is clicked
function Aboutit(a){
    var texto = "The Canada Pension Plan (CPP) retirement pension is a monthly, taxable benefit that replaces part of your income when you retire. If you qualify, you’ll receive the CPP retirement pension for the rest of your life.<br> To qualify you must:" 
    var texto2 = "Valid contributions can be either from work you did in Canada, or as the result of receiving credits from a former spouse or former common-law partner at the end of the relationship.";
    var texto3 = "Text from: <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp.html'>Canadian government website</a>"
    myElement.innerHTML = "About the plan";
    myElement3.removeAttribute("hidden");
    myElement2.innerHTML = texto;
    myElement4.innerHTML = texto2;
    myElement5.innerHTML = texto3;
    myElement10.setAttribute("hidden", "hidden");
    myElement15.setAttribute("hidden", "hidden");




}


// Checking if the person is qualified for retirement and printing the message on the web page with the result
function Result(a){
    if(nextAge >= 60){

        myElement11.innerHTML = "Your Result";
        myElement13.innerHTML = "";
        myElement14.innerHTML = "";
        myElement3.setAttribute("hidden", "hidden");
        myElement10.setAttribute("hidden", "hidden");
        myElement15.removeAttribute("hidden");
        retirees++;
        displayvariable(numberretirees, retirees);

    
    }
    else{
        myElement11.innerHTML = "Your Result";
        myElement13.innerHTML = "";
        myElement14.innerHTML = "";
        myElement3.setAttribute("hidden", "hidden");
        myElement10.setAttribute("hidden", "hidden");
        myElement15.removeAttribute("hidden");
        notretirees++;
        displayvariable(numbernotretirees, notretirees);

    }

}
function ClientInfo(b){
    myElement6.innerHTML = "Your information";
    myElement7.innerHTML = "";
    myElement8.innerHTML = "";
    myElement9.innerHTML = "";
    myElement10.removeAttribute("hidden");
    myElement3.setAttribute("hidden", "hidden");
    myElement15.setAttribute("hidden", "hidden");

}

$.getJSON( "information.json", function( data ) {
    // Displaying the messages
    displayvariable(namevariable1, data.firstName);
    displayvariable(namevariable2, data.lastName);  
    fullName = data.firstName + " " + data.lastName;
    displayvariable(namevariable3, fullName);
    nextAge = (future-thisyear) + Number(data.age);
    displayvariable(namevariable4, thisyear);
    console.log("Today you are " + data.age + ", but in " + future + " you will be " + nextAge + " years old.");

    // Writting the person's information on the table
    firstname.innerHTML = data.firstName;
    lastname.innerHTML = data.lastName;
    actualage.innerHTML = data.age;

    // Writting the person's result
    
    if(nextAge >= 60){
        postiveOutcome = "Congratulations " + fullName + ", you may qualify for retirement in " + future;
        myElement15.innerHTML = postiveOutcome;
    
    }
    else{
        negativeOutcome = "I'm sorry, " + fullName + ", you won't qualify for retirement in " + future;
        myElement15.innerHTML = negativeOutcome;


    }
});

