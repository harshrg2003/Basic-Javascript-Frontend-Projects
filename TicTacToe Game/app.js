let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const Winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.style.color="#4254f5";
            box.innerText="O";
            
            turnO=false;
        }else{
            box.style.color="#f542b3";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkIfWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Yayy!!!Congratulations,winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkIfWinner=()=>{
    for(let pattern of Winning_pattern){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,
         //   boxes[pattern[1]].innerText,
         //   boxes[pattern[2]].innerText);
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;  
        
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner is player",posVal1);
                showWinner(posVal1);
            }
        }
    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);