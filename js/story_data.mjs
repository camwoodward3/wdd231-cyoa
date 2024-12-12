const storyPath = "js/stories.json"

export async function getStoryData() {
    const response = await fetch(storyPath)
    // check to make sure the reponse was ok.
    if (!response.ok) {
        throw new Error(`Fetch failed: ${response.statusText}`);
    }
    // convert to JSON and return the data
    return response.json();
}