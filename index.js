const buttonsEl = document.querySelectorAll("button");

const inputFieldVal = document.getElementById("result");

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () =>{
        const buttonVal = buttonsEl[i].textContent;
        if(buttonVal === "C"){
            clearResult();
        }

        else if(buttonVal === "="){
            calcResult();
        }
        else{
            appendValue(buttonVal);
        }
    });
}

function clearResult(){
    inputFieldVal.value = "";
}

function calcResult(){
    inputFieldVal.value = eval(inputFieldVal.value);
}

function appendValue(buttonVal){
    inputFieldVal.value += buttonVal;
}