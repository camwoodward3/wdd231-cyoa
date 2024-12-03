const baseUrl = "https://swapi.dev/api/";

export async function getPeopleData() {
    let data = {};
    const response = await fetch(baseUrl + "people");
    // check to make sure the reponse was ok.
    if (response.ok) {
        // convert to JSON
        data = await response.json();
    } else throw new Error("response not ok");
    // return just the first row of the data object
    return data.results;
}