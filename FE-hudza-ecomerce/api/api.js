const urlBackendUser = import.meta.env.VITE_API_CRUD_USER;
export async function LoginUser(dataLogin){
    const urlLogin = `${urlBackendUser}/users/login`
    console.log(urlLogin)
    
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



export async function CekTokenApi(token){
    const urlLogin = `${urlBackendUser}/users/cek-token`
    
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

