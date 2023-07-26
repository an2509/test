function toast({
    title = '',
    msg = '',
    type = '',
    duration = 3000
}) {
    const mainToast = document.getElementById('toast');
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast--${type}`);

    const delay = (duration / 1000)
    toast.style.animation = `rightToLeft ease 1s, fadeOut linear 1s ${delay}s forwards`;

    const icons = {
        success: 'ti-check',
        false: 'ti-alert'
    };
    const icon = icons[type];

    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__msg">${msg}</div>
        </div>
        <div class="toast__close">
            <i class="ti-close"></i>
        </div>
    `;
    mainToast.appendChild(toast);

    const autoRemoveToast = setTimeout(function () {
        mainToast.removeChild(toast)
    }, duration + 1000)

    toast.onclick = function (e) {
        if (e.target.closest('.toast__close')) {
            mainToast.removeChild(toast)
            clearTimeout(autoRemoveToast)
        }
    }
}




