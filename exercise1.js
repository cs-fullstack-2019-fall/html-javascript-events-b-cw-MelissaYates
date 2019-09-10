let textInputLabelElement = document.querySelector("#textInputLabel");
let textInputElement = document.querySelector("#textInput");
textInputElement.onkeydown = function(e){
    textInputLabelElement.textContent="Hello " + e.target.value;
    console.log(e.target.value);
};
