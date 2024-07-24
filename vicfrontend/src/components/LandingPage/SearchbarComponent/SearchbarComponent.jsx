import React from "react";
import './SearchbarComponent.css';
import SearchIcon from '@mui/icons-material/Search';


function SearchbarComponent () {
    return(
       <div className="searchbar">
        <input   className="text" type="text" placeholder="Search"/>
       <SearchIcon className="search-icon" />
      
        


       </div>



);


};

export default SearchbarComponent;