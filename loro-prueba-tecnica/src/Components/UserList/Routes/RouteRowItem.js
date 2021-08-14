import React from 'react';
import { useParams } from "react-router-dom";
import useEffectRoute  from '../../Utils/useEffectRoute';

const RouteRowItem =()=> {
    const  {userLogin}  = useParams();
    const {data,response} =useEffectRoute(userLogin)
    console.log(data)
    return (
        <div className="card mb-3" style={{maxWidth: "400px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.avatar_url} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.login}</h5>
                        {data.bio !==null?(
                            <p className="card-text">{data.bio}</p>
                        ):(
                            <p className="card-text">Sin Descripcion</p>
                        )} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouteRowItem
