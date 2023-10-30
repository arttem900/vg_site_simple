const select = document.querySelectorAll('.js-choice');
select.forEach(elem => {
    const choices = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
    });
})


let questionsArrow = document.querySelectorAll(".questions_item .arrow");

questionsArrow.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('s')
    })
})







