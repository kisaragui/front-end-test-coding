import React, { Fragment, useState } from 'react'
import Searchform from './SearchBar/SearchForm'
import UserList from './UserList/UserList';

const Main = () => {
    
    const [user, setUser] = useState("");
    
    return (
        <Fragment>
         <Searchform setUser={setUser} /> 
         <UserList user={user}/>
        </Fragment>
    )
}

export default Main
