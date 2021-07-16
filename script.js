var form = document.getElementById("form");
    var bYear = document.getElementById("birth-year");
    var bMonth = document.getElementById("birth-month");
    var bDate = document.getElementById("birth-date");

function validate(bYear, bMonth, bDate){
    console.log("reaches here");
  var bYear1 = parseInt(bYear.value);
  var bMonth1 = parseInt(bMonth.value);
   var bDate1 = parseInt(bDate.value);


    if(bYear1<1){
        alert("Wrong birth details");
        return false;
    }
    if(bDate1<1 || bDate>31){
        alert("Wrong birth details");
        return false;
    }else{
        true;
    }
}
