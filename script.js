async function dados() {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    if (api.status === 200) {
        console.log(api)
    }

}


await dados();