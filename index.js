const upLogos = Array.from(document.querySelectorAll(".up-logos-con > div")) 
const downLogos = Array.from(document.querySelectorAll(".down-logos-con > div")) 
const counter = document.querySelector(".counter")
const startBtn = document.querySelector(".start-btn")
const resetBtn = document.querySelector(".reset-btn")
const description = document.querySelector(".description")
const result = document.querySelector(".result")


let logosArray = [

    {
        img:"./imgs/camel-blue.png",
        bc:"#ffe70de0"
    }
    , 
    {
        img:"./imgs/Winston-blue.png",
        bc:"#eee"
    }
    , 
    {
        img:"./imgs/american-spirit.svg",
        bc:"#2196f3"
    } , 
    {
        img:"./imgs/Winston-red.png",
        bc:"#eee"
    }
    
]



upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
})


downLogos.map((item,i)=>{
    
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
   
    
})



let count = 4
counter.textContent= count 

function changeSort (){
    startBtn.disabled=true
    startBtn.style.backgroundColor="#aaa"
    resetBtn.disabled= true
    resetBtn.style.backgroundColor="#aaa"
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
    resetBtn.disabled= false
    resetBtn.style.backgroundColor="#ffc107"
}
    
   
    count ===3?counter.style.color="#8aff02":count ===2?counter.style.color="yellow":count ===1?counter.style.color="red":counter.style.color="white"

    setTimeout(()=>{
        logosArray.sort(()=> Math.random()- 0.5)
    if(upLogos[0].img === downLogos[0].img && count>= 3){
        logosArray.sort(()=> Math.random()- 0.5)
       
    }
    if(upLogos[0].img === downLogos[0].img && count>= 3){
        logosArray.sort(()=> Math.random()- 0.5)
       
    } 
upLogos.map((item,i)=>{
    item.innerHTML=` <img src=${logosArray[i].img} class="img-fluid" alt="">`
    item.style.backgroundColor= `${logosArray[i].bc}`
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

