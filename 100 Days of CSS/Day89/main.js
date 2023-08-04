
function addItemGrid(parentNode, count) {
    for (var i = 0; i < count; i++) {
        let item = document.createElement('div');
			  item.classList.add('item');
        parentNode.appendChild(item);
    }
}

let content = document.querySelector('.content');
addItemGrid(content, 100);