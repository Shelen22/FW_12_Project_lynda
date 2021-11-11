function payment(){
    let form = document.getElementById('form');
    let firstname = form.namef.value;
    let lastname = form.namel.value;
    let exp = form.expdate.value;
    let cvv = form.cvv.value;

    console.log(firstname,lastname,exp,cvv)

}