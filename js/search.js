const searchBtn = document.querySelector('#header .search-btn');
const navBar = document.getElementById('nav');
const searchBar = document.querySelector('#header .search-bar');
const searchIcon = document.querySelector('#header .search-icon');

searchBtn.addEventListener('click', function () {
    var isSearchBarClosed = searchBar.classList.contains('open');
    if (isSearchBarClosed) {
        navBar.style.display = 'inline-block';
        searchBar.classList.remove('open');
        searchIcon.classList.remove('ti-close');
        searchIcon.classList.add('ti-search');
    } else {
        navBar.style.display = 'none';
        searchBar.classList.add('open');
        searchIcon.classList.remove('ti-search');
        searchIcon.classList.add('ti-close');
    }
})
