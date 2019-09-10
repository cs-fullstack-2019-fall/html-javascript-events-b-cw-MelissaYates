let textInputLabelElement = document.querySelector("#textInputLabel");
let textInputElement = document.querySelector("#textInput");
let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. " +
    "The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals " +
    "of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
counter = 0;
textInputElement.onkeydown = function(e){

        // textInputLabelElement.textContent = codeCrewString[counter];
        console.log(e.target.value);
        textInputLabelElement.textContent+=codeCrewString[counter];
        counter = counter + 1;
        // textInputLabelElement.textContent+=codeCrewString[counter];

};

// ### Exercise 2:
// Using the exercise above, replace the user's typing with the string below. Each time they press a key, a letter from the string below
// should display in the label instead. There's no need to have the text start over from the beginning.
//
//     Default string: ```codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software
//     developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word
//     technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.```


