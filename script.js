
function validate(bYear, bMonth, bDate){
    var form = document.getElementById("form").value;
    var bYear = document.getElementById("birth-year").value;
    var bMonth = document.getElementById("birth-month").value;
    var bDate = document.getElementById("birth-date").value;

  var bYear1 = parseInt(bYear);
  var bMonth1 = parseInt(bMonth);
   var bDate1 = parseInt(bDate);
   
    if(bYear1<1){
        alert("Kindly put in the correct year");
        return false;
    }
    if(bMonth1<1 || bMonth1>12){
        alert("Invalid Birth Month");
        return false;
    }
    if(bDate1<1 || bDate>31){
        alert("Please correct your Birth Date");
        return false;
    }else{
        true;
    }
}

var akanGen = function(){
    var form = document.getElementById("form").value;
    var bYear = document.getElementById("birth-year").value;
    var bMonth = document.getElementById("birth-month").value;
    var bDate = document.getElementById("birth-date").value;

  var bYear1 = parseInt(bYear);
  var bMonth1 = parseInt(bMonth);
   var bDate1 = parseInt(bDate);

   if(bMonth1<3){
       bMonth1 += 10;
       bYear1 -= 1;
    }else{
        bMonth1 -= 2;
    }

    var mNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var fNames =[ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa ", "Afua", "Ama"];

    
}