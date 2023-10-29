let select = document.querySelectorAll('select')
let selectButton = document.querySelectorAll('.button'),
    selectItem = document.querySelectorAll('.selectric_items'),
    colForm = document.querySelector('.col_form')




selectButton.forEach(elem => { 
    elem.addEventListener('click', function(e){
        let target = e.target
            for(let i = 0; i < selectButton.length; i++){
                if(target == selectButton[i]){
                    for(let j = 0; j < selectItem.length; j++){
                        if(i == j){
                            selectItem[i].classList.toggle('select_transform')
                            selectItem[i].classList.add('ative')
                        }
                    }
                          
                }
            }  
    })
})




