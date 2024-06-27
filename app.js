const buttons = document.querySelector(".buttons")
const display = document.querySelector(".display")

let buttonsarray = [
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "-",
    "=",
    "C"
];

let values = []
let clean ;

for(let i = 0; i<buttonsarray.length;i++){
    let button = document.createElement("button")
    button.textContent = buttonsarray[i]
    buttons.appendChild(button)
}

let calcButtons = document.querySelectorAll(".buttons button")
calcButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        calcArray(e.target.textContent)
    })
})

let calcArray = (value)=>{
    if(value === "C"){
        values = []
        display.textContent = 0
        return;
    }

    if(value != "="){
        values.push(value)
        clean = values.join("")
        display.textContent = clean
    }

    else{
        let result = eval(clean)
        display.textContent = result
        values=[]
    }
}