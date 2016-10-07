var username_alloted=['salman','zeeshan','shahrukh'];

function checkUserName(e){
    var element=e.target;
    var message=document.getElementById('ERROR');
    var flag=0;
    for(var i=0;i<=username_alloted.length;i++){
    if(element.value==username_alloted[i]){
        message.textContent="USer name unavailable";
        flag=1;
        break;
    }
    }
    if(flag==0 && message.textContent!=0)
        message.textContent="user name available";
        }

var username=document.getElementById("Uname");
    username.addEventListener('blur',checkUserName,false);


function setActive(e) {
    var element=e.target;
    
    var previousElement=document.getElementsByClassName('active');
    
    if(previousElement.length==1){
        previousElement[0].setAttribute('class','form-control');
    }
    element.setAttribute('class','form-control active');
}

var elements=document.getElementsByTagName('input');
for(var i=0;i<elements.length;i++){
    if(elements[i].type!="submit" && elements[i].type!="reset")
        {
elements[i].addEventListener('focus',setActive,false);
        }
}