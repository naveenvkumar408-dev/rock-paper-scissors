let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const compgenerator = () =>{
    const option =["Rock","Paper","Scissors"];
    const ranindx = Math.floor(Math.random()*3);
    return option[ranindx];
}

const drawgame = () =>{
    msg.innerText="Game Was Draw,Play Again.";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="black";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText=`You Lose... ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="black";
    }
}

const playgame = (userchoice) =>{
    //computer genrator choices
    const compchoice = compgenerator();

    if(userchoice==compchoice){
        //draw game
         drawgame();
    }else{
        let userwin = true;
        if(userchoice=="Rock"){
            // paper or scissors
           userwin = compchoice==="Paper"? false : true;
        }else if(userchoice=="Paper"){
            // rock or scissors
            userwin = compchoice==="Scissors"?false:true;
        }else{
            //paper or rock
            userwin = compchoice==="Rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    });
});