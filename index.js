
//function increment(){
   // console.log("The button was clicked")
//}

//function countdown(){
    //console.log(5)
    //console.log(4)
    //console.log(3)
    //console.log(2)
    //console.log(1)
//}
//countdown()
//countdown()
//function number(){
    //console.log(42)
//}
//number()

//let lap1=34
//let lap2=33
//let lap3=36
//function myLogger(){
   // let totalLogger=lap1+lap2+lap3
    //console.log(totalLogger)

   // myLogger()

//}

//let lapsCompleted=0

//function totalLaps(){
    //lapsCompleted=lapsCompleted+1
//}



//totalLaps()
//totalLaps()
//totalLaps()

//console.log(lapsCompleted)

//let count=5
//count=count+1
//console.log(count)
//document.getElementById("count-el").innerText = 5

//let username="Móki"
//let message="You have three new notifications"
//let messageToUser=message+", "+username+"!"
//console.log(messageToUser)

//let greetings="Good morning "
//let name="Móki!"

//let myGreeting=greetings+name
//console.log(myGreeting)

//let points=4
//let bonusPoints="10"
//let totalPoints=points+bonusPoints
//console.log(totalPoints)


//let welcomeEl=document.getElementById("welcome-el")
//let name="Linda"
//let greeting="Welcome back, "
//welcomeEl.innerText=greeting+name
//welcomeEl.innerText+="✌"

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
console.log(saveEl)



function increment(){
    
    count+=1
    countEl.innerText=count
    
}

function save (){
    let countStr=count+ " - "
    saveEl.textContent+=countStr
    
    countEl.textContent=0
    count=0

    

    console.log(count)

    
}
let firstName="Linda"
let lastName="Petro"
let fullName=firstName+ " " +lastName
console.log(fullName)

let name="Linda"
let greeting="Hi there"

function greetLinda(){
console.log(greeting+","+" "+name+"!")
}

greetLinda()

let myPoints=3

function add3Points(){
    myPoints+=3
}

function remove1Point(){
    myPoints-=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)

console.log("2"+2) //22
console.log(11+7) //18
console.log(6+"5") //65
console.log("My points: " +5+9)//My points: 59
console.log(2+2)//4
console.log("11"+"14")//1114






























