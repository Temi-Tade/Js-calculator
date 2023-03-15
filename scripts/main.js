let calculator = new Calculator()

//variables 
var sidePanel = document.querySelector('#panel')
var closeBtn = document.querySelector('#closebtn')
var addition = document.getElementById('add')
var sub = document.getElementById('subtract')
var multi = document.getElementById('product')
var quotient = document.getElementById('divide')
var point = document.getElementById('dot')
var numBtn = document.querySelectorAll('.num')
var screen = document.getElementById('ans')
var answerDisplay = document.getElementById('result')
var exp = document.getElementById('power')
var openBrace = document.getElementById('openbrac')
var closeBrace = document.getElementById('closebrac')
var currentTime = document.getElementById('currenttime')
var memoryClearBtn = document.querySelector('#clearMemory')
let toast = document.querySelector('#toast-container')

memoryClearBtn.addEventListener('click', () => {
	calculator.loadAppData()
	calculator.lastAns = ''
	calculator.saveAppData()
	calculator.showToast('Memory Cleared')
})

//function to toggle time display 
toggleTimeDisp = () => {
  currentTime.classList.toggle('show')
}

//time and date

	let count = () => {
		var time = new Date()
		var hrs = time.getHours();
		var minute = time.getMinutes()
		var second = time.getSeconds()
		var date = time.getDate()
		var month = time.getMonth()+1
		var year = time.getFullYear()
		currentTime.innerHTML =  `${hrs} : ${minute} : ${second}; ${date} / ${month} / ${year}`
}

setInterval(count,1000)

addition.onclick = function(){
  screen.value += '+'
}
sub.onclick = function() {
  screen.value += '-'
}
multi.onclick = function() {
  screen.value += '*'
}
quotient.onclick = function() {
  screen.value += '/'
}
point.onclick = function() {
  screen.value += '.'
}
exp.onclick = function(){
  screen.value += '**'
} 
openBrace.onclick = function(){
  screen.value += '('
}
closeBrace.onclick = function(){
  screen.value += ')'
}

numBtn.forEach((num) => {
	num.addEventListener('click', () => {
		screen.value += num.innerHTML
	})
})

let solve = () => {
	if (screen.value.length === 0) {
		navigator.vibrate(100)
	}else{
		answerDisplay.innerHTML = eval(screen.value)
		calculator.lastAns
		calculator.saveLastAns()
		calculator.saveAppData()
	}
}

/*i converted the string to an array then used pop to remove the last value then converted back to string*/
let del = () => {
  var char = screen.value
  var convArr = char.split('')
  var delArr = convArr.pop()
  var delArr = convArr.join('')
  screen.value = delArr
}

let ans = () => {
	let appData = calculator.loadAppData()
	screen.value += appData.lastAns
}

let clear_all = () => {
   var screen = document.getElementById('ans')
   screen.value = "";
   answerDisplay.innerHTML = ''
}

