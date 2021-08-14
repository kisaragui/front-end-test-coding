import React, { Fragment } from 'react'
import RouteRow from './RouteRow';
import {Switch, Route} from "react-router-dom";
import RouteRowItem from './RouteRowItem';

const UserRoutes = ({data}) => {
 
    return (
        <div className="container-fluid userlist">
            <div className="row row-col-6">
            <div className="col">
                <p>Se encontraron los siguientes Usuarios: </p> 
                <ul>
                    {data.map(user => <RouteRow key={user.id} {...user}/>)}
                </ul>
            </div>
            <div className="col">
                <Switch>
                    <Route path="/:userLogin" children={<RouteRowItem/>}/> 
                </Switch>
            </div>
            </div>
        </div>
        )
}

export default UserRoutes
