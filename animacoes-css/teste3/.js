var iconmenu = document.querySelector('.icon-menu')
iconmenu.addEventListener('click', ()=>{
    
    let menudad = document.querySelector('.menu')
    
    if(menudad.classList.contains('hide')){
        menudad.classList.add('show')
        menudad.classList.remove('hide')
    }else{
        menudad.classList.remove('show')
        menudad.classList.add('hide')
    }
    
})