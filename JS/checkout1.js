function showannual(){
    document.getElementById('amount').style.display = 'none';
    document.getElementById('amount-a').style.display = 'block';
    document.getElementById('monthly').style.boxShadow = 'none';
    document.getElementById('annually').style.boxShadow = '0 4px 0 #398b18';
    document.getElementById('annually').style.border = '2px solid black';
    document.getElementById('monthly').style.border = 'none';
  
}
function showmonthly(){
    document.getElementById('amount').style.display = 'block';
    document.getElementById('amount-a').style.display = 'none';
    document.getElementById('annually').style.boxShadow = 'none';
    document.getElementById('monthly').style.boxShadow = '0 4px 0 #398b18';
    document.getElementById('monthly').style.border = '2px solid black';
    document.getElementById('annually').style.border = 'none';
}

function payment(){
    var form = document.getElementById('form');
    var firstname = form.namef.value;
    var lastname = form.namel.value;
    var cardno = form.namec.value;
    var expdate = form.expdate.value;
    var cvv = form.cvv.value;
    var pincode = form.pincode.value;
    
var flag = 0;

    if(firstname.length > 0){

        let count = 0;
        for(let i=0 ; i<firstname.length ; i++){
            if(firstname[i] >= 0){
              count++;
              
            }
        }

        if(count > 0){
            document.getElementById('wrongf').innerHTML = "Please enter valid first name";
            flag = 0;
        }else{
            document.getElementById('wrongf').innerHTML = ""; 
            flag++;
        }
        
    }
    else{
        document.getElementById('wrongf').innerHTML="first name Required";
        flag = 0;
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
            flag = 0;
        }else{
            document.getElementById('wrongl').innerHTML = ""; 
            flag++;
        }
        
    }
    else{
        document.getElementById('wrongl').innerHTML="last name Required";
        flag = 0;
    }

   

    if(cardno == "" || cardno.length != 16 || cardno == '0000000000000000'){
        document.getElementById('wrongc').innerHTML = "Please enter a valid card number";
        flag = 0;
    }
    else{
        document.getElementById('wrongc').innerHTML="";
        flag++;
    }

    if(cvv == "" || cvv.length != 3 || cvv == '000'){
        document.getElementById('wrongcvv').innerHTML = "Invalid security code";
        flag = 0;
    }
    else{
        document.getElementById('wrongcvv').innerHTML="";
        flag++;
    }

    if(pincode == "" || pincode.length != 6 || pincode == '000000'){
       document.getElementById('wrongpin').innerHTML = "Please enter a valid post code";
       flag = 0 ;
    }
    else{
        document.getElementById('wrongpin').innerHTML="";
        flag++;
    }

    


    if(expdate.length == 5){
       let count = 0;
        
   if((expdate[0] + expdate[1]) <= 12 && (expdate[0] + expdate[1]) != 0){
       count++;
   }

            if(expdate[2] == '/'){
                count++;
            }

            if((expdate[3] + expdate[4]) > 20){
                count++;
            }

           if(count != 3 ){
               document.getElementById('wronge').innerHTML = "Invalid expiration date";
               flag = 0;
           }else{
            document.getElementById('wronge').innerHTML="";
            flag++;
           }
           
    }
    else{
        document.getElementById('wronge').innerHTML="Invalid expiration date";
        flag = 0;
    }

    if(flag == 6){
        function runn(){
            window.location.href = 'thanks.html';
        }
        setTimeout(runn,2000);
    }

}
function gotohome(){
    window.location.href = '../index.html';
}

