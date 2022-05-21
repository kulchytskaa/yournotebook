export const createModal = (title, placeholder, {name, value}) => {
    const form = document.getElementById('form');
    const titleNode = document.getElementById('modal-title');
    const input = document.getElementById('film-name');
    form.setAttribute(name, value)
    titleNode.innerText = title;
    input.placeholder = placeholder;
}