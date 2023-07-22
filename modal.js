// modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalCloseBtn = document.querySelector('.js-modal-close')

// hàm hiển thị modal
function showBuyTickets() {
    modal.classList.add('open')
}

function hiddenBuyTickets() {
    modal.classList.remove('open')
}

// Bắt sự kiện click và hiển thị modal
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

//Bắt sự kiện click và tắt modal
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})

modal.addEventListener('click', hiddenBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})