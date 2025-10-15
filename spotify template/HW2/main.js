
//fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.error('Errore:', error));

const buttonGo = document.getElementById('button-search')
const eminemSection = document.getElementById('eminemSection');
const eminem = document.getElementById('eminem');
const faSearch1 = document.querySelector('fa-search1');


const getSound = async () => {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem');
       return await response.json();
       
    } catch (error) {
        console.timeLog(error.message);

    }
}

getSound()
.then(res => console.log(res))

const generateAlbum = (data) => {

    const albumContainer = document.createElement('div');
    albumContainer.setAttribute('class', 'col-12 col-md-6 col-lg-4');

    const title = document.createElement('h2')
    title.innerText = data.title_short

   
    const albumImg = document.createElement('img');
    albumImg.setAttribute('class', 'w-100');
    albumImg.src = data.album.cover

    const duration1 = document.createElement('p');
    duration1.innerText = "DURATA :"

    const duration = document.createElement('p');
    duration.innerText = data.duration;

    albumContainer.append(title,duration1, duration, albumImg);
    eminemSection.appendChild(albumContainer);
}
faSearch1.addEventListener('click', async () =>{
    getSound()
          .then(results =>{
              results.data.forEach(result=> {
                generateAlbum(result)
              });
          })
})