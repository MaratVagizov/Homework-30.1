
let big_img_1 = document.querySelector('.big-img-1')
let big_img_2 = document.querySelector('.big-img-2')
let big_img_3 = document.querySelector('.big-img-3')
let big_img_4 = document.querySelector('.big-img-4')
let big_img_5 = document.querySelector('.big-img-5')

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')

btn1.onclick = () => {
        big_img_1.classList.add('big-img-1')
        big_img_1.classList.remove('big-img-2')
        big_img_1.classList.remove('big-img-3')
        big_img_1.classList.remove('big-img-4')
        big_img_1.classList.remove('big-img-5')
}

btn2.onclick = () => {
        big_img_1.classList.add('big-img-2')
        big_img_1.classList.remove('big-img-1')
        big_img_1.classList.remove('big-img-3')
        big_img_1.classList.remove('big-img-4')
        big_img_1.classList.remove('big-img-5')
}

btn3.onclick = () => {
    big_img_1.classList.add('big-img-3')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-4')
    big_img_1.classList.remove('big-img-5')
}

btn4.onclick = () => {
    big_img_1.classList.add('big-img-4')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-3')
    big_img_1.classList.remove('big-img-5')
}

btn5.onclick = () => {
    big_img_1.classList.add('big-img-5')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-3')
    big_img_1.classList.remove('big-img-4')
}