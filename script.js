
function validate(bYear, bMonth, bDate){
    var form = document.getElementById("form").value;
    var bYear = document.getElementById("birth-year").value;
    var bMonth = document.getElementById("birth-month").value;
    var bDate = document.getElementById("birth-date").value;

console.log(bYear, bMonth, bDate);

  var bYear1 = parseInt(bYear);
  var bMonth1 = parseInt(bMonth);
   var bDate1 = parseInt(bDate);
   console.log(bYear1, bMonth1, bDate1);

    if(bYear1<1){
        alert("Kindly put in the correct year");
        return false;
    }
    if(bDate1<1 || bDate>31){
        alert("Please correct your Birth Date");
        return false;
    }else{
        true;
    }
}
