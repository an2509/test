// modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalCloseBtn = document.querySelector('.js-modal-close')
const payBtn = document.querySelector('.js-modal__buy-tickets')

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

payBtn.addEventListener('click', function () {
    const ticketsInput = document.getElementById('tickets-quantity')
    const emailInput = document.getElementById('tickets-email')
    var emailArr = []
    emailArr = emailInput.value.split("@")
    const isEmail = emailArr.length > 1
    if (ticketsInput != 0 && isEmail) {
        const isNaN = ticketsInput.value == Number(ticketsInput.value)
        if (isNaN) {
            toast({
                title: 'Success',
                msg: `Đã mua thành công ${ticketsInput.value} vé tổng ${ticketsInput.value * 15}$.`,
                type: 'success',
                duration: 3000
            })
            modal.classList.remove('open')
            ticketsInput.value = ''
            emailInput.value = ''
        } else {
            toast({
                title: 'False',
                msg: `Thông tin không hợp lệ. Vui lòng nhập chính xác thông tin.`,
                type: 'false',
                duration: 3000
            })
            ticketsInput.value = ''
            emailInput.value = ''
        }
    }
})
