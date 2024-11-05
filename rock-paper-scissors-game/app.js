
let blocks=document.querySelectorAll(".block");
let h2=document.querySelector("h2");
let cscore=document.querySelector(".cscore");
let yscore=document.querySelector(".yscore");
let options=["rock","paper","scissors"];
let youScore=0;
let computerScore=0;

blocks.forEach(ele => {
    ele.addEventListener("click",()=>{
       let temp=ele.getAttribute("class").split(" ");
       let random=Math.floor(Math.random()*3)+0;

       if(options[random]==="rock"){
          if(temp[0]=="rock"){
            h2.innerText=`computer choose ${options[random]}... game is tie!!`;
            
          }
          if(temp[0]=="paper"){
            h2.innerText=`computer choose ${options[random]}... you won!`;
            youScore++;



          }
          if(temp[0]=="scissors"){
            h2.innerText=`computer choose ${options[random]}... you lost!`;
            computerScore++;
            
          }
       }

       if(options[random]==="paper"){
        if(temp[0]=="rock"){
          h2.innerText=`computer choose ${options[random]}... you lost!`;
          computerScore++;
        }
        if(temp[0]=="paper"){
          h2.innerText=`computer choose ${options[random]}... tie!`;

        }
        if(temp[0]=="scissors"){
          h2.innerText=`computer choose ${options[random]}... you won!`;
          youScore++;
           
           
          
        }
     }
     if(options[random]==="scissors"){
        if(temp[0]=="rock"){
          h2.innerText=`computer choose ${options[random]}... you won!`;
          youScore++;
          
        }
        if(temp[0]=="paper"){
          h2.innerText=`computer choose ${options[random]}... you lost!`;
          computerScore++;
        }
        if(temp[0]=="scissors"){
          h2.innerText=`computer choose ${options[random]}... tie!`;
          
        }
     }
    
 


     cscore.innerText="computer : "+computerScore;
     yscore.innerText="You : " + youScore;

       
    })
});
