let loadAppData = () => {
	return JSON.parse(localStorage.getItem('calc_app_data'))
}

if (localStorage.getItem('calc_app_data') === null) {
	let calculator = {
		theme: null,
		fontSize: null,
		lastAns: null,
		displayTime: false,
		playSound: false
	}
	localStorage.setItem('calc_app_data', JSON.stringify(calculator))
} else {
	let state = loadAppData()

	checkTime = () => {
		let time = document.querySelector('#time')
		if (state.displayTime === true) {
			time.style.display = 'block'
			document.querySelector("#t").innerHTML = `
				<p>Display time: </p>
				<label class = "switch">
				<input type="checkbox" name="toggle" id="toggleTime" oninput="toggleTimeDisp(this)" checked>
				<p class="slider"></p>
				</label>
			`
		} else {
			time.style.display = 'none'
			document.querySelector("#t").innerHTML = `
				<p> Display time: </p>
				<label class = "switch">
				<input type="checkbox" name="toggle" id="toggleTime" oninput="toggleTimeDisp(this)">
				<p class="slider"></p>
				</label>
			`
		}
	}
	
	checkSound = () => {
		if (state.playSound === true) {
			document.querySelector("#sound").innerHTML = `
				<p>Play sound on button press: </p>
				<label class = "switch">
				<input type="checkbox" name="toggle" id="toggleSound" oninput="toggleSound(this)"  checked>
				<p class="slider"></p>
				</label>
			`
		} else {
			document.querySelector("#sound").innerHTML = `
				<p>Play sound on button press: </p>
				<label class = "switch">
				<input type="checkbox" name="toggle" id="toggleSound" oninput="toggleSound(this)">
				<p class="slider"></p>
				</label>
			`
		}
	}
}

let saveAppData = (x) => {
	localStorage.setItem('calc_app_data', JSON.stringify(x))
}

let clickSound = () => {
	let state = loadAppData()
	
	if (state.playSound === true) {
		new Audio('res/click.wav').play()
	}
}

let showToast = (msg) => {
	toast.innerHTML = msg
	toast.style.zIndex = '1'
	toast.style.opacity = '1'
	setTimeout(() => {
		toast.style.zIndex = '-1'
		toast.style.opacity = '0'
	},1500)
}