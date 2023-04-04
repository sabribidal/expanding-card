const panels = document.querySelectorAll('.panel')

panels.forEach(panels =>{
    panels.addEventListener('click',()=>{
        removeActionClasses()
        panels.classList.add('active')
    })
})

function removeActionClasses(){
    panels.forEach(panels =>{
        panels.classList.remove('active')
    })
}