const startBtn = document.getElementById ('#start-btn')
const calc = document.getElementById('#calc')
const closeCalc = document.getElementById('header .close')
const home = document.querySelector('#home')

// startBtn.addEventListener("click", () => {
//      

//        // calc.classList.add('move-in')
// })

function clickBtn() {
       home.classList.add('moveOut')
       calc.classList.add('moveIn') 
}

// closeHome.addEventListener("click", () => {
//        clearScreen()

//        calc.classList.remove("move-in")
//        calc.classList.add("move-out")
//        setTimeout(function() {
//            calc.classList.remove("move-out")
//        }, 500)
// })