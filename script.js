//keyup - aperto a tecla e solto
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.play();
    }

    if(keyElement) {
        //adicionar classe active
        keyElement.classList.add('active')

        //remover classe active
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}