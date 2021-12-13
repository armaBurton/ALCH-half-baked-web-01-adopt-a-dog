import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
window.addEventListener(`load`, async() => {
    const baseUrl = document.URL;
    const url = new URL(baseUrl);
    const searchId = url.searchParams;

    const id = searchId.get(`id`);

    const dog = await getDog(id);

    let dogDetail = renderDogDetail(dog);

    dogDetailContainer.append(dogDetail);
});