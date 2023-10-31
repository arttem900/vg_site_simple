const select = document.querySelectorAll('.js-choice');
select.forEach(elem => {
    const choices = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
    });
})

// slider
const wrappSlide = document.querySelector('.wrapp_certificate_slide')
const sliderTape = wrappSlide.querySelector('.certificate_slide')
const sliderItem = wrappSlide.querySelectorAll('.certificate_item')
const arrowRight = wrappSlide.querySelector('.arrow_right')
const arrowLeft = wrappSlide.querySelector('.arrow_left')
const img = wrappSlide.querySelectorAll('.certificate_item img')
console.log(img[1].src);

let widthElemSlide,
    slideCount = 0,
    actionS

sliderItem.forEach(item => {
    let width = item.offsetWidth
    widthElemSlide = width
})

arrowRight.addEventListener('click', moveForward)
// arrowLeft.addEventListener('click', moveBack)

function moveForward() {
    slideCount++
    for(let i = 0; i < img.length; i++){
        let clone = document.createElement('img')
        clone.className = 'clone'
        clone.src = img[i+1].src
        sliderTape.prepend(clone)
        break
    }
   
    if (slideCount >= 5) {
        // slideCount = 0
    }
    sliderAction()
}

// function moveBack() {
//     slideCount--
//     if (slideCount < - 4) {
//         slideCount = 0
//     }
//     sliderAction()
// }



    function sliderAction() {
        sliderTape.style.transform = `translateX(${(slideCount * widthElemSlide) + (slideCount * 40.5)}px)`
    }
  



// end slider


let questionsArrow = document.querySelectorAll(".questions_item .arrow");

questionsArrow.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-active')
    })
})







