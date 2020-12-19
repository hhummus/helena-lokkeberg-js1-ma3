// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

async function makeApiCall(){
    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results)
        console.log(results.results)

        for(let i = 0; i <= 8; i++) {
            console.log(results.results[i].name)
            console.log(results.results[i].rating)
            console.log(results.results[i].tags)

        }
;       return results;


    } catch(error){
        console.log(error);
    }


};