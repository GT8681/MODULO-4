const API_KEY = '5Knrq4dTw0AOYZ6Sy3reI5lyvu2JzoMhnOHuCkrxD0qv2vT7DoWSoAPL'; // Sostituisci con la tua API key
const endpoint = 'https://api.pexels.com/v1/search?query= collections/mexican-food-z6lhzw1/';

const getAlbums = async () => {
    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: API_KEY
            }
        });
        const data = await response.json();
        console.log(data);
        const gallery = document.getElementById('gallery');
        
        data.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src.medium;
            img.alt = photo.photographer;
            gallery.appendChild(img);
        });
       
    }
       
    catch (error) {
        console.error('Errore:', error);
    }

}
        

//al click di un bottone mi carca nuove foto
document.getElementById('loadMoreBtn').addEventListener('click', async () =>{
    gallery.innerText = '';
    getAlbums()

});
