const slider = document.getElementById('slider')
const sliderContent = document.querySelectorAll('#slider .text-content')
const chicagoContent = document.getElementById('chicago')
const laContent = document.getElementById('la')
const nyContent = document.getElementById('ny')
chicagoContent.style.display = 'block'

const sliderTimeout = setInterval(function () {
    if (slider.classList.contains('chicago')) {
        slider.classList.remove('chicago')
        slider.classList.add('la')

        // Cách 1
        // sliderContent[0].classList.remove('block')
        // sliderContent[1].classList.add('block')

        // Cách 2
        chicagoContent.style.display = 'none'
        laContent.style.display = 'block'
    } else if (slider.classList.contains('la')) {
        slider.classList.remove('la')
        slider.classList.add('ny')

        // sliderContent[1].classList.remove('block')
        // sliderContent[2].classList.add('block')

        laContent.style.display = 'none'
        nyContent.style.display = 'block'
    } else {
        slider.classList.remove('ny')
        slider.classList.add('chicago')

        // sliderContent[2].classList.remove('block')
        // sliderContent[0].classList.add('block')

        nyContent.style.display = 'none'
        chicagoContent.style.display = 'block'
    }
}, 5000)