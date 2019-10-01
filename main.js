/*alert('connnected');*/

const h1P1 = document.querySelector("#p1Scr"),
      h1P2 = document.querySelector("#p2Scr"),
      p1 = document.querySelector("#p1"),
      p2 = document.querySelector("#p2");

let p1Scr = 0,
    p2Scr = 0,
    gameOver = false;


let maxP = document.querySelector("p span"),
    inp = document.querySelector("input"),
    winSc = inp.value; 

// set max score s
inp.addEventListener('change',function(){
	maxP.textContent = this.value;
	winSc = Number(this.value);
	resetAll();
});

// adding points p1
p1.addEventListener("click",function(){
	if(!gameOver){
		p1Scr++;	
		if(p1Scr === winSc){
			gameOver = true;
			h1P1.classList.add("won");
		};
		h1P1.textContent = p1Scr;
	}
});

// adding points p2
p2.addEventListener("click",function(){
	if(!gameOver){
		p2Scr++;	
		if(p2Scr === winSc){	
			gameOver = true;
			h1P2.classList.add("won");
		};
		h1P2.textContent = p2Scr;
	}
});
		
// reset 
let reset = document.querySelector("#reset");
reset.addEventListener('click', function(){
	resetAll();
  resetInp();
});

function resetAll() {
  p1Scr = 0,
	p2Scr = 0;
	
	h1P1.textContent = 0;
	h1P2.textContent = 0;
	
	h1P1.classList.remove("won");
	h1P2.classList.remove("won");
  gameOver = false;
}

function resetInp() {
  winSc = 0;
  inp.value = '';
  maxP.textContent = winSc;
}
