

const apiGitHub = async (user) => {
    
    let results = {response: undefined, data: undefined}
    const url = `https://api.github.com/search/users?q=${user}`;
    if (user){
        const api = await fetch(url);
        const data = await api.json();
        if(data.total_count >= 1){

            results = {response:"success", data:data.items}
            return results
        }else{
            results = {response: "Not-Found", data:[]}
            return results
        }
    }else{
        return results
    }
}


export default apiGitHub;