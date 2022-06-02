

 window.onload = function getNumberOfCourses() {
    let info = document.querySelector(".note")
    let box = document.querySelector(".alertbox")
    info.style.display = "block"
    setTimeout(() => {
        info.style.display = "none"
        box.style.display = "block"
      
    }, 3000);




}



function displayCon() {
    let numOfCourses = document.querySelector("#num")
    let box = document.querySelector(".alertbox")
    let con = document.querySelector("#container")
  


if( numOfCourses.value === "" )

{
    alert("Please, enter a number.")
}

else if( numOfCourses.value == "0") {
    alert("Enter a number greater than 0.")
    numOfCourses.value = ""
}


else if(numOfCourses.value == "1") {
    box.style.display = "none"
    con.style.display = "block"
   
   
}


 else{
    box.style.display = "none"
    con.style.display = "block"
 
const node = document.getElementById("inpbox")


    for(i = 1; i < numOfCourses.value; i++){
     const clone =   node.cloneNode(true);
     
 

     clone.classList.add(`course${i}`)
     
   

     clone.children[1].classList.add(`score${i}`)

     clone.children[2].classList.add(`unit${i}`)

      clone.children[3].classList.add(`grd${i}`)

     clone.children[4].classList.add(`pt${i}`)


  
    document.getElementById("inpClone").appendChild(clone);

    }

   
 }


}



function calcCGPA() {


  
let point;
let grade;

const unitsArray = []

const pointsArray = []
const grades = [];
let units =  document.querySelectorAll(".unit")
let unit = units.value
// for grades

let scores = document.querySelectorAll(".score");


scores.forEach ((scores) => {

let score = scores.value;

if(score < 40)

{
    point = 0
    grade = "F"
}

else if (score >= 40 && score < 45) {
    point = 1
    grade = "E"
}

else if (score >= 45 && score < 50) {
    point = 2
    grade = "D"
}
  
else if (score >= 50 && score < 60) {
    point = 3
    grade = "C"
}

else if (score >= 60 && score < 70) {
    point = 4
    grade = "B"
    
}
  
else {
    point = 5
    grade = "A"
}


grades.push(grade)
pointsArray.push(point)



}

)



// for units


units.forEach((units) => {

    let unit = +(units.value)

    unitsArray.push(unit)
   

}

)
// Displaying the total unit.

let tnu = document.getElementById("tnu");
let totalUnits = unitsArray.reduce(getSum, 0);

function getSum(total, num) {
    return (total + num)
}

tnu.innerText = `TNU : ${totalUnits}`






 let numOfCourses = document.querySelector("#num").value
 for(i = 0; i < numOfCourses; i++){

    
//  for grades
let grds = document.querySelectorAll(".grd")
grds[i].innerHTML = grades[i]

// for points

let points = document.querySelectorAll(".pt")



let product = pointsArray[i] * unitsArray[i]

points[i].innerHTML = product




 }




// Total points
 const tpuArray = []
let  points = document.querySelectorAll(".pt")
points.forEach((points) => {
let totalPoint = +(points.innerHTML);
tpuArray.push(totalPoint)

}
)


// Displaying the total point.

let tp = document.getElementById("tp");
let totalPoints = tpuArray.reduce(getSum, 0);

function getSum(total, num) {
    return total + num
}

tp.innerText = `TPU : ${totalPoints}`



// Calculating CGPA.

let cgpa = totalPoints / totalUnits
cgpa = cgpa.toFixed(2)

document.getElementById("res1").innerText = `CGPA: ${cgpa}`


// Displaying respective message.

let text = document.getElementById("message")
let message;

if(cgpa >= 0 && cgpa < 1.0){
    message = "You are advised to withdraw."
}

else if(cgpa >= 1.0 && cgpa < 1.5){
    message = "You are on pass."
}
else if(cgpa >= 1.5 && cgpa < 2.4){
    message = "You are on third class."
}

else if(cgpa >= 2.4 && cgpa < 3.5){
    message = "You are on second class lower."
}

else if(cgpa >= 3.5 && cgpa < 4.5){
    message = "You are on second class upper."
}

else{
    message = "Your are on first class."
}

text.innerText = message;


localStorage.setItem("CGPA", cgpa)

localStorage.setItem("Message", message)


}



function loadPrev() {
   let CGPA = localStorage.getItem("CGPA")
    
   let message = localStorage.getItem("Message")
document.getElementById("res2").innerText = "CGPA : " + CGPA
document.getElementById("message2").innerText = message
    
}


 
function goHome() {
    location.reload()
}




   




  
  
