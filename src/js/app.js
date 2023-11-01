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

console.log(sliderItem[sliderItem.length -1]);

let widthElemSlide,
    slideCount = 0,
    actionS

let arr = [],
    imgArr = []

img.forEach(img => {
    imgArr.push(img)
})

sliderItem.forEach(item => {
    let width = item.offsetWidth
    widthElemSlide = width
    arr.push(item)
})
arrowRight.addEventListener('click', moveForward)
arrowLeft.addEventListener('click', moveBack)
// let arrClone = []
// for (let i = 0; i < img.length; i++) {
//     let clone = document.createElement('div')
//     let images = document.createElement('img')
//     clone.className = 'certificate_item_clone'
//     images.src = img[i].src
//     clone.appendChild(images)
//     arrClone.push(clone)
//     sliderTape.prepend(clone)
    // console.log(arrClone.length);
// }




function moveForward() {
    slideCount++
    let it = document.querySelectorAll('.certificate_item')
    for(let i = 0; i < it.length; i++){
        it[it.length -1].remove()
    }
    
    // for (let i = 0; i < sliderItem.length; i++) {
       
    //    let clone = document.createElement('div')
    //    let images = document.createElement('img')
    //    clone.className = 'certificate_item_clone'
    //    images.src = imgArr[imgArr.length -1].src
    //    imgArr.unshift(images)
    //    clone.appendChild(images)
    //    sliderTape.prepend(clone)
    //    arr.unshift(clone)
    //    arr.pop()
    //    imgArr.pop()
    //    console.log(imgArr);
    //    console.log(arr);
    //    break
    // }
    if (slideCount >= (sliderItem.length)){  
    //    slideCount = 0
    }

    sliderAction()
    
}


function moveBack() {
    slideCount--
    if (slideCount < - 4) {
        slideCount = 0
    }
    sliderAction()
}



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






