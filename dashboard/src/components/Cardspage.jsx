import React from "react";
import { useState, useMemo, useEffect} from "react";
import CardsForData from "./CardsForData";
import Pagination from "./Pagination";
import "./cardspage.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


let PageSize = 12;

const Cardspage = ({ data }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        setFilteredData(data);
    }, [data]);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredData]);

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSearch = (e) => {
        setSearch(() => e.target.value);
    }

    const handleReset = () => {
        setFilteredData(data);
        setSearch("");
        setCategory("");
    }

    const handleFilter = () => {
        const newCategory = category.charAt(0).toUpperCase() + category.slice(1);

        if (newCategory === "Year") {
            setFilteredData(data.filter((item) => item.end_year === search));
        }
        else if (newCategory === "Topic") {
            setFilteredData(data.filter((item) => item.topic === search));
        }
        else if (newCategory === "Country") {
            setFilteredData(data.filter((item) => item.country === search));
        }
        else if (newCategory === "Region") {
            setFilteredData(data.filter((item) => item.region === search));
        }
        else if (newCategory === "Sector") {
            setFilteredData(data.filter((item) => item.sector === search));
        }
        else if (newCategory === "Source") {
            setFilteredData(data.filter((item) => item.source === search));
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <span><h1 className="text-uppercase text-start" style={{ fontWeight: 'bolder' }}>Projects</h1></span>

                <div style={{ width: '20vw', display: 'flex', justifyContent: 'space-between' }}>
                <form className="input-group" style={{ width: '20vw', display: 'flex', justifyContent: 'space-between' }}>
                    <input type="search" className="form-control rounded" placeholder="Enter Category" aria-label="Search" onChange={handleCategory} />
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                    
                </form>
                <button type="button" className="button" onClick={handleFilter} ><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <span><button onClick={handleReset} type="button" className="btn btn-outline-secondary" >Reset Filters</button></span>
            </div>
            <hr />
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <br />
            <div className="row mx-auto" >
                {currentTableData.map((item) => (
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