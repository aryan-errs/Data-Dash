import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

//import from files
import CardsForData from './CardsForData';
import ChartsPage from './ChartsPage';
import axios from 'axios';

const Mainpage = ({ data, setMainData }) => {
    const [search, setSearch] = useState('')
    const [filterby, setFilterby] = useState('')
    


    return (
        <div className='tabsClass'>


            <Tabs
                defaultActiveKey="chart"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="chart" title="Interactive Insights/Dashboard">
                    <ChartsPage data={data} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Mainpage