"use strict"

const t = document.querySelectorAll(".ref .terkib");
const pizza = document.querySelector(".m .pizza");
// const pomidor1 = document.querySelector(".m .pomidor1");
const btn = document.querySelector(".m .list .btn");
const btnn = document.querySelector(".m .list .btnn");
const btnnn = document.querySelector(".m .list .btnnn");
const chili = document.querySelector(".m .chili")
const ketcap = document.querySelector(".m .ketcap");
const ketcapp = document.querySelector(".m .ketcapp");
const ket = document.querySelector(".m .ket");
// const button = document.querySelector(".m #but");
// const clock = document.querySelector(".m .clock")

// button.addEventListener("click", function () {
//     pizza.remove()
//     t.forEach(el => el.remove())
//     btn.remove()
//     btnn.remove()
//     btnnn.remove()
//     chili.remove()
//     ketcap.remove()
//     ketcapp.remove()
//     ket.classList.add("kett")
//     clock.classList.add("clockk");
// })

ket.addEventListener("click", function () {
    setTimeout(() => {
        chili.classList.add("chil");
        chili.classList.add("sol");
    }, 100);
    setTimeout(() => {
        chili.classList.remove("sol");
    }, 500);
    setTimeout(() => {
        ketcap.classList.add("ksos")
        chili.classList.remove("chil")
    }, 1000);
    chili.classList.remove("chil")
    chili.classList.remove("sol");
})

btn.addEventListener("click", function () {
    pizza.classList.add("b")
    pizza.classList.remove("o")
    pizza.classList.remove("k")

    const ketcapImg = ketcap.querySelector("img");
    ketcapImg.style.margin = "  5px 0px 0 0px";
    ketcapImg.style.width = "700px";
    ketcapImg.style.height = "700px";
    ketcapImg.style.transition = "0.8s";
});

btnn.addEventListener("click", function () {
    pizza.classList.add("o")
    pizza.classList.remove("k")

    const ketcapImg = ketcap.querySelector("img");
    ketcapImg.style.margin = "  -15px 0px 0 -5px";
    ketcapImg.style.width = "650px";
    ketcapImg.style.height = "650px";
    ketcapImg.style.transition = "0.8s";
});

btnnn.addEventListener("click", function () {
    pizza.classList.add("k")
    pizza.classList.remove("o")

    const ketcapImg = ketcap.querySelector("img");
    ketcapImg.style.margin = "  -20px 0px 0 -5px";
    ketcapImg.style.transition = "0.8s";
    ketcapImg.style.width = "600px";
    ketcapImg.style.height = "600px";
})

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("d", this.id)
    })
}

ketcap.addEventListener("dragover", function (e) {
    e.preventDefault()
})

pizza.addEventListener("dragover", function (e) {
    e.preventDefault()
})

// pizza.addEventListener("dragleave",function () {

// })

// pizza.addEventListener("mousemove", function () {
//     setTimeout(() => {
//         pomidor1.classList.add("p")
//     }, 1000);
// })
pizza.addEventListener("drop", function (e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("d");
    const terkib = document.getElementById(id);

    const offsetX = e.clientX - pizza.offsetLeft;
    const offsetY = e.clientY - pizza.offsetTop;

    const imgClone = terkib.cloneNode(true);
    imgClone.style.position = 'absolute';
    imgClone.style.left = `${offsetX - 0}px`;
    imgClone.style.top = `${offsetY - 20}px`;
    if (pizza.classList.contains("b")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    } else if (pizza.classList.contains("o")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    } else if (pizza.classList.contains("k")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    }
    pizza.appendChild(imgClone);
});

ketcap.addEventListener("drop", function (e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("d");
    const terkib = document.getElementById(id);

    const offsetX = e.clientX - pizza.offsetLeft;
    const offsetY = e.clientY - pizza.offsetTop;

    const imgClone = terkib.cloneNode(true);
    imgClone.style.position = 'absolute';
    imgClone.style.left = `${offsetX - 0}px`;
    imgClone.style.top = `${offsetY - 20}px`;
    if (pizza.classList.contains("b")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    } else if (pizza.classList.contains("o")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    } else if (pizza.classList.contains("k")) {
        imgClone.style.left = `${offsetX - 0}px`;
        imgClone.style.top = `${offsetY - 20}px`;
    }
    pizza.appendChild(imgClone);
});
