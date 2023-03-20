'use strict'


let optionBtns = document.querySelectorAll('#settings button')
let panelBg = document.querySelector('.panel-bg')
let panelBody = document.querySelector('#panel-body')
let rads = document.querySelectorAll('#panel-header input[type=radio]')
let tabs = document.querySelectorAll('.tab')
let num_sym_btn = document.querySelectorAll('#btns button')

let showSettingsDialog = (x) => {
	panelBg.style.display = 'block'
	window.addEventListener('click', () => {
		if (event.target === panelBg) {
			panelBg.style.display = 'none'
		}
	})
	rads[x].checked = true
}

optionBtns.forEach((val, ind) => {
	val.addEventListener('click', () => {
		showSettingsDialog(ind)
		panelBody.innerHTML = tabs[ind].innerHTML
	})
})

rads.forEach((val, ind) => {
	val.addEventListener('input', () => {
		panelBody.innerHTML = tabs[ind].innerHTML
	})
})

let toggleTimeDisp = () => {
	calculator.loadAppData()
	if (currentTime.style.display === 'none') {
		currentTime.style.display = 'block'
		calculator.displayTime = true
	} else {
		currentTime.style.display = 'none'
		calculator.displayTime = false
	}
	calculator.saveAppData()
}

let toggleSound = (x) => {
	if (x.checked === true) {
		calculator.sound = true
		calculator.saveAppData()
	} else {
		calculator.sound = false
		calculator.saveAppData()
	}
}