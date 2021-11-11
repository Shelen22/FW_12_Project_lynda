function payment(){
    var form = document.getElementById('form');
    var firstname = form.namef.value;
    var lastname = form.namel.value;
    var cardno = form.namec.value;
    var expdate = form.expdate.value;
    var cvv = form.cvv.value;
    var pincode = form.pincode.value;
    

    if(firstname == ""){
        console.log('invalid');
        document.getElementById('wrongf').innerHTML = "First name Required";
    }
    else{
        document.getElementById('wrongf').innerHTML="";
    }

    if(lastname == ""){
        console.log('invalid');
        document.getElementById('wrongl').innerHTML = "last name Required";
    }
    else{
        document.getElementById('wrongl').innerHTML="";
    }
    if(cardno == "" || cardno.length != 16){
        console.log('invalid');
        document.getElementById('wrongc').innerHTML = "Please enter a valid card number"
    }
    else{
        document.getElementById('wrongc').innerHTML="";
    }
    if(cvv == "" || cvv.length != 3){
        console.log('invalid');
        document.getElementById('wrongcvv').innerHTML = "Invalid security code";
    }
    else{
        document.getElementById('wrongcvv').innerHTML="";
    }

    if(pincode == "" || pincode.length != 6){
        console.log('invalid');
        document.getElementById('wrongpin').innerHTML = "Please enter a valid post code";
    }
    else{
        document.getElementById('wrongpin').innerHTML="";
    }


}