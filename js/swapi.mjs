const baseUrl = "https://swapi.dev/api/";

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Response not ok");
    }
    return response.json();
}

export async function getPeopleData() {
    const data = await fetchJson(baseUrl + "people");
    return data.results; 
}

export async function getPersonData(id) {
    const data = await fetchJson(baseUrl + "people/" + id);
    return data;
}