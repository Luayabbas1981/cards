const upLogos = Array.from(document.querySelectorAll(".up-logos-con > div")) 
const downLogos = Array.from(document.querySelectorAll(".down-logos-con > div")) 
const counter = document.querySelector(".counter")
const startBtn = document.querySelector(".start-btn")
const resetBtn = document.querySelector(".reset-btn")
const description = document.querySelector(".description")
const result = document.querySelector(".result")
const sound = document.querySelector(".cards-sound")
const sound2 = document.querySelector(".wow")
const mute = document.querySelector(".mute")
const play = document.querySelector(".play")
const stars = Array.from(document.querySelectorAll(".counter-starts-con > i"))

/* init values */
resetBtn.classList.add("hidden")
play.classList.add("hidden")

/* logos array */

let logosArray = [

    {
        img:"./imgs/camel-blue.png",
        bc:"#ffe70de0",
        id:"camel"
    }
    , 
    {
        img:"./imgs/Winston-blue.png",
        bc:"#eee",
        id:"w-blue"
    }
    ,  
    {
        img:"./imgs/Winston-red.png",
        bc:"#eee",
        id:"w-red"
    },
    {
        img:"./imgs/american-spirit.svg",
        bc:"#2196f3",
        id:"spirit"
    } 
    
]

/* set up cards */
upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
    item.setAttribute("id", logosArray[i].id)
   
})

/* set down cards */
downLogos.map((item,i)=>{
    
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.setAttribute("id",logosArray[i].id)
    
})


/* set counter init value */
let count = 4
counter.textContent= count 

/* primary function */

function startGame (){

    /* cards sound */
    function playAudio(){
    sound.play()
}
playAudio()


    startBtn.disabled=true
    startBtn.style.backgroundColor="#aaa"
    upLogos.map(item=> item.classList.add("up-row-spin"))
    
    if(count>0 ){
        
        counter.textContent= count -1
    }

    if(count === 0){
       
        return
    }

    count--

function btnDisableToggle (){
    startBtn.disabled=true
    startBtn.style.backgroundColor="#aaa"

}
    
   /* counter numbers colors */
    count ===3?counter.style.color="#8aff02":count ===2?counter.style.color="yellow":count ===1?counter.style.color="red":counter.style.color="white"

    /* sort up cards */

    setTimeout(()=>{
        logosArray.sort(()=> Math.random()- 0.5)
         
        /* verify first click */
       let x = 0
       while(logosArray[0].id === downLogos[0].id && count>= 3 && x<=10){

           logosArray.sort(()=> Math.random()- 0.5)
           x++
           /* console.log(x) */
       }
   
       /* set cards values */
upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
    item.setAttribute("id", logosArray[i].id)
})

upLogos.map(item=> item.classList.remove("up-row-spin"))

/* verify win */
let i=0
function verify (){
while(upLogos[i].children[0].src === downLogos[i].children[0].src){
    
    if(i === 3){

        btnDisableToggle()
        description.classList.add("hidden")
        result.style.color="#9c27b0"
        result.textContent="Super! you won"
        startBtn.classList.add("hidden")
        result.classList.add("won")
        resetBtn.classList.remove("hidden")
        stars.map(item=>item.classList.add("stars"))
        function wow(){
            sound2.play()
        }
        wow()
        return
    }
    i++
}


}

verify()

/* last conditions */
if(count !==0 || result.classList.contains("won")){
    startBtn.disabled=false
    startBtn.style.backgroundColor="#0d6efd"
}
if(count === 0 && !result.classList.contains("won")){
    btnDisableToggle()
    setTimeout(() => {
        resetBtn.classList.remove("hidden")
        startBtn.classList.add("hidden")
        description.classList.add("hidden")
        result.style.color="red"
        result.textContent="Opps! Try again "
    }, 700); 
}

},1000)

}
/* sound functions */

function playSound(){
    sound.muted= false
    play.classList.add("hidden")
    mute.classList.remove("hidden")
}
function muteSound(){
    sound.muted= true
    sound2.muted=true
    mute.classList.add("hidden")
    play.classList.remove("hidden")
}

/* restart function */
function reset (){
    location.reload()
}

