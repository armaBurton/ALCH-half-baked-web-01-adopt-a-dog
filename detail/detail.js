import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener(`load`, async() => {
// on load
// get the id from URL
    const url = new URL(location.href);
    const search = url.searchParams;
    const id = parseInt(search.get(`id`));
    console.log(id);


// use the id to fetch the dog
// render and append this dog's details to the container

    const dog = await getDog(id);

    let dogDetail = renderDogDetail(dog);

    dogDetailContainer.append(dogDetail);
});