"use strict"

const t = document.querySelectorAll(".ref .terkib");
const pizza = document.querySelector(".m .pizza");
const pomidor1 = document.querySelector(".ref .pomidor1")

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("d", this.id)
    })
}

pizza.addEventListener("dragover", function (e) {
    e.preventDefault()
})

// pizza.addEventListener("dragleave",function () {

// })

pizza.addEventListener("mousemove", function () {
    setTimeout(() => {
        pomidor1.classList.add("p")
    }, 1000);
})

pizza.addEventListener("drop", function (s) {
    let id = s.dataTransfer.getData("d")
    let terkib = document.getElementById(id)
    pizza.append(terkib)
})