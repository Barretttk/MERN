import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
        };




    return (

        <div>
            <form onSubmit={submitHandler} className="d-flex align-center justify-content-center gap-3">
                <div className="form-group">
                    <label> Seach for: </label>
                    <select onChange ={(e)=>setCategory(e.target.value)}>
                        <option value="people"> People </option>
                        <option value="planets"> Planets </option>
                        <option value="films"> Films </option>
                        <option value="species"> Species </option>
                        <option value="vehicles"> Vehicles </option>
                        <option value="starships"> Starships </option>
                    </select>
                </div>
                <div className="form-group">
                    <label> ID: </label>
                    <input onChange={(e)=>setId(e.target.value)} type="number" Name="" id=""/>
                </div>

                <input type="submit" value="Search" className="btn btn-primary"/>

                <hr />
            </form>
            </div>
        );
        };

export default NavBar;
