const searchItems = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayItems(data.docs));
};



const displayItems = books => {
    const searchResult = document.getElementById('search-result');
    const totalResult = document.getElementById('total-result');
    searchResult.textContent = '';

    if (books.length !== 0) {

        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card">
                    <img width="200px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg
    
                    " class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p>Author Name:${book.author_name}</p>
                        <p>Publisher:${book.publisher}</p>
                        <p>1st Publish Year:${book.first_publish_year}</p>
                     </div>
                </div>`;
            searchResult.appendChild(div);
            totalResult.innerText = `TOTAL RESULT FOUND:${books.length}`;

        });
    }

    else {
        totalResult.innerText = ' sorry no result found!';
    }




};