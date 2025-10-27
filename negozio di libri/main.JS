const cardContainer = document.querySelector('.card-container');
const cardDialog = document.querySelector('.cart-dialog');
const cardButton = document.querySelector('.card-button');
const cardContent = document.querySelector('.cart-dialog-content');
const dialogBtnClose = document.querySelector('.dialog-btn-close');
const bookItemCount = document.querySelector('.book-item-count');
const totalPriceContainer = document.querySelector('.totalPrice');
const clearBtn = document.querySelector('.clearBtn');
const inputSerach = document.getElementById('searchInput');
const searchInput = document.querySelector('.buttonSearchLibro');

let arrayBooks = [];


const updateCountBook = () => {
    bookItemCount.innerText = arrayBooks.length;
}


const showCart = () => {
    cardContent.innerHTML = '';
    cardDialog.showModal();
    mapCardBooks();
}


const hideCart = () => {
    cardDialog.close();
}

const updateTotalPrice = () => {
    totalPrice = arrayBooks.reduce((sum, book) => sum + parseFloat(book.price), 0);
    totalPriceContainer.innerText = `Totale prezzo Euro ${totalPrice.toFixed(2)}`
}


const deleteItemFromBook = (book) => {

    let filterBook = arrayBooks.filter(singleBook => singleBook.title.toLowerCase() !== book.title.toLowerCase());
    console.log(filterBook);
    arrayBooks = [...filterBook];
    updateCountBook();
    updateTotalPrice();
    cardContent.innerHTML = '';
    arrayBooks.map(book => generateBookItemCount(book))
}


const generateBookItemCount = (book) => {

    const conteinerBook = document.createElement('div');
    conteinerBook.setAttribute('class', 'd-flex flex-column  gap-3');

    const bookTitle = document.createElement('p');
    bookTitle.innerText = book.title;

    const imgBook = document.createElement('img');
    imgBook.setAttribute('class', 'card-img-top object-fit-cover w-25');
    imgBook.src = book.img;

    const bookPrice = document.createElement('p');
    bookPrice.innerText = book.price;

    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.setAttribute('class', 'btn btn-danger w-25 mb-4');
    deleteBookBtn.innerText = 'CANCELLA BOOK';



    deleteBookBtn.addEventListener('click', () => {
        deleteItemFromBook(book);

    });


    conteinerBook.append(bookTitle, imgBook, bookPrice, deleteBookBtn);
    cardContent.appendChild(conteinerBook);
};

const mapCardBooks = () => {
    if (arrayBooks.length === 0) {
        return
    }
    arrayBooks.map((book) => {

        generateBookItemCount(book);


    })
}

const getBooks = async () => {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const books = await response.json();
        return books;
    } catch (error) {
        console.error(error.message);
    }
}

const generateBooks = async (book) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'col-lg-10 col-md- w-25');

    const container = document.createElement('div');
    container.setAttribute('class', 'card col-lg-10 col-md-6 m-3 p-3 ');
    container.addEventListener('click', () => {
        window.location.href = `./datails.html?asin=${book.asin}`
    })

    const title = document.createElement('h3');
    title.innerText = book.title;

    const img = document.createElement('img');
    img.setAttribute('class', 'card-img-top object-fit-cover');
    img.src = book.img;

    const containerPrice = document.createElement('div');
    containerPrice.setAttribute('class', 'containerPrice d-flex  align-items-center gap-3');

    const price = document.createElement('p');
    price.innerText = book.price;

    const pPrice = document.createElement('p');
    pPrice.innerText = 'PRICE :';

    const containerCategory = document.createElement('div');
    containerCategory.setAttribute('class', 'containerCategory d-flex  align-items-center gap-3');

    const pCategory = document.createElement('p');
    pCategory.innerText = 'CATEGORY :';

    const category = document.createElement('p');
    category.innerText = book.category;

    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn btn-primary');
    addButton.innerText = 'AGGIUNGI AL CARRELLO';


    addButton.addEventListener('click', () => {
        addBooks(book);
    });



    container.append(title, img, containerPrice, pPrice, price, containerCategory, pCategory, category);
    containerPrice.append(pPrice, price);
    containerCategory.append(pCategory, category);
    wrapper.append(container, addButton);
    cardContainer.appendChild(wrapper);

}

const addBooks = (book) => {
    arrayBooks.push(book);
    updateCountBook();
    updateTotalPrice();

}
cardButton.addEventListener('click', showCart);
dialogBtnClose.addEventListener('click', hideCart);

clearBtn.addEventListener('click', () => {
    arrayBooks = [];
    updateCountBook();
    cardContent.innerHTML = "";
    totalPriceContainer.innerText = 'TOTALE PREZZO euro 0.00';

})


searchInput.addEventListener('click', async (event) => {
    event.preventDefault();
    const value = inputSerach.value;
    const books = await getBooks();
    if (value.length < 3) {
        alert ("MA CE STA FA..... devi mettere almeno 3 CARATTERI");

    }


    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));
    cardContainer.innerHTML = "";
    filteredBooks.forEach(book => {
        generateBooks(book);

    });

})

inputSerach.addEventListener('input', () => {

    if (inputSerach.value < 3 ) {
        searchInput.setAttribute('disabled','true');
        
    }

    if (inputSerach.value === "") {
        getBooks()
            .then(res => res.map(book => generateBooks(book)))
    }
})


getBooks()
    .then(res => res.map(book => generateBooks(book)))




