const submitButton = document.getElementById("submit")
let input = document.getElementById("inputBox")

const submitInput = (event) => {
    event.preventDefault()

function factorialize(input) {
    if (input < 0) {
        let result = -1;
        return result
    } else if (input == 0) {
        let result = 1;
        return result
    } else {
        let result = (input * factorialize(input - 1))
        return result
    }
  }


function reverseWord(input) {
    let result = input.split("").reverse().join("")
    return result
}

function toUpperCase(input){
    let result = input.toUpperCase()
    return result
}

function loop(input){

    for (let i = 1; i <= 10; i++) { 
        let squared = i * i; 
        let result = `The square of ${input} is ${squared}`
        return result
    } 
}

let menu = document.getElementById("values-dropdown");
menu.addEventListener("click", generateMap);

function generateMap(event) {
  if (menu.value == "factorial") {
    console.log(factorialize(input));
  } else if (menu.value == "reverseWord") {
    console.log(reverseWord(input));
  } else if (menu.value == "uppercase") {
    console.log(toUpperCase(input));
  } else if (menu.value == "loop") {
    console.log(loop(input));
  }
}

updateUI(result);
}

submitButton.addEventListener("click", submitInput)