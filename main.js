//variables 
navigator.vibrate(300)
var body = document.getElementById
var sidePanel = document.getElementsByClassName('panel')[0]
var optBtn = document.getElementsByClassName('options')[0]
var closeBtn = document.getElementsByClassName('closebtn')[0]
var addition = document.getElementById('add')
var sub = document.getElementById('subtract')
var multi = document.getElementById('product')
var quotient = document.getElementById('divide')
var point = document.getElementById('dot')
var btn = document.getElementsByClassName('num')
var screen = document.getElementById('ans')
var answerDisplay = document.getElementById('result')
var exp = document.getElementById('power')
var openBrace = document.getElementById('openbrac')
var closeBrace = document.getElementById('closebrac')
var currentTime = document.getElementById('currenttime')
var font = document.getElementById('font')
var theme = document.getElementById('theme')
var memoryClear = document.getElementsByClassName('clearM')

memoryClear[0].addEventListener('click',function(){
  localStorage.setItem('lastanswer','')
  alert('Calculator memory successfully cleared')
})


//function to toggle time display 
function toggle(){
  currentTime.classList.toggle('show')
}

/*myTheme = () => {
  let currentTheme = document.getElementById('page')
  switch (theme.value) {
    case 'Default':
      currentTheme.style.background='#B8BEC8'
      document.body.style.background='#333'
      break;
    
    case 'Light':
    currentTheme.style.backgroundColor='#eee'
    document.body.style.background='#fff'
      break;
      
    case 'Dark':
    currentTheme.style.backgroundColor='#333'
    document.body.style.background='#444'
      break;
      
    case 'Matrix':
    currentTheme.style.backgroundColor = '#0f4'
    document.body.style.background = '#333'
    break;
    
   case 'Classic':
   currentTheme.style.backgroundColor = '#333'
   document.body.style.background = 'linear-gradient(#B8BEC8,#333)'
   break;
  }
}

/*font.onchange = function(){
  document.body.style.fontFamily = font.value;
}
*/
optBtn.onclick = function(){
  sidePanel.style.maxWidth='250px'
}

closeBtn.onclick = function(){
  sidePanel.style.maxWidth='0px'
}

//time and date
var t = setInterval(count,1000)

function count(){
	var time = new Date()
	var hrs = time.getHours()
	var minute = time.getMinutes()
	var second = time.getSeconds()
	var date = time.getDate()
	var month = time.getMonth()+1
	var year = time.getFullYear()
	currentTime.innerHTML =  `${hrs} : ${minute} : ${second}; ${date} / ${month} / ${year}`
}

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

for (var i = 0; i < btn.length; i++) {
  function insert(val){
  screen.value += val
  }
}

calc = () => {
	if (screen.value === null) {
		navigator.vibrate(100)
	}else{
		var x = (eval(screen.value))
		answerDisplay.innerHTML = x
		var storedAns = localStorage.setItem('lastanswer',answerDisplay.innerHTML)
	}
}

/*i converted the string to an array then used pop to remove the last value then converted back to string*/
del = () => {
  var char = screen.value
  var convArr = char.split('')
  var delArr = convArr.pop()
  var delArr = convArr.join('')
  screen.value = delArr
}

ans = () => {
  var getAns = localStorage.getItem('lastanswer')
  screen.value +=(getAns)
}

function clear_all(){
   var screen = document.getElementById('ans')
   screen.value = "";
   answerDisplay.innerHTML = ''
}