
export let postData = async () => {
    const settings = {
        method:"POST",
        headers:{ "Content-Type": "aplication/json" },
        body: {}
    }
    
    const request = await fetch(
        'https://assets.breatheco.de/apis/fake/todos/user/nicolas', settings
    )
    const data = await request.json();    
    let success = {result: "ok"}

    console.log(data)
    return data ? success : false;
}
export default postData()
