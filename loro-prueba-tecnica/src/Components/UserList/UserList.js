import React from 'react'
import useapiGitHub from '../Utils/useApiGitHub'
import UserRoutes from './Routes/UserRoutes'
import {BrowserRouter as Router} from "react-router-dom";
import WelcomePage from './WelcomePage';




const UserList = ({user}) => {

    const {data, empty,response} =useapiGitHub(user)
   console.log(data)

 
    return (
        <div>
            {data.length !== 0 && empty=== false? (
            <Router>
                <UserRoutes data={data}/>       
            </Router>
            ): response==="Not-Found" && empty ? (
               <h3 className="notFound text-center"> No se encontraron Usuarios</h3>
            ):(
                <WelcomePage/>
            )}
        </div>
    )
}

export default UserList
