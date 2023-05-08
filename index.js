const upLogos = Array.from(document.querySelectorAll(".up-logos-con > div")) 
const downLogos = Array.from(document.querySelectorAll(".down-logos-con > div")) 
const counter = document.querySelector(".counter")
const startBtn = document.querySelector(".start-btn")
const resetBtn = document.querySelector(".reset-btn")
const description = document.querySelector(".description")
const result = document.querySelector(".result")
const sound = document.querySelector("audio")


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


resetBtn.classList.add("hidden")
upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
    item.setAttribute("id", logosArray[i].id)
   
})


downLogos.map((item,i)=>{
    
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.setAttribute("id",logosArray[i].id)
    
})



let count = 4
counter.textContent= count 

function startGame (){
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
    
   
    count ===3?counter.style.color="#8aff02":count ===2?counter.style.color="yellow":count ===1?counter.style.color="red":counter.style.color="white"

    setTimeout(()=>{
        logosArray.sort(()=> Math.random()- 0.5)

       let x = 0
       while(logosArray[0].id === downLogos[0].id && count>= 3 && x<=10){

           logosArray.sort(()=> Math.random()- 0.5)
           x++
           /* console.log(x) */
       }
   
upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
    item.setAttribute("id", logosArray[i].id)
})

upLogos.map(item=> item.classList.remove("up-row-spin"))

i=0
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
        return
    }
    i++
}


}

verify()
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

function reset (){
    location.reload()
}

