'use strict'
class Calculator{
	constructor(theme, fontSize, lastAns, vib, sound, inputs, outputs) {
		this.theme = null
		this.fontSize = null
		this.lastAns = null
		this.vib = false
		this.sound = false
		this.displayTime = true
		this.inputs = []
		this.outputs = []
	}
	
	saveAppData(){
		localStorage.setItem('calc_app_data', JSON.stringify(this))
	}
	
	saveLastAns(){
		this.lastAns = result.innerHTML
		this.saveAppData()
	}
	
	loadAppData(){
		return JSON.parse(localStorage.getItem('calc_app_data'))
	}
	
	saveInput(){
		this.inputs.push(screen.value)
		this.saveAppData()
	}
	
	saveOutput(){		this.saveAppData()
	}
	
	showLogs(){
		this.loadAppData()
	}
	
	showToast(msg){
		toast.querySelector('#toast-text').innerHTML = msg
		toast.style.zIndex = '1'
		toast.style.opacity = '1'
		setTimeout(function(){
			toast.style.opacity = '0'
			toast.style.zindex = '-1' 
		},2500)
	}
}