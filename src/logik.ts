const input = document.getElementById("taskInput") as HTMLInputElement;

const button = document.getElementById("addButton") as HTMLButtonElement;

const list = document.getElementById("taskList") as HTMLUListElement;

button.addEventListener("click", () => {

    const text = input.value;

    if (text === "") {
        return;
    }

    const item = document.createElement("li");

    item.textContent = text;

    list.appendChild(item);

    input.value = "";

});