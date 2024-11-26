"use strict"

const t = document.querySelectorAll(".ref .terkib");
const pizza = document.querySelector(".m .pizza");

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("m", this.id)
    })
}

pizza.addEventListener("dragover", function (e) {
    e.preventDefault()
})

// pizza.addEventListener("dragleave",function () {

// })


pizza.addEventListener("drop", function (s) {
    let id = s.dataTransfer.getData("m")
    let terkib = document.getElementById(id)
    pizza.append(terkib)
})