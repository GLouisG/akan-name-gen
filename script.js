
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

function akanGen(){
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

    let birthYear = bYear1.toString();
    var yr = parseInt(birthYear.slice(-2));
    var century = parseInt(birthYear.slice(0,2));
    var theGender = document.getElementById("genders").value;
    
    let dayNum = parseInt(((bDate1 + ((2.6*bMonth1)-0.2) -(2*century)+yr+(yr/4)+(century/4))%7));
    if (dayNum = -6){
        dayNum = dayNum*(-1);
    }else{
        dayNum = dayNum + 5;
    }
    
    var mNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var fNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa ", "Afua", "Ama"];
    var akanName = "";

    if(theGender === "Female"){
        var akanName = fNames[dayNum];
        document.getElementById("result").innerHTML = "Your Akan name is " + akanName;
    } else if(theGender ==="Male"){
        var akanName = mNames[dayNum];
        document.getElementById("result").innerHTML = "Your Akan name is " + akanName;
    }
}