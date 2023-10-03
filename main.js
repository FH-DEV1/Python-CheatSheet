function filterBoxes() {
    let input = document.getElementById('searchBar');
    let filter = input.value.toLowerCase();
    let boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}