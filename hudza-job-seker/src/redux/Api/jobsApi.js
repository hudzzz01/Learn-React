const urlBackendUser = `http://localhost:5000`
export async function GetAllJob(){
    const url = `${urlBackendUser}/job/getAllJobs`
    console.log(url)
    
    //tidak ada data
    // const data = await JSON.stringify(dataLogin);
    const options = {
    method : 'GET',
        headers : {
            'Content-Type': 'application/json'
        },
        // body : data
    }
    //console.log(data)
    const response = await fetch(url, options);
    // console.log( "response API :", response)
    return response.json(); 
}

export async function CreateJob(job){
    const url = `${urlBackendUser}/job/postJob`
    console.log(url)
    
    //ada data terbang
    const data = await JSON.stringify(job);
    const options = {
    method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    }
    console.log("ini adalah request post data API ", data)
    const response = await fetch(url, options);
    // console.log( "response API :", response)
    return response.json(); 
}
export async function updateJob(job){
    const id = job.id
    const url = `${urlBackendUser}/job/update/${id}`
    console.log(url)
    
    //ada data
    const data = await JSON.stringify(job);
    const options = {
    method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data
    }
    //console.log(data)
    const response = await fetch(url, options);
    // console.log( "response API :", response)
    return response.json(); 
}
export async function deleteJob(id){
    const url = `${urlBackendUser}/job/deleteJob/${id}`
    console.log(url)
    
    //tidak ada data
    // const data = await JSON.stringify(dataLogin);
    const options = {
    method : 'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        // body : data
    }
    //console.log(data)
    const response = await fetch(url, options);
    // console.log( "response API :", response)
    return response.json(); 
}