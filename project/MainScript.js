// Creating de variables:

const YearsQualified = document.getElementById("yearqualified");
const YearToday = document.getElementById("yeartoday");
const age = document.getElementById("age");
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



// Changes the texts when the About it button is clicked
function Aboutit(a){
    var texto = "The Canada Pension Plan (CPP) retirement pension is a monthly, taxable benefit that replaces part of your income when you retire. If you qualify, you’ll receive the CPP retirement pension for the rest of your life.<br> To qualify you must:" 
    var texto2 = "Valid contributions can be either from work you did in Canada, or as the result of receiving credits from a former spouse or former common-law partner at the end of the relationship.";
    var texto3 = "Text from: <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp.html'>Canadian government website</a>"
    myElement.innerHTML = "About the plan";
    myElement3.removeAttribute("hidden");
    myElement2.removeAttribute("hidden");
    myElement2.innerHTML = texto;
    myElement4.innerHTML = texto2;
    myElement5.innerHTML = texto3;
    myElement10.setAttribute("hidden", "hidden");
    myElement15.setAttribute("hidden", "hidden");




}


// Checking if the person is qualified for retirement and printing the message on the web page with the result
function Result(a){

    myElement11.innerHTML = "Summary";
    myElement13.innerHTML = "";
    myElement14.innerHTML = "";
    myElement2.setAttribute("hidden", "hidden");
    myElement3.setAttribute("hidden", "hidden");
    myElement10.setAttribute("hidden", "hidden");
    myElement15.removeAttribute("hidden");
 



}
function ClientInfo(b){
    myElement6.innerHTML = "Today's qualification";
    myElement7.innerHTML = "";
    myElement8.innerHTML = "";
    myElement9.innerHTML = "";
    myElement10.removeAttribute("hidden");
    myElement3.setAttribute("hidden", "hidden");
    myElement15.setAttribute("hidden", "hidden");

}

$.getJSON( "information.json", function( data ) {
    PeopleQualified = data.YearQualified + " or older";
    // Writting the person's information on the table
    YearsQualified.innerHTML = PeopleQualified;
    YearToday.innerHTML = data.YearToday;
    age.innerHTML = data.age;

    // Writting the person's result
    
    postiveOutcome = "Congratulations! If you were born in " + data.YearQualified + ", you may be now qualified for retirement";
    myElement15.innerHTML = postiveOutcome;

});

