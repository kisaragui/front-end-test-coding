

const apiGitHubUser = async (user) => {
    let results = {response: undefined, data: undefined}
    const url = `https://api.github.com/users/${user}`;
    if (user){
        const api = await fetch(url);
        const data = await api.json();
        if(data){
            results = {response:"success", data:data}
            return results
        }else{
            results = {response: "Not-Found", data:""}
            return results
        }
    }else{
        return results
    }
}

export default apiGitHubUser
