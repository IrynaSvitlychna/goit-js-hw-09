import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),o=JSON.parse(localStorage.getItem("feedback-form-state"))||{},s="feedback-form-state";a.addEventListener("input",e=>{o[e.target.name]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(o))});document.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);input.value=t.email,textarea.value=t.message}});a.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:r}=e.target.elements;t.value===""||r.value===""?alert`All form fields must be filled in`:(console.log(o),localStorage.removeItem(s),a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
