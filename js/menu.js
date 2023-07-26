var header = document.getElementById('header')
var mobileMenuBtn = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

//bắt sự kiện click đóng mở menu
mobileMenuBtn.onclick = function () {
    var isClosed = header.clientHeight === headerHeight
    if (isClosed) {
        // mở menu
        header.style.height = 'auto'
    } else {
        //đóng menu
        header.style.height = '46px'
    }
}

//lấy những thẻ a là con của li là con của nav
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')


for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]

    //bắt sự kiện click menu item
    menuItem.onclick = function (event) {
        //xét xem thẻ a có thẻ kế mang class là subnav hay ko
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')


        if (isParentMenu) {
            event.preventDefault();
            //sự kiện đóng mở sub menu
            var subMenu = this.nextElementSibling
            var isSubMenuOpen = subMenu.classList.contains('open')

            if (isSubMenuOpen) {
                //đóng
                subMenu.classList.remove('open')
            } else {
                //mở
                subMenu.classList.add('open')
            }

        } else {
            header.style.height = null
        }
    }
}