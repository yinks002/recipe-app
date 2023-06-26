import React from "react";


const SearchBar = ({value, isLoading, handleSubmit, onChange})=>{
    return(
        
        <form onSubmit={handleSubmit}>
            <input value={value} placeholder="Search Recipes" 
            onChange={onChange}
            className="form-control" />
            <input type="submit" 
            disabled={isLoading || value}
            className="btn" value="Search"/>
        </form>
        
    )
}

export default SearchBar;