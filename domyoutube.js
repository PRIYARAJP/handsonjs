let is=100
let hs=null;
let rn = generateRandomInteger(100);

  function maincheck(){         
       let ip= document.querySelector('#guessid').value;
    if(is===0){
      document.querySelector('.message').textContent="Game Over 🙂 🙂 your score is 0"     
    } else{
      if(ip>rn ){
        document.querySelector('.message')
        .textContent="Your Guess Is High";
            is--
          document.querySelector('.score').textContent=is;
        }
        else if(ip<rn){
         document.querySelector('.message')
         .textContent="Your Guess Is Low";
         is--
         document.querySelector('.score').textContent=is;
        }
        else{
 
         document.querySelector('.message').textContent="🤩🤩 Hurray You Won 🤩🤩"
         document.body.style.backgroundColor="blue";
         is--
         document.querySelector('.score').textContent=is;
         document.querySelector('.number').textContent=rn;
         document.querySelector('.number').style.height="70px"
          hs=is
           document.querySelector('.highscore').textContent=hs;
           document.querySelector('.check').style.visibility="hidden" ;
        } 
    }
       
   }
   function reloadgame(){
    document.getElementById('guessid').value="";
    document.querySelector('.score').textContent=100
    document.querySelector('#sc')
    .textContent="Start guessing...";
    document.body.style.backgroundColor="skyblue";
    document.querySelector('.number').style.height="70px"
    document.querySelector('.number').textContent="?";
     rn = generateRandomInteger(100);
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}  
