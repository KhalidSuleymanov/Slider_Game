var languagesdiv = document.querySelector('.languages');
var arrow = document.querySelector('#arrow');
let kress = document.querySelector('.search-drop i')
let dropSearch = document.querySelector('.search-drop');
arrow.onclick = function () {
    languagesdiv.classList.toggle('active')
    arrow.classList.toggle('arrow')
}

function ShowHide() {

    if (dropSearch.classList.contains('d-none')) {
        dropSearch.className = 'search-drop d-flex align-items-center gap-5';
    }
    else {
        dropSearch.className = 'search-drop d-flex align-items-center gap-5 d-none';
    }

}
