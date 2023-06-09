function myfun(){
    var name=document.myform.email.value;
    var password = document.myform.pass.value;
    if(name.indexOf('@')==0 ){
        document.getElementById("error_msg").innerHTML="@ Should not be present at first place";
        return false;
    }
    if(name.charAt(name.length-4)!='.'){
        document.getElementById("error_msg").innerHTML="Please add .com in the end";
        return false;
    }

    if(name.includes("@")==false){
        document.getElementById("error_msg").innerHTML="@ is Missing";
        
        return false;
    }

    if(password.length ==0){
        document.getElementById("error_msg").innerHTML="Please enter your password";
        
        return false;
    }
    if(password.length < 8 && password.length>0){
        document.getElementById("error_msg").innerHTML="Password should contain minimum 8 characters";
        return false;
    }

    
}