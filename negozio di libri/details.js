const bookDetailsContainer = document.querySelector('.book-details-container');

const params = new URLSearchParams(window.location.search);

const bookAsin = params.get("asin");



const getBookData = async () => {

try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/books/${bookAsin}`)
    const data = await response.json();
    
    return data
    
} catch (error) {
    console.log(error)
    
}
}

getBookData().then(data=>{
    createBookDetails(data);
})
  

const createBookDetails = (book) =>{

    const detailsBookContainer = document.createElement("div");
    detailsBookContainer.setAttribute("class","d-flex flex-column gap-3");
    bookDetailsContainer.append(detailsBookContainer);
    

    const detailsTitle = document.createElement("h2");
    detailsTitle.classList.add("class","text-dark");
    detailsTitle.innerText = book.title;
    detailsBookContainer.appendChild(detailsTitle);

    const detailImg = document.createElement("img");
    detailImg .setAttribute("class","w-25 object-fit-cover");
    detailImg.src = book.img;
    detailsBookContainer.appendChild(detailImg);

    const detailsCategory = document.createElement("p");
    detailsCategory.innerText = book.category;
    detailsBookContainer.appendChild(detailsCategory);

    const detailsPrice = document.createElement("p");
    detailsPrice.innerText = `${book.price}$`;
    detailsBookContainer.appendChild(detailsPrice);





}