function payment(){
    var form = document.getElementById('form');
    var firstname = form.namef.value;
    var lastname = form.namel.value;
    var cardno = form.namec.value;
    var expdate = form.expdate.value;
    var cvv = form.cvv.value;
    var pincode = form.pincode.value;
    

    if(firstname.length > 0){

        let count = 0;
        for(let i=0 ; i<firstname.length ; i++){
            if(firstname[i] >= 0){
              count++;
            }
        }

        if(count > 0){
            document.getElementById('wrongf').innerHTML = "Please enter valid first name";
        }else{
            document.getElementById('wrongf').innerHTML = ""; 
        }
        
    }
    else{
        document.getElementById('wrongf').innerHTML="first name Required";
    }

    if(lastname.length > 0){

        let count = 0;
        for(let i=0 ; i<lastname.length ; i++){
            if(lastname[i] >= 0){
              count++;
            }
        }

        if(count > 0){
            document.getElementById('wrongl').innerHTML = "Please enter valid last name";
        }else{
            document.getElementById('wrongl').innerHTML = ""; 
        }
        
    }
    else{
        document.getElementById('wrongl').innerHTML="last name Required";
    }

   

    if(cardno == "" || cardno.length != 16 || cardno == '0000000000000000'){
        document.getElementById('wrongc').innerHTML = "Please enter a valid card number"
    }
    else{
        document.getElementById('wrongc').innerHTML="";
    }

    if(cvv == "" || cvv.length != 3 || cvv == '000'){
        document.getElementById('wrongcvv').innerHTML = "Invalid security code";
    }
    else{
        document.getElementById('wrongcvv').innerHTML="";
    }

    if(pincode == "" || pincode.length != 6 || pincode == '000000'){
       document.getElementById('wrongpin').innerHTML = "Please enter a valid post code";
    }
    else{
        document.getElementById('wrongpin').innerHTML="";
    }

    


    if(expdate.length == 5){
       let count = 0;
        
   if((expdate[0] + expdate[1]) <= 12 && (expdate[0] + expdate[1]) != 0){
       count++;
   }

            if(expdate[2] == '/'){
                count++;
            }

            if((expdate[3] + expdate[4]) > 21){
                count++;
            }

           if(count != 3 ){
               document.getElementById('wronge').innerHTML = "Invalid expiration date";
           }else{
            document.getElementById('wronge').innerHTML="";
           }
           
    }
    else{
        document.getElementById('wronge').innerHTML="Invalid expiration date";
    }

}