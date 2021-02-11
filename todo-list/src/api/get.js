
export let fetchData = async () => {
    const settings = {
        method:"GET",
        headers:{ "Content-Type":"aplication/json" }
    }

    const request = await fetch(
        `https://assets.breatheco.de/apis/fake/todos/user/nico`, settings
        );

    const json = await request.json();
    const data = json;
    console.log(`Get ${data}`)

    return data
}
export default fetchData()