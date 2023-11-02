const select = document.querySelectorAll('.js-choice');
select.forEach(elem => {
    const choices = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
    });
})

// tabi

function tabVisible(containerTab, elemTab, contentTab) {
    function tabContentHide(visible) {
        for (let i = visible; i < contentTab.length; i++) {
            contentTab[i].classList.remove('show')
            contentTab[i].classList.add('hide')
        }
    }
    tabContentHide(1)

    function tabContentVisible(b) {
        if (contentTab[b].classList.contains('hide')) {
            contentTab[b].classList.add('show')
            contentTab[b].classList.remove('hide')
        }
    }

    containerTab.addEventListener('click', (e) => {
        let target = e.target
        if (target && target.classList.contains('stroke')) {
            for (let i = 0; i < elemTab.length; i++) {
                if (target == elemTab[i]) {
                    tabContentHide(0)
                    tabContentVisible(i)
                }
            }
        }
    })
}

let tabProductCard = document.querySelector('.tab_product_card'),
    stroke = document.querySelectorAll('.stroke'),
    tabContent = document.querySelectorAll('.block_descr_product_card')

tabVisible(tabProductCard, stroke, tabContent)

// end tabi

// slider
const wrappSlide = document.querySelector('.wrapp_certificate_slide')
const sliderTape = wrappSlide.querySelector('.certificate_slide')
const sliderItem = wrappSlide.querySelectorAll('.certificate_item')
const arrowRight = wrappSlide.querySelector('.arrow_right')
const arrowLeft = wrappSlide.querySelector('.arrow_left')

let slideCount = 0

let slideTime = setInterval(() => {
    moveForward()
},3000)

arrowRight.addEventListener('click', () => {
    moveForward()
    clearInterval(slideTime)
} 
)
arrowLeft.addEventListener('click', () => {
    moveBack()
    clearInterval(slideTime)
})

sliderItem.forEach(item => {
    let width = item.offsetWidth
    widthElemSlide = width
})


function moveForward() {
    let it = document.querySelectorAll('.certificate_item')
    for(let i = 0; i < it.length; i++){
        it[i].classList.remove('fade_free')
        it[i].classList.remove('fade_five')
        if(it[i].classList.contains('fade')){
            it[i].classList.remove('fade')
            it[i].classList.add('fade_two')
        }else{
            it[i].classList.remove('fade_two')
            it[i].classList.add('fade')
        }    
        sliderTape.prepend(it[it.length -1])  
    } 
}

function moveBack() {
    let it = document.querySelectorAll('.certificate_item')
    for(let i = 0; i < it.length; i++){
        it[i].classList.remove('fade')
        it[i].classList.remove('fade_two')
        if(it[i].classList.contains('fade_free')){
            it[i].classList.remove('fade_free')
            it[i].classList.add('fade_five')
        }else{
            it[i].classList.remove('fade_five')
            it[i].classList.add('fade_free')
        }  
        sliderTape.append(it[0])  
    }    
}

// end slider


let questionsArrow = document.querySelectorAll(".questions_item .arrow");

questionsArrow.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-active')
    })
})






