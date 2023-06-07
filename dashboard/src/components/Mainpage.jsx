import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//import from files
import CardsForData from './CardsForData';
import ChartsPage from './ChartsPage';
import axios from 'axios';
import Cardspage from './Cardspage';

const Mainpage = ({ data, setMainData }) => {
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
                <Tab eventKey="crds" title="Projects">
                    <Cardspage data={data} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Mainpage