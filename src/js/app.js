const select = document.querySelectorAll('.js-choice');
select.forEach(elem => {
    const choices = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
    });
})


// tabi

function tabVisible(containerTab, elemTab, contentTab, activeCircle, activeText) {
    function tabContentHide(visible, active) {
        for (let i = visible; i < contentTab.length; i++) {
            contentTab[i].classList.remove('show')
            contentTab[i].classList.add('hide')
        }
        for(let j = active; j < activeCircle.length; j++){
            activeCircle[j].classList.remove('is-active')
        }
        for(let a = active; a < activeText.length; a++){
            activeText[a].classList.remove('is-active')
        }
    }
    tabContentHide(1, 1)

    function tabContentVisible(b, a, c) {
        if (contentTab[b].classList.contains('hide')) {
            contentTab[b].classList.add('show')
            contentTab[b].classList.remove('hide')
        }
        if(!activeCircle[a].classList.contains('is-active')){
            activeCircle[a].classList.add('is-active')
        }else{
            activeCircle[a].classList.remove('is-active')
        }
        if(!activeText[c].classList.contains('is-active')){
            activeText[c].classList.add('is-active')
        }else{
            activeText[c].classList.remove('is-active')
        }
    }

    containerTab.addEventListener('click', (e) => {
        let target = e.target
        if (target && target.classList.contains('stroke')) {
            for (let i = 0; i < elemTab.length; i++) {
                if (target == elemTab[i]) {
                    tabContentHide(0, 0)
                    tabContentVisible(i, i, i)
                }
            }
        }
    })
}

let tabProductCard = document.querySelector('.tab_product_card'),
    stroke = document.querySelectorAll('.stroke'),
    tabContent = document.querySelectorAll('.block_descr_product_card'),
    activeElCircle = document.querySelectorAll('.tab_circle'),
    activeElText = document.querySelectorAll('.product_name')

tabVisible(tabProductCard, stroke, tabContent, activeElCircle, activeElText)

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


let questionsArrow = document.querySelectorAll(".questions_item .arrow"),
    questionsHeader = document.querySelectorAll('.questions_header'),
    questionsAnswers = document.querySelectorAll('.questions_answers')

    questionsAnswers.forEach(elem => {
        elem.classList.add('hide')
    })

    questionsHeader.forEach(elem => {
        elem.addEventListener('click', boxHandler)
    })

    function boxHandler(e){
        let current = e.target.closest('.questions_header'),
            content = e.target.nextElementSibling
            current.classList.toggle('active')
            if(current.classList.contains('active')){
                content.classList.remove('hide')
            }else{
                content.classList.add('hide')
            }
    }

// reviwes
let reviewContainer = document.querySelectorAll('.reviwes_block'),
    btnRead = document.querySelectorAll('.read-compete')



reviewContainer.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target
        for (let i = 0; i < btnRead.length; i++) {
            if (target == btnRead[i]) {
                let overflowBlock = elem.querySelector('.overflow-block')
                if (overflowBlock.style.height != '100%') {
                    overflowBlock.style.display = 'block'
                    overflowBlock.style.height = '100%'
                    elem.style.height = '100%'
                    btnRead[i].innerHTML = 'Скрыть'
                } else {
                    overflowBlock.style.display = '-webkit-box'
                    overflowBlock.style.height = '65px'
                    elem.style.height = '230px'
                    btnRead[i].innerHTML = 'Читать полностью'
                }
            }
        }
    })
})
// end reviwes

// map

function showYaMaps() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=6ff62837-f3df-41a5-9400-956317f9b02f";
    document.getElementById("map").appendChild(script);
    script.onload = function () {
        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.57929340693388,37.58700970608521],
                zoom: 17,
                behaviors: ['default', 'scrollZoom'],
            });
            // myMap.behaviors.disable('scrollZoom');
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
            myMap.controls.remove('zoomControl');
            // myMap.controls.add('rulerControl', {
            //     float: 'none',
            //     position: {
            //         bottom: '40px',
            //         right: '15px'
            //     }
            // });

            myMap.controls.add('zoomControl', {
                size: 'small',
                float: 'none',
                position: {
                    bottom: '140px',
                    right: '30px'
                }
            });

            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(new ymaps.Placemark([55.57913621593358,37.593567707126624], {
                iconCaption: '',
            }, {
                preset: 'twirl#orangeDotIcon',    
            }));
            
        }
    }
}
showYaMaps()
// end map




