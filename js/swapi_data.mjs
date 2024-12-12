const baseUrl = "https://swapi.dev/api/";

async function getJson(endpoint) {
    const response = await fetch(baseUrl + endpoint)
    // check to make sure the reponse was ok.
    if (!response.ok) {
        throw new Error(`Fetch failed: ${response.statusText}`);
    }
    // convert to JSON and return the data
    return response.json();
}

export async function getPeopleData() {
    let data = await getJson("people");
    return data.results;
}

export async function getPersonData(name) {
    const data = getJson("people/?search=" + name);
    return data;
}