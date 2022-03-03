import { useState } from "react"
import React from 'react';
import { Link } from "react-router-dom";


export default function CountyDetails(props) {
    return(
        <div className="col-7">
        <table className="table">
        <tr>
                  <td>{props.country.name}</td>
                  <td>{props.country.capital}</td>
                  <td>{props.country.region}</td>
         </tr>
          
        </table>
      </div>          
    )
}
