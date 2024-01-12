const formListener = document.querySelector(".feedback-form");
const obj = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
 

const localStorageKey ="feedback-form-state";

formListener.addEventListener("input", (event) => {

   obj[event.target.name] = event.target.value.trim();

 
 localStorage.setItem(localStorageKey, JSON.stringify(obj));
}
 );

 document.addEventListener("DOMContentLoaded", function() {
    const savedData = localStorage.getItem("feedback-form-state");
    if(savedData) {
      const parsedData = JSON.parse(savedData);
         input.value = parsedData.email;
         textarea.value = parsedData.message;

         //        if(inputElement) {
         //    inputElement.value = parsedData[key] || {};
         //  }
        }
      }
    );
//  const formValue = JSON.parse(localStorage.getItem(localStorageKey));


 formListener.addEventListener("submit", evt => {
    evt.preventDefault();
    const { email, message } = evt.target.elements;
    if (email.value === "" || message.value === "") {
        alert `All form fields must be filled in`;
          }  else {
            console.log(obj);
            localStorage.removeItem(localStorageKey);

             formListener.reset();
          }
    
  });

