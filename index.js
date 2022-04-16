let audio=new Audio("music.mp3")
let ting=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")

let turn="X"
let gameov=false;

const  changeTurn=()=>{
    if(turn=="X")
    turn="0"
    else
    turn="X"
}

//function to check for the win


const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxspan")
  let wins=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]

   wins.forEach(e=>{
if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[0]].innerText==boxtext[e[2]].innerText) && boxtext[e[0]].innerText!=="" ){
document.querySelector(".inf").innerText=boxtext[e[1]].innerText+" Won"
gameov=true
console.log(boxtext[e[1]].innerText+"Won")
document.querySelector("img").style.width="90px"
return true
// document.querySelector(".inf")
}
return false
   })
}

//Main Logic behind Game

let boxes=document.getElementsByClassName("box");
// console.log(boxes)


Array.from(boxes).forEach((elem)=>{
//    let e=document.querySelector
  console.log(elem)
   let ourbox=elem.querySelector(".boxspan")
//    console.log(ourbox)
   elem.addEventListener("click",()=>{
   if(ourbox.innerText=="" && gameov==false){
    ourbox.textContent=turn
    checkWin()
    changeTurn()
     ting.play()
     console.log(turn)
     if(gameov==false)
    document.querySelector(".inf").innerText=`Turn for ${turn}`
    
     
   } 
    //   console.log(elem)
   })
//    let h1=document.createElement("h1")
//    h1.textContent="X"
//   ourbox.append(h1)
})


var reset=document.querySelector("button")

reset.addEventListener("click",(e)=>{
    let boxspans=document.querySelectorAll(".boxspan")
    Array.from(boxspans).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    gameov=false
    document.querySelector(".inf").innerText="Turn for X"
    document.querySelector("img").style.width="0px"
    console.log(turn,gameov)
})