import { useEffect, useState } from "react";
import apiGitHubUser from "./ApiGitHubUser";


const useEffectRoute = (response) => {
    const [state, setState] = useState({data: [], response:"" });
    
    useEffect(() => {
        apiGitHubUser(response)
            .then(res =>{
                if (res.response ===undefined) {
                    setState({data: [],  response:""});
                }else if(res.response ==="Not-Found"){  
                    setState({data:[], response:"Not-Found"});
                }else if(res.response ==="success"){  
                    setState({data:res.data, response: "success"});
                }
            })    
    },[response]); 

    return state;
}

export default  useEffectRoute ;