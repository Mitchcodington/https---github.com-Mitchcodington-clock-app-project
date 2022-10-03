const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")
const greetEl = document.getElementById("greet")
const currentEl = document.getElementById("current-time")
const hourEl = document.getElementById("hour")
const minEl = document.getElementById("min")
const mainEl = document.getElementById("main")
const bodyEl = document.getElementById('body')


fetch('https://api.quotable.io/random')
.then(response => response.json())
.then((data) =>{
quoteEl.innerHTML = '"' + data.content + '"';
authorEl.innerHTML = data.author;    
})
    
function hourly() {    
const time = new Date();
document.getElementById("hour").innerHTML = time.getHours()

const m = new Date();

document.getElementById("min").innerHTML = m.getMinutes(); 

let hours = document.getElementById("hour").innerHTML

if(hours < 12){
document.getElementById("greet").innerHTML =  'MORNING,'
}
else if(hours < 18){
document.getElementById("greet").innerHTML =
'<img id="mood"  style="width:20px; " src="light.png"><span id="good">GOOD AFTERNOON,</span>'}
else{
bodyEl.style.background = 'url(woods.jpg)'
document.getElementById("greet").innerHTML =
 '<img id="mood" style="width:20px;" src="dark.png"><span id="good">GOOD EVENING,</span>'
}		  
}

hourly()
 
 


   

