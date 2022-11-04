//Question 2

const key = a8303e18e1cd42079c0470cda94f5cbe
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`

const getData = async() => {
    const response = await fetch(url); 
    const data = await response.json();
}