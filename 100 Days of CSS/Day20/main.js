const button = document.querySelector('.btn')

const buttonReset = document.querySelector('#btn-reset')

const message = document.querySelector('.message')

const message2 = document.querySelector('.message2')

const plane = document.querySelector('.plane')

const plane2 = document.querySelector('.plane2')

const svgPlane = document.querySelector('.svg-plane')

const image = document.querySelector('.image')

const circle = document.querySelector('.circle')

const circle2 = document.querySelector('.circle2')

button.onclick = () => {
    
    message.classList.add('message-animation')
    message2.classList.add('message-animation')
    circle.classList.add('circle-animation')
    circle2.classList.add('circle-animation2')
    setTimeout(() => {
        plane.classList.add('plane-animation')
        plane2.classList.add('plane-animation')
        setTimeout(() => {
            svgPlane.classList.add('svg-plane-animation')
        }, 500)
        setTimeout(() => {
            button.value=""
        }, 1000)
        setTimeout(() => {
            button.classList.add('button-animation')
        }, 1500)
        setTimeout(() => {
            buttonReset.classList.add('show-button')
        }, 4000)
        
    },1000)
}

buttonReset.onclick = () => {
    buttonReset.classList.remove('show-button')

    message.classList.remove('message-animation')

    message2.classList.remove('message-animation')

    circle.classList.remove('circle-animation')

    circle2.classList.remove('circle-animation')

    plane.classList.remove('plane-animation')

    plane2.classList.remove('plane-animation')

    svgPlane.classList.remove('svg-plane-animation')

    button.value="SEND EMAIL"

    button.classList.remove('button-animation')
}