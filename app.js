let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");


function generateChoice() {
    let options=["Rock","Paper","Scissors"];
    return (options[Math.floor(Math.random()*3)]);
}
const showWinner=(winner)=> {
let winnerDiv=document.querySelectorAll(".resultBoard");
winnerDiv=winnerDiv[0];
console.log(winnerDiv);
if(winner=="computer") {
    winnerDiv.style.backgroundColor='red';
    winnerDiv.style.color='white';
    winnerDiv.innerHTML='<b>Computer<b> <i>Won the move<i>';
}
else if(winner=="user") {
    winnerDiv.style.backgroundColor='rgb(68, 255, 0)';
    winnerDiv.style.color='white';
    winnerDiv.innerHTML='<b>User<b> Won the move';
}
else {
    winnerDiv.style.backgroundColor='rgb(70, 133, 133)';
    winnerDiv.style.color='black';
    winnerDiv.innerHTML='It was a <b> Draw<b>';
}


}
const checkWinner=(userChoice,compChoice)=> {
    console.log("user: ",userChoice);
    console.log("computer: ",compChoice);

    let user="user";
    let comp="computer";
    let draw="draw";
    //user says rock
    if(userChoice=="Rock") {
        if(compChoice=="Paper") return comp;
        if(compChoice=="Rock") return draw;
        if(compChoice=="Scissors") return user;
}
 //user says scissor
 if(userChoice=="Scissor") {
    if(compChoice=="Rock") return comp;
    if(compChoice=="Scissors") return draw;
    if(compChoice=="Paper") return user;
}

//user says paper
if(userChoice=="Paper") {
    if(compChoice=="Scissors") return comp;
    if(compChoice=="Paper") return draw;
    if(compChoice=="Rock") return user;
}


}

const winnerDivadd=(userChoice,compChoice)=> {
    let displayDiv=document.querySelector(".choiceDisplay");
    displayDiv.innerHTML="Display";
    let appenddiv1=document.createElement("div");
    appenddiv1.style.height='4rem';
    appenddiv1.style.width='17rem';
    appenddiv1.style.fontSize='1.5rem';
    appenddiv1.append(`User:  ${userChoice}`);
    let appenddiv2=document.createElement("div");
    appenddiv2.style.height='4rem';
    appenddiv2.style.width='17rem';
    appenddiv2.style.fontSize='1.5rem';
    appenddiv2.append(`Computer:  ${compChoice} `);

    displayDiv.append(appenddiv1);
    displayDiv.append(appenddiv2);
    
}
choices.forEach((choice)=> {
    choice.addEventListener("click",()=> {
        let userPoints=document.getElementById("userPoints");
        let compPoints=document.getElementById("compPoints");
        userPoints.classList.remove("emobssanime");
        compPoints.classList.remove("emobssanime");

        let userChoice=choice.getAttribute("id");
        let compChoice=generateChoice();
        let winner=checkWinner(userChoice,compChoice);
            console.log("The result is: ",winner);
            winnerDivadd(userChoice,compChoice);
            showWinner(winner);
         
            if(winner=="user") {
            userScore+=1;
                userPoints.innerHTML=userScore;
                userPoints.classList.add("emobssanime");
                
          }
          else if(winner=="computer") {
            compScore+=1;
            compPoints.innerHTML=compScore;
            compPoints.classList.add("emobssanime");
          }
    })
})