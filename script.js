//keyup - aperto a tecla e solto
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        //separando strings e criando um array com o método split
        let songArray = song.split('')
        playComposition(songArray)
    }
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        //som tocando e recarregando simultaneamente
        audioElement.currentTime = 0;
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

function playComposition(songArray){
    let wait = 0
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)
        
        wait += 250
    }
}