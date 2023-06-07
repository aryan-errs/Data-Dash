import React from "react";
import { useState } from "react";
import CardsForData from "./CardsForData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Cardspage = ({ data }) => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSearch = (e) => {
        setSearch(() => e.target.value);
    }

    const handleReset = () => {
        setFilteredData(data);
    }

    const handleFilter = () => {
        if (category === "Year" || category === "year") {
            setFilteredData(data.filter((item) => item.end_year === search));
        }
        else if (category === "Topic" || category === "topic") {
            setFilteredData(data.filter((item) => item.topic === search));
        }
        else if (category === "Country" || category === "country") {
            setFilteredData(data.filter((item) => item.country === search));
        }
        else if (category === "region" || category === "Region") {
            setFilteredData(data.filter((item) => item.region === search));
        }
        else if (category === "sector" || category === "Sector") {
            setFilteredData(data.filter((item) => item.sector === search));
        }
        else if (category === "source" || category === "Source") {
            setFilteredData(data.filter((item) => item.source === search));
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <span><h1 className="text-uppercase text-start" style={{ fontWeight: 'bolder' }}>Projects</h1></span>

                <div class="input-group" style={{ width: '20vw', display:'flex', justifyContent:'space-between' }}>
                    <input type="search" class="form-control rounded" placeholder="Enter Category" aria-label="Search" onChange={handleCategory} />
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"  onChange={handleSearch} />
                    <button type="button" class="btn btn-outline-primary" onClick={handleFilter} ><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <span><button onClick={handleReset} type="button"class="btn btn-outline-secondary" >Reset Filters</button></span>
            </div>
            <hr />
            <div className="row mx-auto" >
                {filteredData.map((item) => (
                    <div className="col-md-4">
                        <CardsForData item={item} />
                        <br />
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Cardspage;