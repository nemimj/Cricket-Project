let teamA = window.localStorage.getItem('teamA');
let teamB = window.localStorage.getItem('teamB');
let choice = window.localStorage.getItem('choice');
let toss = window.localStorage.getItem('toss');
let heading = document.getElementById('h1')
let secondIng = document.getElementById('second-ing');
let count = 0;



whoToBat = ()=>{
    if(toss == 0){
        if(choice === 'bat') heading.innerHTML = `${teamA}`
        else heading.innerHTML = `${teamB}`
    }
    else if(toss == 1){
        if(choice === 'bat') heading.innerHTML = `${teamB}`
        else heading.innerHTML = `${teamA}`
    }
}

reset = ()=>{
    document.querySelector('h1').innerText = "0/0";
    document.querySelector('#ballToBall').value = "0.0";
    let target = document.querySelector('h2');
    target.innerText = "target:"+localStorage.getItem('totalScore');
    target.style.display = "block";
}
secondInnings = ()=>{
    if(heading.innerText === teamA){
        heading.innerText = teamB;
                reset();
     return;
    }
    else {
      heading.innerText = teamA;
      reset();
      return;
    }
}

function run(runs,wic = false){

    let heading =  document.querySelector('h1')
    let [score,wicket] = heading.innerText.split('/');
    let ballToBall = document.getElementById('ballToBall')
    let [a,b] = ballToBall.value.split('.');
    let OverToOver = document.getElementById('overToOver').split

    if(wicket <11){
          
            if(ballToBall.value === '5.0'){
                if(count === 0){
                    secondIng.style.display = "block";
                    totalScore = heading.innerText.split('/')[0];
                    window.localStorage.setItem('totalScore',totalScore)
                    count++;
                    return;
                }

                else{
                    alert("Match Over")
                }

            }
            else{
                if(b >4){
                    ballToBall.value = eval(Number(ballToBall.value)+(0.5)).toFixed(1);
                  }
                  else{
                   ballToBall.value = eval(Number(ballToBall.value)+(0.1)).toFixed(1);
                  }
            }

        if(!wic){
            heading.innerText=  (eval(Number(score)+Number(runs))+"/"+wicket)
         }
         else{
             heading.innerText=  score+'/'+(eval(Number(wicket)+Number(runs)))
         }
     
    }
    else{
        alert("No More Wickets Left");
    }
   
}



whoToBat()


secondIng.addEventListener('click',()=>{
        secondInnings();
        secondIng.style.display = "none"
    
   
   })