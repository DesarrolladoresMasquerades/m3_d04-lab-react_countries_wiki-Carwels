import React from 'react';
import { Link } from "react-router-dom";


export default function CountriesList(props) {
    return(
        <div class="col-5" tyle="max-height: 90vh; overflow: scroll">
        
        {<Link to={props.CountriesList.alpha3Code}>{props.CountriesList.name} </Link> }
        

        </div>
    )
}

