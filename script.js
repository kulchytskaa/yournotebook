import { createModal } from "./createModal.js";
import { getCurrentListNode } from "./getCurrentListNode.js";

const modal = document.getElementById('modal');
const filmsBtn = document.getElementById('films');
const seriesBtn = document.getElementById('series');
const booksBtn = document.getElementById('books');
const closeIcon = document.getElementById('closeIcon');
const form = document.getElementById('form');
const authForm = document.getElementById('auth-form');


const getValues = (currentForm) => {
    return Object.values(currentForm).reduce((obj, {name, value}) => {
       if (name && value) {
        obj[name] = value;
       }
        return obj;
    }, {})
}

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const {login, password} = getValues(authForm);
    alert(`
        Your login: ${login}
        Your password: ${password}
    `)
    e.target.reset();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {name, description} = getValues(form);
    if (!name || !description) return;
    const li = document.createElement('li');
    li.innerText = `${name}: ${description}`;
    getCurrentListNode().append(li);
    modal.style.display = 'none';
    e.target.reset();
})

filmsBtn.onclick = () => {
    createModal('Favorite films', 'Write film name', {name: 'attr', value: 'films'})
    modal.style.display = 'flex';
   
}
seriesBtn.onclick = () => {
    createModal('Favorite series', 'Write series name', {name: 'attr', value: 'series'})
    modal.style.display = 'flex';
   
}
booksBtn.onclick = () => {
    createModal('Favorite books', 'Write book name', {name: 'attr', value: 'books'})
    modal.style.display = 'flex';
   
}

closeIcon.onclick = (e) => {
    modal.style.display = 'none';
}


window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

