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
let memoryClearBtn = document.querySelector('#clearMemory')
let toast = document.querySelector('#toast-container')
let time = document.querySelector('#time')

count = () => {
	var t = new Date()
	var hrs = t.getHours();
	var minute = t.getMinutes()
	var second = t.getSeconds()
	var date = t.getDate()
	var month = t.getMonth()+1
	var year = t.getFullYear()
	time.innerHTML =  `${hrs} : ${minute} : ${second}; ${date} / ${month} / ${year}`
}
setInterval(count,1000)
	
addition.onclick = function(){
	clickSound()
	screen.value += '+'
}
sub.onclick = function() {
	clickSound()
	screen.value += '-'
}
multi.onclick = function() {
	clickSound()
	screen.value += '*'
}
quotient.onclick = function() {
	clickSound()
	screen.value += '/'
}
point.onclick = function() {
	clickSound()
	screen.value += '.'
}
exp.onclick = function(){
	clickSound()
	screen.value += '**'
} 
openBrace.onclick = function(){
	clickSound()
	screen.value += '('
}
closeBrace.onclick = function(){
	clickSound()
	screen.value += ')'
}

numBtn.forEach((num) => {
	num.addEventListener('click', () => {
		clickSound()
		screen.value += num.innerHTML
	})
})

let solve = () => {
	clickSound()
	let state = loadAppData()
	answerDisplay.innerHTML = eval(screen.value)
	state.lastAns = answerDisplay.innerText
	state.times.push(time.innerText)
	state.inputs.push(screen.value)
	state.outputs.push(answerDisplay.innerText)
	saveAppData(state)
}

/*i converted the string to an array then used pop to remove the last value then converted back to string*/
let del = () => {
	clickSound()
	var char = screen.value
	var convArr = char.split('')
	var delArr = convArr.pop()
	var delArr = convArr.join('')
	screen.value = delArr
}

let ans = () => {
	clickSound()
	screen.value += loadAppData().lastAns
}

let clear_all = () => {
	clickSound()
	var screen = document.getElementById('ans')
	screen.value = "";
	answerDisplay.innerHTML = ''
}

memoryClearBtn.addEventListener('click', () => {
	clickSound()
	let state = loadAppData()
	state.lastAns = ''
	saveAppData(state)
	showToast('Memory Cleared')
})