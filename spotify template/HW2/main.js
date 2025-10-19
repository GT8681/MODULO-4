const BASE_ENPOINT = ' https://striveschool-api.herokuapp.com/api/deezer/search?q='



const eminemResultsContainer = document.querySelector('.eminm-results')
const metallicaResultsContainer = document.querySelector('.metallica-results')
const inputSearch = document.getElementById('searchField')
const inputSearchButton= document.getElementById('button-search')
const generalSearchResultsContainer = document.getElementById('searchResults')
const eminemRow =document.querySelector('.eminem-row')
const metallicaRow = document.querySelector('.metallica-row')

const getAlbums = async (albumName) =>{
    try {
        const response = await fetch(`${BASE_ENPOINT}${albumName}`)
        return await response.json();
        
    } catch (error) {
        console.log(error.messagge);
    }
}

const generateAlbumCard = (album,container) =>{

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class','mb-4 col-12 col-md-6 col-lg-4' )

    const card = document.createElement('div')
    card.setAttribute('class', 'album-card-container p-3')

    const img = document.createElement('img')
    img.setAttribute('class','album-card-img w-100  objetct-fit-cover mb-3')
    img.src = album.album.cover

    const albumTitle = document.createElement('h3')
    albumTitle.innerText = album.artist.name 

    const  songTitle = document.createElement('p')
    songTitle.setAttribute('class','album-card-song-title')
    songTitle.innerText = album.title

    card.append(img,albumTitle,songTitle)
    wrapper.appendChild(card)
    container.appendChild(wrapper)



}

const initinArtist = ['eminem','metallica']
initinArtist.forEach(artist =>{

    getAlbums(artist)
.then(res => res.data)
.then(albums => {
    const container = artist==='eminem' ? eminemResultsContainer : metallicaResultsContainer
        albums.slice(0,8).forEach(album => generateAlbumCard(album,container))
            
});


})

const cleanInitialAlbumsDara = () => {
    eminemResultsContainer.innerHTML = ''
    metallicaResultsContainer.innerHTML = ''
    generalSearchResultsContainer.parentElement.parentElement.parentElement.classList.remove('d-none')
    eminemRow.classList.add('d-none')
    metallicaRow.classList.add('d-none')

}

inputSearchButton.addEventListener('click', async () =>{
    const inputValue = inputSearch.value
    cleanInitialAlbumsDara()
    const albumData = await getAlbums(inputValue)
    generalSearchResultsContainer.innerHTML = ""
    albumData.data.slice(0,8).forEach(album =>{

        generateAlbumCard(album,generalSearchResultsContainer)
    })
    
})