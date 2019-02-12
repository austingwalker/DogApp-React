import React from "react";
import axios from "axios";

class Search extends React.Component {
    state = {

    }

    componentDidMount(){
        axios.get("").then(response => console.log(response))
    }
    render(){
        return(
            <div>Search</div>
        )
    }
}

export default Search;