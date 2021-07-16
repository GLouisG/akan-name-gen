let form = document.getElementById('form');
let birthYear = document.getElementById('birth-year');
let birthMonth = document.getElementById('birth-month');
let birthDate = document.getElementById('birth-date');

var bYear = parseInt(birthYear);
var bMonth = parseInt(birthMonth);
var bDate = parseInt(birthDate);

function validation(){
    if(bYear<1){
        return false;
        alert("Wrong birth details");
    }else if(bDate<1 || bDate>31){
        return false;
        alert("Wrong birth details");
    }
}
