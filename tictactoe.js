//to acess eeach tools 
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#new-btn");
let msgcntainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

//to print each win pattern
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];

//for clicking buttons and getting value
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log("box was clicked");
      if(turnO==true){
        box.innerText="0";
        turnO=false;
      }  else{
         box.innerText="X";
         turnO=true;
      }
      box.disabled=true;
      checkwinner();
    });
});

//to disable buttons after winning 
const disableboxes=()=>{
for(let box of boxes){
  box.disabled=true;
}
}

//to enable buttons for new game
const enableboxes=()=>{
for(let box of boxes){
  box.disabled=false;
  box.innerText="";
}
}


//to check winner
const checkwinner=() =>{
  for(pattern of winpatterns){
     let position1=boxes[pattern[0]].innerText;
     let position2=boxes[pattern[1]].innerText;
     let position3=boxes[pattern[2]].innerText;

     if(position1!="" &&  position2!="" && position3!=""){
     if(position1===position2 && position2===position3){
     console.log("winner",position1);
     showwinner(position1);
     } 
  }
}
}

//to show winner
const showwinner=(winner)=>{
  msg.innerText=`congratulations, Winner is ${winner}`;
  msgcntainer.classList.remove("hide");
  disableboxes();
}

//to reset game
const resetgame=()=>{
 turnO=true;
 enableboxes();
 msgcntainer.classList.add("hide");
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame);
