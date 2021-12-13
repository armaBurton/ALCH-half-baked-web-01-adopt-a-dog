import { getDogs, getDog } from './fetch-utils.js';
import { renderDogCard, renderDogDetail } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
dogListContainer.classList.add(`dog-list-container`);

// on load
// fetch all dogs
// render and append all dog cards to the container
window.addEventListener(`load`, async() => {
    const dogsData = await getDogs();
    renderDogs(dogsData);
    console.log(dogsData);
});

function renderDogs(dogsData){
    for (let dog of dogsData){
        let renderDog = renderDogCard(dog);
 
        renderDog.addEventListener(`click`, async() => {
            let fetchDog = getDog(dog.id);
            renderDogDetail(fetchDog);
        });


        dogListContainer.append(renderDog);
    }
}