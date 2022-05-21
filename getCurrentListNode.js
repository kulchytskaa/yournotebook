export const getCurrentListNode = () => {
    const filmsList = document.getElementById('films-list');
    const seriesList = document.getElementById('series-list');
    const booksList = document.getElementById('books-list');
    const form = document.getElementById('form');
    switch(form.getAttribute('attr')) {
        case 'films':
            return filmsList;
        case 'series':
            return seriesList;
        case 'books':
            return booksList;
        default:
            return '';
    }
}