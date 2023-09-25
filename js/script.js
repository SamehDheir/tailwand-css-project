let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')

function change1() {
    link1.classList.add('active')
    link2.classList.remove('active')
    link3.classList.remove('active')
    link4.classList.remove('active')
}

function change2() {
    link1.classList.remove('active')
    link2.classList.add('active')
    link3.classList.remove('active')
    link4.classList.remove('active')
}
function change3() {
    link1.classList.remove('active')
    link2.classList.remove('active')
    link3.classList.add('active')
    link4.classList.remove('active')
}
function change4() {
    link1.classList.remove('active')
    link2.classList.remove('active')
    link3.classList.remove('active')
    link4.classList.add('active')
}

