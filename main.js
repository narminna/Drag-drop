let items = document.querySelectorAll("li");
let boxes = document.querySelectorAll(".list ul");
let draggedItem;

items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        draggedItem = item;
    });
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        if(draggedItem) {
            box.appendChild(draggedItem);
        }
    });
});