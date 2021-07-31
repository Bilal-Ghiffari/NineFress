export default async function fetchData({
    url,
    method = 'GET',
    body,
}){
    return fetch(`${url}`, {
        method,
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body
    }).then(async (response) => {
        const statusHasResponse = [200, 404];
        const jsonResponse = statusHasResponse.includes(response.status) ? await response.json() : response;
        if(response.ok) return jsonResponse;
        throw new Error(JSON.stringify(jsonResponse))
    })
}