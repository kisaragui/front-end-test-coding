import React from 'react'
import { Link} from "react-router-dom";


const RouteRow = (user) => {

    return (
           <div>
                <Link key={user.id} to={`/${user.login}`}>{user.login}</Link>
            </div>
    )
}

export default RouteRow
