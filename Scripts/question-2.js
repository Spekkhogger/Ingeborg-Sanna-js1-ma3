//Question 2

const key = "a8303e18e1cd42079c0470cda94f5cbe";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const content = document.querySelector(".content"); 

const getData = async() => {
    const response = await fetch(url); 
    const data = await response.json();
    const resultData = data.results;

    console.log(resultData); 

    for (let i = 0; i < 8; i++){
        const gameName = resultData[i].name;
        const gameRating = resultData[i].rating;
        const numberOfTags = resultData[i].tags.length;
        content.innerHTML += `Name: ${gameName}
        Rating: ${gameRating}
        Number of tags: ${numberOfTags}
        `;
    }
}

getData(); 


//Loading display...
//Handle any potential errors in the code (try / catch)