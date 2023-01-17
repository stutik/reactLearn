import React, { useEffect, useState } from 'react';
import UserName from './UserName';


const Receipe = () => {

    const [userName, setUserName ] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('name');

   useEffect(() => {
        getUser();
   },[]);

   const getUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    setUserName(data);
   }
   
   const updateSearchbar = e => {
    setSearch(e.target.value); 
    console.log(search);
   }

   const getSearch = e => {
    e.preventDefault();
    setQuery(search);
   }

    return (
        <div className="app"> 
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearchbar}/>
                <button
                    className="search-button"
                    type="submit">search here
                </button> 
            </form>
                {userName.map(userName => (
                    <UserName 
                        key={userName.name}
                        title={userName.name}
                        subTitle={userName.company.name}

                     />
                ))}
        </div>
    );
};

export default Receipe;