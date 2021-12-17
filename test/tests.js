// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { getDogs, getDog } from '../fetch-utils.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const dog = {
    "id": 6,
    "created_at": "2021-11-18T22:55:44+00:00",
    "name": "Finicky",
    "age": 5,
    "breed": "dachshund",
    "description": "Wrinkler lotsa pats length boy such treat clouds pats heckin good boys and girls noodle horse, boofers you are doing me a frighten heckin good boys yapper boof heckin. pats tungg. Pats shooberino heckin good boys pupperino borking doggo doggo, long bois dat tungg tho doge long doggo, long bois floofs porgo shoob. Maximum borkdrive very hand that feed shibe shoober, much ruin diet. Vvv yapper wow such tempt big ol pupper very good spot adorable doggo, ruff long woofer long doggo you are doing me a frighten, heckin good boys very hand that feed shibe the neighborhood pupper what a nice floof. snoot extremely cuuuuuute doggo. Pupperino long woofer heckin good boys you are doing me a frighten, big ol yapper. long doggo heckin good boys. Wrinkler vvv many pats most angery pupper I have ever seen lotsa pats vvv, you are doing me the shock dat tungg tho waggy wags length boy, pupper long doggo much ruin diet h*ck. stop it fren long bois most angery pupper I have ever seen. Very hand that feed shibe fat boi doggo doge puggo, heck smol borking doggo with a long snoot for pats."
};

const test = QUnit.test;

test('renderDogCard(dog)', async(expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=6"><div class="dog-card"><p>Finicky</p><img src="./assets/dachshund.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderDogDetail()', async(expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dog-detail"><p class="name">Finicky</p><img src="../assets/dachshund.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">dachshund</p></div><p class="description">Wrinkler lotsa pats length boy such treat clouds pats heckin good boys and girls noodle horse, boofers you are doing me a frighten heckin good boys yapper boof heckin. pats tungg. Pats shooberino heckin good boys pupperino borking doggo doggo, long bois dat tungg tho doge long doggo, long bois floofs porgo shoob. Maximum borkdrive very hand that feed shibe shoober, much ruin diet. Vvv yapper wow such tempt big ol pupper very good spot adorable doggo, ruff long woofer long doggo you are doing me a frighten, heckin good boys very hand that feed shibe the neighborhood pupper what a nice floof. snoot extremely cuuuuuute doggo. Pupperino long woofer heckin good boys you are doing me a frighten, big ol yapper. long doggo heckin good boys. Wrinkler vvv many pats most angery pupper I have ever seen lotsa pats vvv, you are doing me the shock dat tungg tho waggy wags length boy, pupper long doggo much ruin diet h*ck. stop it fren long bois most angery pupper I have ever seen. Very hand that feed shibe fat boi doggo doge puggo, heck smol borking doggo with a long snoot for pats.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

