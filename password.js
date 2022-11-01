function passwordGenerator(input, characters,  capitalLetters, nums, mix){
    const alpha = Array.from(Array(94)).map((e, i)=> i+33);
    const newArr = alpha.map((e)=> String.fromCharCode(e));
    var password;
    const re = /[A-Z]/g
    const reNum = /[0-9]/g
    const mixed = /[aA-zZ 0-9]/g
    const capNum = /[A-Z 0-9]/g
   if(capitalLetters){
    const cap = newArr.join("").match(re);
    password = cap.sort(()=> Math.random() - Math.random()).slice(0, input)
   }
   if(nums){
    const cap = newArr.join("").match(reNum);
    password = cap.sort(()=> Math.random() - Math.random()).slice(0, input)
   }
   if(mix){
    const cap = newArr.join("").match(mixed);
    password = cap.sort(()=> Math.random() - Math.random()).slice(0, input)
   }

   if(nums && capitalLetters){
    const cap = newArr.join("").match(capNum);
    password = cap.sort(()=> Math.random() - Math.random()).slice(0, input)
   }

   if(characters){
    password = newArr.sort(()=> Math.random() - Math.random()).slice(0, input)
   }
 
console.log(password)
return password.join("");
}
// const upper = false;
// const num = false;
// const mix = true;
// const letters = false;
// console.log(passwordGenerator(12, letters, upper, num, mix))
const btn = document.querySelector(".password")

function inputV(){
    const inputValue = document.querySelector(".inputNum").value;
    document.querySelector(".inputV").innerHTML = `Characters Numbers: ${inputValue}`
}


function generate(){
    const mixed = document.querySelector(".mixed").checked;
    const characters = document.querySelector(".letters").checked
    const upper = document.querySelector(".cap").checked;
    const num = document.querySelector(".nums").checked;
    const inputValue = document.querySelector(".inputNum").value;
    console.log(inputValue, characters, upper, num, mixed)
    document.querySelector(".inputV").innerHTML = `Characters Numbers: ${inputValue}`
    const password = passwordGenerator(inputValue, characters, upper, num, mixed);
    console.log(password)
    document.querySelector(".result").innerHTML = `Password: ${password}`
}


btn.addEventListener("click",  generate)
