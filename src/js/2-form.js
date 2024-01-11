const formListener = document.querySelector(".feedback-form");
const obj = {};

// const formEmail = form.elements.email;
// const formTextarea = form.elements.message;
// obj.email = formEmail;
// obj.message = formTextarea;

const localStorageKey ="feedback-form-state";
formListener.addEventListener("input", (event) => {

    const { email, message } = event.target.elements;
 email.value.trim();
 message.value.trim();
 
 obj.email = email.value;
 obj.message = message.value;
  
 localStorage.setItem(localStorageKey, JSON.stringify(obj));
}
 );

//  document.addEventListener("DOMContentLoaded", function() {
//     var savedData = localStorage.getItem("feedback-form-state");
//     if(savedData) {
//       var parsedData = JSON.parse(savedData);
//       for(var key in parsedData) {
//         if(parsedData.hasOwnProperty(key)) {
//           var inputElement = formElement.querySelector('[name="' + key + '"]');
//           if(inputElement) {
//             inputElement.value = parsedData[key];
//           }
//         }
//       }
//     }
//   });
//  const formValue = JSON.parse(localStorage.getItem(localStorageKey));


 formListener.addEventListener("submit", evt => {
    evt.preventDefault();
    const { email, message } = evt.target.elements;
    if (email.value === "" || message.value === "") {
        alert `All form fields must be filled in`;
          }  else {
            console.log(obj);
            localStorage.removeItem(localStorageKey);
             form.reset();
          }
    
  });

