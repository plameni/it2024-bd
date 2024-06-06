
const apiKey = 'ihcZTxbrm4BnOd6EJZm1Z61ZWvvgPMzY';
const iframeGif = document.getElementById('gif-src'); 

const btnClick = (e) => {
    const searchTextInput = document.getElementById('search-text'); 
    const searchText = searchTextInput.value; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(giphyData => {
            // giphyData.data[i].embed_url;
            // ceil, floor, round 
            const i = Math.floor(50 * Math.random()); 
            iframeGif.src = giphyData.data[i].embed_url; 
        })
        .catch(e => {
            console.log(e); 
        })
}

const btnClickAsync = async (e) => {
    const searchTextInput = document.getElementById('search-text'); 
    const searchText = searchTextInput.value; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}`;
    const response = await fetch(url);
    const giphyData = await response.json(); 
    const i = Math.floor(50 * Math.random()); 
    iframeGif.src = giphyData.data[i].embed_url; 
}

const btnSearch = document.getElementById('btn-search'); 
btnSearch.addEventListener('click', btnClickAsync)

