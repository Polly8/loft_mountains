
const myForm = document.querySelector(".feedback"); 
const send = document.querySelector(".feedback__button"); 
const modal = document.querySelector(".modal-form"); 
const modalText = document.querySelector(".modal-form__text"); 
const modalClose = document.querySelector(".modal-form__btn");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");
const underlineName = document.querySelector(".feedback__block--name");
const underlineEmail= document.querySelector(".feedback__block--email"); 
const underlineMessage = document.querySelector(".feedback__block--message");
const errorAngleName = document.querySelector(".error-angle-name");
const errorAngleEmail = document.querySelector(".error-angle-email");  
const errorAngleMessage = document.querySelector(".error-angle-message");    

send.addEventListener("click", function(event){
    event.preventDefault();

    if(validateForm(myForm)){

        console.log("Форма заполнена корректно");

        const formData = new FormData();
        formData.append('name',  myForm.elements.name.value);
        formData.append('email',  myForm.elements.email.value);
        formData.append('message',  myForm.elements.message.value);
        formData.append('to',  'some@mail.com');

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        xhr.send(formData);

        xhr.addEventListener("load", function(){

            if(xhr.response.status < 400){
                modalText.textContent = "Сообщение отправлено";
                modal.style.display = "block";
                document.body.style.overflow = "hidden";

                myForm.reset();

                modalClose.addEventListener("click", function(event){
                    event.stopPropagation();
                    event.preventDefault();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";         
                });

                modal.addEventListener("click", function(event){
                    event.stopPropagation();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";          
                });

                document.addEventListener("keyup", function(event){
                    let keyName = event.key;

                    if(keyName === "Escape"){
                        modal.style.display = "none";
                        document.body.style.overflow = "visible"; 
                    }
                });
            }
        }); 
        
    }
});


function validateForm(form){
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
        errorName.style.background = "#cd1515";
        underlineName.style.color = "#cd1515";
        underlineName.style.borderBottomColor = "currentColor";
        errorAngleName.style.display = "block";
    }else{
        errorAngleName.style.display = "none";
        errorName.style.background = "transparent";
        underlineName.style.color = "#cdcfd6";
        underlineName.style.borderBottomColor = "#464d62";
    };

    if(!validateField(form.elements.email)){
        valid = false;
        errorEmail.style.background = "#cd1515";
        underlineEmail.style.color = "#cd1515";
        underlineEmail.style.borderBottomColor = "currentColor";
        errorAngleEmail.style.display = "block";    
    }else{
        errorAngleEmail.style.display = "none";
        errorEmail.style.background = "transparent";
        underlineEmail.style.color = "#cdcfd6";
        underlineEmail.style.borderBottomColor = "#464d62";
    };

    if(!validateField(form.elements.message)){
        valid = false;
        errorMessage.style.background = "#cd1515";
        underlineMessage.style.color = "#cd1515";
        underlineMessage.style.borderBottomColor = "currentColor";
        errorAngleMessage.style.display = "block";
    }else{
        errorAngleMessage.style.display = "none";
        errorMessage.style.background = "transparent";
        underlineMessage.style.color = "#cdcfd6";
        underlineMessage.style.borderBottomColor = "#464d62";
    };

    return valid;
};


function validateField(field){

    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
};