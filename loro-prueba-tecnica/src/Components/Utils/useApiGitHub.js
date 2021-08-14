import { useEffect, useState } from "react";
import apiGitHub from "./ApiGitHub";


const useApiGitHub = (response) => {

    const [state, setState] = useState({data: [], empty: true, response:"" });
    
    useEffect(() => {
        apiGitHub(response)
            .then(res =>{
                if (res.response ===undefined) {
                    setState({data: [], empty: true});
                }else if(res.response ==="Not-Found"){  
                    setState({data:[], empty: true, response:"Not-Found"});
                }else if(res.response ==="success"){  
                    let resfilter =  res.data.slice(0,10);
                    setState({data:resfilter, empty: false});
                }
            })    
    },[response]);

    return state;
}

export default  useApiGitHub ;