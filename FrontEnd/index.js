
nameInput = document.getElementById('userName')
emailInput = document.getElementById('userEmail')
phoneInput = (document.getElementById('userPhone'))
msgInput = document.getElementById('msg')


function sendDoc(){
    if(nameInput.value === "" ||  emailInput.value === "" || phoneInput.value === "" || msgInput.value === ""){
        window.alert('all input boxes must be filled')
     }else if((/\D/.test(phoneInput.value))){
         window.alert('phone number field must only contain numbers')
     }else if(msgInput.value.length > 100){
         window.alert('message field cannot have more than 100 characters')
     }else{
        window.alert(`message welcome ${nameInput.value}`)
     }
}

function clearDoc(){
    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    msgInput.value = ''

}
