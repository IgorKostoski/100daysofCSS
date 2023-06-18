const fourth=document.getElementsByClassName("fourth")
const third=document.getElementsByClassName("third")
const second=document.getElementsByClassName("second")
const first=document.getElementsByClassName("first")

const start=document.getElementsByClassName("startBtn")[0]
const stop=document.getElementsByClassName("stopBtn")[0]

let interval;

function timer(){
	
	let fo=Number(fourth[0].innerHTML)+1
	let t=Number(third[0].innerHTML)+1
	let s=Number(second[0].innerHTML)+1
	let fi=Number(first[0].innerHTML)+1
	console.log(fo)
	
	if(fi<10){
		first[0].innerHTML=fi
	}else{
		first[0].innerHTML=0
		if(s<10){
			second[0].innerHTML=s
		}else{
			second[0].innerHTML=0
			if(t<10){
				third[0].innerHTML=t
			}else{
				if(fo<10){
					fourth[0].innerHTML=fo
				}
				else{
					fourth[0].innerHTML=0
					clearInterval(x)
				}
			}
		}
	}
}

x=setInterval(timer,1000)

start.addEventListener("click",()=>{
	start.classList.remove("show")
	stop.classList.add("show")
	
	x=setInterval(timer,1000)
})

stop.addEventListener("click",()=>{
	stop.classList.remove("show")
	start.classList.add("show")
	
	clearInterval(x)
})
