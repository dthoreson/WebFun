var placeholder = "Search";

function alert(this) {
    document.getElementsByClassName("search-bar").placeholder = "Searching for..." + placeholder.innerText;
}