
export let putData = async (props) => {
    
    const settings = {
        method:"PUT",
        headers:{
            "Content-Type":"aplication/json"
        },
        body: JSON.stringify(props.data)
    }
    
    const request = await fetch(
        `https://assets.breatheco.de/apis/fake/todos/user/nico`, settings
    );
    
    const json = await request.json();
    const data = json;
    
    return data;    
}

export default putData()