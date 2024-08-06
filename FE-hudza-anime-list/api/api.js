const url = "https://api.jikan.moe/v4/top/anime";

export async function GetDataApi(page,limit){
    const data = await fetch(`${url}?&page=${page}&limit=${limit}`)
    // const data = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=&limit=${limit}&filter`)
    return data.json()
}
export async function GetAnimeApiById(id){
    const urlAnime = `https://api.jikan.moe/v4/anime/${id}/full`
    const data = await fetch(urlAnime)
    return data.json()
}

export async function LoginUser(dataLogin){
    const urlLogin = `http://localhost:5000/users/login`
    
    const data = await JSON.stringify(dataLogin);
    const options = {
    method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    }
    //console.log(data)
    const response = await fetch(urlLogin, options);
    return response.json();
  
}


export async function RegisterUserApi(dataUser){
    const urlLogin = `http://localhost:5000/users/create`
    
    const data = await JSON.stringify(dataUser);
    const options = {
    method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    }
    console.log(data)
    
    const response = await fetch(urlLogin, options);
    return response.json();
  
}

export async function CekTokenApi(token){
    const urlLogin = `http://localhost:5000/users/cek-token`
    
    const data = await JSON.stringify(token);
    const options = {
    method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    }
    //console.log(data)
    const response = await fetch(urlLogin, options);
    return response.json();
  
}


export async function DelDataApi(id){
    const delData = await fetch(`${url}/api/v1/todo/${id}`,{
        method:"DELETE"
    })
    return delData.json();
}

export async function PostDataApi(data){

    const postData = await fetch(`${url}/api/v1/todo/`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title : data.title,
            todo : data.todo,
          }),
          mode:'cors'
    })
    return postData.json();
}


export async function PutDataApi(data){

    const putData = await fetch(`${url}/api/v1/todo/`,{
        method:"PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id : data.id,
            title : data.title,
            todo : data.todo,
          }),
          mode:'cors'
    })
    return putData.json();
}