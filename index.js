let teamA = document.getElementById('ateam')
let teamB = document.getElementById('bteam')
let btn = document.getElementById('btn')
let tossWin = document.getElementById('toss-win')
let container = document.querySelector('.container')
let chooseBatOrBall = "";
team = ""
choice = ""


checks = ()=>{  
    let inputs = document.querySelectorAll('[type="radio"]')
    if(inputs[0].checked) return inputs[0].value;
    else if (inputs[1].checked) return inputs[1].value;
    else false
    
}





batBall = (team)=>{
    let value = document.querySelector('.bat-ball');
    if(value) value.remove()    
    let p = document.createElement('div')
    p.classList.add('bat-ball')
    p.innerHTML = `
    <div class=choice>
    <label for="bat">Bat</label>
    <input type="radio" value="bat" name="bat-ball" id="bat" />
    </div>
    <br />
    <div class=choice>
    <label for="ball">Ball</label>
    <input type="radio" value="ball" name="bat-ball" id="ball" />
    </div>
    <br/>
    <button id='play' class='button'>Let's Play </button>
`   
container.insertAdjacentElement('afterend',p)

let play = document.querySelector('#play');


play.addEventListener('click',()=>{
  
    chooseBatOrBall = checks()
    if(chooseBatOrBall) nextPage(team,chooseBatOrBall)
})

}

btn.addEventListener('click',()=>{
    if(teamA.value && teamB.value){
        let arr = [teamA.value,teamB.value]
        let random = Math.floor(Math.random()*2)
        window.localStorage.setItem('toss',random)
        btn.innerText = "Loading..."
        setTimeout(() => {
            btn.innerText = "Toss"
            tossWin.innerHTML = `<strong>${arr[random]}</strong> Team won the toss`
            batBall(arr[random]);
        }, 3000);
       
    }
    else{
       alert('Please enter team name')
    }
})



nextPage = (t,c)=>{
    window.localStorage.setItem("teamA",teamA.value);
    window.localStorage.setItem("teamB",teamB.value);
    window.localStorage.setItem("choice",c)
    window.location.href = 'score.html'
}

