function checkEmail(e){
    var element=e.target;
    if(element.value.length>50){
        alert("Too short and invalid email id");
         element.value="";
        return false;
}
    if(/[^.@_a-zA-Z0-9]/.test(element.value)){
        alert("Invalid charcter used");
        element.value="";
        return false;
    }
     if(!/[@]/.test(element.value)){
         alert("@ missing");
            element.value="";
        return false;
         
     }
     if(!/[.]/.test(element.value)){
         alert("DOT . missing");
        element.value="";
        return false;
     }
         if(!/[a-zA-z0-9]/.test(element.value)){
         alert("DOT . missing");
        element.value="";
        return false;
     }
    
    return true;
    
}


function checkRollNo(e){
    var element=e.target;
    if(element.value.length>8 || element.value.lenth<6){
        alert("Too short and invalid rollno");
         element.value="";
        return false;
}
    if(/[^a-zA-Z0-9]/.test(element.value)){
        alert("Invalid Rollno");
        element.value="";
        return false;
    }
     if(!/[a-zA-Z]/.test(element.value)){
         alert("Alphabet missing");
            element.value="";
        return false;
         
     }
     if(!/[0-9]/.test(element.value)){
         alert("Numbers missing");
            element.value="";
        return false;
     }
    return true;
    
}

function checkName(e){
    var element=e.target;
    if(/[^a-zA-Z ]/.test(element.value)){
        alert("invalid name! only charcters a to z and A to Z are allowed.");
        element.value="";
        return false;
    }
    
      if(element.value.length<3){
        alert("invalid name it should contain atleast 3 alphabets");
        element.value="";
          return false;
      }
    return true;
    
}

function checkAddress(e){
    var element=e.target;
    if(element.value.length<50){
        alert("Address is too short!");
        element.value="";
        return false;
    }
    return true;
}


var rollno=document.getElementById("rollno");
var sname=document.getElementById("sname");
var address=document.getElementById("address");
var email=document.getElementById("email");

rollno.addEventListener('blur',checkRollNo,false);
sname.addEventListener('blur',checkName,false);
address.addEventListener('blur',checkAddress,false);
email.addEventListener('blur',checkEmail,false);








