let leftBoard=document.getElementById("left-score")
let leftPlusoneBtn =document.getElementById("left-plusone-btn")
let rightBoard= document.getElementById("right-score")
let rightPlusoneBtn =document.getElementById("right-plusone-btn")

let leftScore=0
let rightScore=0


function add1(){
    leftScore+=1
    console.log(leftScore)
    leftBoard.textContent=leftScore
    }

function add2(){
    leftScore+=2
    console.log(leftScore)
    leftBoard.textContent=leftScore
    }
    
function add3(){
    leftScore+=3
    console.log(leftScore)
    leftBoard.textContent=leftScore
    }
    
    
    
    function rightadd1(){
    
    rightScore+=1
    console.log(rightScore)
    rightBoard.textContent=rightScore
    }
    
    function rightadd2(){
    rightScore+=2
    console.log(rightScore)
    rightBoard.textContent=rightScore
    }
    
    function rightadd3(){
    rightScore+=3
    console.log(rightScore)
    rightBoard.textContent=rightScore
    }