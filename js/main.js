import { getPeopleData } from "./swapi.mjs";



async function init() {
    const people = getPeopleData();
    console.log(people);
}

init();

