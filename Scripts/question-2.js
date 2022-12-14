//Question 2

const key = "a8303e18e1cd42079c0470cda94f5cbe";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const content = document.querySelector(".content"); 

const getData = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        const resultData = data.results;

        content.innerHTML = "";

        for (let i = 0; i < resultData.length; i++){
            if (i === 8) {
                break;
            }
            const gameName = resultData[i].name;
            const gameRating = resultData[i].rating;
            const numberOfTags = resultData[i].tags.length;
            content.innerHTML += `<ul>
            <li> Name: ${gameName} </li>
            <li> Rating: ${gameRating} </li>
            <li> Number of tags: ${numberOfTags} </li>
            </ul>
            `;
    }
    } catch(error){
        console.log("Error occurred: " + error);
        content.innerHTML = errorMessage("Something went wrong...")
    }
}



getData();